<template>
    <div class="currency-converter">
        <converter-header ></converter-header>
        <converter-form ></converter-form>
    </div>
</template>
<script>
import ConverterHeader from './converter/ConverterHeader';
import ConverterForm from './converter/ConverterForm';
export default {
    components: {
        "converter-header" : ConverterHeader,
        "converter-form" : ConverterForm
    },
    data() {
       return {

       }
    },

    mounted() {
        //Initialazing currencies
        this.$store.dispatch('Converter/fetchCurrencies');

        //Initialazing base and target currencies
        this.$store.dispatch('Converter/setBaseCurrency', 0);
        this.$store.dispatch('Converter/setTargetCurrency', 0);
    },
}
</script>
