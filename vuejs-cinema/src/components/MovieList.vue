<template>
	
	<div id="movie-list">
		<div v-if="filteredMovies.length">
			<movie-info v-for="movie in filteredMovies" :filme="movie.movie" :sessoes="filteredSessions(movie)" ></movie-info>
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
	import periodos from '../util/times'
	import moment from 'moment-timezone'

	export default {
		props: ['time_filter', 'genre_filter', 'movies'],
		data(){ // OU data: function()
			return {
			}
		},
		methods: {
			verifySessionTime(session){
				if( !moment(session.time).isSame( this.$root.filterDay, 'date')  ){
	      	  	  return false
	      	    }else if( this.time_filter[0] === periodos.AFTER_6PM ){
		          return moment(session.time).hour() >= 18;
		        }else if( this.time_filter[0] === periodos.BEFORE_6PM ){
		      	  return moment(session.time).hour() < 18;
		        }
		        return true;
			},
			filteredSessions(movie){
				var todaySessions = movie.sessions.filter(session => moment(session.time).isSame( this.$root.filterDay, 'date') )

				var myValidSessions = todaySessions
				if(this.time_filter.length === 1 ){
		          myValidSessions = todaySessions.filter(this.verifySessionTime )
		        }
				return myValidSessions
			},

			filterMovieByGenres(listMovies){
			  if(!this.genre_filter.length){
		        return listMovies
		      }else{
		        return listMovies.filter(movie =>
		          this.genre_filter.find(genero =>
		            movie.movie.Genre.split(",").map(genre => genre.trim() ).includes(genero)
		          )
		        )
		      }
			},
			filterMovieByTime(listMovies){
			  if(this.time_filter.length === 0 || this.time_filter.length === 2 ){
		        return listMovies
		      }else{
		      	return listMovies.filter(movie => movie.sessions.find(session => this.verifySessionTime(session) ))
		      }
			}
		},
	 	computed:{
		    filteredMovies(){
		      var tempFilterMovies = this.filterMovieByGenres(this.movies)
		      return this.filterMovieByTime(tempFilterMovies)
		    }
	  	},
		components: {
			MovieInfo
		}
	}
</script>