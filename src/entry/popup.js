import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from '../view/BaseView.vue'
import "../style.css";
import router from "../router/index.js";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
