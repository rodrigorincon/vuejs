import Vue from 'vue';
import './style.scss'


import generos from './util/genres'

import MovieList from './components/MovieList.vue'

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
  	'movie-filter': {
  		data(){
  			return{
  				generos // usar a veriavel global como uma var local do componente
  			}
  		},
  		template: `<div id="movie-filter">
  					<h2>Filter results</h2>
  					<div class="filter-group">
  						<checkfilter v-for="genre in generos" :title="genre" @filter="sendFilterToRoot"></checkfilter>
  					</div>
  				   </div>`,
      components: {
        'checkfilter': {
          props: ["title"],
          data(){
            return{
              checked: false
            }
          },
          template: `<div :class="{'check-filter' : true, active : checked }" @click="clickFilter"> 
                <span class="checkbox"></span>
                <span class="check-filter-title">
                  {{title}}
                </span>
                 </div>`,
          methods: {
            clickFilter(){
              this.checked = !this.checked
              this.$emit('filter', 'genre', this.checked, this.title)
            }
          }
        }
      },
      methods:{
        sendFilterToRoot(type, checked, name){
          this.$emit('filter', type, checked, name)
        }
      }
  	}
  }
})