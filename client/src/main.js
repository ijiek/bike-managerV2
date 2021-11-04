/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import BreathingColors from 'vue-breathing-colors'

// Vue.use(vuetify, BreathingColors, {
//   iconfont: 'mdi'
// })
Vue.use(BreathingColors, {
  iconfont: 'mdi'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
})

// src/main.js
