<template>
  <form class="reg__form">
    <div class="reg__title">Документы</div>
    <div class="reg__element">
      <label for="document">Документ</label>
      <select id="document" class="reg__input" v-model="form.document">
        <option disabled selected value="">Выберите документ</option>
        <option
          v-for="(document, index) in documents"
          :value="document.value"
          :key="index"
          :selected="{ selected: index == 1 }"
        >
          {{ document.label }}
        </option>
      </select>
    </div>
    <div class="reg__element">
      <label for="series">Серия</label>
      <input
        id="series"
        class="reg__input"
        type="text"
        v-model.trim="form.series"
        :class="{ invalid__input: v$.form.series.$error }"
        @blur="v$.form.series.$touch"
      />
    </div>
    <div class="reg__element">
      <label for="number">Номер</label>
      <input
        id="number"
        class="reg__input"
        type="text"
        v-model.trim="form.number"
        :class="{ invalid__input: v$.form.number.$error }"
        @blur="v$.form.number.$touch"
      />
    </div>
    <div class="reg__element">
      <label for="whoIssued">Кем выдан</label>
      <input
        id="whoIssued"
        class="reg__input"
        type="text"
        v-model.trim="form.whoIssued"
        :class="{ invalid__input: v$.form.whoIssued.$error }"
        @blur="v$.form.whoIssued.$touch"
      />
    </div>
    <div class="reg__element">
      <label for="issueDate">Дата выдачи</label>
      <input
        id="issueDate"
        class="reg__input"
        type="date"
        v-model.trim="form.issueDate"
        :class="{ invalid__input: v$.form.issueDate.$error }"
        @blur="v$.form.issueDate.$touch"
      />
    </div>
    <div class="reg__stepButtons">
      <button class="reg__button" @click.prevent="$emit('changeStep', 2)">
        Назад
      </button>
      <router-link to="/Registration-complete">
        <button class="reg__button" @click="sendFormData">
          Зарегистрироваться
        </button>
      </router-link>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        document: "",
        series: "",
        number: "",
        whoIssued: "",
        issueDate: "",
      },
      documents: [
        {
          label: "Паспорт",
          value: "Passport",
        },
        {
          label: "Свидетельство о рождении",
          value: "Birth_certificate",
        },
        {
          label: "Водительское удостоверение",
          value: "Drivers_license",
        },
      ],
    };
  },
  methods: {
    sendFormData() {
      this.v$.$validate();
    },
  },
  validations() {
    return {
      form: {
        series: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(4),
        },
        number: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(6),
        },
        whoIssued: { required },
        issueDate: { required },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
select {
  font-size: 16px;
}
</style>
