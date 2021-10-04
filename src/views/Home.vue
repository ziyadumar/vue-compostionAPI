<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>Counter : {{ store.state.counter }}</h3>
    <h4>Change counter at 
      <router-link :to="{name: 'About'}">/about</router-link> 
      page</h4>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";
import State from "@/store/state.interface"
export default {
  Name: "Home",
  setup() {
    const store = inject("store") as State;
    return {
      store,
    };
  }
};

</script>
