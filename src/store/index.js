import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalVisibility: false,
    stage: "init",
    loading: false,
    loadingTitle: "",
    loadingSubTitle: "",
    wallet: null,
    networkNameForChange: null,
  },
  getters: {
    stage: (state) => state.stage,
    modalVisibility: (state) => state.modalVisibility,
    loading: (state) => state.loading,
    loadingTitle: (state) => state.loadingTitle,
    loadingSubTitle: (state) => state.loadingSubTitle,
    wallet: (state) => state.wallet,
    networkNameForChange: (state) => state.networkNameForChange,
  },
  mutations: {
    setModalVisibility(state, status) {
      state.modalVisibility = status;
    },
    setStage(state, stage) {
      state.stage = stage;
    },
    setLoadingTitle(state, text) {
      state.loadingTitle = text;
    },
    setLoadingSubTitle(state, text) {
      state.loadingSubTitle = text;
    },
    setLoadingStatus(state, status) {
      state.loading = status;
    },
    setWallet(state, wallet) {
      state.wallet = wallet;
    },
    setNetworkNameForChange(state, network) {
      switch (network) {
        case "bsc":
          network = "Binance Smart Chain";
          break;
        case "eth":
          network = "Ethereum Mainnet";
          break;
        case "polygon":
          network = "Polygon Mainnet";
          break;
        default:
          network = "Unknown";
      }
      state.networkNameForChange = network;
    },
  },
  actions: {},
  modules: {},
});
