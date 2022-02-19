import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'

Vue.use(ElementUI);


//定义全局指令
import moment from 'moment'
//字符串首字母大写
Vue.filter('formatDate', function (value) {
    return moment(value).format("YYYY-MM-DD")
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
