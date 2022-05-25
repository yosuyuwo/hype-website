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
  isFluid: {
    type: Boolean,
    default: false,
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
  <div class="product-card" :class="isFluid ? 'fluid' : ''">
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
    <div class="product-detail">
      <h5 class="product-title">{{ product.title }} {{ product.subtitle }}</h5>
      <p class="product-subtitle">{{ product.type }} / {{ brand }}</p>
      <h5 class="product-price">
        {{ formatRupiah(product.price + "", "IDR") }}
      </h5>
    </div>
  </div>
</template>

<style scoped>
.product-card:not(.fluid) {
  width: 24rem;
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
</style>

<!-- 6-18, 6-12, 3-18, ?-? -->
