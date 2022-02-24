
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Vue from  'vue'
import vuex from 'vuex'

Vue.use(vuex)


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


