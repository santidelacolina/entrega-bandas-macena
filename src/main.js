import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import store from './store/store.js'

Vue.config.productionTip = false;

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
