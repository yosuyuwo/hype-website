<script setup>
document.title = "Hype - Brands";
</script>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import InputButton from "../components/atoms/InputButton.vue";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Scrollbar],
    };
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
  },
};
</script>

<template>
  <div class="container-detail">
    <div class="img-detail">
      <swiper
        :speed="800"
        :scrollbar="{
          hide: false,
        }"
        :modules="modules"
        :breakpoints="{
          1600: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          840: {
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
          <img
            class="product-image"
            v-lazy="{
              src: '/images/products/default.jpg',
              loading: '/images/products/default.jpg',
              error: '/images/products/default.jpg',
            }"
            alt="Product"
            loading="lazy"
          />
        </swiper-slide>
        <swiper-slide class="carousel-item">
          <img
            class="product-image"
            v-lazy="{
              src: '/images/products/default.jpg',
              loading: '/images/products/default.jpg',
              error: '/images/products/default.jpg',
            }"
            alt="Product"
            loading="lazy"
          />
        </swiper-slide>
        <swiper-slide class="carousel-item">
          <img
            class="product-image"
            v-lazy="{
              src: '/images/products/default.jpg',
              loading: '/images/products/default.jpg',
              error: '/images/products/default.jpg',
            }"
            alt="Product"
            loading="lazy"
          />
        </swiper-slide>
        <swiper-slide class="carousel-item">
          <img
            class="product-image"
            v-lazy="{
              src: '/images/products/default.jpg',
              loading: '/images/products/default.jpg',
              error: '/images/products/default.jpg',
            }"
            alt="Product"
            loading="lazy"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="product-detail">
      <h4>Brands</h4>
      <h2>Title - Subtitle</h2>
      <h5>Type</h5>
      <h3>Price</h3>
      <InputButton text="ADD TO CART" style="right: 3rem; margin-left: 3rem" />
    </div>
  </div>
</template>

<style scoped>
.container-detail {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 7rem;
  margin-bottom: 5rem;
}

.img-detail {
  width: 57vw;
  display: flex;
  flex: 1;
  gap: 2rem;
  align-items: center;
}

.product-detail {
  width: 43vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  gap: 1.5rem;
  margin-top: 3rem;
  margin-left: 3rem;
}

.featured-carousel {
  width: 100%;
  padding-inline: 3rem;
}

.carousel-item {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.carousel-item:not(.swiper-slide-active) {
  opacity: 0;
  filter: brightness(55%);
}

.product-image {
  width: 100%;
  aspect-ratio: 5/5;
  object-fit: cover;
}

@media screen and (max-width: 1600px) {
  .swiper-slide-next + .carousel-item {
    opacity: 0.3;
    filter: brightness(55%);
  }
}

@media screen and (max-width: 840px) {
  .swiper-slide-next {
    opacity: 0.3;
    filter: brightness(55%);
  }
}
</style>
