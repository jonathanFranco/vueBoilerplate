import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);
app.use(PrimeVue);

app.use(router);
app.mount("#app");
