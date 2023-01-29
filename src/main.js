import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/styles/main.scss'

import store from '@/Store/store'

createApp(App).use(store).mount('#app')
