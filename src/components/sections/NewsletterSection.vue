<template>
  <div class="newsletter-container">
    <div class="newsletter-logo">
      <LogoFull />
    </div>
    <div class="newsletter-detail">
      <h4 class="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h4>
      <p class="newsletter-subtitle">
        Get informed weekly about our new products, partnership, and more
      </p>
    </div>
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
  gap: 4rem;
  padding-block: 4rem;
  color: var(--color-text-dark);
  margin-bottom: 12rem;
}

.newsletter-logo {
  width: 12rem;
  color: var(--color-text-dark);
}

.newsletter-detail {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;
}

.newsletter-title {
  font-weight: 800;
  letter-spacing: 0.35rem;
  text-align: center;
}

.newsletter-subtitle {
  font-weight: 600;
  text-align: center;
}

.newsletter-form {
  width: 48rem;
  display: flex;
  gap: 1rem;
}

@media screen and (max-width: 992px) {
  .newsletter-form {
    width: 100%;
  }
  .newsletter-container {
    padding-inline: 3rem;
  }
}

@media screen and (max-width: 560px) {
  .newsletter-container {
    padding-inline: 1rem;
  }
  .newsletter-form {
    flex-flow: column;
  }
}
</style>
