<script setup>
document.title = "Hype - Brands";
</script>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import InputButton from "../components/atoms/InputButton.vue";
import InputText from "../components/atoms/InputText.vue";
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
      product: null,
      brand: this.$route.params.brand,
    };
  },
  created() {
    const data = JSON.parse(localStorage.getItem("brands"));
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].products.length; j++) {
        let title = data[i].products[j].title.toLowerCase();
        title = title.replace(/[^\w\s]/gi, "").replace(/ /g, "-");
        let subtitle = data[i].products[j].subtitle.toLowerCase();
        subtitle = subtitle.replace(/[^\w\s]/gi, "").replace(/ /g, "-");
        if (`${title}-${subtitle}` == this.$route.params.name) {
          this.product = data[i].products[j];
        }
      }
    }
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
      <p>{{ brand }} - {{ product.type }}</p>
      <h2>{{ product.title }} {{ product.subtitle }}</h2>
      <h3>Rp. 3.500.000</h3>
      <h5>Size:</h5>
      <div class="container-size">
        <div class="size-prod" tabindex="0">8</div>
        <div class="size-prod" tabindex="0">8.5</div>
        <div class="size-prod" tabindex="0">9</div>
        <div class="size-prod" tabindex="0">9.5</div>
        <div class="size-prod" tabindex="0">10</div>
        <div class="size-prod" tabindex="0">10.5</div>
      </div>
      <h5>Colour:</h5>
      <div class="container-color">
        <div class="color-prod" style="background-color: rgb(0, 0, 0)"></div>
        <div
          class="color-prod"
          style="background-color: rgb(255, 255, 255)"
        ></div>
      </div>
      <!-- <h5>Quantity:</h5> -->
      <div class="qty-counter">
        <InputText withLabel="false" />
      </div>
      <div class="button-add">
        <InputButton text="ADD TO CART" />
      </div>
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

.container-size {
  width: calc(100% - 3rem);
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.8rem;
}

.size-prod {
  width: 5rem;
  flex: 1;
  text-align: center;
  border: solid 0.8px var(--clr-neutral-1000);
  background-color: var(--clr-neutral-200);
  padding-top: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.size-prod:hover {
  color: var(--clr-neutral-200);
  background-color: var(--clr-neutral-1000);
}

.container-color {
  width: calc(100% - 3rem);
  display: inline-flex;
  gap: 1rem;
  cursor: pointer;
}

.color-prod {
  width: 6rem;
  height: 5vh;
  border: solid 0.8px var(--clr-neutral-1000);
}

.qty-counter {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  width: 30rem;
  height: 5vh;
  margin-bottom: 2rem;
}

.button-add {
  width: calc(100% - 3rem);
  height: 5vh;
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
