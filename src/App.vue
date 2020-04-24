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
      <div class="columns is-mobile">
        <div class="column is-three-fifths is-offset-one-fifth is-paddingless">
          <vue-page-transition name="fade">
            <router-view />
          </vue-page-transition>
        </div>
      </div>
    </div>
    <footer class="footer columns is-mobile">
      <div class="container column is-three-fifths is-offset-one-fifth is-paddingless has-text-grey">
        <div class="columns">
          <div class="column is-3 is-offset-1">
            <p>
              Contact: <a href="mailto:me@meruc.com">me@meruc.com</a>
            </p>
            <p>
              Résumé: <a href="https://docs.google.com/document/d/18dX40Tr89pLiOzs2Ms532yzMrHBeSEQTIhOkEVPLDUs/edit?usp=sharing" target="_blank">View online</a>
            </p>
          </div>
          <div class="column is-3">
            <p>
              <font-awesome-icon :icon="['fab', 'telegram']" class="icon alt icon-inline"/><a href="https://t.me/moghwan" target="_blank">moghwan</a>
            </p>
            <p>
              <font-awesome-icon :icon="['fab', 'github']" class="icon alt icon-inline"/><a href="https://github.com/moghwan" target="_blank">moghwan</a>
            </p>
          </div>
          <div class="column">
            Made with VueJS & Deployed on Netlify.</div>          
        </div>
      </div>
    </footer>
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

<style lang="scss" scoped>
  #app {
    min-height: 100vh;
    display: block;
    position: relative;
    padding-bottom: 100px;
  }

  .navbar-center {
    justify-content: center;
  }

  footer {
    position: absolute;
    background-color:transparent;
    width: 100%;
    padding: 2rem 1.5rem !important;
  }

  .icon-inline {
    margin: 0 3px -6px 0;
  }
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>
