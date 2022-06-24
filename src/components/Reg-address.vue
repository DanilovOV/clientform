<template>
  <form class="reg__form">
    <div class="reg__title">Адрес</div>
    <div class="reg__element">
      <label for="index">Индекс</label>
      <input id="index" class="reg__input" type="text" v-model.trim="form.index" />
    </div>
    <div class="reg__element">
      <label for="country">Страна</label>
      <input id="country" class="reg__input" type="text" v-model.trim="form.country" />
    </div>
    <div class="reg__element">
      <label for="region">Область</label>
      <input id="region" class="reg__input" type="text" v-model.trim="form.region" />
    </div>
    <div class="reg__element">
      <label for="city">Город</label>
      <input id="city" class="reg__input" type="text" v-model.trim="form.city" />
    </div>
    <div class="reg__element">
      <label for="street">Улица</label>
      <input id="street" class="reg__input" type="text" v-model.trim="form.street" />
    </div>
    <div class="reg__element">
      <label for="house">Дом</label>
      <input id="house" class="reg__input" type="text" v-model.trim="form.house" />
    </div>
    <div class="reg__stepButtons">
      <button class="reg__button" @click.prevent="$emit('changeStep', 1)">Назад</button>
      <button class="reg__button" @click.prevent="$emit('changeStep', 3)">Далее</button>
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
