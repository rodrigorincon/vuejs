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
		props: ["title", "category"],
        data(){
          return{
            checked: false
          }
        },
        methods: {
          clickFilter(){
            this.checked = !this.checked
            this.$emit('filter', this.category, this.checked, this.title)
          }
        }
	}
</script>