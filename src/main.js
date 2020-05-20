import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// process.env.NODE_ENV == "development" && import("@/mock/index.js");
import "./assets/css/element-#00785A/index.css";
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
