import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'
Vue.use(BootstrapVue)



if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')