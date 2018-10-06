<template>
	<div :class="{day: true, today: day.isSame( $moment(), 'day' ), past: day.isBefore( $moment(), 'day') }">
		{{ day.format('D') }}
	</div>
</template>

<script>
	export default{
		props: ['day']
	}
</script>