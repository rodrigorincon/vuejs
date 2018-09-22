<template>
  
  <div id="movie-filter">
    <h2>Filtros</h2>
    <h3>Por horário</h3>
    <div class="filter-group">
      <check-filter v-for="periodo in periodos" category="time" :title="periodo"></check-filter>
    </div>
    <h3>Por gênero</h3>
    <div class="filter-group">
      <check-filter v-for="genre in generos" category="genre" :title="genre"></check-filter>
    </div>
  </div>

</template>


<script>
  import generos from '../util/genres'
  import periodos from '../util/times'
  import CheckFilter from './CheckFilter.vue'

  export default {
    data(){
      return{
        generos, // usar a veriavel global como uma var local do componente
        periodos
      }
    },
    components: {
      CheckFilter
    }
  }
</script>