import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";


const app = createApp(App)

app.config.isCustomElement = tag => tag.startsWith('smart-');
app.mount('#app')
app.use(store)
