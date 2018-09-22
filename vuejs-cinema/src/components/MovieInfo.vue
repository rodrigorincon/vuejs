<template>
	
	<div class="movie"> <!-- eh preciso colocar todo o html dentro de uma unica tag pai, o componente só pode ter 1 unica tag pai com tudo dentro dela -->
		<div class="movie-col-left">
			<img :src="filme.movie.Poster">
		</div>

		<div class="movie-col-right">
			<div class="movie-title">
				<h2>{{filme.movie.Title}}</h2>
				<span class="movie-rating">{{filme.movie.Rated}}</span>
			</div>
			<div class="movie-sessions">
				<div v-for="session in filterSessions(filme.sessions)" class="session-time-wrapper">
					<div class="session-time">{{ formatSessionTime(session.time) }}</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	import moment from 'moment-timezone'

	export default {
		props: {
			filme: {
			  type: Object
			}, 
			filterDay: {
				type: String,
				default: moment().format('YYYY-MM-DD')
			}
		},
		methods: {
			formatSessionTime(timeRaw){
				return moment(timeRaw).format('HH:mm')
			},
			filterSessions(sessions){
				return sessions.filter(session =>{
					return moment(session.time).isSame( this.filterDay, 'date')
				})
			}
		}
	}
</script>