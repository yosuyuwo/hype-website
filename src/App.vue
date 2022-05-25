<script setup>
import { RouterView } from "vue-router";
import TheNavigation from "./components/TheNavigation.vue";
import DataStorage from "./components/DataStorage.vue";
</script>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onResize);
  },
  data() {
    return {
      scrollPosition: 0,
      screenWidth: window.innerWidth,
    };
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.top.scrollY;
    },
    onResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <DataStorage />
  <header class="header-container">
    <TheNavigation :scrollPos="scrollPosition" :screenWidth="screenWidth" />
  </header>

  <main class="content-container">
    <RouterView :scrollPos="scrollPosition" :screenWidth="screenWidth" />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>

<style scoped>
.header-container,
.content-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container {
  position: sticky;
  top: 0;
  z-index: 99;
}

.content-container {
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
}
</style>
