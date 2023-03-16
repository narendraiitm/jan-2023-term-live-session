import router from './router.js'

new Vue({
  el: '#app',
  template: `<div> 
  <router-link to='/'> Home </router-link>
  <router-link to='/profile'> Profile </router-link>
  <router-link to='/login'> Login </router-link>
  <router-view></router-view>
  </div>`,
  router,
})
