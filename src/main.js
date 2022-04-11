import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'
import { ValidationObserver } from 'vee-validate'
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
export const Bus=new Vue();
Vue.config.productionTip = false
axios.defaults.baseURL = "https://api.yefikrmead.com/";
// https://ekub.herokuapp.com/

import moment from 'moment'

Vue.prototype.moment = moment
// https://yefikrmead.com/api
axios.defaults.headers.common['Authorization'] = `Token ${ localStorage.getItem('token')}`;
Vue.use(axios);

store.dispatch('auth/attempt',localStorage.getItem('token')).then(()=>{
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app');
  
})