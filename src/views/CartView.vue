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
        <div class="product-section" v-for="index in 3" :key="index">
          <div class="product-detail"></div>
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
  top: 0.5rem;
}

.product-section {
  width: 100%;
  display: grid;
  align-items: start;
}

.product-detail {
  width: 100%;
  height: 11rem;
  padding-block: 1rem;
  padding-inline: 0.5rem;
}

.line-separate {
  width: 100%;
  height: 1px;
  border: 0.5px solid var(--clr-neutral-1000);
}

.summary-section {
  flex: 1;
  position: sticky;
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

.line-separate-sub {
  margin-top: 1rem;
  width: 78%;
}

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
