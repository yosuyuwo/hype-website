<script setup>
import HeroSection from "../components/sections/HeroSection.vue";
import FeaturedProducts from "../components/sections/FeaturedSection.vue";

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
  <FeaturedProducts />
</template>

<style scoped></style>
