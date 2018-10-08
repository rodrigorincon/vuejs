import Vue from 'vue'
import './style.scss'

import stateControl from './states/stateControl.js'

import moment from 'moment-timezone'
moment.tz.setDefault('UTC-3')
Object.defineProperty(Vue.prototype, "$moment", { get(){return this.$root.moment} })

import App from './components/App.vue'

new Vue({
  el: '#app',
  data: {
  	moment
  },
  components: {
  	App
  },
  store: stateControl
});
