<template>
  <reg-start v-show="step === 1" />
  <reg-address v-show="step === 2" />
  <reg-docs v-show="step === 3" />
</template>

<script>
import RegAddress from './Reg-address.vue';
import RegDocs from './Reg-docs.vue';
import RegStart from './Reg-start.vue';
export default {
  data() {
    return {
      step: 1,
    };
  },
  components: { RegStart, RegAddress, RegDocs },
};
</script>

<style></style>
