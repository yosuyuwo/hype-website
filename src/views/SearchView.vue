<script setup>
import SearchMagnifier from "../components/icons/SearchMagnifier.vue";
document.title = "Hype - Brands";
</script>

<script>
export default {
  components: { SearchMagnifier },
  data() {
    return {
      dataProducts: null,
      inputVal: "",
      inputValAC: "",
      dataProductAC: [],
      showedProducts: [],
      object: null,
      debounce: 3,
      debounceInterval: false,
    };
  },
  created() {
    this.dataProducts = JSON.parse(localStorage.getItem("brands"));
    this.initialValue();
  },
  methods: {
    initialValue() {
      for (let i = 0; i < this.dataProducts.length; i++) {
        for (let j = 0; j < this.dataProducts[i].products.length; j++) {
          let dataProd = {
            name: this.dataProducts[i].products[j].title.concat(
              " ",
              this.dataProducts[i].products[j].subtitle
            ),
          };
          this.dataProductAC.push(dataProd);
        }
      }
    },
    keyUpHandle(e) {
      if (!this.inputValAC.startsWith(this.inputVal)) {
        this.inputValAC = "";
      }
      this.debounce = 2;
      if (this.inputVal.length == 0) {
        this.autoCompleteSearch(e);
      } else if (this.debounceInterval == false) {
        this.debounceInterval = setInterval(() => {
          this.debounce--;
          console.log(this.debounce);
          if (this.debounce == 0) {
            this.autoCompleteSearch(e);
            if (this.inputVal.length >= 3) {
              this.findProductBySearchValue();
              console.log(this.showedProducts);
            }
          }
        }, 1000);
      }
    },
    autoCompleteSearch(e) {
      clearInterval(this.debounceInterval);
      this.debounceInterval = false;
      let val = this.inputVal;
      let object = "";
      if (val.length < 1) {
        this.inputValAC = "";
        return;
      }
      object = this.findValueByPrefix(val);
      if (object !== null) {
        this.inputValAC = object.name.toLowerCase();
      } else {
        this.inputValAC = "";
      }
      if (e.keyCode == 39) {
        this.inputVal = object.name.toLowerCase();
      }
    },
    findValueByPrefix(prefix) {
      for (let i = 0; i < this.dataProductAC.length; i++) {
        let object = this.dataProductAC[i];
        if (object.name.toLowerCase().startsWith(prefix.toLowerCase())) {
          return object;
        }
      }
      return null;
    },
    populateShowedProducts() {
      this.showedProducts = this.findTypesBySearchValue();
    },
    findTypesBySearchValue() {
      let brands = [];
      for (let i = 0; i < this.dataProducts.length; i++) {
        const brand = this.dataProducts[i];
        const isFound = brand.types.indexOf(this.inputVal.toLowerCase()) >= 0;
        if (isFound) {
          brands.push(brand);
        }
      }
      if (brands.length > 0) {
        return brands;
      }

      return this.findGendersBySearchValue();
    },
    findGendersBySearchValue() {
      let brands = [];
      for (let i = 0; i < this.dataProducts.length; i++) {
        const brand = this.dataProducts[i];
        const isFound = brand.genders.indexOf(this.inputVal.toLowerCase()) >= 0;
        if (isFound) {
          brands.push(brand);
        }
      }
      if (brands.length > 0) {
        return brands;
      }

      return this.findProductsBySearchValue();
    },
    findProductsBySearchValue() {
      const products = [];
      for (let i = 0; i < this.dataProducts.length; i++) {
        const brand = this.dataProducts[i];

        // Search products
        for (let j = 0; j < brand.products.length; j++) {
          // Concat title dan subtitle
          const fullName =
            brand.products[j].title + " " + brand.products[j].subtitle;

          if (fullName.toLowerCase().includes(this.inputVal.toLowerCase())) {
            //Jika ketemu, cek products apakah brand product sudah ada
            const brandIndex = products.findIndex((item) => {
              return item.name == brand.name;
            });

            if (brandIndex == -1) {
              //Jika tidak ada brand product didalam products
              products.push({
                name: brand.name,
                products: [brand.products[j]],
              });
            } else {
              //Jika brand product sudah ada didalam products
              products[brandIndex].products.push(brand.products[j]);
            }
          }
        }
      }
      return products;
    },
  },
};
</script>

<template>
  <div class="container-search">
    <div class="search-input-section">
      <div class="input-wrapper">
        <input
          type="text"
          class="input-text-search"
          placeholder="Type your search here"
          v-model="inputVal"
          @keyup="keyUpHandle"
        />
        <input
          type="text"
          class="input-text-search-ac"
          v-model="inputValAC"
          disabled
        />
      </div>
      <SearchMagnifier class="searchIcon" />
    </div>
    <div
      class="search-product-wrapper"
      v-show="inputVal.length > 0 || showedProducts.length > 0"
    >
      <div
        class="search-product-section"
        v-for="item in showedProducts"
        :key="item.name"
      >
        <div class="info-search">
          <p class="show-info-brand">{{ showedProducts.name }}</p>
          <p class="show-info">Found {{ showedProducts.length }} Products</p>
        </div>
        <div class="grid-catalogue">
          <ProductCard
            v-for="items in item.products"
            :key="items.title"
            :product="item"
            :brand="item.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-search {
  width: 100%;
  padding-top: 8rem;
}

.search-input-section {
  width: 100%;
  padding-inline: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
}

.input-wrapper {
  width: 100%;
  display: block;
}

.input-text-search {
  position: absolute;
  font-size: var(--fontSize-h3);
  background: none;
  outline: none;
  border: none;
  z-index: 7;
}

.input-text-search-ac {
  position: relative;
  font-size: var(--fontSize-h3);
  background: none;
  outline: none;
  border: none;
  color: var(--clr-neutral-600);
  z-index: 1;
}

.searchIcon {
  height: 5rem;
}

.search-product-section {
  width: 100%;
  padding-inline: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  padding-top: 10rem;
}

.info-search {
  width: 100%;
  padding-inline: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
}

.show-info-brand {
  flex: 1;
  font-weight: bold;
}

.show-info {
  font-weight: bold;
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
</style>
