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
      openFilter: false,
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
      this.showedProducts = [];
      for (let i = 0; i < this.dataProducts[this.index].products.length; i++) {
        const product = this.dataProducts[this.index].products[i];
        if (
          this.isGender &&
          this.isType &&
          this.genderValues.indexOf(product.gender.toLowerCase()) != -1 &&
          this.typeValues.indexOf(product.type.toLowerCase()) != -1
        ) {
          this.showedProducts.push(product);
        } else if (
          this.isGender &&
          !this.isType &&
          this.genderValues.indexOf(product.gender.toLowerCase()) != -1
        ) {
          this.showedProducts.push(product);
        } else if (
          this.isType &&
          !this.isGender &&
          this.typeValues.indexOf(product.type.toLowerCase()) != -1
        ) {
          this.showedProducts.push(product);
        } else if (!this.isGender && !this.isType) {
          this.showedProducts.push(product);
        }
      }
    },
    queryPath(name, value) {
      const base = this.$route.path;
      const fullPath = this.$route.fullPath;
      if (fullPath.indexOf("?") != -1) {
        let queries = fullPath.substring(
          fullPath.indexOf("?") + 1,
          fullPath.length
        );
        queries = queries.split("&");
        queries = queries.map(function (str) {
          const item = str.split("=");
          return { name: item[0], value: item[1] };
        });

        if (
          queries.findIndex((item) => {
            return item.name == name;
          }) != -1
        ) {
          // Jika ketemu
          queries = queries.map((item) => {
            if (item.name == name) {
              const valueArray = item.value.split("_");
              if (valueArray.indexOf(value) == -1) valueArray.push(value);
              else {
                valueArray.splice(valueArray.indexOf(value), 1);
              }
              item.value = valueArray.join("_");
            }

            return item;
          });
        } else {
          queries.push({
            name: name,
            value: value,
          });
        }
        const removedIndex = queries.findIndex((item) => {
          return item.value == "";
        });
        if (removedIndex != -1) queries.splice(removedIndex, 1);

        queries = queries.map(function (item) {
          return `${item.name}=${item.value}`;
        });
        return `${base}?${queries.join("&")}`;
      } else {
        return `${base}?${name}=${value}`;
      }
    },
  },
  watch: {
    "$route.params.name"() {
      if (this.$route.name == "brands") {
        this.index = this.dataProducts.findIndex(
          (item) => item.name == this.$route.params.name
        );
        this.currentItems = 8;
        this.addShowedProducts();
      }
    },
    "$route.query"() {
      this.currentItems = 8;
      this.addShowedProducts();
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
  computed: {
    isGender() {
      return typeof this.$route.query.gender != "undefined";
    },
    isType() {
      return typeof this.$route.query.type != "undefined";
    },
    genderValues() {
      if (this.isGender) return this.$route.query.gender.split("_");
      return [""];
    },
    typeValues() {
      if (this.isType) return this.$route.query.type.split("_");
      return [""];
    },
  },
  components: { ProductCard },
};
</script>

<template>
  <div class="container-brands">
    <div class="filter-mobile" :class="openFilter ? 'active' : ''">
      <div class="filter-toggle" @click="openFilter = !openFilter">
        {{ openFilter ? "CLOSE FILTER" : "OPEN FILTER" }}
      </div>
      <div class="filter-wrapper">
        <h5 class="filter-header">Type</h5>
        <div class="filter-items">
          <RouterLink
            v-for="typeName in dataProducts[index].types"
            :key="typeName"
            :to="queryPath('type', typeName)"
            :class="typeValues.indexOf(typeName) != -1 ? 'current' : ''"
            class="filter-item"
          >
            {{ typeName }}
          </RouterLink>
        </div>
      </div>
      <div class="filter-wrapper">
        <h5 class="filter-header">Gender</h5>
        <div class="filter-items">
          <RouterLink
            v-for="genderName in dataProducts[index].genders"
            :key="genderName"
            :to="queryPath('gender', genderName)"
            :class="genderValues.indexOf(genderName) != -1 ? 'current' : ''"
            class="filter-item"
          >
            {{ genderName }}
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="container-name">
      <h1 class="logo-name" :class="$route.params.name">
        {{ $route.params.name }}
      </h1>
      <img
        class="logo-img"
        :class="$route.params.name"
        :src="`/logos/${$route.params.name}.svg`"
      />
    </div>
  </div>
  <div class="catalogue-container">
    <div class="navigation-wrapper">
      <div class="filter-navigation type-navigation">
        <RouterLink
          v-for="typeName in dataProducts[index].types"
          :key="typeName"
          :to="queryPath('type', typeName)"
          :class="typeValues.indexOf(typeName) != -1 ? 'current' : ''"
          class="black-link"
        >
          {{ typeName }}
        </RouterLink>
      </div>
      <div class="filter-navigation gender-navigation">
        <RouterLink
          v-for="genderName in dataProducts[index].genders"
          :key="genderName"
          :to="queryPath('gender', genderName)"
          :class="genderValues.indexOf(genderName) != -1 ? 'current' : ''"
          class="black-link"
        >
          {{ genderName }}
        </RouterLink>
      </div>
    </div>
    <div class="grid-catalogue" v-if="showedProducts.length > 0">
      <div
        v-for="(item, index) in showedProducts"
        :key="item.title"
        :class="index < currentItems ? '' : 'no-card'"
      >
        <ProductCard :product="item" :brand="$route.params.name" />
      </div>
    </div>
    <h5 v-else class="not-found">No product found. Try readjust the filter</h5>
    <div class="navigation-wrapper">
      <div class="filter-navigation type-navigation">
        <RouterLink
          v-for="typeName in dataProducts[index].types"
          :key="typeName"
          :to="queryPath('type', typeName)"
          :class="typeValues.indexOf(typeName) != -1 ? 'current' : ''"
          class="black-link"
        >
          {{ typeName }}
        </RouterLink>
      </div>
      <div class="filter-navigation gender-navigation">
        <RouterLink
          v-for="genderName in dataProducts[index].genders"
          :key="genderName"
          :to="queryPath('gender', genderName)"
          :class="genderValues.indexOf(genderName) != -1 ? 'current' : ''"
          class="black-link"
        >
          {{ genderName }}
        </RouterLink>
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
  padding-top: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
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

.filter-navigation {
  display: flex;
  gap: 2rem;
  align-items: center;
  text-transform: uppercase;
}

.filter-navigation .current {
  color: var(--color-text-light);
  box-shadow: inset 200px 0 0 0 var(--color-container-dark);
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

.no-card {
  display: none;
}

.not-found {
  width: 100%;
  padding-block: 4rem;
  text-align: center;
}
.filter-mobile {
  display: none;
  width: 100%;
  height: 40vh;
  border-top: solid 2px var(--color-container-dark);
  background-color: var(--color-background);
  position: fixed;
  bottom: calc((40vh - 4rem) * -1);
  left: 0;
  z-index: 80;
  overflow-y: hidden;
  transition: all 0.3s ease-in-out;
}

.filter-mobile.active {
  bottom: 0;
  overflow-y: auto;
}

.filter-toggle {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-light);
  background-color: var(--color-container-dark);
  cursor: pointer;
  position: sticky;
  top: 0;
}

.filter-wrapper {
  padding: 2rem 1rem;
}

.filter-header {
  font-weight: 600;
  margin-bottom: 1rem;
}

.filter-items {
  --auto-grid-min-size: 12rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
}

.filter-item {
  width: 100%;
  padding-block: 0.5rem;
  /* border: solid 2px var(--color-container-dark); */
  background-color: var(--clr-neutral-300);
  text-align: center;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: var(--color-text-dark);
}

.filter-item.current {
  color: var(--color-text-light);
  background-color: var(--color-container-dark);
}

@media screen and (max-width: 1600px) {
  .logo-name {
    font-size: 16vw;
  }
  .logo-name.givenchy {
    font-size: 14vw;
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
  .logo-name.givenchy {
    font-size: 18vw;
  }

  .logo-img {
    height: 16vw;
  }
}

@media screen and (max-width: 768px) {
  .container-name {
    padding-top: 2rem;
  }

  .filter-navigation {
    display: none;
  }

  .filter-mobile {
    display: block;
  }
}

@media screen and (max-width: 576px) {
  .catalogue-container {
    padding-inline: 1rem;
  }
  .filter-items {
    grid-template-columns: 1fr;
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
