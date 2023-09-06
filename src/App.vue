
<template>
  <div class="container">
    <div class="sign-up">
      <img src="./assets/logo_oxus.png" alt="Logo" class="logo">
      <div class="sign-container">
        <div class="sign">
          <img src="./assets/ln.png" alt="" class="logo_sign">
          <p class="txt-sign"> {{ $t('ln') }} </p>
        </div>

        <div class="sign">
          <img src="./assets/twitter.png" alt="" class="logo_sign">
          <p class="txt-sign">{{ $t('tw') }}</p>
        </div>

        <div class="sign">
          <img src="./assets/facebook.png" alt="" class="logo_sign">
          <p class="txt-sign">{{ $t('fc') }}</p>
        </div>

      </div>
    </div>


    <div class="registration">
      <div class="language">
        <span @click="switchLangEn"> <img src="./assets/england_flag.jpg" alt="" class="flag"> </span>
        <span @click="switchLangRu">  <img src="./assets/russian_flag.png" alt="" class="flag"> </span>
       

      </div>


      <div class="registration-container">
        <h1>{{ $t('zg') }}</h1>
        <h3>{{ $t('about') }}</h3>
        <p class="txt">Email</p>
        <input type="email" class="email input-reg">
        <p class="txt">{{ $t('password') }}</p>
        <input type="password" class="pas input-reg">
        <br>
        <div class="sign-checkbox">
          <input type="checkbox" class="checkbox">
          <p class="txt-sign">{{ $t('ch1') }}
            <br>
            {{ $t('ch2') }}
          </p>
        </div>
        <div class="sign button">
          <p class="txt-sign">{{ $t('button') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({ useScope: 'global' })
const switchLangEn = () =>{
  locale.value = 'en'
}
const switchLangRu = () =>{
  locale.value = 'ru'
}

</script>
