import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toasted from "vue-toasted";
import VuePromiseBtn from "vue-promise-btn";

// not required. Styles for built-in spinner
import "vue-promise-btn/dist/vue-promise-btn.css";

Vue.config.productionTip = false;
Vue.use(VuePromiseBtn);
Vue.use(Toasted);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
