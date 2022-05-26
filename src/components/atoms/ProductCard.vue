<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  responsive: {
    type: Boolean,
    default: true,
  },
});
</script>

<script>
export default {
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
  <div class="product-card" :class="responsive ? 'responsive' : ''">
    <img
      class="product-image"
      v-lazy="{
        src: product.img[0],
        loading: '/images/products/default.jpg',
        error: '/images/products/default.jpg',
      }"
      alt="Product"
      loading="lazy"
    />
    <img
      class="product-logo"
      :class="brand"
      :src="`/logos/${brand}.svg`"
      alt="Logo"
    />
    <div class="product-detail">
      <h5 class="product-title">{{ product.title }} {{ product.subtitle }}</h5>
      <p class="product-subtitle">{{ product.type }} - {{ product.gender }}</p>
      <!-- <h5 class="product-price">
        {{ formatRupiah(product.price + "", "IDR") }}
      </h5> -->
    </div>
  </div>
</template>

<style scoped>
.product-card {
  position: relative;
}
.product-card.fluid {
  width: 100%;
}

.product-image {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
}

.product-title {
  font-weight: 600;
}

.product-logo {
  height: 3rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.nike {
  height: 1rem;
}

.adidas {
  height: 2rem;
}

.yeezy {
  height: 1.5rem;
}

.product-logo {
  opacity: 0;
}

img[lazy="loaded"] + .product-logo {
  opacity: 1;
}

@media screen and (max-width: 560px) {
  .responsive .product-title {
    font-size: var(--fontSize-p);
  }

  .responsive .product-subtitle {
    text-transform: uppercase;
    font-weight: 600;
    opacity: 0.55;
    font-size: var(--fontSize-small);
    letter-spacing: 0.05rem;
  }

  .product-logo {
    height: 1.5rem;
  }
}
</style>

<!-- 6-18, 6-12, 3-18, ?-? -->
