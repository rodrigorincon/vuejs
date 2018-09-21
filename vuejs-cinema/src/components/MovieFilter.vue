<template>
  
  <div id="movie-filter">
    <h2>Filter results</h2>
    <div class="filter-group">
      <check-filter v-for="genre in generos" :title="genre" @filter="sendFilterToRoot"></check-filter>
    </div>
  </div>

</template>


<script>
  import generos from '../util/genres'
  import CheckFilter from './CheckFilter.vue'

  export default {
    data(){
      return{
        generos // usar a veriavel global como uma var local do componente
      }
    },
    components: {
      CheckFilter
    },
    methods:{
      sendFilterToRoot(type, checked, name){
        this.$emit('filter', type, checked, name)
      }
    }
  }
</script>