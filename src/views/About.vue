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
      <span class="tag">SQLite/MySql</span>
      <span class="tag">Vue</span>
      <span class="tag">Bootstrap</span>
    </div>

    <div class="is-centered tags are-medium">
      <span class="tag">API Rest</span>
      <span class="tag">React Native</span>
      <span class="tag">Bulma</span>
      <span class="tag">SCSS/SASS</span>
      <span class="tag">WordPress</span>
      <span class="tag">TypeScript</span>
      <span class="tag">Jquery</span>
      <span class="tag">Gulp</span>
      <span class="tag">Composer</span>
      <span class="tag">Oracle</span>
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
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7ad67f3f-54a6-4043-bd76-799f3475687a/d4yujyo-25d7bf5f-130d-4b5d-a1c1-a95baed55173.png" alt="Placeholder image">
            </figure>
            <h3 class="title-top title is-4 has-text-weight-medium has-text-centered">
              OEM Config Tool
            </h3>
          </div>
          <div class="card-content">
            <div class="content">
              A simple Windows(XP to 10) desktop app, let changing hardware infossuch as processor's name and more.
              <br>
              <a href="#">.NET</a> <a href="#">DotNetBar</a>
            </div>
          </div>
          <footer class="card-footer">
            <a href="http://fav.me/d4yujyo" target="_blank" class="card-footer-item">Try It</a>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img src="http://meruc.com/_src/img/proj/bouayadapp.jpg" alt="Placeholder image">
            </figure>
            <h3 class="title-top title is-4 has-text-weight-medium has-text-centered">
              Bouayadapp
            </h3>
          </div>
          <div class="card-content">
            <div class="content">
              An android app shows daily quotes with old moroccan proverbs, Satbeeh and more.
              <a href="#">Ionic Framework 3</a> <a href="#">SQLite</a>
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
              <img src="http://meruc.com/_src/img/proj/pfe/3.jpg" alt="Placeholder image">
            </figure>
            <h3 class="title-top title is-4 has-text-weight-medium has-text-centered">
              Firebase
            </h3>
          </div>
          <div class="card-content">
            <div class="content">
              A web app that manage typed data to charts with offline mode and a centralized synchronization.
              <br>
              <a href="#">Symfony</a> <a href="#">MaterializeCSS</a>
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

  .bio {
    padding: 0px 5px 2px;
    border-radius: 2px;

    .vue {background-color: #41B883; color: #34495E;}
    .ionic {background-color: #6C6C6C; color: #F05340;}
    .laravel {background-color: black; color: white;}
    .wordpress {background-color: #00749C; color: white;}
    .reactnative {background-color: #222; color: #61DBFB;}
  }
</style>