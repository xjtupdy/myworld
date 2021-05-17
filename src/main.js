import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import axios from "axios";
import VueAxios from "vue-axios";
import Particles from "particles.vue3";
import 'element-plus/lib/theme-chalk/index.css';
// import './js/test';
createApp(App).use(store).use(router).use(ElementPlus).use(VueAxios,axios).use(Particles).mount('#app')
