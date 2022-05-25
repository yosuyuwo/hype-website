<template>
  <div class="featured-container">
    <div class="section-header">
      <div class="header-wrapper">
        <div class="header-detail">
          <h5 class="section-title">Featured Products</h5>
          <p class="product-count">{{ currentIndex }} of {{ totalSlides }}</p>
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
    </div>
    <swiper
      :speed="800"
      :breakpoints="{
        1600: {
          slidesPerView: 3,
          spaceBetween: 38,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 38,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 38,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
          slidesPerGroup: 2,
          centeredSlides: false,
        },
        240: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 48,
          centeredSlides: true,
        },
      }"
      class="featured-carousel"
      @slideChange="indexChanged()"
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
      currentIndex: 0,
      totalSlides: 0,
      dataProduct: null,
    };
  },
  created() {
    this.dataProduct = JSON.parse(localStorage.getItem("brands"));
  },
  mounted() {
    this.initCarousel();
    console.log(this.dataProduct[6]);
  },
  methods: {
    initCarousel() {
      this.carousel = document.querySelector(".featured-carousel").swiper;
      this.totalSlides = this.carousel.activeIndex;
      this.currentIndex = this.carousel.realIndex + 1;
    },
    indexChanged() {
      this.currentIndex = this.carousel.realIndex + 1;
    },
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
  width: 38%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.header-wrapper {
  margin-left: 3rem;
}

.section-title {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  width: 100%;
}

.featured-control {
  margin-left: -1.8rem;
}
.carousel-item {
  width: 100%;
}

.carousel-card {
  width: 100%;
  height: 23rem;
  background-color: var(--clr-neutral-300);
}

.featured-carousel {
  width: 100%;
}

@media screen and (min-width: 1600px) {
  .carousel-card {
    background-color: var(--clr-info-500);
  }
}
</style>
