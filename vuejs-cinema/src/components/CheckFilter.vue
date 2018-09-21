<template>

	<div :class="{'check-filter' : true, active : checked }" @click="clickFilter"> 
		<span class="checkbox"></span>
		<span class="check-filter-title">
			{{title}}
		</span>
	</div>

</template>

<script>
	export default {
		props: ["title"],
        data(){
          return{
            checked: false
          }
        },
        methods: {
          clickFilter(){
            this.checked = !this.checked
            this.$emit('filter', 'genre', this.checked, this.title)
          }
        }
	}
</script>