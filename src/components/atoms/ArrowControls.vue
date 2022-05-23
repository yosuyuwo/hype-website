<script setup>
import PreviousArrow from "../icons/PreviousArrow.vue";
import NextArrow from "../icons/NextArrow.vue";
</script>

<template>
  <div class="controls-content">
    <div class="prev-arrow" @click="$emit('leftClick')">
      <PreviousArrow />
    </div>
    <div class="next-arrow" @click="$emit('rightClick')">
      <NextArrow />
    </div>
  </div>
</template>

<style scoped>
.controls-content {
  display: flex;
  gap: 1rem;
}

.prev-arrow,
.next-arrow {
  width: 5rem;
  display: grid;
  align-items: center;
  aspect-ratio: 1/1;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.prev-arrow:hover,
.next-arrow:hover {
  transform: scaleX(1.2);
}

.prev-arrow {
  justify-items: end;
  transform-origin: right;
}

.next-arrow {
  justify-items: start;
  transform-origin: left;
}
</style>
