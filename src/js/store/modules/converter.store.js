import Vue from 'vue';
import Vuex from 'vuex';
import actions from './converter/actions.js';
import mutations from './converter/mutations.js';
import getters from './converter/getters.js';

Vue.use(Vuex);

const state = {
    base: {},
    target: {},
    targetCurrencies: {},
    currencies: {}
  };
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
