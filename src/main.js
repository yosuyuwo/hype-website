import { createApp } from "vue";
import VueLazyLoad from "vue3-lazyload";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueLazyLoad, {
  // options...
});

app.use(router);

app.mount("#app");
