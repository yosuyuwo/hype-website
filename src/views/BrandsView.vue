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
import SearchMagnifier from "../components/icons/SearchMagnifier.vue";
export default {
  data() {
    return {
      dataProd: null,
    };
  },
  created() {
    this.dataProduct = JSON.parse(localStorage.getItem("brands"));
  },
  components: { ProductCard },
};
</script>

<template>
  <div class="container-brands">
    <div class="container-name">
      <h1 class="logo-name">{{ $route.params.name }}</h1>
      <img class="logo-img" :src="`/logos/${$route.params.name}.svg`" />
    </div>
  </div>
  <div class="catalogue-container">
    <div class="navigation-wrapper">
      <div class="left-side">
        <input type="text" class="" />
        <div class="navigation-icon">
          <SearchMagnifier />
        </div>
      </div>
      <div class="middle-side">
        <RouterLink to="" class="black-link">HAT</RouterLink>
        <RouterLink to="" class="black-link">SHIRT</RouterLink>
        <RouterLink to="" class="black-link">PANTS</RouterLink>
        <RouterLink to="" class="black-link">SHOES</RouterLink>
        <RouterLink to="" class="black-link">MEN</RouterLink>
        <RouterLink to="" class="black-link">WOMEN</RouterLink>
      </div>
      <div class="right-side">
        <a to="" class="navigation-link black-link">1 OF 1</a>
      </div>
    </div>
    <div class="grid-catalogue">
      <ProductCard
        v-for="n in 10"
        :key="n"
        :product="dataProduct[0].products[n]"
        :brand="$route.params.name"
      />
    </div>
    <div class="navigation-wrapper">
      <div class="left-side">
        <a to="" class="navigation-link black-link">HAT</a>
        <a to="" class="navigation-link black-link">SHIRT</a>
        <a to="" class="navigation-link black-link">PANTS</a>
        <a to="" class="navigation-link black-link">SHOES</a>
        <a to="" class="navigation-link black-link">MEN</a>
        <a to="" class="navigation-link black-link">WOMEN</a>
      </div>
      <div class="right-side">
        <a to="" class="navigation-link black-link">1 OF 1</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-brands {
  width: 100%;
}

.container-name {
  width: 100%;
  padding-block: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}

.logo-name {
  font-family: "Cabinet Grotesk";
  font-weight: 900;
  font-size: 8vw;
  text-transform: uppercase;
  color: var(--clr-neutral-400);
}

.logo-img {
  height: 8vw;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 60%;
  position: absolute;
}

.catalogue-container {
  width: 100%;
  padding-inline: 3rem;
}

.navigation-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.left-side {
  flex: 2;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.middle-side {
  flex: 1;
  display: flex;
  gap: 3.5rem;
  align-items: center;
}

.right-side {
  flex: 0.5;
  display: flex;
  gap: 3.5rem;
  justify-content: flex-end;
  align-items: center;
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
  margin-bottom: 1.5rem;
  grid-gap: 1rem;
}

@media screen and (max-width: 992px) {
  .grid-catalogue {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
}
</style>
