<script setup>
import { RouterView } from "vue-router";
import TheNavigation from "./components/TheNavigation.vue";
import DataStorage from "./components/DataStorage.vue";
import TheFooter from "./components/TheFooter.vue";
import LogoIcon from "./components/icons/LogoIcon.vue";
import PopupText from "./components/atoms/PopupText.vue";
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
      cartChanged: false,
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
    <div class="experimental-warning transparent">
      <div class="marquee">
        <span class="first-text">THIS IS ONLY A PERSONAL PROJECT</span>
        <span class="first-text">•</span>
        <span class="second-text">THIS IS ONLY A PERSONAL PROJECT</span>
        <span class="second-text">•</span>
        <span class="third-text">THIS IS ONLY A PERSONAL PROJECT</span>
        <span class="third-text">•</span>
        <span class="fourth-text">THIS IS ONLY A PERSONAL PROJECT</span>
        <span class="fourth-text">•</span>
      </div>
      <div class="marquee marquee2">
        <span class="first-text">THIS IS ONLY A PERSONAL PROJECT</span>
        <span class="first-text">•</span>
        <span class="second-text">THIS IS ONLY A PERSONAL PROJECT</span>
        <span class="second-text">•</span>
        <span class="third-text">THIS IS ONLY A PERSONAL PROJECT</span>
        <span class="third-text">•</span>
        <span class="fourth-text">THIS IS ONLY A PERSONAL PROJECT</span>
        <span class="fourth-text">•</span>
      </div>
    </div>
    <TheNavigation
      :scrollPos="scrollPosition"
      :screenWidth="screenWidth"
      :cartChanged="cartChanged"
      @cartChanged="cartChanged = false"
    />
  </header>

  <main class="content-container">
    <RouterView
      :scrollPos="scrollPosition"
      :screenWidth="screenWidth"
      @cartChanged="cartChanged = true"
    />
  </main>
  <TheFooter />
  <PopupText />
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

/* Infinite Carousel */

.experimental-warning {
  width: 100vw;
  height: 1.5rem;
  position: fixed;
  left: 0;
  top: 0;
  color: var(--color-text-light);
  background-color: var(--color-container-dark);
  letter-spacing: 0.2rem;
  border-bottom: solid 1px var(--color-container-light);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.experimental-warning.transparent {
  background-color: rgba(33, 37, 41, 0.2);
  top: -1.5rem;
}

.marquee {
  top: 50%;
  transform: translateY(-50%);
  left: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  animation: marquee 120s linear infinite;
}

.marquee.marquee2 {
  animation-delay: 60s;
}

@keyframes marquee {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}

/* End Infinite Carousel */

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
  width: 5rem;
}

@media screen and (max-width: 1500px) {
  .experimental-warning .fourth-text {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .experimental-warning .third-text {
    display: none;
  }

  .marquee {
    animation-duration: 60s;
  }

  .marquee.marquee2 {
    animation-delay: 30s;
  }
}

@media screen and (max-width: 768px) {
  .content-container {
    gap: 8rem;
    margin-bottom: 8rem;
    margin-top: calc(72px + 1.5rem);
  }

  .experimental-warning .second-text {
    display: none;
  }

  .marquee {
    animation-duration: 30s;
  }

  .marquee.marquee2 {
    animation-delay: 15s;
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
