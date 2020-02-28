<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu navbar-center is-hidden-desktop" :class="{ 'is-active': showNav }">
        <router-link to="/" class="navbar-item">
          Home
        </router-link>
        <router-link to="/about" class="navbar-item">
          About
        </router-link>
     </div>
   </nav>
   
   <div class="container">
     <router-view />
   </div>
</div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return{
        showNav: false,
      }
    },
  };
</script>

<style type="text/css">
  #app {
    min-height: 100vh;
    display: block;
    position: relative;
  }

  .navbar-center {
    justify-content: center;
  }
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>