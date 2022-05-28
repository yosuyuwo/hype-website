<template>
  <div class="footer-container">
    <div class="footer-detail">
      <div class="footer-logo">
        <LogoFull />
      </div>
      <p class="footer-description">
        Hype is a brand that sells apparel from many other high-end brands.
      </p>
    </div>
    <ul class="footer-links">
      <li><RouterLink to="/" class="white-link">Home</RouterLink></li>
      <li><RouterLink to="/about" class="white-link">About</RouterLink></li>
      <li><RouterLink to="/brands" class="white-link">Brands</RouterLink></li>
    </ul>
    <div class="social-media">
      <a href="https://www.facebook.com" target="blank" class="social-link">
        <img src="/logos/facebook.svg" alt="facebook" />
      </a>
      <a href="https://www.instagram.com" target="blank" class="social-link">
        <img src="/logos/instagram.svg" alt="insta" />
      </a>
      <a href="https://www.twitter.com" target="blank" class="social-link">
        <img src="/logos/twitter.svg" alt="twitter" />
      </a>
    </div>
    <p>© Copyright 2022 HYPE. All Rights Reserved</p>
  </div>
</template>

<script setup>
import LogoFull from "./icons/LogoFull.vue";
</script>

<style scoped>
.footer-container {
  width: 100%;
  background-color: var(--color-container-dark);
  padding-block: 4rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 4rem;
  color: var(--color-container-light);
}

.footer-detail {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  width: 12rem;
}

.footer-description {
  width: 16rem;
  text-align: center;
}

.footer-links {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.white-link {
  text-decoration: underline;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
