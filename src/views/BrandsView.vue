<script setup>
document.title = "Hype - Brands";

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
import ProductCard from "../components/atoms/ProductCard.vue";

export default {
  data() {
    return {
      dataProducts: null,
      showedProducts: [],
      currentItems: 8,
      index: -1,
    };
  },
  created() {
    this.dataProducts = JSON.parse(localStorage.getItem("brands"));
    this.index = this.dataProducts.findIndex(
      (item) => item.name == this.$route.params.name
    );
    this.addShowedProducts();
    document.title = `${
      this.$route.params.name.charAt(0).toUpperCase() +
      this.$route.params.name.slice(1)
    } - Hype`;
  },
  methods: {
    addShowedProducts() {
      for (
        let i = this.currentItems - 8;
        i < this.dataProducts[this.index].products.length &&
        i < this.currentItems;
        i++
      ) {
        this.showedProducts.push(this.dataProducts[this.index].products[i]);
      }
    },
  },
  watch: {
    "$route.params.name"() {
      if (this.$route.name == "brands") {
        this.index = this.dataProducts.findIndex(
          (item) => item.name == this.$route.params.name
        );
        this.showedProducts = [];
        this.currentItems = 8;
        this.addShowedProducts();
      }
    },
    scrollPos() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 160
      ) {
        this.currentItems += 8;
        this.addShowedProducts();
      }
    },
  },
  components: { ProductCard },
};
</script>

<template>
  <div class="container-brands">
    <div class="container-name">
      <h1 class="logo-name">{{ $route.params.name }}</h1>
      <img
        class="logo-img"
        :class="$route.params.name"
        :src="`/logos/${$route.params.name}.svg`"
      />
    </div>
  </div>
  <div class="catalogue-container">
    <div class="navigation-wrapper">
      <!-- <div class="middle-side">
        <RouterLink to="" class="black-link">HAT</RouterLink>
        <RouterLink to="" class="black-link">SHIRT</RouterLink>
        <RouterLink to="" class="black-link">PANTS</RouterLink>
        <RouterLink to="" class="black-link">SHOES</RouterLink>
        <RouterLink to="" class="black-link">MEN</RouterLink>
        <RouterLink to="" class="black-link">WOMEN</RouterLink>
      </div> -->
    </div>
    <div class="grid-catalogue">
      <ProductCard
        v-for="item in showedProducts"
        :key="item.title"
        :product="item"
        :brand="$route.params.name"
      />
    </div>
    <div class="navigation-wrapper">
      <!-- <div class="middle-side">
        <RouterLink to="" class="black-link">HAT</RouterLink>
        <RouterLink to="" class="black-link">SHIRT</RouterLink>
        <RouterLink to="" class="black-link">PANTS</RouterLink>
        <RouterLink to="" class="black-link">SHOES</RouterLink>
        <RouterLink to="" class="black-link">MEN</RouterLink>
        <RouterLink to="" class="black-link">WOMEN</RouterLink>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.container-brands {
  width: 100%;
}

.container-name {
  width: 100%;
  padding-top: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
}

.logo-name {
  font-family: "Cabinet Grotesk";
  font-weight: 900;
  font-size: 12vw;
  text-transform: uppercase;
  color: var(--clr-neutral-400);
  text-align: center;
}

.logo-img {
  height: 8vw;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 80%;
  position: absolute;
}

.catalogue-container {
  width: 100%;
  padding-inline: 3rem;
  display: flex;
  flex-flow: column;
  gap: 2rem;
}

.navigation-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.middle-side {
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.right-side {
  gap: 3.5rem;
}

.navigation-link {
  letter-spacing: 0.2rem;
  cursor: pointer;
}

.transparent .navigation-link {
  box-shadow: inset 0 0 0 0 var(--clr-neutral-100);
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.transparent .navigation-link:hover {
  color: var(--clr-neutral-1000);
  box-shadow: inset 200px 0 0 0 var(--clr-neutral-100);
}

.grid-catalogue {
  width: 100%;
  --auto-grid-min-size: 24rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  margin-bottom: 1rem;
  grid-gap: 1rem;
}

@media screen and (max-width: 1600px) {
  .logo-name {
    font-size: 16vw;
  }

  .logo-img {
    height: 12vw;
  }
}

@media screen and (max-width: 992px) {
  .grid-catalogue {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
  .logo-name {
    font-size: 22vw;
  }

  .logo-img {
    height: 16vw;
  }
}

@media screen and (max-width: 576px) {
  .catalogue-container {
    padding-inline: 1rem;
  }

  /* .logo-name {
    font-size: 16vw;
  } */
}
</style>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 2s ease-in;
}
</style>
