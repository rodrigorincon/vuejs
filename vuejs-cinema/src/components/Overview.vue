<template>

<div id="overview">
	<div class="main">
		<movie-list :time_filter="time_filter" :genre_filter="genre_filter" :movies="movies"></movie-list>
		<movie-filter></movie-filter>
	</div>
</div>

</template>

<script>
	import MovieList from './MovieList.vue'
	import MovieFilter from './MovieFilter.vue'

	import {EventBus} from '../util/event-bus';

	export default {
		props: ['movies'],
		data(){
			return{
				time_filter: [], 
				genre_filter: []
			}
		},
		components: {
			MovieList,
		    MovieFilter
		},
		methods: {
		    filter(type, checked, name){
		      if(type == "genre"){
		        if(checked){
		          this.genre_filter.push(name)
		        }else{
		          var index = this.genre_filter.indexOf(name)
		          if(index > -1){
		            this.genre_filter.splice(index, 1)
		          }
		        }
		      }
		      else if(type == "time"){
		        if(checked){
		          this.time_filter.push(name)
		        }else{
		          var index = this.time_filter.indexOf(name)
		          if(index > -1){
		            this.time_filter.splice(index, 1)
		          }
		        }
		      }
		    }
		},
  		created(){
			EventBus.$on('filter', this.filter)
		}
	}
</script>