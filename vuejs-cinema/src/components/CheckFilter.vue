<template>

	<div :class="{'check-filter' : true, active : checked }" @click="clickFilter"> 
		<span class="checkbox"></span>
		<span class="check-filter-title">
			{{title}}
		</span>
	</div>

</template>

<script>
  import {EventBus} from '../util/event-bus';
  
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
            EventBus.$emit('filter', this.category, this.checked, this.title)
          }
        }
	}
</script>