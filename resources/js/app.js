require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

Vue.component('example-component', require('./components/exampleComponent.vue'));;

const router = new VueRouter({ mode: 'history'});
const app = new Vue(Vue.util.extends({router}).mount('#app'));

