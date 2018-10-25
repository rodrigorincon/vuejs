<template>
	<div :class="{day: true, today: day.isSame( $moment(), 'day' ), past: day.isBefore( $moment(), 'day') || !day.isSame( $moment(), 'month') }" @click="captureClick">
		{{ day.format('D') }}
		<ul class="event-list">
			<li v-for="event in events">{{event.description}}</li>
		</ul>
	</div>
</template>

<script>
	import {EventBus} from '../states/globalBus.js'

	export default{
		props: ['day', 'events'],
		methods: {
			captureClick(event){
				if( !this.day.isBefore( this.$moment(), 'day') ){
					EventBus.$emit('openForm', {x: event.clientX, y: event.clientY, date: this.day } )
				}else{
					EventBus.$emit('closeForm' )
				}
			},
			addEvent(payload){
				if( payload.date.isSame(this.day, 'day') ){
					//this.events.push(payload) //NAO ATUALIZA A TELA MSM COM SPLICE, POIS PROPS Ñ DEVERIAM SER INTERNAMENTE, MAS SIM SER ALTERADO NO PAI E ENTAO ATUALIZADO AUTOMATICAMENTE NO FILHO
					
					//this.events = this.events.concat([payload]) // ATUALIZA A TELA MAS DA WARNING DE Q O PROP INTERNO E O VALOR NO PAI ESTAO DIFERENTES

					this.$emit('newEvent', payload)
				}
			}
		},
		created(){
			EventBus.$on('addEvent', this.addEvent)
		}
	}
</script>