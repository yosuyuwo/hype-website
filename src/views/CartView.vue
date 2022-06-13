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
import InputText from "../components/atoms/InputText.vue";

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
        <h2 class="cart-title">MY BAG</h2>
        <div class="product-section" v-for="index in 5" :key="index">
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
              <div class="product-content">
                <h4 class="title-content">Name of the Products</h4>
                <p class="type-content">Shoes - Adidas</p>
                <div class="input-container">
                  <p class="section-header">Size</p>
                  <div class="variant-container">
                    <div class="size-variant">S</div>
                    <div class="size-variant">S</div>
                  </div>
                </div>
                <div class="input-container qty-container">
                  <p class="section-header">Quantity</p>
                  <div class="qty-counter">
                    <InputText
                      :withLabel="false"
                      name="qtyInput"
                      type="quantity"
                      v-model="quantityValue"
                    />
                  </div>
                </div>

                <h5 class="remove-link black-link">Remove</h5>
              </div>
              <h5 class="price-content">Rp. 3.100.000,00</h5>
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
  margin-top: calc(72px + 1.5rem);
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-inline: 3rem;
  padding-block: 2rem;
}

.cart-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.cart-section {
  flex: 1;
  min-width: 24rem;
  gap: 1.5rem;
}

.cart-title {
  font-weight: bold;
}

.product-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  padding-block: 1rem;
  padding-inline: 0.5rem;
}

.product-image {
  width: 24rem;
  aspect-ratio: 4/5;
  transition: all 0.3s ease-in-out;
}

.product-info {
  flex: 1;
  display: flex;
  gap: 1rem;
}

.product-content {
  flex: 1;
  display: flex;
  flex-flow: column;
}

.type-content {
  font-weight: 800;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

.input-container {
  padding-block: 1rem;
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.qty-container {
  gap: 0;
}

.section-header {
  text-transform: uppercase;
  font-weight: 800;
}

.variant-container {
  width: 100%;
  display: flex;
  gap: 1rem;
}

.size-variant {
  width: 3rem;
  display: grid;
  place-items: center;
  aspect-ratio: 1/1;
  text-align: center;
  border: solid 2px var(--clr-neutral-300);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.1s ease-in-out;
}

.size-variant:hover {
  border: solid 2px var(--clr-neutral-800);
}
.size-variant.active {
  color: var(--color-text-light);
  background-color: var(--color-container-dark);
  border-color: var(--color-container-dark);
}

.qty-counter {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}
.remove-link {
  width: max-content;
  cursor: pointer;
  text-decoration: underline;
  margin-top: auto;
}

.price-content {
  font-weight: 800;
}

.line-separate {
  width: 100%;
  border: 1px solid var(--clr-neutral-500);
}

.summary-section {
  position: sticky;
  width: 32rem;
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
