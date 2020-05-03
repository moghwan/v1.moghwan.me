<template>
  <div>
    <div class="bio">
      <h1 class="title is-2 has-text-weight-light has-text-centered title-top">
        About
      </h1>
      <br>
      <p class="subtitle has-text-centered">
        I’m a web developer based in Rabat 🇲🇦.
      </p>
      <p class="subtitle has-text-centered">
        Love working on Web technologies and looking for some opportunity to refine my knowledge.<br>
      </p>
    </div>
    <br>
    
    <h1 class="title is-3 has-text-weight-light has-text-centered title-top">
      Working With :
    </h1>
    <div class="is-centered tags are-large">
      <span class="tag">Laravel</span>
      <span class="tag">Ionic Framework</span>
      <span class="tag">API Rest</span>
      <span class="tag">Vue</span>
      <span class="tag">Bootstrap</span>
    </div>

    <div class="is-centered tags are-medium">
      <span class="tag">SQLite/MySql</span>
      <span class="tag">React Native</span>
      <span class="tag">Bulma</span>
      <span class="tag">SCSS/SASS</span>
      <span class="tag">WordPress</span>
      <span class="tag">Vuex</span>
      <span class="tag">TypeScript</span>
      <span class="tag">Jquery</span>
      <span class="tag">Gulp</span>
      <span class="tag">Composer</span>
      <span class="tag">OracleDB</span>
      <span class="tag">Cron jobs</span>
      <span class="tag">Apache2</span>
    </div>
    <br>
    <h2 class="title is-2 has-text-weight-light has-text-centered">
      Projects I've Played With
    </h2>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img src="@/assets/projects/coroma-19.png" alt="Placeholder image">
            </figure>
            <h3 class="title-top title is-4 has-text-weight-medium has-text-centered">
              Coro🇲🇦-19
            </h3>
          </div>
          <div class="card-content">
            <div class="content">
              Just another Unofficial Covid-19 Graph stats for Morocco. Sourced on
              <a href="https://github.com/moghwan/coroma-19" target="_blank" >Github</a>
              <br>
              <a href="#">#PWA</a> <a href="#">#VueJs</a> <a href="#">#Vuetify</a>
            </div>
          </div>
          <footer class="card-footer">
            <a href="https://coroma-19.netlify.app/" target="_blank" class="card-footer-item">Visit</a>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img src="@/assets/projects/bouayadapp.jpg" alt="Placeholder image">
            </figure>
            <h3 class="title-top title is-4 has-text-weight-medium has-text-centered">
              Bouayadapp
            </h3>
          </div>
          <div class="card-content">
            <div class="content">
              An android app shows daily quotes with old moroccan proverbs, Satbeeh and more.
              <a href="#">#Ionic_Framework</a> <a href="#">#SQLite</a>
            </div>
          </div>
          <footer class="card-footer">
            <a href="http://play.google.com/store/apps/details?id=com.meruc.bouayadapp" target="_blank" class="card-footer-item">Download</a>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img src="@/assets/projects/sf.jpg" alt="Placeholder image">
            </figure>
            <h3 class="title-top title is-4 has-text-weight-medium has-text-centered">
              Charts
            </h3>
          </div>
          <div class="card-content">
            <div class="content">
              A web app that manage typed data to charts with offline mode and a centralized synchronization.
              <br>
              <a href="#">#Symfony</a> <a href="#">#MaterializeCSS</a>
            </div>
          </div>
          <footer class="card-footer">
            <a href="https://github.com/moghwan/EFPHT-project" target="_blank" class="card-footer-item">Get Source</a>
          </footer>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    height: 100%
  }
  .title-top {
    margin-top: 1.5rem
  }
</style>
