<template >
  <div id="app" >
          <b-navbar toggleable="lg" type="dark  color" variant="color">
            <b-nav-item class="navbar-brand" :to="{name: 'home'}">Coffee<small>Bahia</small></b-nav-item >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse  is-nav id="nav-collapse">
                <b-navbar-nav>
                     <!-- Botones -->
                    <b-nav-item :to="{name: 'coffe'}">Cafe</b-nav-item>
                    <b-nav-item :to="{name: 'publication'}">Publicaciones</b-nav-item>
                </b-navbar-nav>
              
              <!-- Right aligned nav items -->
            </b-collapse>
          </b-navbar>
            <router-view/>

  </div>
  
    
 
</template>

<script>

export default {
  name: 'App',
    components:{}
  
}


</script>

<!--retocar el stylo--->
<style>

#app {
    min-height: 100vh;
    height: 100% auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#EFF1F3;  
}
.color{
  background-color:#223843!important;
}
.navbar-nav .nav-link {
    color: #fcf6f6 !important;
}
.navbar-brand{
   color: #fcf6f6 !important;
}

a{
  color: #fcf6f6!important;
}



</style>
