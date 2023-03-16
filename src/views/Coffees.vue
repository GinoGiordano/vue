<template>
    <div   align-h="center">
        
        <b-container align-h="center" >
            <b-col  id="panel" sm="12" md="6" v-for="coffee in coffees" :key="coffee.id" >
                <CoffeeCard :coffee="coffee"/>
            </b-col>
        </b-container>

        <b-container>
    <h1>CoffeeBahia</h1>
    <h2>Publicaciones relacionadas al mundo del Cafe, de Etiopia a Starbucks,la bebida mas amada y mas odiada del mundo.</h2>
    <h3>Todo lo relacionado al mundo del cafe lo podes encontrar en CoffeeBahia</h3>
    <h3></h3>
  </b-container>
    </div>
</template>

<script>
import axios from "axios"
import CoffeeCard from "@/components/CoffeeCard"
export default {
    name: 'coffee',
    components: {
      CoffeeCard
    },
    data(){
        return{
            coffees:[]
        }

    },
    mounted(){
        this.getcoffes()
    },
    methods:{
        getcoffes(){
            axios
                .get('https://ginogiordano-servicio-web.herokuapp.com/coffee')
                .then(res => {this.coffees = res.data})
        }
    }


}
</script>
<style scoped>
#panel {
        padding: 0.5rem;
        border-radius: 14px;
        margin-top: 3rem;
        margin-bottom: 3rem;
        background: #D77A61;
        height: fit-content;
        box-shadow: 0px 0px 10px gray;
}


</style>

