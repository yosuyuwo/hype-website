<template>
  <div class="featured-container">
    <h5 class="section-title">Featured Products</h5>
    <swiper
      :slidesPerView="'3'"
      :centeredSlides="true"
      class="featured-carousel"
    >
      <swiper-slide class="carousel-item">
        <div class="carousel-card">
          <div class="carousel-detail">
            <h3 class="carousel-title">4DFWD x Parley</h3>
            <h5 class="carousel-subtitle">SHOES - ADIDAS</h5>
          </div>
          <div class="carousel-payment">
            <h4 class="carousel-price">IDR 480,000</h4>
            <div class="add-to-cart">ADD TO CART</div>
          </div>
          <img
            class="carousel-image"
            src="/images/products/example-1.jpg"
            alt="Product 1"
          />
        </div>
      </swiper-slide>
      <swiper-slide class="carousel-item">
        <div class="carousel-card">
          <div class="carousel-detail">
            <h3 class="carousel-title">4DFWD x Parley</h3>
            <h5 class="carousel-subtitle">SHOES - ADIDAS</h5>
          </div>
          <div class="carousel-payment">
            <h4 class="carousel-price">IDR 480,000</h4>
            <div class="add-to-cart">ADD TO CART</div>
          </div>
          <img
            class="carousel-image"
            src="/images/products/example-1.jpg"
            alt="Product 1"
          /></div></swiper-slide
      ><swiper-slide class="carousel-item">
        <div class="carousel-card">
          <div class="carousel-detail">
            <h3 class="carousel-title">4DFWD x Parley</h3>
            <h5 class="carousel-subtitle">SHOES - ADIDAS</h5>
          </div>
          <div class="carousel-payment">
            <h4 class="carousel-price">IDR 480,000</h4>
            <div class="add-to-cart">ADD TO CART</div>
          </div>
          <img
            class="carousel-image"
            src="/images/products/example-1.jpg"
            alt="Product 1"
          /></div></swiper-slide
      ><swiper-slide class="carousel-item">
        <div class="carousel-card">
          <div class="carousel-detail">
            <h3 class="carousel-title">4DFWD x Parley</h3>
            <h5 class="carousel-subtitle">SHOES - ADIDAS</h5>
          </div>
          <div class="carousel-payment">
            <h4 class="carousel-price">IDR 480,000</h4>
            <div class="add-to-cart">ADD TO CART</div>
          </div>
          <img
            class="carousel-image"
            src="/images/products/example-1.jpg"
            alt="Product 1"
          /></div
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
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
  gap: 4rem;
}

.section-title {
  letter-spacing: 0.35rem;
  text-transform: uppercase;
  font-weight: 600;
}

.carousel-item {
  width: 100%;
}

.carousel-card {
  width: 33.6rem;
  height: 48rem;
  border: solid 2px var(--color-container-dark);
  margin-inline: auto;
  position: relative;
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

.add-to-cart {
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--color-container-dark);
  color: var(--color-text-light);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.swiper {
  width: 100%;
}

/* .swiper-slide-prev .carousel-card {
  margin-right: 0;
}

.swiper-slide-next .carousel-card {
  margin-left: 0;
}*/

.swiper-slide-active .carousel-payment {
  opacity: 1;
  transform: translateX(0);
}

.swiper-slide-active .carousel-detail {
  opacity: 1;
  transform: translateX(0);
}
@media screen and (max-width: 480px) {
  .carousel-item {
    width: 100%;
  }
}
</style>
