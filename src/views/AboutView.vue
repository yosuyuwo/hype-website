<template>
  <div class="about-container">
    <section class="hero-container">
      <LogoFull class="hero-logo" />
      <img src="/images/clawmarks.svg" alt="" class="claw-marks" />
      <div class="scroll-down" :class="scrollPos > 20 ? 'hide' : ''">
        <MouseIcon class="mouse-icon" />
        <p>Scroll down</p>
      </div>
    </section>
    <section class="definition-container">
      <div class="definition-content">
        <h1 class="title-text">WHAT HYPE IS</h1>
        <h2 class="content-text">
          HYPE is the beast that delivers curated apparels from high-end brands
        </h2>
      </div>
      <div class="definition-logos">
        <div class="brand-logos">
          <img src="/logos/adidas.svg" alt="adidas" />
          <img src="/logos/bape.svg" alt="bape" />
          <img src="/logos/givenchy.svg" alt="givenchy" />
          <img src="/logos/jordan.svg" alt="jordan" />
          <img src="/logos/nike.svg" alt="nike" />
          <img src="/logos/off-white.svg" alt="off-white" />
          <img src="/logos/stussy.svg" alt="stussy" />
        </div>
      </div>
    </section>
    <section class="location-container">
      <div class="world-map">
        <WorldMap class="world-svg" />
      </div>
      <div class="location-content">
        <h3 class="overline-text">LOCATION</h3>
        <h1 class="title-text">9 COUNTRIES, 147 STORES</h1>
        <h2 class="content-text">
          From the past 2 years, we managed to broaden our road so we can easily
          deliver the apparels to you
        </h2>
      </div>
    </section>
    <section class="mission-container">
      <div class="mission-content">
        <h3 class="overline-text">MISSION</h3>
        <h1 class="title-text">FIND THE BEST</h1>
        <h2 class="content-text">
          We only offer best of the best wear we could. Before giving it to you,
          we carefully checked its durability and make sure that it’s
          defect-free.
        </h2>
      </div>
      <img src="/images/boxes.png" alt="boxes" class="boxes-image" />
    </section>
    <section class="vision-container">
      <div class="vision-content">
        <h3 class="overline-text">VISION</h3>
        <h1 class="title-text">NEW GENERATION</h1>
        <h2 class="content-text">
          We wanted to provide high-curated product that complements each other.
          You can buy and use every product at the same time and still find it
          correspond with each other. It is a fit.
        </h2>
      </div>
      <div class="vision-image-container">
        <img src="/images/box.png" alt="box" class="vision-image" />
      </div>
    </section>
    <section class="contact-container">
      <img src="/images/phone.png" alt="box" class="contact-image" />
      <div class="contact-content">
        <h3 class="overline-text">CONTACT US</h3>
        <h1 class="title-text">ANYTHING, JUST ANYTHING</h1>
        <h2 class="content-text">
          Click the button below if you have any question or problem regarding
          our product.
        </h2>
      </div>
      <div class="contact-button">
        <InputButton
          :text="`WHATSAPP`"
          @click="
            windowInstance
              .open('https://www.youtube.com/watch?v=j8PxqgliIno', '_blank')
              .focus()
          "
          class="button"
        />
        <InputButton
          :text="`EMAIL`"
          @click="
            windowInstance.open('https://www.istts.ac.id/', '_blank').focus()
          "
          class="button"
        />
      </div>
    </section>
  </div>
</template>

<script>
import LogoFull from "../components/icons/LogoFull.vue";
import MouseIcon from "../components/icons/MouseIcon.vue";
import WorldMap from "../components/icons/WorldMap.vue";
import InputButton from "../components/atoms/InputButton.vue";
export default {
  components: { LogoFull, MouseIcon, WorldMap, InputButton },
  props: {
    scrollPos: {
      type: Number,
      default: 0,
    },
    screenWidth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      windowInstance: null,
    };
  },
  mounted() {
    this.windowInstance = window;
    document.querySelector(".content-container").style.marginBottom = 0;
  },
};
</script>

<style scoped>
.overline-text {
  font-size: var(--fontSize-h5);
  font-weight: 900;
  letter-spacing: 0.5rem;
  opacity: 0.3;
}
.title-text {
  font-weight: 900;
  font-size: var(--fontSize-h2);
}

.content-text {
  width: 32ch;
  font-size: var(--fontSize-h5);
  margin-top: 1rem;
}

section {
  padding-inline: 3rem;
  padding-block: 24rem;
}

.about-container {
  width: 100%;
  margin-top: calc(1.5rem + 72px);
  overflow-x: hidden;
}
.hero-container {
  width: 100%;
  height: calc(100vh - (1.5rem + 72px));
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--color-container-dark);
  overflow: hidden;
  color: var(--color-text-light);
  padding-block: 2rem;
}

.hero-logo {
  width: clamp(16rem, 40%, 32rem);
}

.claw-marks {
  width: 40%;
  position: absolute;
  right: -5rem;
  bottom: -20%;
  opacity: 0.5;
}

.scroll-down {
  display: flex;
  flex-flow: column;
  align-items: center;
  animation: floating 3s cubic-bezier(0.65, 0, 0.35, 1) alternate infinite;
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  transition: opacity 1s cubic-bezier(0.65, 0, 0.35, 1);
  transition-delay: 1s;
  text-align: center;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.5rem);
  }
  100% {
    transform: translateY(0.5rem);
  }
}

.scroll-down.hide {
  opacity: 0;
}

.mouse-icon {
  height: 2rem;
}

.definition-container {
  display: flex;
  align-items: center;
}

.definition-content {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
}

.definition-logos {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-logos {
  width: 100%;
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.brand-logos > img {
  flex: 0 0 clamp(8rem, 25%, 16rem);
  max-width: clamp(8rem, 25%, 16rem);
  max-height: clamp(8rem, 25%, 16rem);
  padding: 1rem;
}

.location-container {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-inline: 0;
}

.world-map {
  width: 100%;
  display: grid;
  place-items: center;
  overflow-x: hidden;
}

.world-svg {
  width: calc(100% + 24rem);
}

.location-content {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
}

.location-content .content-text {
  width: 48ch;
}

.mission-container {
  display: flex;
  height: 48rem;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--color-container-dark);
  color: var(--color-text-light);
  position: relative;
}

.mission-content {
  text-align: right;
  display: flex;
  align-items: flex-end;
  flex-flow: column;
}

.boxes-image {
  width: 140%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vision-container {
  display: flex;
  align-items: center;
  padding-right: 0;
  position: relative;
}

.vision-image-container {
  flex: 1;
  overflow-x: hidden;
}

.vision-image {
  width: clamp(12rem, 100%, 48rem);
  transform: translateX(60%);
}

.contact-container {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 8rem;
  background-color: var(--clr-neutral-300);
  position: relative;
}

.contact-content {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
}

.contact-image {
  width: 40%;
}

.contact-button {
  width: 60%;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-button > div {
  flex: 1;
}

.button {
  z-index: 5;
}

@media screen and (max-width: 1200px) {
  section {
    padding-block: 8rem;
  }

  .vision-image {
    width: clamp(12rem, 100%, 48rem);
    transform: translateX(20%);
  }
}

@media screen and (max-width: 992px) {
  .about-container {
    margin-top: 0;
  }
  .definition-container {
    flex-flow: column;
    gap: 2rem;
  }

  .definition-content {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  section {
    padding-inline: 1rem;
  }

  .content-text {
    width: 80%;
  }

  .boxes-image {
    width: 200%;
    top: 20%;
  }

  .mission-container {
    align-items: flex-end;
  }

  .vision-container {
    flex-flow: column;
  }

  .vision-image {
    width: clamp(12rem, 100%, 48rem);
    /* transform: none;  */
  }

  .contact-image {
    width: 60%;
  }

  .contact-button {
    width: 100%;
  }
}

@media screen and (max-width: 576px) {
  .claw-marks {
    width: 80%;
  }
  .scroll-down {
    left: auto;
  }

  .world-svg {
    width: calc(100% + 8rem);
  }

  .location-content {
    width: 100%;
  }

  .location-content .content-text {
    width: 100%;
  }
  .content-text {
    width: 100%;
  }

  .vision-container {
    gap: 2rem;
  }

  .brand-logos > img {
    flex: 0 0 8rem;
    max-width: 8rem;
    max-height: 8rem;
    padding: 1rem;
  }
  .boxes-image {
    width: 400%;
  }

  .contact-image {
    width: 80%;
  }
}
</style>
