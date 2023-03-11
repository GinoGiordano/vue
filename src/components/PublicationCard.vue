<template>
  <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img rel="preload" :src="publication.image" :alt="publication.titulo" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body >
            <b-card-title>
              {{publication.titulo}}
               </b-card-title>
          <b-card-text>
            
          </b-card-text>
            <div class="container">
                <b-button type="button" :to="'/Publication/'+publication.id" class="btn btn-info"><strong>Leer mas</strong></b-button>
            </div>
            
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>  
</template>

<script>
export default {
    name: "PublicationCard",
    props: [
        "publication"
    ],
}
</script>

<style scoped>


.card{
  padding-top: 9px;
  padding-left: 9px;
  transition: transform .2s;
  
  text-decoration: none;
  background: #DBD3D8 !important;
  
}
.card:hover{
        box-shadow: 0px 0px 10px gray;
        transform: scale(1.01);
    }

img.medium{
        max-width: 29rem;
        max-height: 22rem;
        width: 100%;
    }
.card-img {
        width: 100%;
        height: 12rem;
        object-fit: contain;
  }
.btn-info {
    border-radius: 10px;
    
    color: #fff;
  
}
.btn-info:hover {
      background: #000!important;
      color: #fff;
   }
</style>