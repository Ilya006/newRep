<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import cr from "@/mixins/cr";

export default {
  name: "WrapperComponent",
  mixins: [cr],
};
</script>
