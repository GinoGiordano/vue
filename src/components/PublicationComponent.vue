<template>
<div>
    <b-container class="container-fluid" align-h="center" >
            <b-container class=".b-container.fluid">
            <h4 >Publicacion Seleccionada</h4>
            </b-container>
        <div v-if="publication != '' " >
        <b-container>
            <h1 class="h1"><strong>{{publication.titulo}}</strong></h1>
            <h2>Publicacion</h2>
            <h3>{{publication.description}}</h3>
           
            <h2>Cafe</h2>
            <b-container><b-button type="button" :to="'/Coffee/'+coffee.id" class="btn btn-info"><strong>{{this.coffee.nombre}}</strong></b-button></b-container>
            
           <b-img-lazy v-bind="mainProps" rel="preload" :src="publication.image" :alt="publication.titulo" class="rounded sm=3"></b-img-lazy>
        </b-container>
        </div>
        
    </b-container>   
    </div>
    
</template>
<script>
import axios from "axios"
export default {
    name: 'publication',
    components: {
      
    },
    data(){
        return{
            publication:'',
            coffee:'',
        }

    },
    mounted(){
        this.getpublication()
    },
    methods:{
        getpublication(){
            axios
                .get('https://ginogiordano-servicio-web.herokuapp.com/publication/'+this.$route.params.id)
                .then(res => {this.publication = res.data[0];
                                                    axios
                                                    .get('https://ginogiordano-servicio-web.herokuapp.com/coffee/'+this.publication.hashtag)
                                                    .then(res => {this.coffee = res.data[0]});
                })              
        }
    }
}
</script>
<style scoped>
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
.btn-info {
    border-radius: 10px;
    background:#d8b4a0!important ;
    border-color:#b6927e!important ;
    color: #fff;
    box-shadow: 1px 2px 5px #b6927e;
}
</style>
