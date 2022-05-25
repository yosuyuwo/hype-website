<script setup>
import { RouterLink } from "vue-router";
import LogoFull from "./icons/LogoFull.vue";
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
    };
  },
  mounted() {
    this.changeNavigation(0);
  },
  methods: {
    changeNavigation(scrollPos) {
      // Handles Navigation Color
      if (
        scrollPos > 300 ||
        window.innerWidth < 480 ||
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
  },
};
</script>

<template>
  <!-- NAVIGATION -->
  <nav class="navigation-container transparent">
    <div class="navigation-wrapper">
      <div class="left-side">
        <RouterLink to="/shop" class="navigation-link black-link"
          >SHOP</RouterLink
        >
        <RouterLink to="/about" class="navigation-link black-link"
          >ABOUT</RouterLink
        >
        <RouterLink to="/brands" class="navigation-link black-link"
          >BRANDS</RouterLink
        >
      </div>
      <RouterLink to="/" class="logo"> <LogoFull /> </RouterLink>
      <RouterLink to="/" class="logo mobile"> <LogoIcon /> </RouterLink>
      <div class="right-side">
        <RouterLink to="/search" class="navigation-link black-link"
          >SEARCH</RouterLink
        >
        <p class="navigation-link link black-link">CART <span>(0)</span></p>
        <RouterLink to="/search" class="navigation-icon"
          ><SearchMagnifier
        /></RouterLink>
        <div class="navigation-icon">
          <CartBag />
        </div>
        <div
          id="hamburger"
          class="navigation-icon"
          onclick="this.classList.toggle('open');"
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
  </nav>
  <!-- END NAVIGATION -->
</template>

<style scoped>
.navigation-container {
  top: 0;
  width: 100%;
  max-width: calc(100% - 6rem);
  padding: 0 2rem;
  background-color: var(--color-background);
  border: solid 2px var(--color-border-dark);
  border-top: none;
  transition: all 0.3s ease-in-out;
  position: fixed;
}

.navigation-container.transparent {
  background-color: transparent;
  color: var(--clr-neutral-100);
  border-color: transparent;
  padding: 0;
  padding-top: 3rem;
}

.navigation-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
}

.left-side {
  flex: 1;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.right-side {
  flex: 1;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
}

.transparent .logo svg {
  height: 5rem;
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
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.transparent .navigation-link:hover {
  color: var(--clr-neutral-1000);
  box-shadow: inset 200px 0 0 0 var(--clr-neutral-100);
}

#hamburger {
  cursor: pointer;
  display: flex;
  padding: 0;
  height: 2rem;
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
  height: 1.75rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  display: none !important;
}

.logo.mobile {
  display: none;
}

@media screen and (max-width: 1200px) {
  .left-side,
  .navigation-link {
    display: none;
  }

  .navigation-icon {
    display: block !important;
  }
}

@media screen and (max-width: 992px) {
  .navigation-container {
    max-width: 100%;
    padding-inline: 3rem;
    border-inline: none;
  }

  .transparent {
    padding-inline: 3rem !important;
  }

  .logo {
    display: none;
  }

  .logo.mobile {
    display: flex;
  }
}

@media screen and (max-width: 768px) {
  .transparent {
    padding-inline: 1rem !important;
  }
}

@media screen and (max-width: 560px) {
  .navigation-container {
    padding-inline: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .navigation-container {
    position: sticky;
    padding-inline: 1rem;
  }
  .logo.mobile svg {
    height: 3rem;
  }
}
</style>

<style>
.logo-text {
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 576px) {
  .logo-text {
    display: none;
  }
}
</style>
