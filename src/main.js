import Vue from 'vue'
import App from './App.vue'
// import style
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false


Vue.component('DefaultButton',
()=>import('./components/shared/DefaultButton.vue')
)
new Vue({
  render: h => h(App),
}).$mount('#app')


