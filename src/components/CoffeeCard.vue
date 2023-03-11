<template>
  <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img rel="preload" :src="coffee.image" :alt="coffee.nombre" class=".img.rounded-0.card-img"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body >
            <b-card-title>
              {{coffee.nombre}}
               </b-card-title>
          <b-card-text>
            {{coffee.descripcion}}
          </b-card-text>
          <div class="container">
                <b-button type="button" :to="'/Coffee/'+coffee.id" class="btn btn-info"><strong>Leer mas</strong></b-button>
            </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>  
</template>

<script>
export default {
    name: "CoffeeCard",
    props: [
        "coffee"
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
.img.rounded-0.card-img{
    border-radius: 20px !important;
}
  .btn-info {
    border-radius: 10px;
    background:#d8b4a0!important ;
    border-color:#b6927e!important ;
    color: #fff;
    box-shadow: 1px 2px 5px #b6927e;
}
</style>