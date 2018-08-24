import Vue from 'vue';
import './style.scss'

new Vue({
  el: "#app",
  components: {
  	'movie-list': {
  		template: `<div id="movie-list">
  					<div v-for="movie in movies">{{ movie.title }}</div>
  				   </div>`,
  		data(){ // OU data: function(){
  			return {
  				movies: [
  					{title: "Pulp Fiction"},
  					{title: "Home ALono"},
  					{title: "Austin Powers"},
  				]
  			}
  		}
  	},
  	'movie-filter': {
  		template: `<div id="movie-filter">
  					Movie Filter
  				   </div>`
  	}
  }
})