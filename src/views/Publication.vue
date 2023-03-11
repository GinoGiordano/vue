<template>
    <div   align-h="center">
        <b-container class="container-fluid" align-h="center" >
            <h4>Ultimas Publicaciones</h4>
        </b-container>
        <b-container align-h="center" >
            <b-col  id="panel" sm="12" md="6" v-for="publication in publications" :key="publication.id" >
                <publicationCard :publication="publication"/>
            </b-col>
        </b-container>
    </div>
</template>

<script>
import axios from "axios"
import publicationCard from "@/components/PublicationCard"
export default {
    name: 'publication',
    components: {
      publicationCard
    },
    data(){
        return{
            publications:[]
        }

    },
    mounted(){
        this.getpublications()
    },
    methods:{
        getpublications(){
            axios
                .get('https://ginogiordano-servicio-web.herokuapp.com/publication')
                .then(res => {this.publications = res.data})
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
.container-fluid{
    background: #dbd3d8;
    padding: 0.5rem;
    border-radius: 5px;
    width: auto;
    text-decoration: none;
    box-shadow: 0px 0px 10px gray;
}

</style>

