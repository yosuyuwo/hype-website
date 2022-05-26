<template>
  <div class="newsletter-container">
    <div class="newsletter-logo">
      <LogoFull />
    </div>
    <h4 class="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h4>
    <p class="newsletter-subtitle">
      Get informed weekly about our new products, partnership, and more
    </p>
    <div class="newsletter-form">
      <InputText
        name="newsletterEmail"
        :withLabel="false"
        placeholder="Your email"
      />
      <InputButton text="SUBSCRIBE" />
    </div>
  </div>
</template>

<script>
import LogoFull from "../icons/LogoFull.vue";
import InputText from "../atoms/InputText.vue";
import InputButton from "../atoms/InputButton.vue";
export default {
  components: { LogoFull, InputText, InputButton },
};
</script>

<style scoped>
.newsletter-container {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-block: 4rem;
  color: var(--color-text-dark);
}

.newsletter-logo {
  width: 12rem;
  color: var(--color-text-dark);
}

.newsletter-title {
  font-weight: 800;
  letter-spacing: 0.35rem;
}

.newsletter-subtitle {
  font-weight: 600;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
}
</style>
