<template>
	
	<div> <!-- eh preciso colocar tudo (p e br) dentro de uma unica tag pai, o componente só pode ter 1 unica tag pai com tudo dentro dela -->
		<p>
			{{filme.movie.Title}}
		</p>
		<br>
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