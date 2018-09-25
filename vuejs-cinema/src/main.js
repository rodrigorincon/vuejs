import Vue from 'vue';
import './style.scss'

import axios from 'axios'
import moment from 'moment-timezone'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes.js'

new Vue({
  el: "#app",
  data(){
    return{
      movies_served: [],
      filterDay: moment().format('YYYY-MM-DD')
    }
  },
  router: new VueRouter({routes}),
  created(){
    axios.get("/api").then( (response)  =>  {
      this.movies_served = response.data
    })
  }
})