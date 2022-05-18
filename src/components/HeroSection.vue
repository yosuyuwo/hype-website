<script setup>
import { RouterLink } from "vue-router";
import PreviousArrow from "./icons/PreviousArrow.vue";
import NextArrow from "./icons/NextArrow.vue";
</script>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      soundVolume: 1,
      isMuted: true,
      videoIndex: 0,
      videoUrls: [
        "/offwhite.mp4",
        "/adidas.mp4",
        "/converse.mp4",
        "/mcmxbape.mp4",
        "/nike.mp4",
        "/jordan.mp4",
        "/stussy.mp4",
        "/yeezy.mp4",
      ],
    };
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
        this.isMuted = false;
        video.volume = this.soundVolume / 100;
        video.muted = false;
      } else {
        this.isMuted = true;
        video.muted = true;
      }
    },
    switchVideo(isUp) {
      if (isUp && this.videoIndex < this.videoUrls.length - 1) {
        this.videoIndex++;
      } else if (!isUp && this.videoIndex > 0) {
        this.videoIndex--;
      }
      console.log(this.videoIndex);
      document
        .querySelector(".hero-background")
        .setAttribute("src", this.videoUrls[this.videoIndex]);
    },
  },
  watch: {
    soundVolume() {
      if (this.soundVolume != "") {
        if (this.soundVolume > 100) {
          this.soundVolume = 100;
        } else if (this.soundVolume < 1) {
          this.soundVolume = 1;
        }
        const video = document.querySelector(".hero-background");
        video.volume = this.soundVolume / 100;
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
      :src="videoUrls[videoIndex]"
      playsinline="true"
      webkit-playsinline="true"
      class="hero-background"
      @pause="isPaused()"
    ></video>
    <div class="content-container">
      <div class="content-wrapper">
        <h3 class="content-title">"OUT OF OFFICE"</h3>
        <p class="content-subtitle">By OFF-WHITE</p>
        <RouterLink to="/brands/adidas" class="shop-now h5 white-link"
          >SHOP NOW</RouterLink
        >
      </div>
      <div class="controls-wrapper">
        <div class="controls-content">
          <div class="prev-arrow" @click="switchVideo(false)">
            <PreviousArrow />
          </div>
          <div class="next-arrow" @click="switchVideo(true)">
            <NextArrow />
          </div>
        </div>
        <div class="controls-content">
          <input
            v-if="!isMuted"
            type="number"
            name="soundVolume"
            id="soundVolume"
            min="1"
            max="100"
            maxlength="3"
            class="volumeInput"
            v-model="soundVolume"
          />
          <p
            v-if="!isMuted"
            class="link sound white-link"
            @click="toggleVideoSound()"
          >
            MUTE
          </p>
          <p v-else class="link sound white-link" @click="toggleVideoSound()">
            UNMUTE
          </p>
        </div>
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
  aspect-ratio: 16/9;
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

.controls-content {
  display: flex;
  gap: 1rem;
}

.controls-content:last-child {
  gap: 0;
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

.volumeInput {
  width: 5ch;
  text-align: center;
  font-family: "Cabinet Grotesk", sans-serif;
  font-size: var(--fontSize-p);
  background: none;
  border: none;
  outline: none;
  color: var(--clr-neutral-100);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

@media screen and (max-width: 768px) {
  .hero-container {
    aspect-ratio: 9/16;
  }
}
</style>
