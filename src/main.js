//Importeren van alle scss bestanden
import '../scss/_component.scss';
import '../scss/_base.scss';
import '../scss/_main.scss';
import '../scss/_form.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router);
app.mount('#app');