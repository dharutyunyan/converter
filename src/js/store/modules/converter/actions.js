import currencies from './../../../helpers/currencies.js';

export default {
    fetchCurrencies({ commit, dispatch }) {
        //Here could be HTTP request to fetch currencies from API
        commit('CURRENCIES_FETCHED', currencies);
    },

    setBaseCurrency({ commit }, currency) {
        commit('SET_BASE_CURRENCY', currency);
    },

    setTargetCurrency({ commit }, currency) {
        commit('SET_TARGET_CURRENCY', currency);
    },

    setTargetCurrencyAmount({ commit }, value) {
        commit('SET_TARGET_CURRENCY_AMOUNT', value);
    },

    setBaseCurrencyAmount({ commit }, value) {
        commit('SET_BASE_CURRENCY_AMOUNT', value);
    },

};
