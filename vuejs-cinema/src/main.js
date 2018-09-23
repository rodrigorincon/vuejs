import Vue from 'vue';
import './style.scss'

import Overview from './components/Overview.vue'

import axios from 'axios'
import moment from 'moment-timezone'

new Vue({
  el: "#app",
  data(){
    return{
      movies_served: [],
      filterDay: moment().format('YYYY-MM-DD')
    }
  },
  components: {
    Overview
  },
  created(){
    axios.get("/api").then( (response)  =>  {
      this.movies_served = response.data
    })
  }
})