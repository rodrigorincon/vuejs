<template>
	<div id="day-select">
		<ul class="days">
			<li :class="{day: true, active: isSelected(day)}" v-for="day in days" @click="filterByDay(day)"> {{ formatDay(day) }} </li>
		</ul>
	</div>

</template>

<script>
	import moment from 'moment-timezone'
	import {EventBus} from '../util/event-bus';

	export default{
		data(){
			return {
				selected: this.$root.filterDay,
				days: []
			}
		},
		created(){
			this.days = [0, 1, 2, 3, 4, 5, 6].map(num => moment().add(num, "days") )
		},
		methods:{
			formatDay(day){
				if(day.isSame( moment(), 'day' ) ){
					return 'Hoje'
				}
				return day.format('DD/MM')
			},
			isSelected(day){
				return day.isSame(this.selected, 'day')
			},
			filterByDay(day){
				this.selected = day
				EventBus.$emit('filter-day', this.selected )
			}
		}
	}
</script>