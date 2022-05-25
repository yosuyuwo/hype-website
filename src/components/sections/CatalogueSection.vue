<script>
import ProductDetail from "../atoms/ProductDetail.vue";

export default {
  created() {
    this.dataProduct = JSON.parse(localStorage.getItem("brands"));
  },
  components: { ProductDetail },
};
</script>

<template>
  <div class="catalogue-container">
    <div class="section-header">
      <h5 class="section-title">WELCOME ADIDAS!</h5>
      <RouterLink to="/brands/adidas" class="black-link"
        >SEE ALL ITEMS</RouterLink
      >
    </div>
    <div class="grid-catalogue">
      <ProductDetail
        v-for="n in 10"
        :key="n"
        :product="dataProduct[0].products[n]"
        :brand="dataProduct[0].name"
        :isFluid="true"
      />
    </div>
  </div>
</template>

<style scoped>
.catalogue-container {
  width: 100%;
  padding-inline: 3rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.section-title {
  letter-spacing: 0.15rem;
}

.grid-catalogue {
  width: 100%;
  --auto-grid-min-size: 24rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
}

.black-link {
  text-decoration: underline;
}

@media screen and (max-width: 560px) {
  .catalogue-container {
    padding-inline: 1rem;
  }

  .grid-catalogue {
    grid-template-columns: 1fr;
  }
}
</style>
