<template>
	<div>
		<div id="day-bar">
			<div>DOM</div>
			<div>SEG</div>
			<div>TER</div>
			<div>QUA</div>
			<div>QUI</div>
			<div>SEX</div>
			<div>SAB</div>
		</div>
		<div id="calendar">
			<div v-for="week in weeks" class="calendar-week">
				<calendar-day v-for="day in week" :day="day"></calendar-day>
			</div>
		</div>
	</div>
</template>

<script>
	import CalendarDay from './CalendarDay.vue'

	export default{
	  data() {
	    return{
	    	currentDay: this.$moment(),
	    	month: this.$moment().month(),
	    	year: this.$moment().year()
	  	}
	  },
	  computed:{
	  	days(){
	  		var days = []
	  		var dayToAnalyze = this.$moment( new Date(this.year, this.month, 1) ) //first day of current month

	  		const SUNDAY = 0
	  		const SATURDAY = 6

	  		while(dayToAnalyze.day() !== SUNDAY){
	  			dayToAnalyze.subtract(1, 'days')
	  		}


	  		do{
	  			days.push(dayToAnalyze)
	  			dayToAnalyze = this.$moment(dayToAnalyze).add(1, 'days')
	  		}while(dayToAnalyze.month() === this.month || dayToAnalyze.day() !== SUNDAY )

	  		return days
	  	},
	  	weeks(){
	  		var weeks = []
	  		var week = []

	  		for(var day of this.days){
		  		week.push(day)
		  		if(week.length == 7){
		  		  	weeks.push(week)
		  		  	week = []
		  		}
	  		}
	  		return weeks
	  	}
	  },
	  components:{
	  	CalendarDay
	  }
	}
</script>