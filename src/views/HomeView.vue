<script setup>
import HeroSection from "../components/sections/HeroSection.vue";
import FeaturedProducts from "../components/sections/FeaturedSection.vue";
import CatalogueSection from "../components/sections/CatalogueSection.vue";
import MostBoughtSection from "../components/sections/MostBoughtSection.vue";
import FreeShipping from "../components/sections/FreeShipping.vue";
import NewsletterSection from "../components/sections/NewsletterSection.vue";

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

document.title = "Hype - Home";
</script>

<template>
  <HeroSection :scrollPos="scrollPos" :screenWidth="screenWidth" />
  <FeaturedProducts :screenWidth="screenWidth" />
  <CatalogueSection :screenWidth="screenWidth" />
  <MostBoughtSection />
  <FreeShipping />
  <NewsletterSection />
</template>

<style scoped></style>
