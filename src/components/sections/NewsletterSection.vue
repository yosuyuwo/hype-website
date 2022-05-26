<template>
  <div class="newsletter-container">
    <div class="newsletter-logo">
      <LogoFull />
    </div>
  </div>
</template>

<script>
import LogoFull from "../icons/LogoFull.vue";
export default {
  components: { LogoFull },
};
</script>

<style scoped>
.newsletter-container {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--color-text-dark);
}

.newsletter-logo {
  width: 12rem;
  color: var(--color-text-dark);
}
</style>
