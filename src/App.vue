<script setup>
import { RouterView } from "vue-router";
import TheNavigation from "./components/TheNavigation.vue";
import DataStorage from "./components/DataStorage.vue";
import TheFooter from "./components/TheFooter.vue";
import LogoIcon from "./components/icons/LogoIcon.vue";
</script>

<script>
import $ from "jquery";

export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onResize);
    setTimeout(() => {
      $(".loading-section").removeClass("showing");
      setTimeout(() => {
        $(".loading-section").css("display", "none");
        $("body").css("overflow", "auto");
      }, 300);
    }, 1000);
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
  <TheFooter />
  <div class="loading-section showing">
    <LogoIcon class="loading-logo" />
  </div>
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
  flex: 1;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
  gap: 12rem;
  margin-bottom: 12rem;
}

.loading-section {
  inset: 0;
  position: fixed;
  background-color: var(--clr-neutral-1000);
  z-index: 99;
  display: grid;
  place-items: center;
  color: var(--clr-neutral-100);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.loading-section.showing {
  opacity: 1;
}

.loading-logo {
  width: 8rem;
  transition: all 0.3s ease-in-out;
}

.showing .loading-logo {
  width: 5rem;
}

@media screen and (max-width: 768px) {
  .content-container {
    gap: 8rem;
    margin-bottom: 8rem;
  }
}

@media screen and (max-width: 480px) {
  .content-container {
    gap: 4rem;
    margin-bottom: 4rem;
  }
}
</style>

<style>
body {
  overflow: hidden;
}
</style>
