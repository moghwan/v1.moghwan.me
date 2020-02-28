<template>
  <div>
    <div class="hero is-cover is-relative is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container content has-text-centered has-text-grey-light">
                <h1 class="title has-text-big has-text-weight-light">Mogh<span class="has-text-link">Wan</span></h1>
                <div class="is-hidden-touch">
                  <router-link to="/about">
                    About
                  </router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .has-text-big {
    font-size: 4rem
  }

  ul.menu {
    list-style-type: none;
    
    li {
      display: inline;
    }
  }
</style>