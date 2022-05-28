import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      modalVisibility: "modalVisibility",
    }),
  },
  methods: {
    connect(type) {
      if (!this.modalVisibility) {
        this.$store.commit("setModalVisibility", true);
      }
      this.$root.$emit("needConnection", type);
    },
  },
};
