<template>
	<div>
		<div>{{formatDate}}</div>
		<button @click="dec">-</button>
		<button @click="inc">+</button>
	</div>
</template>

<script>
	export default{
		methods:{
			dec(){
				this.$store.commit("decreaseMonth")
			},
			inc(){
				this.$store.commit("increaseMonth")
			}
		},
		computed: {
			formatDate(){
				return this.$moment( `${this.$store.state.year}-${this.$store.state.month+1}-1`, 'YYYY-M-D' ).format('MMMM YYYY')
			}
		}
	}
</script>