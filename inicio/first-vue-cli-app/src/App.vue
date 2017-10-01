<template>
  <div id="app">
    <message>this is a generic message</message>
    <counter></counter>
  </div>
</template>

<script>
  import Message from "./components/message.vue"
  import Counter from "./components/counter.vue"

  export default {
    name: 'app',
    components: {
      Message,
      Counter
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
</style>
