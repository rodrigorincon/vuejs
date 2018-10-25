import Vue from 'vue'
import './style.scss'

import stateControl from './states/stateControl.js'

import moment from 'moment-timezone'
moment.tz.setDefault('UTC-3')
import axios from 'axios'
Object.defineProperty(Vue.prototype, "$moment", { get(){return this.$root.moment} })
Object.defineProperty(Vue.prototype, "$axios", { get(){return this.$root.axios} })

import App from './components/App.vue'

new Vue({
  el: '#app',
  data: {
  	moment,
  	axios
  },
  components: {
  	App
  },
  store: stateControl
});
