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
      noSwipingClass="product-detail"
      :breakpoints="{
        1600: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        840: {
          slidesPerView: 2,
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
        <div class="wrapper">
          <ProductCard
            :product="dataProduct[2].products[3]"
            :brand="dataProduct[2].name"
            :responsive="false"
          />
        </div>
      </swiper-slide>
      <swiper-slide class="carousel-item">
        <ProductCard
          :product="dataProduct[3].products[0]"
          :brand="dataProduct[3].name"
          :responsive="false" /></swiper-slide
      ><swiper-slide class="carousel-item">
        <ProductCard
          :product="dataProduct[1].products[4]"
          :brand="dataProduct[1].name"
          :responsive="false" /></swiper-slide
      ><swiper-slide class="carousel-item">
        <ProductCard
          :product="dataProduct[5].products[4]"
          :brand="dataProduct[5].name"
          :responsive="false"
      /></swiper-slide>
      <swiper-slide class="carousel-item">
        <ProductCard
          :product="dataProduct[4].products[1]"
          :brand="dataProduct[4].name"
          :responsive="false"
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import ProductCard from "../atoms/ProductCard.vue";
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
  },
};
</script>

<style scoped>
.featured-container {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
}

.section-header {
  width: 100%;
  padding-inline: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  overflow-x: hidden;
}

.section-title {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  width: 100%;
}

.featured-control {
  margin-right: -1.9rem;
}

.featured-carousel {
  width: 100%;
  padding-inline: 3rem;
}

.carousel-item {
  width: 100%;
  transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

@media screen and (max-width: 992px) {
  .featured-carousel,
  .section-header {
    padding-inline: 1rem;
  }
}

@media screen and (max-width: 576px) {
  .section-header {
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-inline: 1rem;
    margin-bottom: 2rem;
  }

  .featured-control {
    display: none;
  }

  .featured-carousel {
    padding-inline: 1rem;
    padding-right: 2rem;
  }
  .section-title {
    font-size: var(--fontSize-p);
    font-weight: 800;
  }
}
</style>
