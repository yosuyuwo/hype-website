<script setup>
import { RouterLink } from "vue-router";
</script>

<!-- <script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */

      if (this.windowTop > 300) {
        document
          .querySelector(".navigation-container")
          .classList.remove("transparent");
      } else {
        document
          .querySelector(".navigation-container")
          .classList.add("transparent");
      }
    },
  },
};
</script> -->

<template>
  <nav class="navigation-container transparent">
    <div class="left-side">
      <RouterLink to="/shop" class="navigation-link black-link"
        >SHOP</RouterLink
      >
      <RouterLink to="/about" class="navigation-link black-link"
        >ABOUT</RouterLink
      >
      <RouterLink to="/collection" class="navigation-link black-link"
        >COLLECTION</RouterLink
      >
    </div>
    <RouterLink to="/" class="logo h3"> HYPE </RouterLink>
    <div class="right-side">
      <RouterLink to="/search" class="navigation-link black-link"
        >SEARCH</RouterLink
      >
      <p class="navigation-link link black-link">CART <span>(0)</span></p>
    </div>
  </nav>
</template>

<style scoped>
.navigation-container {
  width: 100%;
  max-width: calc(100% - 6rem);
  padding: 0 2rem;
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  border: solid 2px var(--color-border-dark);
  border-top: none;
  transition: all 0.3s ease-in-out;
}

.navigation-container.transparent {
  background-color: transparent;
  color: var(--clr-neutral-100);
  border-color: transparent;
  padding-top: 3rem;
}

.navigation-container .left-side {
  flex: 1;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.navigation-container .right-side {
  flex: 1;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
}

.logo {
  font-weight: 900;
  line-height: normal;
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
</style>
