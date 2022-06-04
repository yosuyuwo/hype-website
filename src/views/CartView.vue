<script setup>
document.title = "Cart - Hype";
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
import InputButton from "../components/atoms/InputButton.vue";

export default {
  data() {
    return {
      detailProd: "",
    };
  },
};
</script>

<template>
  <!--  -->
  <div class="container-cart">
    <div class="cart-wrapper">
      <div class="cart-section">
        <h5 class="cart-title">Cart</h5>
        <div class="product-section" v-for="index in 1" :key="index">
          <div class="product-wrapper">
            <img
              class="product-image"
              v-lazy="{
                src: '/images/products/default.jpg',
                loading: '/images/products/default.jpg',
                error: '/images/products/default.jpg',
              }"
              alt="Product"
              loading="lazy"
            />
            <div class="product-info">
              <div class="title-price-wrapper">
                <p class="title-content">Name of the Products</p>
                <p class="price-content">Rp. 3.100.000,00</p>
              </div>
              <div class="another-title-wrapper">
                <p class="type-content">Type</p>
                <p class="color-content">Colour</p>
                <div class="size-qty-container">
                  <p class="size-content">Size</p>
                  <input type="text" class="inp" />
                  <p class="qty-content">Quantity</p>
                  <input type="text" class="inp" />
                </div>
              </div>
              <h5 class="remove-link">Remove</h5>
            </div>
          </div>
          <hr class="line-separate" />
        </div>
      </div>
      <div class="summary-section">
        <h5 class="summary-title">Summary</h5>
        <div class="sub-section">
          <p class="sub-item">Subtotal</p>
          <p class="sub-item">Rp 3,748,000.00</p>
          <p class="sub-item">Estimated Delivery</p>
          <p class="sub-item">Rp 100,000.00</p>
          <p class="sub-item">Estimated Taxes</p>
          <p class="sub-item">Rp 300,000.00</p>
        </div>
        <!-- <hr class="line-separate-sub" /> -->
        <div class="sub-section-total">
          <p class="total-item">Total</p>
          <p class="total-item">Rp 4,148,000.00</p>
        </div>
        <!-- <hr class="line-separate-sub" /> -->
        <InputButton class="buttonCheckout" text="CHECKOUT" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-cart {
  width: 100%;
  margin-top: calc(90px + 1rem);
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.cart-wrapper {
  width: clamp(60rem, calc(100% - 6rem), 72rem);
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.cart-section {
  width: 62%;
  min-width: 24rem;
  gap: 1.5rem;
}

.cart-title {
  font-weight: bold;
}

.product-wrapper {
  width: clamp(36rem, calc(46rem - 2rem), 46rem);
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  padding-block: 1rem;
  padding-inline: 0.5rem;
}

.product-image {
  width: 14.9rem;
  aspect-ratio: 1/1;
  transition: all 0.3s ease-in-out;
}

.product-info {
  flex: 1;
  gap: 1rem;
}

.title-price-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.another-title-wrapper {
  width: 100%;
  display: flex;
  flex-flow: column;
}

.size-qty-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 0.2rem;
}

.inp {
  width: 2rem;
}
.remove-link {
  cursor: pointer;
  text-decoration: underline;
  margin-top: 6rem;
}

.remove-link:hover {
  color: var(--clr-neutral-600);
}

.line-separate {
  width: 100%;
  border: 0.5px solid var(--clr-neutral-1000);
}

.summary-section {
  position: sticky;
  flex: 1;
  height: max-content;
  top: 5.5rem;
}

.summary-title {
  font-weight: bold;
}

.sub-section,
.sub-section-total {
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 1rem;
}

.total-item {
  font-weight: bold;
}
/*
.line-separate-sub {
  margin-top: 1rem;
  width: 78%;
} */

.buttonCheckout {
  margin-top: 3rem;
  width: 100%;
}

@media screen and (max-width: 992px) {
  .cart-wrapper {
    width: 100%;
    flex-flow: column;
    align-items: center;
    padding-inline: 1rem;
  }
  .cart-section {
    width: 100%;
  }
  .summary-section {
    width: 100%;
  }
}
</style>
