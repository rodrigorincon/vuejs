<template>
	
	<div id="movie-list">
		<movie-info v-for="movie in filteredMovies" :filme="movie" ></movie-info>
		<!-- o vue transforma o nome do arquivo em camel-case automaticamente em uma tag snake-case,
		entao eh preciso mudar a tag de movieinfo para movie-info. Para permanecer como movieinfo o nome do arquivo precisaria ser Movieinfo sem o I maiusculo  -->
   	</div>

</template>

<script>
	import generos from '../util/genres'
	import MovieInfo from './MovieInfo.vue'

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
			MovieInfo
		}
	}
</script>