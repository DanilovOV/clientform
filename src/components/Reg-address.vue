<template>
  <form class="reg__form">
    <div class="reg__title">Адрес</div>
    <div class="reg__element">
      <label for="index">Индекс</label>
      <input
        id="index"
        class="reg__input"
        type="text"
        v-model.trim="form.index"
        :class="{ invalid__input: v$.form.index.$error }"
        @blur="v$.form.index.$touch"
      />
    </div>
    <div class="reg__element">
      <label for="country">Страна</label>
      <input
        id="country"
        class="reg__input"
        type="text"
        v-model.trim="form.country"
        :class="{ invalid__input: v$.form.country.$error }"
        @blur="v$.form.country.$touch"
      />
    </div>
    <div class="reg__element">
      <label for="region">Область</label>
      <input
        id="region"
        class="reg__input"
        type="text"
        v-model.trim="form.region"
        :class="{ invalid__input: v$.form.region.$error }"
        @blur="v$.form.region.$touch"
      />
    </div>
    <div class="reg__element">
      <label for="city">Город</label>
      <input
        id="city"
        class="reg__input"
        type="text"
        v-model.trim="form.city"
      />
    </div>
    <div class="reg__element">
      <label for="street">Улица</label>
      <input
        id="street"
        class="reg__input"
        type="text"
        v-model.trim="form.street"
        :class="{ invalid__input: v$.form.street.$error }"
        @blur="v$.form.street.$touch"
      />
    </div>
    <div class="reg__element">
      <label for="house">Дом</label>
      <input
        id="house"
        class="reg__input"
        type="text"
        v-model.trim="form.house"
        :class="{ invalid__input: v$.form.house.$error }"
        @blur="v$.form.house.$touch"
      />
    </div>
    <div class="reg__stepButtons">
      <button class="reg__button" @click.prevent="$emit('changeStep', 1)">
        Назад
      </button>
      <button class="reg__button" @click.prevent="stepTwoSubmit">Далее</button>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        house: "",
      },
    };
  },
  methods: {
    stepTwoSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$emit("changeStep", 3);
      }
    },
  },
  validations() {
    return {
      form: {
        index: { required },
        country: { required },
        region: { required },
        city: { required },
        street: { required },
        house: { required, numeric },
      },
    };
  },
};
</script>
