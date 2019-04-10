import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://gwzs.hn.189.cn/win/';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
