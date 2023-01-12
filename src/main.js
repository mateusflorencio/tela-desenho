import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

createApp(App).use(createVuetify()).mount('#app')
