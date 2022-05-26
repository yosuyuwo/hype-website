<template>
  <div class="shipping-container">
    <img
      class="shipping-image"
      src="/images/free-shipping.png"
      alt="Shipping Image"
    />
    <div class="shipping-detail">
      <div class="shipping-content">
        <h3 class="shipping-title">FREE SHIPPING</h3>
        <h5 class="shipping-subtitle">TO CELEBRATE OUR DEBUT</h5>
      </div>
      <div class="shipping-time">
        <p>available until</p>
        <h4 class="shipping-timestamp">17.06.2022</h4>
      </div>
    </div>
    <h1 class="background-text">FREE SHIPPING</h1>
  </div>
</template>

<style scoped>
.shipping-container {
  width: 100%;
  background-color: var(--color-container-dark);
  padding-inline: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-light);
  position: relative;
  overflow: hidden;
}

.shipping-image {
  height: 40rem;
}

.shipping-detail {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.shipping-content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.shipping-title {
  font-weight: 800;
  text-align: center;
}

.shipping-subtitle {
  text-align: center;
}

.shipping-time {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.background-text {
  position: absolute;
  width: max-content;
  top: 25%;
  left: 55%;
  opacity: 0.1;
  font-weight: 900;
}

@media screen and (max-width: 1200px) {
  .shipping-container {
    flex-flow: column;
    gap: 4rem;
    padding-inline: 1rem;
    padding-bottom: 2rem;
  }

  .shipping-image {
    height: 20rem;
  }

  .background-text {
    top: auto;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
