<template>
  <div class="button-container">
    <div class="button-background"></div>
    <div class="background-transition"></div>
    <p class="button-text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.button-container {
  padding: 0.75rem 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: var(--color-container-dark); */
  color: var(--color-text-light);
  cursor: pointer;
  position: relative;
  border: solid 2px var(--color-container-dark);
}

.button-container:hover .background-transition {
  width: 100%;
}

.button-container:hover .button-text {
  color: var(--color-text-dark);
}

.button-text {
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  z-index: 2;
  line-height: normal;
  text-align: center;
  transition: color 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

.button-background {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -2;
  background-color: var(--color-container-dark);
}

.background-transition {
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: var(--color-container-light);
  transition: width 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}
</style>
