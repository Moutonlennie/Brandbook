// src/main.js
import '../scss/_component.scss';
import '../scss/_base.scss';
import '../scss/_main.scss';
import '../scss/_form.scss';
import '../scss/_zijnavItems.scss';
import '../scss/_mixins.scss';
import "../scss/_login.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
