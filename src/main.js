
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Vue from  'vue'



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


