<template lang="es">
   <div style="text-align: -webkit-center; ">
     <unplashApi />
  
  <b-container>
    <h1>CoffeeBahia</h1>
    <h2>Publicaciones relacionadas al mundo del Cafe, de Etiopia a Starbucks,la bebida mas amada y mas odiada del mundo.</h2>
    <h3>Todo lo relacionado al mundo del cafe lo podes encontrar en CoffeeBahia</h3>
    <h3></h3>
  </b-container>
</div>     
</template>
<script>

import unplashApi from "@/components/unplashApi"
export default ({
   name: 'coffee',
    components: {
      
      unplashApi
    },
    
})
</script>

<style>

center{
    justify-content: center !important;
}

</style>