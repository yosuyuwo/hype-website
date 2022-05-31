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
      dataTypes: null,
      dataGender: null,
      inputVal: "",
      inputValAC: "",
      dataProductAC: [],
      showedProducts: [],
      object: null,
    };
  },
  created() {
    this.dataProducts = JSON.parse(localStorage.getItem("brands"));
    this.dataTypes = JSON.parse(localStorage.getItem("types"));
    this.dataGender = JSON.parse(localStorage.getItem("gender"));
    this.initialValue();
  },
  methods: {
    autoCompleteSearch(e) {
      let val = this.inputVal;
      let object = "";
      if (val.length < 1) {
        this.inputValAC = "";
        return;
      }
      object = this.findValueByPrefix(val);
      if (object !== null) {
        this.inputValAC = object.name;
      } else {
        this.inputValAC = "";
      }
      if (e.keyCode == 39) {
        this.inputVal = object.name;
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
    initialValue() {
      for (let i = 0; i < this.dataProducts.length; i++) {
        let data = { name: this.dataProducts[i].name };
        this.dataProductAC.push(data);
      }
      for (let i = 0; i < this.dataTypes.length; i++) {
        let data = { name: this.dataTypes[i] };
        this.dataProductAC.push(data);
      }
      for (let i = 0; i < this.dataGender.length; i++) {
        let data = { name: this.dataGender[i] };
        this.dataProductAC.push(data);
      }
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
          @keyup="autoCompleteSearch"
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
      class="search-product-section"
      v-show="inputVal.length > 0 || showedProducts.length > 0"
    >
      <p class="show-info">Found 10 Products</p>
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

.show-info {
  font-weight: bold;
}
</style>
