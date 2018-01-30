import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

Vue.http = Vue.prototype.$http = axios

// import VueWebsocket from "vue-websocket";
// Vue.use(VueWebsocket, "ws://localhost:8181");


import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
// Vue.use(VueSocketio, socketio('http://10.25.26.190:8081'), store);
// Vue.use(VueSocketio, socketio('http://10.25.26.231:8088/trade/user'), store);

Vue.use(VueSocketio, socketio('http://10.25.26.190:8081/trade/user'), store);


// Vue.use(VueSocketio, socketio('http://127.0.0.1:11111'), store);

import iView from 'iview';
import '!style-loader!css-loader!iview/dist/styles/iview.css';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css'
import '!style-loader!css-loader!font-awesome/css/font-awesome.css'

// import '!style-loader!css-loader!@/assets/AdminLTE/dist/css/skins/_all-skins.css'
// import '!style-loader!css-loader!@/assets/AdminLTE/dist/css/AdminLTE.css'
Vue.use(iView);
import '!vue-style-loader!css-loader!sass-loader!@/scss/main2.scss'

// import '!vue-style-loader!css-loader!sass-loader!@/scss/skin-black.scss'

import $ from '@/js/jquery-vendor.js'
import 'bootstrap'
// import 'jquery-slimscroll'
import app from '@/js/app.js'

// import { Button, Table,Switch } from 'iview';
// Vue.component('Button', Button);
// Vue.component('Table', Table);
// Vue.component('Switch', Switch);

if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
  document.body.classList.add('y-plus');
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
