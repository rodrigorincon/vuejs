import Vue from 'vue';
import './style.scss'

import axios from 'axios'
import moment from 'moment-timezone'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes.js'
import {EventBus} from './util/event-bus';

new Vue({
  el: "#app",
  data(){
    return{
      movies_served: [],
      filterDay: moment()
    }
  },
  router: new VueRouter({routes}),
  created(){
    axios.get("/api").then( (response)  =>  {
      this.movies_served = response.data
    })
    EventBus.$on('filter-day', this.changeDay)
  },
  methods:{
    changeDay(day){
      this.filterDay = day
    }
  }
})