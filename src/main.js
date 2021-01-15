import Vue from 'vue'
import App from './App.vue'
/* import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app') */

import router from './router'

new Vue({
  router, // Add this line 
  render: h => h(App)
}).$mount('#app')

