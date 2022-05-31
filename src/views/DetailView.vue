<script setup>
document.title = "Product Detail - Hype";
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
import InputButton from "../components/atoms/InputButton.vue";
import InputText from "../components/atoms/InputText.vue";

export default {
  data() {
    return {
      product: null,
      selectedSize: null,
      selectedColor: "",
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
        v-for="image in product.img"
        :key="image"
        class="product-image"
        v-lazy="{
          src: image,
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
          <p class="product-subtitle">
            <a :href="`/brands/${brand}`">{{ brand }}</a> /
            <a :href="`/search?q=${product.gender}`">{{ product.gender }}</a>
            /
            <a :href="`/search?q=${product.type}`">{{ product.type }}</a>
          </p>
          <h4 class="product-title">
            {{ product.title }} {{ product.subtitle }}
          </h4>
          <h5 class="product-price">
            {{ formatRupiah(product.price + "", "IDR") }}
          </h5>
        </div>
        <div class="size-section">
          <h5 class="section-header">Size</h5>
          <div class="product-sizes">
            <div
              v-for="size in product.size"
              :key="size"
              class="size-variant"
              tabindex="0"
            >
              {{ size }}
            </div>
          </div>
        </div>
        <div class="color-section" v-if="product.colours.length > 0">
          <h5 class="section-header">Colour</h5>
          <div class="product-colors">
            <div
              v-for="color in product.colours"
              :key="color"
              class="color-variant"
              :style="`background-color: ${color}`"
            ></div>
          </div>
        </div>
        <div class="qty-section">
          <h5 class="section-header">Quantity</h5>
          <div class="qty-counter">
            <InputText :withLabel="false" type="quantity" />
          </div>
          <div class="button-add">
            <InputButton text="ADD TO CART" />
          </div>
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
  width: 70%;
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

.product-subtitle > * {
  color: var(--color-text-dark);
}

.product-image {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border: solid 2px var(--color-container-dark);
}

.size-section,
.color-section,
.qty-section {
  width: calc(100% - 3rem);
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.product-sizes,
.product-colors {
  width: 100%;
  --auto-grid-min-size: 3rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 0.5rem;
}

.size-variant {
  width: 3rem;
  display: grid;
  place-items: center;
  aspect-ratio: 1/1;
  text-align: center;
  border: solid 2px var(--color-container-dark);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.1s ease-in-out;
}

.size-variant:hover {
  color: var(--color-text-light);
  background-color: var(--color-container-dark);
}

.container-color {
  width: calc(100% - 3rem);
  display: inline-flex;
  gap: 1rem;
  cursor: pointer;
}

.color-variant {
  width: 3rem;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  border: solid 2px var(--color-container-dark);
  cursor: pointer;
  position: relative;
}

.color-variant::after {
  width: 5px;
  height: 5px;
  background-color: var(--color-container-dark);
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: invert() grayscale(200%);
  mix-blend-mode: difference;
  opacity: 0;
  transition: all 0.1s ease-in-out;
}

.color-variant:hover::after {
  opacity: 1;
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
