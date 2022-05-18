<script setup>
import { RouterLink } from "vue-router";
import PreviousArrow from "./icons/PreviousArrow.vue";
import NextArrow from "./icons/NextArrow.vue";
</script>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    console.log("MOUNTEDDD");
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    isPaused() {
      console.log("paused");
      // Handles Picture-in-Picture
      document.querySelector(".hero-background").play();
    },
    onScroll() {
      this.windowTop = window.top.scrollY;

      // Handles Navigation Color
      if (this.windowTop > 300) {
        document
          .querySelector(".navigation-container")
          .classList.remove("transparent");
      } else {
        document
          .querySelector(".navigation-container")
          .classList.add("transparent");
      }
    },
    toggleVideoSound() {
      const video = document.querySelector(".hero-background");
      if (video.muted) {
        document.querySelector(".sound").innerHTML = "MUTE";
        video.volume = 0.3;
        video.muted = false;
      } else {
        document.querySelector(".sound").innerHTML = "UNMUTE";
        video.muted = true;
      }
    },
  },
};
</script>

<template>
  <div class="hero-container">
    <video
      autoplay
      loop="true"
      muted
      playsinline="true"
      webkit-playsinline="true"
      class="hero-background"
      @pause="isPaused()"
      @loadstart="onVideoLoad()"
    >
      <source src="/offwhite.mp4" type="video/mp4" />
    </video>
    <div class="content-container">
      <div class="content-wrapper">
        <h3 class="content-title">"OUT OF OFFICE"</h3>
        <p class="content-subtitle">By OFF-WHITE</p>
        <RouterLink to="/brands/adidas" class="shop-now h5"
          >SHOP NOW</RouterLink
        >
      </div>
      <div class="controls-wrapper">
        <div class="prev-next">
          <div class="prev-arrow">
            <PreviousArrow />
          </div>
          <div class="next-arrow">
            <NextArrow />
          </div>
        </div>
        <p class="link sound" @click="toggleVideoSound()">UNMUTE</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  width: 100%;
  aspect-ratio: 16/9;
  /* width: 100%;
    max-width: calc(100% - 6rem);
  height: calc(100vh - 8rem); */
  position: absolute;
  top: 0;
  left: 0;
  /* padding: 2rem 0; */
}

.hero-background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}

.content-container {
  width: calc(100% - 6rem);
  position: absolute;
  left: 3rem;
  bottom: 20%;
  color: var(--clr-neutral-100);
}

.content-title {
  font-weight: 900;
}

.shop-now {
  text-decoration: underline;
}

.controls-wrapper {
  position: absolute;
  right: 2rem;
  bottom: 0.25rem;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}

.prev-next {
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

.sound {
  text-align: right;
  width: max-content;
  text-decoration: underline;
}

@media screen and (max-width: 576px) {
  .hero-container {
    aspect-ratio: 9/16;
  }
}
</style>
