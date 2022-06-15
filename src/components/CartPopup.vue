<template>
  <div
    class="cart-container"
    :class="isShowing ? 'showing' : ''"
    @mouseleave="$emit('mouseleave')"
  >
    <div class="cart-wrapper">
      <p class="cart-title">MY BAG</p>
      <div class="cart-section">
        <div class="empty-state" v-if="cart && cart.length == 0">
          You have no item
        </div>
        <div class="products-wrapper" v-else>
          <div
            class="product-section"
            v-for="(item, index) in cart"
            :key="`${item.title
              .replace(/[^\w\s]/gi, '')
              .replace(/ /g, '-')}-${item.subtitle
              .replace(/[^\w\s]/gi, '')
              .replace(/ /g, '-')}`"
            :id="`item-${item.title
              .replace(/[^\w\s]/gi, '')
              .replace(/ /g, '-')}-${item.subtitle
              .replace(/[^\w\s]/gi, '')
              .replace(/ /g, '-')}`"
          >
            <div class="product-content">
              <div class="product-img">
                <img
                  v-lazy="{
                    src: item.img[0],
                    loading: '/images/products/default.jpg',
                    error: '/images/products/default.jpg',
                  }"
                  alt="Product"
                  loading="lazy"
                />
              </div>
              <div class="product-detail">
                <p class="product-type">
                  {{ item.brand }} / {{ item.type }} / {{ item.gender }}
                </p>
                <h5 class="product-title">
                  {{ item.title + " " + item.subtitle }}
                </h5>
                <div class="product-detail_bottom">
                  <div class="product-detail_text">
                    <p class="product-size">Size : {{ item.selectedSize }}</p>
                    <h5 class="price-value">
                      {{ formatRupiah(item.qty * item.price + "", "IDR") }}
                    </h5>
                  </div>
                  <div class="qty-counter">
                    <InputText
                      :withLabel="false"
                      name="qtyInput"
                      type="quantity"
                      @input="inputQty"
                      v-model="item.qty"
                    />
                  </div>
                </div>
              </div>
              <div
                class="product-close"
                @click="
                  removeProduct(
                    index,
                    item.title.replace(/[^\w\s]/gi, '').replace(/ /g, '-') +
                      '-' +
                      item.subtitle.replace(/[^\w\s]/gi, '').replace(/ /g, '-')
                  )
                "
              >
                x
              </div>
            </div>
            <div class="separator"></div>
          </div>
        </div>
      </div>
      <div class="summary-section">
        <p class="summary-title">Summary</p>
        <div class="summary-content">
          <p class="summary-data">{{ formatRupiah(subtotal + "", "IDR") }}</p>
          <p class="summary-header">Subtotal</p>
        </div>
        <div class="summary-content">
          <p class="summary-data">
            {{ formatRupiah(350000 + "", "IDR") }}
          </p>
          <p class="summary-header">Estimated Delivery</p>
        </div>
        <div class="summary-content">
          <p class="summary-data">
            {{ formatRupiah(tax + "", "IDR") }}
          </p>
          <p class="summary-header">Estimated Taxes</p>
        </div>
        <div class="summary-total">
          <h5 class="total-item">{{ formatRupiah(total + "", "IDR") }}</h5>
          <h5 class="total-header">Total</h5>
        </div>
        <!-- <hr class="line-separate-sub" /> -->
        <InputButton class="buttonCheckout" text="CHECKOUT" />
      </div>
    </div>
  </div>
</template>

<script>
import InputButton from "../components/atoms/InputButton.vue";
import InputText from "../components/atoms/InputText.vue";

export default {
  components: {
    InputButton,
    InputText,
  },
  props: {
    scrollPos: {
      type: Number,
      default: 0,
    },
    screenWidth: {
      type: Number,
      default: 0,
    },
    isShowing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cart: null,
    };
  },
  methods: {
    inputQty() {
      this.updateCart();
    },
    removeProduct(index, fullTitle) {
      const item = document.querySelector(`#item-${fullTitle}`);
      item.classList.add("removed");
      setTimeout(() => {
        item.remove();
        this.cart.splice(index, 1);
        this.updateCart();
      }, 600);
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.$emit("cartChanged");
    },
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
  watch: {
    isShowing() {
      if (this.isShowing) {
        this.cart = JSON.parse(localStorage.getItem("cart")) || [];
      } else this.cart = null;
    },
  },
  computed: {
    subtotal() {
      let subtotal = 0;
      if (this.cart != null) {
        for (let i = 0; i < this.cart.length; i++) {
          subtotal += this.cart[i].price * this.cart[i].qty;
        }
      }
      return subtotal;
    },
    tax() {
      return (this.subtotal * 10) / 100;
    },
    total() {
      return this.subtotal + 350000 + this.tax;
    },
  },
};
</script>

<style scoped>
.cart-container {
  width: 48rem;
  height: calc(100vh - (72px + 1.5rem));
  background-color: var(--color-container-light);
  border-left: solid 2px var(--color-container-dark);
  position: fixed;
  right: -48rem;
  top: calc(72px + 1.5rem);
  bottom: 0;
  z-index: 1;
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}
.cart-container.showing {
  right: 0;
}
.cart-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}

.cart-section {
  flex: 1;
  gap: 1rem;
  overflow-y: auto;
  border-block: solid 2px var(--color-container-dark);
}

.cart-title {
  z-index: 5;
}

.cart-title,
.summary-title {
  letter-spacing: 0.5rem;
  padding: 1rem;
  text-transform: uppercase;
}

.summary-title {
  padding: 0;
  padding-top: 1rem;
  margin-bottom: 1rem;
}

.products-wrapper {
  display: flex;
  flex-flow: column;
  gap: 2rem;
  padding-block: 2rem;
}

.product-section {
  width: 100%;
  max-height: 24rem;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  padding-inline: 1rem;
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

.product-section.removed {
  max-height: 0;
}

.product-content {
  flex: 1;
  display: flex;
  gap: 1rem;
  position: relative;
}

.separator {
  width: 100%;
  height: 2px;
  background-color: var(--color-container-dark);
  opacity: 0.05;
}

.product-img {
  width: 16rem;
  aspect-ratio: 4/5;
  transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.product-img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-detail {
  width: 100%;
  display: flex;
  flex-flow: column;
}

.product-title {
  font-weight: 600;
}

.product-detail_bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.product-size {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.product-price {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.qty-counter {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.product-action {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
}

.product-close {
  width: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  display: grid;
  place-items: center;
  aspect-ratio: 1/1;
  text-align: center;
  border: solid 2px var(--clr-error-200);
  color: var(--clr-error-500);
  cursor: pointer;
  font-weight: 600;
  border-radius: 50%;
  transition: all 0.1s cubic-bezier(0.65, 0, 0.35, 1);
}

.product-close:hover {
  border: solid 2px var(--clr-error-400);
}
.product-close:active {
  color: var(--color-text-light);
  background-color: var(--clr-error-400);
  border-color: var(--clr-error-400);
}

.summary-section {
  width: 100%;
  padding-inline: 1rem;
  padding-bottom: 1rem;
  z-index: 5;
}

.summary-content {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-total {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-header,
.total-header {
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  opacity: 0.5;
}

.total-header {
  opacity: 1;
}

.summary-data {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  opacity: 0.8;
}

.buttonCheckout {
  margin-top: 2rem;
  width: 100%;
}

.empty-state {
  padding: 1rem;
}

@media screen and (max-width: 576px) {
  .product-content {
    flex: none;
  }
  .product-img {
    display: none;
  }
  .product-detail_bottom {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 360px) {
  .product-detail_bottom {
    align-items: flex-start;
    flex-flow: column;
  }

  .qty-counter {
    margin-top: 1rem;
  }
}
</style>

<style>
.transparent .cart-container {
  height: calc(100vh - (72px + 1.5rem + 3rem));
  top: calc(72px + 1.5rem + 3rem);
  border-top: solid 2px var(--color-container-dark);
  background-color: rgba(248, 249, 250, 0.8);
}
</style>
