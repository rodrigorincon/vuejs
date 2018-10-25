<template>
	<div id="event-form" :class="{active}" :style="{top: top, left: left}">
		<h4>Criar Evento</h4>
		<div class="text">
			<input type="text" v-model="fieldText" placeholder="Nome do evento">
		</div>
		<div class="buttons">
			<button @click="create" :disabled="fieldText.length == 0">Criar</button>
		</div>
		<button id="close-button" @click="closeForm">&#10005</button>
	</div>
</template>

<script>
	import {EventBus} from '../states/globalBus.js'

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
				EventBus.$emit('addEvent', {description: this.fieldText, date: this.eventDay} )
				this.closeForm()
			}
		},
		created(){
			EventBus.$on('openForm', this.openForm)
			EventBus.$on('closeForm', this.closeForm)
		}
	}
</script>