<template>
  <form class="reg__form">
    <div class="reg__title">Регистрация</div>
    <div class="reg__element">
      <label for="surname">Фамилия</label>
      <input
        id="surname"
        class="reg__input"
        type="text"
        v-model.trim="form.surname"
        @blur="v$.form.surname.$touch"
      />
    </div>
    <div v-if="v$.form.surname.$error">Name field has an error.</div>
    <div class="reg__element">
      <label for="name">Имя</label>
      <input
        id="name"
        class="reg__input"
        type="text"
        v-model.trim="form.name"
      />
    </div>
    <div class="reg__element">
      <label for="patronymic">Отчество</label>
      <input
        id="patronymic"
        class="reg__input"
        type="text"
        v-model.trim="form.patronymic"
      />
    </div>
    <div class="reg__element">
      <label for="birthdate">Дата рождения</label>
      <input
        id="birthdate"
        class="reg__input"
        type="date"
        v-model="form.birthdate"
      />
    </div>
    <div class="reg__element">
      <label for="tel">Телефон</label>
      <input
        id="tel"
        class="reg__input"
        type="tel"
        maxlength="10"
        v-model.trim="form.tel"
      />
      <div class="reg__sms">
        <input id="messages" type="checkbox" v-model="form.agreeWithSendSMS" />
        <label for="messages">Не отправлять СМС</label>
      </div>
    </div>

    <div class="reg__gender">
      Пол
      <div>
        <input
          id="male"
          name="gender"
          value="male"
          type="radio"
          v-model="form.gender"
        />
        <label for="male">Мужской</label>
        <input
          id="female"
          name="gender"
          value="female"
          type="radio"
          v-model="form.gender"
        />
        <label for="female">Женский</label>
      </div>
    </div>
    <button class="reg__button" @click.prevent="$emit('changeStep', 2)">
      Далее
    </button>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        surname: '',
        name: '',
        patronymic: '',
        birthdate: '',
        tel: '',
        gender: 'male',
        agreeWithSendSMS: false,
      },
    };
  },
  validations() {
    return {
      form: {
        surname: { required },
        name: { required },
        patronymic: { required },
        birthdate: { required },
        tel: { required },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.reg {
  &__sms {
    width: 400px;
    margin: 8px 0 0;

    @media (max-width: 600px) {
      width: 350px;
    }
    @media (max-width: 450px) {
      width: 250px;
    }
    @media (max-width: 320px) {
      width: 220px;
    }
  }

  &__gender {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 25px 0 0;

    label {
      margin: 10px 10px 0 0;
    }

    @media (max-width: 600px) {
      width: 350px;
    }
    @media (max-width: 450px) {
      width: 250px;
    }
    @media (max-width: 320px) {
      width: 240px;
    }
  }
}

#male,
#female {
  margin: 10px 5px 0 0;
}
</style>
