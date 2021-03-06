import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/scss/libs/_normalize.scss";
import "@/assets/scss/_global.scss";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
