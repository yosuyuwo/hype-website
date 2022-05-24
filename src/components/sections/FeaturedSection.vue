<template>
  <div class="featured-container">
    <div class="section-header">
      <div class="header-wrapper">
        <div class="header-detail">
          <h2 class="section-title">Featured Products</h2>
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
        <div class="carousel-card">
          <img
            class="carousel-image"
            :src="dataProduct[6].products[18].img[0]"
            alt="Product 1"
          />
          <div class="carousel-detail">
            <h3 class="carousel-title">
              {{ dataProduct[6].products[18].title }}
              <span>
                {{ dataProduct[6].products[18].subtitle }}
              </span>
            </h3>
            <h5 class="carousel-subtitle">
              {{ dataProduct[6].products[18].type }} -
              {{ dataProduct[6].name.toUpperCase() }}
            </h5>
          </div>
          <div class="carousel-payment">
            <h4 class="carousel-price">
              IDR {{ dataProduct[6].products[18].price }}
            </h4>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="carousel-item">
        <div class="carousel-card">
          <img
            class="carousel-image"
            :src="dataProduct[6].products[12].img[0]"
            alt="Product 1"
          />
          <div class="carousel-detail">
            <h3 class="carousel-title">
              {{ dataProduct[6].products[12].title }}
              <span>
                {{ dataProduct[6].products[12].subtitle }}
              </span>
            </h3>
            <h5 class="carousel-subtitle">
              {{ dataProduct[6].products[12].type }} -
              {{ dataProduct[6].name.toUpperCase() }}
            </h5>
          </div>
          <div class="carousel-payment">
            <h4 class="carousel-price">
              IDR {{ dataProduct[6].products[12].price }}
            </h4>
          </div>
        </div></swiper-slide
      ><swiper-slide class="carousel-item">
        <div class="carousel-card">
          <img
            class="carousel-image"
            :src="dataProduct[3].products[18].img[0]"
            alt="Product 1"
          />
          <div class="carousel-detail">
            <h3 class="carousel-title">
              {{ dataProduct[3].products[18].title }}
              <span>
                {{ dataProduct[3].products[18].subtitle }}
              </span>
            </h3>
            <h5 class="carousel-subtitle">
              {{ dataProduct[3].products[18].type }} -
              {{ dataProduct[3].name.toUpperCase() }}
            </h5>
          </div>
          <div class="carousel-payment">
            <h4 class="carousel-price">
              IDR {{ dataProduct[3].products[18].price }}
            </h4>
          </div>
        </div></swiper-slide
      ><swiper-slide class="carousel-item">
        <div class="carousel-card">
          <img
            class="carousel-image"
            :src="dataProduct[4].products[5].img[0]"
            alt="Product 1"
          />
          <div class="carousel-detail">
            <h3 class="carousel-title">
              {{ dataProduct[4].products[5].title }}
              <span>
                {{ dataProduct[4].products[5].subtitle }}
              </span>
            </h3>
            <h5 class="carousel-subtitle">
              {{ dataProduct[4].products[5].type }} -
              {{ dataProduct[4].name.toUpperCase() }}
            </h5>
          </div>
          <div class="carousel-payment">
            <h4 class="carousel-price">
              IDR {{ dataProduct[4].products[5].price }}
            </h4>
          </div>
        </div></swiper-slide
      >
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
  /* background: rgb(248, 249, 250);
  background: rgb(248, 249, 250);
  background: linear-gradient(
    90deg,
    var(--color-background) 0%,
    var(--color-background) 69%,
    rgba(248, 249, 250, 0) 100%
  ); */
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
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
  font-weight: 900;
  width: 100%;
}

.featured-control {
  margin-left: -1.8rem;
}
.carousel-item {
  width: 100%;
}

.carousel-card {
  width: calc(33vw - 6rem - 24px);
  height: 48rem;
  border: solid 2px var(--color-container-dark);
  margin-inline: auto;
  position: relative;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.carousel-detail {
  width: 20rem;
  position: absolute;
  top: 2rem;
  left: -6rem;
  opacity: 0;
  transform: translateX(4rem);
  transition: all 0.3s ease-in-out;
}

.carousel-payment {
  position: absolute;
  bottom: 6rem;
  right: -6rem;
  opacity: 0;
  transform: translateX(-4rem);
  transition: all 0.3s ease-in-out;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
}

.swiper-slide-active .carousel-card {
  opacity: 1;
}

.swiper-slide-next .carousel-card {
  opacity: 1;
}

.swiper-slide-active .carousel-payment {
  opacity: 1;
  transform: translateX(0);
}

.swiper-slide-active .carousel-detail {
  opacity: 1;
  transform: translateX(0);
}

@media screen and (max-width: 1600px) {
  .featured-container {
    flex-flow: row;
  }

  .featured-carousel {
    padding-left: 20%;
  }

  .carousel-card {
    width: calc(33vw - 2rem);
  }

  /* .section-header {
    background-color: var(--clr-info-300);
  } */
}

@media screen and (max-width: 1200px) {
  .carousel-card {
    width: 30rem;
  }

  .featured-carousel {
    padding-left: 32%;
  }
}

@media screen and (max-width: 992px) {
  /* .section-header {
    background-color: var(--clr-info-300);
  } */
  .featured-container {
    flex-flow: column;
    overflow-x: hidden;
    gap: 2rem;
  }
  .featured-control {
    margin-right: -1.8rem;
    margin-left: 0;
  }
  .featured-carousel {
    padding-inline: 3rem;
  }

  .product-count {
    display: none;
  }

  .section-header {
    width: 100%;
    position: relative;
    height: auto;
    padding-inline: 3rem;
  }

  .header-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 0;
  }

  .section-title {
    font-size: var(--fontSize-h5);
    font-weight: 500;
    letter-spacing: 0.25rem;
  }

  .carousel-card {
    width: 100%;
    border: none;
  }

  .carousel-card img {
    height: 28rem;
    border: solid 2px var(--color-container-dark);
  }

  .carousel-payment {
    opacity: 1;
    transform: translateY(0);
  }

  .carousel-detail {
    opacity: 1;
    transform: translateY(0);
    margin-bottom: 1rem;
  }

  .carousel-title {
    font-size: var(--fontSize-h4);
  }

  .carousel-subtitle {
    font-size: var(--fontSize-p);
    font-weight: 800;
    text-transform: uppercase;
  }

  .swiper-slide .carousel-card {
    opacity: 1;
  }
  .carousel-detail,
  .carousel-payment {
    position: static;
  }
}

@media screen and (max-width: 480px) {
  .section-title {
    letter-spacing: 0.35rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  .featured-carousel {
    padding-inline: 1rem;
  }
  .section-header {
    padding-inline: 1rem;
  }
}
</style>
