<template>
  <form class="reg-form">
    <div class="title">Адрес</div>
    <div class="element">
      <label for="index">Индекс</label>
      <input id="index" class="input" type="text" v-model.trim="form.index" />
    </div>
    <div class="element">
      <label for="country">Страна</label>
      <input id="country" class="input" type="text" v-model.trim="form.country" />
    </div>
    <div class="element">
      <label for="region">Область</label>
      <input id="region" class="input" type="text" v-model.trim="form.region" />
    </div>
    <div class="element">
      <label for="city">Город</label>
      <input id="city" class="input" type="text" v-model.trim="form.city" />
    </div>
    <div class="element">
      <label for="street">Улица</label>
      <input id="street" class="input" type="text" v-model.trim="form.street" />
    </div>
    <div class="element">
      <label for="house">Дом</label>
      <input id="house" class="input" type="text" v-model.trim="form.house" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
      },
    };
  },
};
</script>

<style></style>
