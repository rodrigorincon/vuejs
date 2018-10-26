<template>
	<div>
		<div id="header">
			<div>
				<img src="../assets/logo.png">
				<h1>Calendário VUE</h1>
			</div>
			<div>
				<current-month></current-month>
			</div>
		</div>
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
				<calendar-day v-for="day in week" :day="day" :events="eventsByDate(day)" @newEvent="updateEvents"></calendar-day>
			</div>
		</div>
		<event-form></event-form>
	</div>
</template>

<script>
	import CalendarDay from './CalendarDay.vue'
	import CurrentMonth from './CurrentMonth.vue'
	import EventForm from './EventForm.vue'

	export default{
	  data() {
	    return{
	    	currentDay: this.$moment(),
	    	events: []
	  	}
	  },
	  methods:{
	  	eventsByDate(day){
	  		return this.events.filter(event => {
	  			return day.isSame(event.date, 'day')
	  		})
	  	},
	  	updateEvents(event){
	  		this.events.push(event)
	  	}
	  },
	  computed:{
	  	month(){
	  		return this.$store.state.month
	  	},
	  	year(){
	  		return this.$store.state.year
	  	},
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
	  created(){
	  	this.$axios.get('/events').then(response =>{
	  		if(response.data.length > 0){
	  			this.events = response.data
	  		}
	  	})
	  },
	  components:{
	  	CalendarDay,
	  	CurrentMonth,
	  	EventForm
	  }
	}
</script>