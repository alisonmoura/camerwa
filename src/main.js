import Vue from 'vue'
import App from './App.vue'
import AppMixin from './mixins/AppMixin'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

Vue.config.productionTip = false

Vue.mixin(AppMixin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
