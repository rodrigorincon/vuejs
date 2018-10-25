<template>
	<div id="event-form" :class="{active}" :style="{top: top, left: left}">
		<h4>Criar Evento</h4>
		<p>{{ formatDate() }}</p>
		<div class="text">
			<input v-focus type="text" v-model="fieldText" placeholder="Nome do evento" @keyup.enter="create">
		</div>
		<div class="buttons">
			<button @click="create" :disabled="fieldText.length == 0">Criar</button>
		</div>
		<button id="close-button" @click="closeForm">&#10005</button>
	</div>
</template>

<script>
	import {EventBus} from '../states/globalBus.js'
	import {weekDayPT, monthPT} from '../utils/translateDates.js'

	export default{
		data(){
			return {
				top: 0, 
				left: 0,
				fieldText: '',
				active: false,
				eventDay: this.$moment()
			}
		},
		methods:{
			closeForm(){
				this.fieldText = ''
				this.active = false
			},
			openForm(position){
				this.eventDay = position.date
				this.left = position.x+"px"
				this.top = position.y+"px"
				this.active = true
			},
			create(){
				if(this.fieldText.length > 0){
					EventBus.$emit('addEvent', {description: this.fieldText, date: this.eventDay} )
					this.$axios.post('/events', {description: this.fieldText, date: this.eventDay})
					this.closeForm()
				}
			},
			formatDate(){
				var weekDay = weekDayPT(this.eventDay)
				var monthName = monthPT(this.eventDay)
				return weekDay+", "+this.eventDay.date()+" de "+monthName+" de "+this.eventDay.year()
				//return this.eventDay.format('dddd, MMM Do')
			}
		},
		created(){
			EventBus.$on('openForm', this.openForm)
			EventBus.$on('closeForm', this.closeForm)
		},
		directives: {
			focus:{
				update(el){
					el.focus()
				}
			}
		}
	}
</script>