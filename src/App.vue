<template>
  <WrapperComponent>
    <CoinStats />
  </WrapperComponent>
</template>

<style>
@import url("css/fonts.css");
@import url("css/style.css");
</style>

<script>
import CoinStats from "@/components/CoinStats";
import WrapperComponent from "@/components/parts/WrapperComponent";

export default {
  name: "App",
  components: {
    CoinStats,
    WrapperComponent,
  },
};
</script>
