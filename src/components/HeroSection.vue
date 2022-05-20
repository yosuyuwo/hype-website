<script setup>
import { RouterLink } from "vue-router";
import PreviousArrow from "./icons/PreviousArrow.vue";
import NextArrow from "./icons/NextArrow.vue";
</script>

<script>
export default {
  created() {
    const dataList = JSON.parse(localStorage.getItem("brands"));
    dataList.map((item) => {
      this.brands.push({
        name: item.name,
        title: item.video.title,
        isReady: false,
      });
    });
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.autoplay();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      soundVolume: 1,
      isMuted: true,
      videoIndex: 0,
      brands: [],
    };
  },
  methods: {
    isDownloading(index) {
      // Show which video is downloading
      console.log("Downloading", index);
    },
    isAvailable(index) {
      // Show which video is ready
      console.log("VIDEO READY", index);
      if (this.videoIndex === index) {
        //Change boolean isReady to true to show controls
        this.brands[index].isReady = true;
        document
          .querySelector(`#video-${this.videoIndex}.hero-background`)
          .play();
      }
    },
    isPaused() {
      // Handles Picture-in-Picture
      console.log("paused");
      if (this.brands[this.videoIndex].isReady) {
        document
          .querySelector(`#video-${this.videoIndex}.hero-background`)
          .play();
      }
    },
    autoplay() {
      const videos = document.querySelectorAll(".hero-background");

      for (let i = 0; i < videos.length; i++) {
        // Autoplay all video to buffer entire video
        videos[i].autoplay = true;
        videos[i].muted = true;
        videos[i].classList.remove("playing");
        this.brands[i].isReady = false;
      }

      // Pause video if not ready
      videos[this.videoIndex].pause();
      videos[this.videoIndex].currentTime = 0;
      videos[this.videoIndex].volume = this.soundVolume / 100;
      videos[this.videoIndex].muted = this.isMuted;
      videos[this.videoIndex].classList.add("playing");
    },
    onScroll() {
      console.log(
        document.querySelector(`#video-${this.videoIndex}.hero-background`)
          .currentTime
      );
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

      //Auto Mute when hero section isn't visible
      if (
        this.windowTop >
        document.querySelector(".hero-container").clientHeight + 100
      ) {
        document.querySelector(
          `#video-${this.videoIndex}.hero-background`
        ).muted = true;
      } else {
        if (!this.isMuted) {
          document.querySelector(
            `#video-${this.videoIndex}.hero-background`
          ).muted = false;
        }
      }
    },
    toggleVideoSound() {
      const video = document.querySelector(
        `#video-${this.videoIndex}.hero-background`
      );
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
      if (isUp) {
        this.videoIndex++;
      } else if (!isUp) {
        this.videoIndex--;
      }

      if (this.videoIndex >= this.brands.length) {
        this.videoIndex = 0;
      } else if (this.videoIndex <= -1) {
        this.videoIndex = this.brands.length - 1;
      }
      this.autoplay();
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
        const video = document.querySelector(
          `#video-${this.videoIndex}.hero-background`
        );
        video.volume = this.soundVolume / 100;
      }
    },
  },
};
</script>

<template>
  <div class="hero-container">
    <video
      v-for="(item, index) in brands"
      :key="item.name"
      loop="true"
      muted
      :src="`/videos/${item.name}.mp4`"
      playsinline="true"
      webkit-playsinline="true"
      :poster="`/images/${item.name}.jpg`"
      class="hero-background"
      :id="`video-${index}`"
      @progress="isDownloading(index)"
      @canplaythrough="isAvailable(index)"
      @pause="isPaused()"
    ></video>
    <div class="content-container">
      <div class="content-wrapper">
        <h3 class="content-title">{{ brands[videoIndex].title }}</h3>
        <p class="content-subtitle">
          By <span>{{ brands[videoIndex].name }}</span>
        </p>
        <RouterLink
          :to="`/brands/${brands[videoIndex].name}`"
          class="shop-now h5 white-link"
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
        <div v-if="!brands[videoIndex].isReady" class="loading-video">
          <p class="link white-link">LOADING VIDEO</p>
        </div>
        <div v-else class="controls-content">
          <input
            v-show="!isMuted"
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
            v-show="!isMuted"
            class="link sound white-link"
            @click="toggleVideoSound()"
          >
            MUTE
          </p>
          <p
            v-show="isMuted"
            class="link sound white-link"
            @click="toggleVideoSound()"
          >
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
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
  opacity: 0;
  background-color: var(--clr-neutral-1000);
  transition: opacity 0.3s ease-in-out;
}

.hero-background.playing {
  opacity: 1;
}

.content-container {
  width: calc(100% - 6rem);
  position: absolute;
  left: 3rem;
  bottom: 4rem;
  color: var(--clr-neutral-100);
}

.content-title {
  font-weight: 900;
  text-transform: uppercase;
}

.content-subtitle span {
  text-transform: uppercase;
}

.shop-now {
  text-decoration: underline;
}

.controls-wrapper {
  position: absolute;
  right: 0;
  bottom: 0.25rem;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}

.controls-content {
  display: flex;
  gap: 1rem;
}

.controls-content:first-child {
  margin-right: -1.9rem;
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

@media screen and (max-width: 1200px) {
  .hero-container {
    aspect-ratio: 16/9;
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .hero-container {
    aspect-ratio: 9/16;
  }
}
</style>
