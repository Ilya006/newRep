<template>
  <div>
    <div class="preloader" ref="preloader">
      <div class="preloader-wrap">
        <img src="@/assets/img/content/preloader.svg" alt="" />
      </div>
    </div>
    <main class="content-sidebar">
      <div class="left-sidebar">
        <ul class="left-menu">
          <li class="left-menu__item open-modal">
            <a href="#" class="left-menu__link active open-modal">
              <img src="@/assets/img/content/menu-1.svg" alt="" />
              <span>Portfolio</span>
            </a>
          </li>
          <li class="left-menu__item open-modal">
            <a href="#" class="left-menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-2.svg"
                alt=""
              />
              <span class="open-modal">Airdrops</span>
            </a>
          </li>
          <li class="left-menu__item open-modal">
            <a href="#" class="left-menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-3.svg"
                alt=""
              />
              <span class="open-modal">NFT Value Estimator</span>
            </a>
          </li>
          <li class="left-menu__item open-modal">
            <a href="#" class="left-menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-4.svg"
                alt=""
              />
              <span class="open-modal">Token Swap</span>
            </a>
          </li>
          <li class="left-menu__item open-modal">
            <a href="#" class="left-menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-5.svg"
                alt=""
              />
              <span class="open-modal">Token Explorer</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="right-sidebar">
        <div class="preview">
          <h1 class="preview__title">Portfolio Tracker</h1>
          <p class="preview__title-text">
            Check your assets, recent dapp usage, view your NFTs and more.
          </p>
          <form class="wallet-form">
            <div class="radio-wrapper">
              <label class="radio-wrapper__label">
                <input
                  type="radio"
                  value="Ethereum"
                  name="wallet"
                  class="radio-wrapper__radio"
                  checked="checked"
                />
                <span>Ethereum</span>
              </label>
              <label class="radio-wrapper__label">
                <input
                  type="radio"
                  value="BNB Chain"
                  name="wallet"
                  class="radio-wrapper__radio"
                />
                <span>BNB Chain</span>
              </label>
              <label class="radio-wrapper__label">
                <input
                  type="radio"
                  value="Polygon"
                  name="wallet"
                  class="radio-wrapper__radio"
                />
                <span>Polygon</span>
              </label>
            </div>
            <div class="wallet-buttons">
              <button type="button" @click.prevent="connect('mm')">
                <span>MetaMask</span>
                <img src="@/assets/img/content/metamask.svg" alt="" />
              </button>
              <button type="button" @click.prevent="connect('wc')">
                <span>WalletConnect</span>
                <img src="@/assets/img/content/walletconnect.svg" alt="" />
              </button>
            </div>
          </form>
        </div>
        <div class="wallet-holdings">
          <img
            src="@/assets/img/content/wallet_landing_assets.png"
            class="wallet-holdings__img"
            alt=""
            title=""
          />
          <div class="wallet-holdings__wrap">
            <h2 class="wallet-holdings__title">Wallet Holdings</h2>
            <p class="wallet-holdings__text">
              Always stay up-to-date with the performance of your holdings and
              net worth. Track the historical activity of your Ethereum or
              Binance Smart Chain wallet
            </p>
          </div>
        </div>
        <div class="nft-portfolio">
          <div class="nft-portfolio__wrap">
            <h2 class="nft-portfolio__title">NFT Portfolio</h2>
            <p class="nft-portfolio__text">
              Visualize your NFT Portfolio in a clean interface and estimate
              your total value by the last sale price. Easily share your
              portfolio with anybody.
            </p>
          </div>
          <img
            src="@/assets/img/content/wallet_landing_nft.png"
            class="nft-portfolio__img"
            alt=""
            title=""
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import common from "@/mixins/common";

export default {
  name: "ContentComponent",
  mixins: [common],
  mounted() {
    setTimeout(() => this.$refs.preloader.classList.add("loaded-hiding"), 700);
  },
};
</script>
