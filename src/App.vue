<script setup>
import { RouterView } from "vue-router";
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <header class="header-container">
    <TheNavigation />
  </header>

  <main class="content-container">
    <RouterView />
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
  height: 200vh;
}
</style>
