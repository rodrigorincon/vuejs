<template>
	
	<div class="movie"> <!-- eh preciso colocar todo o html dentro de uma unica tag pai, o componente só pode ter 1 unica tag pai com tudo dentro dela -->
		<div class="movie-col-left">
			<img :src="filme.Poster">
		</div>

		<div class="movie-col-right">
			<div class="movie-title">
				<router-link :to="{ name: 'movie', params: {id: filme.imdbID} }">
					<h2>{{filme.Title}}</h2>
				</router-link>
				<span class="movie-rating">{{filme.Rated}}</span>
			</div>
			
			<slot></slot>
			
		</div>

	</div>

</template>

<script>
	export default {
		props: {
			filme: {
			  type: Object
			}
		}
	}
</script>