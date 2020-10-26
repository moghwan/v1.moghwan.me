import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue"
import Blog from "../views/Blog.vue"
import Post from "../views/Post.vue"

Vue.use(VueRouter)

const devtoUsername = 'moghwan';
Vue.prototype.$singlePostUrl = `https://dev.to/api/articles/${devtoUsername}/`;
Vue.prototype.$allPostsUrl   = `https://dev.to/api/articles?username=${devtoUsername}`;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:slug',
    name: 'Post',
    component: Post
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
