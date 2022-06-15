<script setup>
import { RouterLink } from "vue-router";
import ArrowControls from "../atoms/ArrowControls.vue";

defineProps({
  scrollPos: {
    type: Number,
    default: 0,
  },
  screenWidth: {
    type: Number,
    default: 0,
  },
});
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
    this.autoplay();
  },
  data() {
    return {
      soundVolume: 1,
      isMuted: true,
      videoIndex: 0,
      brands: [],
      swipeGesture: {
        touchStartX: 0,
        touchStartY: 0,
        touchEndX: 0,
        touchEndY: 0,
      },
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
        try {
          document
            .querySelector(`#video-${this.videoIndex}.hero-background`)
            .play();
        } catch (e) {
          console.info("Media is not found");
        }
      }
    },
    autoplay() {
      if (window.innerWidth > 768) {
        const videos = document.querySelectorAll("video.hero-background");

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
      } else {
        const images = document.querySelectorAll("img.hero-background");
        for (let i = 0; i < images.length; i++) {
          // Autoplay all video to buffer entire video
          images[i].classList.remove("playing");
        }
        images[this.videoIndex].classList.add("playing");
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
    scrollPos(value) {
      //Auto Mute when hero section isn't visible
      if (
        value >
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

      // Show controls
      if (
        document.querySelector(".hero-container").getBoundingClientRect()
          .bottom < window.innerHeight
      ) {
        document
          .querySelector(".hero-container .content-container")
          .classList.remove("fixed");
      } else {
        document
          .querySelector(".hero-container .content-container")
          .classList.add("fixed");
      }
    },
    screenWidth() {
      this.autoplay();
    },
  },
};
</script>

<template>
  <div class="hero-container">
    <div class="media-container mobile">
      <img
        v-for="item in brands"
        :key="item.name"
        :src="`/images/${item.name}-mobile.jpg`"
        class="hero-background mobile"
        :alt="item.name"
      />
      <div class="image-overlay"></div>
    </div>
    <div class="media-container">
      <video
        v-for="(item, index) in brands"
        :key="item.name"
        loop="true"
        muted
        :src="`/videos/${item.name}.mp4`"
        playsinline="true"
        preload="auto"
        webkit-playsinline="true"
        :poster="`/images/${item.name}.jpg`"
        class="hero-background"
        :id="`video-${index}`"
        @progress="isDownloading(index)"
        @canplaythrough="isAvailable(index)"
        @pause="isPaused()"
      ></video>
    </div>
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
        <ArrowControls
          class="margin-right"
          :isReachStart="false"
          @leftClick="switchVideo(false)"
          @rightClick="switchVideo(true)"
        />
        <div v-if="!brands[videoIndex].isReady" class="loading-video">
          <p class="link white-link">LOADING VIDEO</p>
        </div>
        <div v-else class="sound-controls">
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
  position: relative;
  top: 0;
  left: 0;
}

.media-container {
  width: 100%;
  height: 100%;
  position: relative;
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
  transition: opacity 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.hero-background.playing {
  opacity: 1;
}

.hero-background.mobile,
.media-container.mobile {
  display: none;
}

.hero-background:not(.mobile),
.media-container:not(.mobile) {
  display: block;
}

.content-container {
  width: calc(100% - 6rem);
  position: absolute;
  left: 3rem;
  bottom: 4rem;
  color: var(--clr-neutral-100);
}

.content-title {
  max-width: 50vw;
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

.sound-controls {
  display: flex;
  gap: 1rem;
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

@media screen and (max-width: 992px) {
  .hero-container {
    aspect-ratio: 4/3;
  }
}

@media screen and (max-width: 768px) {
  .hero-container {
    aspect-ratio: 9/16;
    overflow-x: hidden;
  }
  .hero-container {
    position: relative;
    height: calc(100vh - 72px);
  }

  .hero-background.mobile,
  .media-container.mobile {
    display: block;
    object-position: center top;
  }

  .hero-background:not(.mobile),
  .media-container:not(.mobile) {
    display: none;
  }

  .content-container {
    width: calc(100% - 2rem);
    left: 1rem;
    bottom: 2rem;
  }

  .loading-video,
  .sound {
    display: none;
  }

  .content-container {
    display: flex;
    flex-flow: column;
    flex-direction: column-reverse;
  }

  .content-container.fixed {
    position: fixed;
  }

  .controls-wrapper {
    position: static;
    align-items: flex-start;
    transform: translateX(-1.5rem);
  }
  .image-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(33, 33, 33);
    background: linear-gradient(
      0deg,
      rgba(33, 33, 33, 1) 0%,
      rgba(33, 33, 33, 0) 100%
    );
  }
}

@media screen and (max-width: 480px) {
  .content-container {
    position: absolute;
  }

  .content-title {
    max-width: 80vw;
  }
}
</style>

<style>
.margin-right:first-child {
  margin-right: -1.9rem !important;
}
</style>
