import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false

Vue.use(Vant);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
