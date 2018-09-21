<template>
	
	<div id="movie-list">
		<movieinfo v-for="movie in filteredMovies" :filme="movie" ></movieinfo>
   	</div>

</template>

<script>
	import generos from '../util/genres'

	export default {
		props: ['time_filter', 'genre_filter'],
		data(){ // OU data: function()
			return {
				movies: [
					{title: "Pulp Fiction", genre: generos.CRIME},
					{title: "Home ALono", genre: generos.COMEDY},
					{title: "Austin Powers", genre: generos.COMEDY}
				]
			}
		},
	 	computed:{
		    filteredMovies(){
		      if(!this.genre_filter.length){
		        return this.movies
		      }else{
		        return this.movies.filter(movie => this.genre_filter.find(genero => movie.genre === genero) )
		      }
		    }
	  	},
		components: {
			'movieinfo': {
				props: {
					filme: {
					  type: Object
					}
				},
				template: `<p>
							{{filme.title}}
						   </p><br>`
			}
		}
	}
</script>