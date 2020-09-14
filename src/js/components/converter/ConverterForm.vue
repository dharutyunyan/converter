<template>
    <div>
        <converter-currency-inputs @onCurrencyChanged="onCurrencyChanged" @onCurrencyValueChanged="onCurrencyValueChanged" :currencies="currencies" :currencyValue="baseCurrencyValue" v-bind:isBase="true"></converter-currency-inputs>
        <div class="clear"></div>
        <converter-currency-inputs @onCurrencyChanged="onCurrencyChanged" @onCurrencyValueChanged="onCurrencyValueChanged" :currencies="targetCurrencies" :currencyValue="targetCurrencyValue" v-bind:isBase="false"></converter-currency-inputs>
    </div>

</template>
<script>
import ConverterCurrencyInputs from './ConverterCurrencyInputs';
import { mapGetters } from 'vuex';
export default {
    components: {
        "converter-currency-inputs" : ConverterCurrencyInputs,
    },

    computed: {
        ...mapGetters({
          'currencies': 'Converter/getCurrencies',
          'targetCurrencies': 'Converter/getTargetCurrencies',
          'targetCurrencyValue': 'Converter/getTargetAmount',
          'baseCurrencyValue': 'Converter/getBaseAmount',
          'targetRate': 'Converter/getTarget',
        }),
    },

    methods: {
        onCurrencyChanged(isBase) {
            if(isBase){
                this.$store.dispatch('Converter/setBaseCurrency', event.target.value);
                this.$store.dispatch('Converter/setTargetCurrency', 0);
            }else{
                this.$store.dispatch('Converter/setTargetCurrency', event.target.value);
            }
        },

        onCurrencyValueChanged(isBase) {
            if(isBase){
                this.$store.dispatch('Converter/setBaseCurrencyAmount', event.target.value);
                this.$store.dispatch('Converter/setTargetCurrencyAmount', event.target.value * this.targetRate.value);
            }else{
                this.$store.dispatch('Converter/setTargetCurrencyAmount', event.target.value);
                this.$store.dispatch('Converter/setBaseCurrencyAmount', event.target.value / this.targetRate.value);
            }
        }
    }

}
</script>
