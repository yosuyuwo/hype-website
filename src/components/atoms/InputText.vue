<template>
  <div
    class="input-container"
    :class="`${state} ${type} ${isFocus ? 'input-focus' : ''}`"
  >
    <label v-if="withLabel" class="input-label" :for="name">Label</label>
    <div class="input-wrapper">
      <MinusIcon
        class="quantity-icon"
        v-if="type == 'quantity'"
        @click="updateQty(-1)"
      />
      <input
        type="text"
        @focusin="isFocus = true"
        @focusout="isFocus = false"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        v-model="value"
        @blur="inputBlur"
      />
      <SearchMagnifier class="search-icon" v-if="type == 'search'" />
      <PlusIcon
        class="quantity-icon"
        v-if="type == 'quantity'"
        @click="updateQty(1)"
      />
    </div>
    <label v-if="state != 'default'" class="input-message" :for="name"
      >Message</label
    >
  </div>
</template>

<script setup>
import SearchMagnifier from "../icons/SearchMagnifier.vue";
import MinusIcon from "../icons/MinusIcon.vue";
import PlusIcon from "../icons/PlusIcon.vue";
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
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
</script>

<script>
export default {
  data() {
    return {
      isFocus: false,
      value: "",
    };
  },
  mounted() {
    this.value = this.modelValue;
  },
  methods: {
    updateQty(value) {
      if (this.value == 1 && value < 0) {
        return;
      }
      this.value += value;
    },
    inputBlur() {
      if (!this.value || this.value < 1) this.value = 1;
    },
  },
  watch: {
    value() {
      this.$emit("update:modelValue", this.value);
      this.$emit("input", this.value);
    },
  },
};
</script>

<style scoped>
.input-container {
  flex: 1;
  display: flex;
  flex-flow: column;
}

.input-container.quantity {
  flex: 0;
}

.quantity input {
  width: 6ch;
  text-align: center;
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
  border: solid 2px var(--clr-neutral-300);
  transition: border 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.input-focus .input-wrapper {
  border: solid 2px var(--clr-neutral-800);
}

.quantity .input-wrapper {
  gap: 0;
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

.search-icon {
  height: 2rem;
}

.quantity-icon {
  height: 3rem;
  padding: 0.9rem;
  color: var(--clr-neutral-800);
}

.quantity-icon:hover {
  cursor: pointer;
}
</style>
