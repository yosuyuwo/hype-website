<template>
  <div class="popup-dialog" :class="isShowing ? 'showing' : ''">
    <p class="popup-text">{{ message }}</p>
    <div class="popup-close" @click="isShowing = false">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showing: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    showPopup() {
      this.isShowing = true;
    },
  },
  watch: {
    showing() {
      this.showPopup();
    },
    isShowing() {
      setTimeout(() => {
        this.isShowing = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.popup-dialog {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  min-width: 18rem;
  max-width: 24rem;
  right: 3rem;
  bottom: -20%;
  padding-left: 1rem;
  z-index: 90;
  color: var(--color-text-dark);
  background-color: var(--color-background);
  border: solid 2px var(--color-container-dark);
  transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);
}

.popup-dialog.showing {
  bottom: 1rem;
}

.popup-text {
  font-weight: 500;
  flex: 1;
  padding-block: 1rem;
}

.popup-close {
  width: 3.5rem;
  height: 3.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.popup-close:hover {
  background-color: var(--clr-neutral-300);
}

@media screen and (max-width: 992px) {
  .popup-dialog {
    right: 1rem;
  }
}

@media screen and (max-width: 576px) {
  .popup-dialog {
    width: 100%;
    max-width: calc(100% - 2rem);
  }
}
</style>
