import { mapGetters } from "vuex";

export default {
  mounted() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("open-modal")) {
        e.preventDefault();

        this.showModal();
      }
    });
  },
  computed: {
    ...mapGetters({
      modalVisibility: "modalVisibility",
      stage: "stage",
      loading: "loading",
      loadingTitle: "loadingTitle",
      loadingSubTitle: "loadingSubTitle",
    }),
    initStage() {
      return this.stage === "init" && !this.loading;
    },
    approveStage() {
      return this.stage === "approve" && !this.loading;
    },
    changeNetworkStage() {
      return this.stage === "changeNetwork" && !this.loading;
    },
  },
  methods: {
    showModal() {
      this.$store.commit("setModalVisibility", true);
    },
    cleanAndReload() {
      //TODO: Clear WC DATA
      location.reload();
    },
  },
};
