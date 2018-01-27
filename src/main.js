// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueMoment from 'vue-moment'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueFire from 'vuefire'
import firebase from 'firebase'

import App from './App'
import router from './router'

import Auton from '@/components/Auton.vue'
import Teleop from '@/components/Teleop.vue'
import NewMatch from '@/components/NewMatch.vue'
import PlusMinus from '@/components/PlusMinus.vue'
import DayPicker from '@/components/DayPicker.vue'

Vue.use(Vuetify, Vuex, VueMoment, VueFire, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})
Vue.config.productionTip = false

Vue.component('v-pm', PlusMinus)
Vue.component('v-dp', DayPicker)
Vue.component('v-newmatch', NewMatch)
Vue.component('v-auton', Auton)
Vue.component('v-teleop', Teleop)

/* eslint-disable no-new */
var config = {
  apiKey: 'AIzaSyBuuleWypq5upzNoQvm5op89qtebU6L3Jw',
  authDomain: 'scout-2018.firebaseapp.com',
  databaseURL: 'https://scout-2018.firebaseio.com',
  projectId: 'scout-2018',
  storageBucket: 'scout-2018.appspot.com',
  messagingSenderId: '268321242104'
}
firebase.initializeApp(config)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
