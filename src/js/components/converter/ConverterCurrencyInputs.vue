<template>
    <div class="convertor-data-inputs">
         <div class="convertor-data-inputs-block">
             <input @input="$emit('onCurrencyValueChanged', isBase)" class="convertor-data-input primory-text-color" type="number" required="required"  :value="currencyValue" >
         </div>
         <div class="convertor-data-inputs-block">
             <select @change="$emit('onCurrencyChanged', isBase)" class="convertor-data-input primory-text-color fs-14" >
                 <option v-for="(item, key) in currencies" :value="key">{{$t(item.name)}}</option>
             </select>
         </div>

    </div>
</template>
<script>
   export default {
        props: {
            currencies: {
                type: Object,
                required: true
            },
            isBase: Boolean,
            currencyValue:String|Number,
        },

        filters: {
            finance: function (amount) {
                return Number(amount).toFixed(2);
            }
        },
   }
</script>
