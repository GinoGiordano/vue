<template>
    <div  align-h="center">
        <b-container class="container-fluid fondo" align-h="center" >
            <h4>Cafe Selecionado</h4>
        </b-container>
        <b-container class="container-fluid">
            <CoffeComponent />
        </b-container>
        
    </div>
</template>
<script>
import CoffeComponent from "@/components/CoffeComponent.vue"
export default{ 
    name:'coffeecomponent', 
    components:{
        CoffeComponent
    }

}
</script>

<style scoped>

.container-fluid{
    
    padding: 0.5rem;
    border-radius: 5px;
    width: auto;
    text-decoration: none;
   
  
}

.fondo{
     background:#dbd3d8 !important ;
      box-shadow: 0px 0px 10px gray;
}

</style>