<template>
	<div :class="{day: true, today: day.isSame( $moment(), 'day' ), past: day.isBefore( $moment(), 'day') || !day.isSame( $moment(), 'month') }" @click="captureClick">
		{{ day.format('D') }}
		<ul class="event-list">
			<li v-for="event in events">{{event}}</li>
		</ul>
	</div>
</template>

<script>
	import {EventBus} from '../states/globalBus.js'

	export default{
		props: ['day'],
		data(){
			return {
				events: []
			}
		},
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
					this.events.push(payload.description)
				}
			}
		},
		created(){
			EventBus.$on('addEvent', this.addEvent)
		}
	}
</script>