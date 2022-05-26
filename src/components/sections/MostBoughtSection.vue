<script>
import ProductCard from "../atoms/ProductCard.vue";

export default {
  created() {
    this.dataProduct = JSON.parse(localStorage.getItem("brands"));
  },
  components: { ProductCard },
};
</script>

<template>
  <div class="most_bought-container">
    <div class="section-header">
      <h5 class="section-title">MOST BOUGHT ITEMS</h5>
    </div>
    <div class="section-items">
      <ProductCard
        v-for="n in 3"
        :key="n"
        :product="dataProduct[2].products[n]"
        :brand="dataProduct[2].name"
      />
    </div>
  </div>
</template>

<style scoped>
.most_bought-container {
  width: 100%;
  padding-inline: 3rem;
  margin-bottom: 8rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.section-title {
  letter-spacing: 0.15rem;
}

.section-items {
  width: 100%;
  --auto-grid-min-size: 24rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

@media screen and (max-width: 768px) {
  .section-items {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 576px) {
  .most_bought-container {
    padding-inline: 1rem;
  }

  .section-items {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: var(--fontSize-p);
    font-weight: 800;
  }
}
</style>
