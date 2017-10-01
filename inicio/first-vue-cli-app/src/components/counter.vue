<template>
  <div>
    <h2>The count is: {{count}}</h2>
	<button @click="count+=1">Incremente</button>
  </div>
</template>

<script>
  export default {
  	data(){
  		return {
  			count: 0
  		}
  	}
  }
</script>

<style>
</style>
