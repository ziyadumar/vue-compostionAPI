<template>
  <Layout />
</template>

<script>
import { provide } from "vue";
import Layout from "@/layouts/Layout.vue";
import store from "@/store/index"
export default {
  setup() {
    provide("store", store);
  },
  components: {
    Layout,
  },
};
</script>


<style lang="scss">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0px;
  background-color: #efeeee;
  margin-bottom: 1rem;
  font-family: "Montserrat";
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
