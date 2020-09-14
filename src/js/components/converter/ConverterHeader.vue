<template>
    <div>
        <div>
            <div class="primory-text-color fs-16">
                <span>1</span>
                <span>{{$t(base.name)}} {{$t('equals')}}</span>
            </div>
            <div class="fs-36">
                <span>{{target.value | finance}}</span>
                <span> {{$t(target.name)}}</span>
            </div>
        </div>
        <div class="convertor-date-time fs-12">
            <span>{{new Date() | moment }}</span>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
export default {
    filters: {
          moment: function (date) {
              return moment(date).format('D MMM, HH:mm Z');
          },

          finance: function (amount) {
              return Number(amount).toFixed(2);
          }
    },
    computed: {
         ...mapGetters({
           'base': 'Converter/getBase',
           'target': 'Converter/getTarget',
         }),
   },
}
</script>
