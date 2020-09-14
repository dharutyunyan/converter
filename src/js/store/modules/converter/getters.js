export default {
    getCurrencies(state) {
      return state.currencies;
    },

    getBase(state) {
      return state.base ;
    },

    getTarget(state) {
      return state.target;
    },

    getBaseAmount(state) {
      return state.base.amount;
    },

    getTargetAmount(state) {
      return state.target.amount;
    },

    getTargetCurrencies(state){
        return state.targetCurrencies;
    }
  };
