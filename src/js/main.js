import './../scss/main.scss';

import Vue from 'vue';
import App from './App.vue';
import store from './store/store.js';
import VueI18n from 'vue-i18n';
import { ENGLISH_TRANSLATIONS } from './translations/en';
import { FRENCH_TRANSLATIONS } from './translations/fr';

Vue.use(VueI18n);

const TRANSLATIONS = {
  en: ENGLISH_TRANSLATIONS,
  fr: FRENCH_TRANSLATIONS
}

const i18n = new VueI18n({
  locale: 'fr',
  messages: TRANSLATIONS,
  silentTranslationWarn: true
})

new Vue({

    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
