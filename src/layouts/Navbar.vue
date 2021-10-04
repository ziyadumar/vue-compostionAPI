<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  //   setup() {},
  name: "Navbar",
});
</script>

<template>
  <nav class="nav">
    <div class="logo">
      <img src="/img/logo.82b9c7a5.png" alt="" />
      Hello Vue
    </div>
    <router-link class="anchor" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="anchor" :to="{ name: 'About' }">About</router-link>
    <router-link class="anchor" :to="{ name: 'Test' }">Cards</router-link>
  </nav>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
.nav {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  margin-bottom: 2rem;
  height: 100px;
  background-color: #efeeee;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.07);
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 3rem;
  list-style-type: none;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  font-family: "Montserrat";
  font-size: 1.5rem;
  color: dimgray;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
    -2px -2px 4px rgba(255, 255, 255, 1);
  img {
    width: 2rem;
  }
}

.anchor:not(.logo) {
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1),
    -4px -4px 6px rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-family: "Montserrat";
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;

  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1),
      -4px -4px 10px rgba(255, 255, 255, 1);
  }
  &:focus {
    outline: none;
    transform: scale(0.95);
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1),
      -4px -4px 10px rgba(255, 255, 255, 1),
      4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset,
      -4px -4px 10px rgba(255, 255, 255, 1) inset;
  }
  &:hover,
  &:focus {
    color: orangered;
  }
}
</style>
