import Vue from 'vue'
import App from './App.vue'


Vue.config.ignoredElements = [
  'ion-app',
  'ion-page',
  'ion-header',
  'ion-toolbar',
  'ion-title',
  'ion-content',
  'ion-list',
  'ion-item',
  'ion-label',
  'ion-button'
]

new Vue({
  el: '#app',
  render: h => h(App)
})
