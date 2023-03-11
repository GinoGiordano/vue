<template>
<div>
    <b-container class="container-fluid" align-h="center" >
            
        <div v-if="coffee != '' " >
        <b-container >
            <h1 class="h1"><strong>{{coffee.nombre}}</strong></h1>
            <h2>Descripcion</h2>
            <h3>{{coffee.descripcion}}</h3>
            <h4>{{coffee.nota}}</h4>
            <h2>Variedad</h2>
            
            <h4>{{this.variedad.nombre}}</h4>
           <b-img-lazy v-bind="mainProps"   rel="preload" :alt="coffee.nombre" :src="coffee.image"  class="rounded sm=3"></b-img-lazy>
        </b-container>
        </div>
        
    </b-container>   
    </div>
    
</template>
<script>
import axios from "axios"
export default {
    name: 'coffee',
    components: {
      
    },
    data(){
        return{
            coffee:'',
            variedad:'',
        }

    },
    mounted(){
        this.getcoffe()
    },
    methods:{
        getcoffe(){
            axios
                .get('https://ginogiordano-servicio-web.herokuapp.com/coffee/'+this.$route.params.id)
                .then(res => {this.coffee = res.data[0];
                                                    axios
                                                    .get('https://ginogiordano-servicio-web.herokuapp.com/variety/'+this.coffee.variedad_id)
                                                    .then(res => {this.variedad = res.data[0]});
                })              
        }
    }
}
</script>
<style >
.b-container{
    background: #DBD3D8;
    padding: 0.5rem;
    border-radius: 5px;
    width: auto;
    text-decoration: none;
    box-shadow: 0px 0px 10px gray;
}
.rounded{
    border-radius: 10px !important;
}
img {
    vertical-align: middle;
    border-style: none;
    max-width: 29rem;
    max-height: 22rem;
    width: 100%;
    margin-bottom: 5%;
}
.h1{
    color: #d77a61!important;
}
</style>
