import Vue from 'vue'
import Router from 'vue-router'
import Button from '../demoComponents/aui-button'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/button',
    name: 'aui-button',
    component: Button
  }]
})
