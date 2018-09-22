<template>
	
	<div id="movie-list">
		<div v-if="filteredMovies.length">
			<movie-info v-for="movie in filteredMovies" :filme="movie" ></movie-info>
			<!-- o vue transforma o nome do arquivo em camel-case automaticamente em uma tag snake-case,
			entao eh preciso mudar a tag de movieinfo para movie-info. Para permanecer como movieinfo o nome do arquivo precisaria ser Movieinfo sem o I maiusculo  -->
		</div>
		<div v-else-if="movies.length" class="no-results">
			Nenhum resultado.
		</div>
		<div v-else> 
			<!-- melhor por o v-else q um v-cloak na div pai pq com v-cloak nao mostra nada ate carregar tudo -->
			Carregando...
		</div>
   	</div>

</template>

<script>
	import generos from '../util/genres'
	import MovieInfo from './MovieInfo.vue'

	export default {
		props: ['time_filter', 'genre_filter', 'movies'],
		data(){ // OU data: function()
			return {
			}
		},
	 	computed:{
		    filteredMovies(){
		      if(!this.genre_filter.length){
		        return this.movies
		      }else{
		        return this.movies.filter(movie => this.genre_filter.find(genero => movie.movie.Genre.split(",").map(genre => genre.trim() ).includes(genero) ) )
		      }
		    }
	  	},
		components: {
			MovieInfo
		}
	}
</script>