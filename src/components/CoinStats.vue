<template>
  <div class="wrapper">
    <header-component />

    <content-component />

    <footer-component />

    <modal-component />
  </div>
</template>

<script>
import ModalComponent from "@/components/parts/ModalComponent";
import FooterComponent from "@/components/parts/FooterComponent";
import HeaderComponent from "@/components/parts/HeaderComponent";
import ContentComponent from "@/components/parts/ContentComponent";

export default {
  name: "CoinStats",
  components: {
    "modal-component": ModalComponent,
    "footer-component": FooterComponent,
    "header-component": HeaderComponent,
    "content-component": ContentComponent,
  },
};
</script>
