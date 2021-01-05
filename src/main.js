import Vue from 'vue'
import App from './App.vue'
import VConsole from 'vconsole'
import { record } from 'rrweb';

new VConsole({
  onReady(){
    document.getElementById('__vconsole').className = 'rr-block';
    // 放到这里时必现
    record({
      emit() {
        // ignore
      }
    })
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
