<template>
  <div class="featured-container">
    <div class="section-header">
      <div class="header-detail">
        <h5 class="section-title">Featured Products</h5>
      </div>
      <ArrowControls
        v-if="carousel != null"
        class="featured-control"
        :isReachStart="carousel.isBeginning"
        :isReachEnd="carousel.isEnd"
        @leftClick="carousel.slidePrev()"
        @rightClick="carousel.slideNext()"
      />
    </div>
    <swiper
      :speed="800"
      :breakpoints="{
        1600: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        840: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        240: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      }"
      class="featured-carousel"
    >
      <swiper-slide class="carousel-item">
        <div class="carousel-card"></div>
      </swiper-slide>
      <swiper-slide class="carousel-item">
        <div class="carousel-card"></div></swiper-slide
      ><swiper-slide class="carousel-item">
        <div class="carousel-card"></div></swiper-slide
      ><swiper-slide class="carousel-item">
        <div class="carousel-card"></div
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
defineProps({
  screenWidth: {
    type: Number,
    default: 0,
  },
});
</script>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import ArrowControls from "../atoms/ArrowControls.vue";
// import { RouterLink } from "vue-router";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ArrowControls,
  },
  data() {
    return {
      carousel: null,
      dataProduct: null,
    };
  },
  created() {
    this.dataProduct = JSON.parse(localStorage.getItem("brands"));
  },
  mounted() {
    this.carousel = document.querySelector(".featured-carousel").swiper;
    console.log(this.carousel);
  },
  watch: {
    screenWidth(value) {
      if (value < 992) {
        this.carousel.enabled = false;
      }
    },
  },
};
</script>

<style scoped>
.featured-container {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-block: 6rem;
  position: relative;
}

.section-header {
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
}

.section-title {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  width: 100%;
}

.featured-control {
  margin-left: -1.2rem;
}

.featured-carousel {
  width: 100%;
  padding-inline: 3rem;
}

.carousel-item {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.carousel-card {
  width: 100%;
  height: 48rem;
  background-color: var(--clr-neutral-300);
}

.carousel-item:not(.swiper-slide-active):not(.swiper-slide-next):not(.swiper-slide-next
    + .carousel-item) {
  opacity: 0.3;
  filter: brightness(55%);
}

/* .swiper-  */
@media screen and (max-width: 576px) {
  .section-header {
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-inline: 1rem;
  }

  .featured-carousel {
    padding-inline: 1rem;
  }
}
</style>
