<template>
  <div class="input-container" :class="state">
    <label v-if="withLabel" class="input-label" :for="name">Label</label>
    <div class="input-wrapper">
      <input type="text" :name="name" :id="name" :placeholder="placeholder" />
    </div>
    <label v-if="state != 'default'" class="input-message" :for="name"
      >Message</label
    >
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: "default",
  },
  placeholder: {
    type: String,
    default: "",
  },
  withLabel: {
    type: Boolean,
    default: true,
  },
});
</script>

<script>
export default {};
</script>

<style scoped>
.input-container {
  flex: 1;
  display: flex;
  flex-flow: column;
}

input {
  flex: 1;
  padding: 0.75rem 0.875rem;
  font-family: "Cabinet Grotesk", sans-serif;
  font-size: var(--fontSize-p);
  letter-spacing: 0.05rem;
  background-color: transparent;
  outline: none;
  border: none;
}

input::placeholder {
  letter-spacing: 0.05rem;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: solid 2px var(--color-container-dark);
}

.input-label {
  font-size: var(--fontSize-p);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05rem;
}

.input-message {
  font-weight: 700;
  letter-spacing: 0.03rem;
}
</style>
