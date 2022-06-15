<script setup>
import PreviousArrow from "../icons/PreviousArrow.vue";
import NextArrow from "../icons/NextArrow.vue";

defineProps({
  isReachEnd: {
    type: Boolean,
    default: false,
  },
  isReachStart: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="controls-content">
    <div
      class="prev-arrow"
      :class="isReachStart ? 'disabled' : ''"
      @click="$emit('leftClick')"
    >
      <PreviousArrow />
    </div>
    <div
      class="next-arrow"
      :class="isReachEnd ? 'disabled' : ''"
      @click="$emit('rightClick')"
    >
      <NextArrow />
    </div>
  </div>
</template>

<style scoped>
.controls-content {
  display: flex;
  gap: 1rem;
}

.disabled {
  pointer-events: none;
  opacity: 0.3;
}

.prev-arrow,
.next-arrow {
  width: 5rem;
  display: grid;
  align-items: center;
  aspect-ratio: 1/1;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
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
