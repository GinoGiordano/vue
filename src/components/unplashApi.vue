<template>
    <div>
        
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            
        >
            <div v-if="images.length != 0">
            <div v-for="i in 9" :key="i.key"> 
                <div v-if=" i != 3 & i != 5">      
            <b-carousel-slide rel="preload" 
            caption=""
            :img-src="images['results'][i]['urls']['raw']"
            
            ></b-carousel-slide>
            </div> 
            </div>
            </div>
           
        </b-carousel>
    </div>  
</template>
<script>

import axios from "axios"

export default ({
   name: 'unplashApi',
    components: {
      
    },
    data(){
        return{
            images:[]
        }

    },
    mounted(){
        this.getImagesCofee()
    },
    methods:{
        getImagesCofee(){
            axios
                .get('https://api.unsplash.com/search/photos?page=1&query=coffe&client_id=Kj506k6mrKVwn7ZJw5heXjgRxx_iRVFPBTB4UzYIWS8')
                .then(res => {this.images = res.data})
        }
    }
})
</script>
<style scoped>
#carousel-fade{
    image-rendering: auto;
    image-resolution:auto;
    max-height:auto;
    max-width: 500px;
    object-fit: cover;

}
</style>
