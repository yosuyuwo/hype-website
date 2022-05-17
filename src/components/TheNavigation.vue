<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  created() {
    console.log("Navigation Created");
  },
};
</script>

<template>
  <nav class="navigation-container">
    <div class="left-side">
      <RouterLink to="/shop" class="navigation-link">SHOP</RouterLink>
      <RouterLink to="/about" class="navigation-link">ABOUT</RouterLink>
      <RouterLink to="/collection" class="navigation-link"
        >COLLECTION</RouterLink
      >
    </div>
    <RouterLink to="/" class="logo h3"> HYPE </RouterLink>
    <div class="right-side">
      <RouterLink to="/search" class="navigation-link">SEARCH</RouterLink>
      <p class="navigation-link">CART <span>(0)</span></p>
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
</style>
