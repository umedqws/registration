import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages

})


// Создаем экземпляр маршрутизатора
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Ваши маршруты здесь
  ],
})

// Создаем экземпляр приложения и используем маршрутизатор
createApp(App,{
  setup() {
  const { t } = useI18n()  
    return { t }
  }
}).use(router).use(i18n).mount('#app')