<script setup>
console.log("TESTING");
</script>

<template>
  <main>
    <h5>Hello</h5>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  max-width: calc(100% - 6rem);
  aspect-ratio: 16/9;
  background-color: var(--color-container-dark);
  background-image: url("/video.gif");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
