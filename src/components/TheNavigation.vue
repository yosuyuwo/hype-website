<script setup>
import { RouterLink } from "vue-router";
import SearchMagnifier from "./icons/SearchMagnifier.vue";
import CartBag from "./icons/CartBag.vue";
import LogoIcon from "./icons/LogoIcon.vue";

defineProps({
  scrollPos: {
    type: Number,
    default: 0,
  },
  screenWidth: {
    type: Number,
    default: 0,
  },
});
</script>

<script>
export default {
  data() {
    return {
      currentPath: "/",
      brands: [],
      isShowingBrand: false,
      isShowingMobile: false,
    };
  },
  created() {
    this.brands = JSON.parse(localStorage.getItem("brands"));
  },
  mounted() {
    this.changeNavigation(0);
  },
  methods: {
    changeNavigation(scrollPos) {
      // Handles Navigation Color
      if (
        scrollPos > 300 ||
        window.innerWidth < 768 ||
        this.currentPath != "/"
      ) {
        document
          .querySelector(".navigation-container")
          .classList.remove("transparent");
      } else if (window.innerWidth > 480) {
        document
          .querySelector(".navigation-container")
          .classList.add("transparent");
      }
    },
  },
  watch: {
    scrollPos(value) {
      this.changeNavigation(value);
    },
    screenWidth() {
      this.changeNavigation(this.scrollPos);
    },
    $route(to) {
      this.currentPath = to.path;
      this.changeNavigation();
    },
    isShowingMobile(value) {
      if (value) document.querySelector("body").style.overflow = "hidden";
      else document.querySelector("body").style.overflow = "auto";
    },
  },
};
</script>

<template>
  <!-- NAVIGATION -->
  <nav class="navigation-container transparent">
    <div class="navigation-wrapper">
      <div class="left-side">
        <a href="/" class="logo"> <LogoIcon /> </a>
        <a href="/" class="navigation-link black-link">HOME</a>
        <a href="/about" class="navigation-link black-link">ABOUT HYPE</a>
        <p
          class="navigation-link black-link special-link"
          :class="isShowingBrand ? 'active' : ''"
          @mouseenter="isShowingBrand = true"
        >
          BRANDS
        </p>
      </div>
      <div class="center-side">
        <a
          v-for="brand in brands"
          :key="brand.name"
          :href="`/brands/${brand.name}`"
          class="navigation-link black-link brand-link"
        >
          {{ brand.name }}
        </a>
      </div>
      <div class="right-side">
        <RouterLink to="/search" class="navigation-link black-link"
          >SEARCH</RouterLink
        >
        <p class="navigation-link link black-link">CART <span>(0)</span></p>
        <a href="/search" class="navigation-icon"><SearchMagnifier /></a>
        <div class="navigation-icon">
          <CartBag />
        </div>
        <div
          id="hamburger"
          class="navigation-icon"
          onclick="this.classList.toggle('open');"
          @click="isShowingMobile = !isShowingMobile"
        >
          <svg viewBox="0 0 100 100">
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </div>
      </div>
    </div>

    <div
      class="navigation-brand"
      :class="isShowingBrand ? 'showing' : ''"
      @mouseleave="isShowingBrand = false"
    >
      <a
        v-for="brand in brands"
        :key="brand.name"
        :href="`/brands/${brand.name}`"
        class="navigation-link black-link brand-link"
      >
        {{ brand.name }}
      </a>
    </div>

    <div
      class="navigation-wrapper mobile"
      :class="isShowingMobile ? 'showing' : ''"
    >
      <div class="top-part">
        <a
          v-for="brand in brands"
          :key="brand.name"
          :href="`/brands/${brand.name}`"
          class="navigation-link black-link"
        >
          {{ brand.name }}
        </a>
      </div>
      <div class="bottom-part">
        <RouterLink to="/search" class="navigation-link black-link">
          SEARCH
        </RouterLink>
        <a class="navigation-link black-link"> CART (0) </a>
        <a href="/about" class="navigation-link black-link"> ABOUT HYPE </a>
      </div>
      <small class="copyright-mobile">© HYPE - 2021</small>
    </div>
    <div
      class="screen-overlay"
      @click="isShowingMobile = false"
      :class="isShowingMobile ? 'showing' : ''"
    ></div>
  </nav>
  <!-- END NAVIGATION -->
</template>

<style scoped>
.navigation-container {
  top: 0;
  width: 100%;
  transition: all 0.3s ease-in-out;
  position: fixed;
}

.navigation-wrapper {
  width: 100%;
  padding: 0 3rem;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  background-color: var(--color-background);
  border-bottom: solid 2px var(--color-border-dark);
  z-index: 2;
  transition: all 0.3s ease-in-out;
}

.transparent .navigation-wrapper {
  background-color: transparent;
  color: var(--clr-neutral-100);
  border-color: transparent;
  padding-top: 3rem;
}

.navigation-wrapper.mobile {
  width: max-content;
  right: -20rem;
  height: calc(100vh - 72px);
  padding: 2rem;
  align-items: flex-start;
  background-color: var(--color-background);
  border: solid 2px var(--color-border-dark);
  border-right: none;
  border-bottom: none;
  position: fixed;
  top: 72px;
  z-index: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding-right: 8rem;
  transition: all 0.5s ease-in-out;
}

.navigation-brand {
  width: 100%;
  padding-inline: 3rem;
  padding-block: 1rem;
  border-bottom: solid 2px var(--color-border-dark);
  display: flex;
  gap: 2rem;
  background-color: var(--color-background);
  transition: all 0.3s ease-in-out;
}

.transparent .navigation-brand {
  background-color: transparent;
  opacity: 0;
  color: var(--color-text-light);
  border: none;
}

.transparent .navigation-brand.showing {
  opacity: 1;
  margin-top: calc(72px + 3rem);
}

.navigation-brand.showing {
  margin-top: 72px;
}

.top-part,
.bottom-part {
  display: flex;
  flex-flow: column;
  gap: 2rem;
  text-transform: uppercase;
}

.bottom-part {
  margin-top: auto;
  margin-bottom: 4rem;
}

.left-side {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.center-side {
  display: flex;
  gap: 2rem;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}

.right-side {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
}

.logo svg {
  height: 3rem;
  transition: all 0.3s ease-in-out;
}

.logo {
  padding-block: 0.75rem;
  display: flex;
  align-items: center;
}

.navigation-link {
  letter-spacing: 0.2rem;
  cursor: pointer;
}

.transparent .navigation-link {
  box-shadow: inset 0 0 0 0 var(--clr-neutral-100);
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    box-shadow 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.navigation-link.active {
  color: var(--color-text-light);
  box-shadow: inset 200px 0 0 0 var(--color-container-dark);
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    box-shadow 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.transparent .navigation-link:hover {
  color: var(--clr-neutral-1000);
  box-shadow: inset 200px 0 0 0 var(--clr-neutral-100);
}

.transparent .navigation-link.active {
  color: var(--clr-neutral-1000);
  box-shadow: inset 200px 0 0 0 var(--clr-neutral-100);
}

#hamburger {
  cursor: pointer;
  display: flex;
}

/* Hamburger Icon */
#hamburger .line {
  fill: none;
  stroke: currentColor;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
#hamburger .line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
#hamburger .line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
#hamburger .line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
#hamburger.open .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
#hamburger.open .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
#hamburger.open .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

.navigation-icon {
  height: 100%;
  padding: 1.25rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  display: none !important;
  transition: all 0.1s ease-in-out;
}

.navigation-icon:hover {
  background-color: var(--color-container-dark);
  color: var(--color-text-light);
}

.logo.mobile {
  display: none;
}

.transparent .brand_list-container {
  background-color: transparent;
  border: none;
  top: 138px;
  padding-inline: 0;
}

.brand_list-container {
  width: calc(100% - 6rem);
  background-color: var(--color-background);
  position: fixed;
  display: none;
  top: 72px;
  left: 3rem;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  border: solid 2px var(--color-container-dark);
  z-index: 3;
}

.brand_list-container.active {
  display: flex;
}

.brand-link {
  text-transform: uppercase;
}

/* .transparent .brand-link {
  color: var(--color-text-light);
}

.brand-link {
  opacity: 0.5;
  letter-spacing: 0.15rem;
  color: var(--color-text-dark);
}

.brand-link:hover {
  opacity: 1;
} */

.copyright-mobile {
  opacity: 0.85;
  font-weight: 800;
}

.special-link {
  display: none;
}

.right-side {
  margin-left: auto;
}

.screen-overlay {
  position: fixed;
  visibility: hidden;
  inset: 0;
  background-color: var(--clr-neutral-1000);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.screen-overlay.showing {
  visibility: visible;
  opacity: 0.5;
}

@media screen and (max-width: 1500px) {
  .special-link {
    display: inline;
  }

  .center-side {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .navigation-wrapper {
    padding-inline: 1rem;
  }

  .navigation-brand {
    padding-inline: 1rem;
  }

  .transparent .navigation-wrapper {
    padding-inline: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .navigation-container {
    max-width: 100%;
    border-inline: none;
  }

  .navigation-wrapper:not(.mobile) .navigation-link {
    display: none;
  }

  .navigation-icon {
    display: flex !important;
  }
  .transparent .navigation-wrapper {
    padding-inline: 1rem !important;
  }

  .navigation-wrapper {
    padding-right: 0;
    position: sticky;
  }

  .navigation-brand {
    display: none;
  }

  .right-side {
    height: 72px;
    gap: 0;
  }
  .navigation-wrapper.mobile.showing {
    right: 0;
  }
  .navigation-container {
    position: sticky;
  }
}

@media screen and (max-width: 560px) {
  .navigation-container {
    padding-inline: 0;
  }

  .navigation-wrapper {
    padding-inline: 1rem;
    padding-right: 0;
  }

  .navigation-wrapper.mobile.showing {
    right: 0;
    border-right: none;
  }

  .navigation-icon {
    display: flex;
    justify-content: center;
    padding-inline: 0.5rem;
  }

  .navigation-icon svg {
    width: 2rem;
  }
}

@media screen and (max-width: 480px) {
  .logo.mobile svg {
    height: 3rem;
  }
  .top-part,
  .bottom-part {
    gap: 1rem;
  }

  .navigation-wrapper.mobile {
    padding-right: 4rem;
  }
}
</style>

<style>
#app {
  overflow-x: hidden;
}
.logo-text {
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 576px) {
  .navigation-container .logo-text {
    display: none;
  }
}
</style>
