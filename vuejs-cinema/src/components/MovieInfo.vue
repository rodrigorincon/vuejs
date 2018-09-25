<template>
	
	<div class="movie"> <!-- eh preciso colocar todo o html dentro de uma unica tag pai, o componente só pode ter 1 unica tag pai com tudo dentro dela -->
		<div class="movie-col-left">
			<img :src="filme.Poster">
		</div>

		<div class="movie-col-right">
			<div class="movie-title">
				<router-link :to="{ name: 'movie'}">
					<h2>{{filme.Title}}</h2>
				</router-link>
				<span class="movie-rating">{{filme.Rated}}</span>
			</div>
			<div class="movie-sessions">
				<div v-for="session in sessoes" class="session-time-wrapper">
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
			sessoes: {
			  type: Array
			}
		},
		methods: {
			formatSessionTime(timeRaw){
				return moment(timeRaw).format('HH:mm')
			}
		}
	}
</script>