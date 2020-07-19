<template>
  <div>
    <div class="hero is-cover is-relative is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container content has-text-centered has-text-grey-light">
                <router-link to="/about">
                  <h1 class="title has-text-big has-text-weight-light">Mogh<span class="has-text-link">Wan</span></h1>
                </router-link>
                <router-link to="/about" >
                    <h5 class="has-text-weight-medium is-inline-block has-text-grey">About</h5>
                </router-link>
                ·
                <router-link to="/blog">
                    <h5 class="has-text-weight-medium is-inline-block has-text-grey">Blog</h5>
                </router-link>
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