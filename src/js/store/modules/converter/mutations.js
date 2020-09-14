import Vue from 'vue';
export default {
    CURRENCIES_FETCHED(state, currencies) {
        state.currencies = currencies;
    },

    SET_BASE_CURRENCY(state, currency) {
        if(currency == 0){
            state.base = state.currencies[Object.keys(state.currencies)[0]];
            state.targetCurrencies = state.currencies[Object.keys(state.currencies)[0]]['rates'];
        }else{
            state.base = state.currencies[currency];
            state.targetCurrencies = state.currencies[currency]['rates'];
        }
        Vue.set(state.base, 'amount', 1);
    },

    SET_TARGET_CURRENCY(state, currency) {
        if(currency == 0){
            state.target = state.targetCurrencies[Object.keys(state.targetCurrencies)[0]];
        }else{
            state.target = state.targetCurrencies[currency];
        }
        Vue.set(state.target, 'amount', state.target.value);
    },

    SET_TARGET_CURRENCY_AMOUNT(state, value) {
        state.target.amount = value;
    },

    SET_BASE_CURRENCY_AMOUNT(state, value) {
        state.base.amount = value;
    },
  };
