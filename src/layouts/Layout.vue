<template>
  <Navbar />
  <router-view />
</template>

<script>
</script>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./Navbar.vue";
export default defineComponent({
  name: "Layout",
  //   setup() {},
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
</style>