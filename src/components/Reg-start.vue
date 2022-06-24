<template>
  <form class="reg-form">
    <div class="title">Регистрация</div>
    <div class="element">
      <label for="surname">Фамилия</label>
      <input id="surname" class="input" type="text" v-model.trim="form.surname" />
    </div>
    <div class="element">
      <label for="name">Имя</label>
      <input id="name" class="input" type="text" v-model.trim="form.name" />
    </div>
    <div class="element">
      <label for="patronymic">Отчество</label>
      <input id="patronymic" class="input" type="text" v-model.trim="form.patronymic" />
    </div>
    <div class="element">
      <label for="birthdate">Дата рождения</label>
      <input id="birthdate" class="input" type="date" v-model="form.birthdate" />
    </div>
    <div class="element">
      <label for="tel">Телефон</label>
      <div class="telInput">
        <div class="input telInput1">+ 7</div>
        <input id="tel" class="input telInput2" type="tel" maxlength="10" v-model.trim="form.tel" />
      </div>
    </div>

    <div class="gender">
      Пол
      <div>
        <input id="male" name="gender" value="male" type="radio" v-model="form.gender" />
        <label for="male">Мужской</label>
        <input id="female" name="gender" value="female" type="radio" v-model="form.gender" />
        <label for="female">Женский</label>
      </div>
    </div>

    <div class="element">
      <label for="clientgroup">Группа клиентов</label>
      <select id="clientgroup" multiple size="3" v-model="form.selectedgroups">
        <option v-for="(clientgroup, index) in clientgroups" :value="clientgroup.value" :key="index">
          {{ clientgroup.label }}
        </option>
      </select>
    </div>

    <div class="element">
      <label for="doctor">Лечащий врач</label>
      <select id="doctor" v-model="form.doctor">
        <option v-for="(doctor, index) in doctors" :value="doctor.value" :key="index">
          {{ doctor.label }}
        </option>
      </select>
    </div>

    <div class="sms">
      <input id="messages" type="checkbox" v-model="form.agreeWithSendSMS" />
      <label for="messages">Не отправлять СМС</label>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        surname: '',
        name: '',
        patronymic: '',
        birthdate: '',
        tel: '',
        gender: 'male',
        selectedgroups: [],
        doctor: '',
        agreeWithSendSMS: false,
      },
      clientgroups: [
        {
          label: 'VIP',
          value: 'VIP',
        },
        {
          label: 'Проблемные',
          value: 'Problematic',
        },
        {
          label: 'ОМС',
          value: 'OMS',
        },
      ],
      doctors: [
        {
          label: 'Иванов',
          value: 'Ivanov',
        },
        {
          label: 'Захаров',
          value: 'Zaharov',
        },
        {
          label: 'Чернышева',
          value: 'Chernisheva',
        },
      ],
    };
  },
};
</script>

<style></style>
