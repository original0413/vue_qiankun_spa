import { createApp } from 'vue'
import App from './App.vue'

import {registerMicroApps, start } from 'qiankun'
import mircoApps from "./micro-app";

createApp(App).mount('#app')

// 注册微应用
registerMicroApps(mircoApps, {
  beforeLoad: app => {
    console.log('beforeLoad', app.name)
  },
  beforeMount:[
    app => {
      console.log('beforeMount', app.name)
    },
  ],
  afterMount: [
    app => {
      console.log('afterMount', app.name)
    },
  ],
  beforeUnmount: [
    app => {
      console.log('beforeUnmount', app.name)
    },
  ]
})
start()