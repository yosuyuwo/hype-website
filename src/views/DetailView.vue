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
  methods: {
    formatRupiah(angka, prefix) {
      var number_string = angka.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      if (ribuan) {
        const separator = sisa ? "," : "";
        rupiah += separator + ribuan.join(",");
      }

      rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
      return prefix == undefined ? rupiah : rupiah ? "IDR " + rupiah : "";
    },
  },
};
</script>

<template>
  <div class="container-detail">
    <div class="img-detail">
      <img
        class="product-image"
        v-lazy="{
          src: '/images/products/default.jpg',
          loading: '/images/products/default.jpg',
          error: '/images/products/default.jpg',
        }"
        alt="Product"
        loading="lazy"
      /><img
        class="product-image"
        v-lazy="{
          src: '/images/products/default.jpg',
          loading: '/images/products/default.jpg',
          error: '/images/products/default.jpg',
        }"
        alt="Product"
        loading="lazy"
      /><img
        class="product-image"
        v-lazy="{
          src: '/images/products/default.jpg',
          loading: '/images/products/default.jpg',
          error: '/images/products/default.jpg',
        }"
        alt="Product"
        loading="lazy"
      /><img
        class="product-image"
        v-lazy="{
          src: '/images/products/default.jpg',
          loading: '/images/products/default.jpg',
          error: '/images/products/default.jpg',
        }"
        alt="Product"
        loading="lazy"
      />
    </div>
    <div class="product-detail">
      <div class="product-detail-wrapper">
        <div class="detail-header">
          <p class="product-type">
            {{ brand }} / {{ product.type }} / {{ product.gender }}
          </p>
          <h4 class="product-title">
            {{ product.title }} {{ product.subtitle }}
          </h4>
          <h5 class="product-price">
            {{ formatRupiah(product.price + "", "IDR") }}
          </h5>
        </div>
        <div class="size-section">
          <h5 class="section-header">Size:</h5>
          <div class="product-sizes">
            <div class="size-variant" tabindex="0">8</div>
            <div class="size-variant" tabindex="0">8.5</div>
            <div class="size-variant" tabindex="0">9</div>
            <div class="size-variant" tabindex="0">9.5</div>
            <div class="size-variant" tabindex="0">10</div>
            <div class="size-variant" tabindex="0">10.5</div>
          </div>
        </div>
        <div class="color-section">
          <h5 class="section-header">Colour:</h5>
          <div class="product-colors">
            <div
              class="color-variant"
              style="background-color: rgb(0, 0, 0)"
            ></div>
            <div
              class="color-variant"
              style="background-color: rgb(255, 255, 255)"
            ></div>
          </div>
        </div>
        <!-- <h5>Quantity:</h5> -->
        <div class="qty-counter">
          <InputText :withLabel="false" />
        </div>
        <div class="button-add">
          <InputButton text="ADD TO CART" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-detail {
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-block: 8rem;
  padding-inline: 3rem;
}

.img-detail {
  width: 50%;
  display: flex;
  flex-flow: column;
  gap: 1rem;
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

.product-detail {
  flex: 1;
  position: relative;
}

.product-detail-wrapper {
  display: flex;
  flex-flow: column;
  gap: 2rem;
  position: sticky;
  top: 8rem;
}

.product-title {
  font-weight: 600;
}

.product-image {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
}

.container-size {
  width: calc(100% - 3rem);
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.8rem;
}

.size-variant {
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
