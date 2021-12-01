import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import router from "./router/router";
import "./assets/css/comm.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as filter from "./config/filter";
import axios from "./config/ajax_axios";
import protorype from "./config/protorype";
import animate from 'animate.css';
//新增
import store from './store'; //引入 vuex
import http from '@/api/config'; //axios
// import './mock' ;  // mockjs
import qs from 'qs';
//import Container from 'element-ui';
//import Aside from 'element-ui';

//Vue.use(Container);
//Vue.use(Aside);

Vue.prototype.$qs = qs;

Vue.prototype.$http = http;
Vue.prototype.axios = axios;

Vue.use(Vuex);
Vue.use(ElementUI);

var vm = new Vue({
	el: '#app',
	router,
	store,
	axios,
	filter,
	template: '<App/>',
	components: {
		App
	}

});


Vue.config.productionTip = false;
