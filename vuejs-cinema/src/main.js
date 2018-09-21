import Vue from 'vue';
import './style.scss'

import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'

new Vue({
  el: "#app",
  data(){
    return{
      time_filter_selected: [],
      genre_filter_selected: []
    }
  },
  methods: {
    filter(type, checked, name){
      if(type == "genre"){
        if(checked){
          this.genre_filter_selected.push(name)
        }else{
          var index = this.genre_filter_selected.indexOf(name)
          if(index > -1){
            this.genre_filter_selected.splice(index, 1)
          }
        }
      }
    }
  },
  components: {
  	MovieList,
    MovieFilter
  }
})