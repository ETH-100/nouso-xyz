import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'

import zh from './locales/zh.json'
import en from './locales/en.json'

import '@/styles/element/index.scss'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    zh,
    en
  }
})

createApp(App)
  .use(router)
  .use(i18n)
  .use(ElementPlus)
  .mount('#app')
