import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTelegram, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import VuePageTransition from 'vue-page-transition'

library.add(faTelegram, faTwitter, faGithub);
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSimpleMarkdown)
Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
