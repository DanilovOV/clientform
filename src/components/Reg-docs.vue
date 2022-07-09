<template>
  <form class="reg__form">
    <div class="reg__title">Документы</div>
    <div class="reg__element">
      <label for="document">Документ</label>
      <select id="document" class="reg__input" v-model="form.document">
        <option v-for="(document, index) in documents" :value="document.value" :key="index">
          {{ document.label }}
        </option>
      </select>
    </div>
    <div class="reg__element">
      <label for="series">Серия</label>
      <input id="series" class="reg__input" type="text" v-model="form.series" />
    </div>
    <div class="reg__element">
      <label for="number">Номер</label>
      <input id="number" class="reg__input" type="text" v-model="form.number" />
    </div>
    <div class="reg__element">
      <label for="whoIssued">Кем выдан</label>
      <input id="whoIssued" class="reg__input" type="text" v-model="form.whoIssued" />
    </div>
    <div class="reg__element">
      <label for="issueDate">Дата выдачи</label>
      <input id="issueDate" class="reg__input" type="date" v-model="form.issueDate" />
    </div>
    <div class="reg__stepButtons">
      <button class="reg__button" @click.prevent="$emit('changeStep', 2)">Назад</button>
      <router-link to="/Registration-complete">
        <button class="reg__button">Зарегистрироваться</button>
      </router-link>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        document: '',
        series: '',
        number: '',
        whoIssued: '',
        issueDate: '',
      },
      documents: [
        {
          label: 'Паспорт',
          value: 'Passport',
        },
        {
          label: 'Свидетельство о рождении',
          value: 'Birth_certificate',
        },
        {
          label: 'Водительское удостоверение',
          value: 'Drivers_license',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
select {
  font-size: 16px;
}
</style>
