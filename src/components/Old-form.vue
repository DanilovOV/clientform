<template>
    <form class="form" @submit.prevent="checkForm">
        <div class="title">Регистрация</div>
        <div class="element">
            <label for="surname">Фамилия</label>
            <input id="surname" class="input" type="text" v-model.trim="form.surname" />
            <p v-if="$v.form.surname.$dirty && !$v.form.surname.required" class="error">Обязательное поле</p>
        </div>
        <div class="element">
            <label for="name">Имя</label>
            <input id="name" class="input" type="text" v-model.trim="form.name" />
            <p v-if="$v.form.name.$dirty && !$v.form.name.required" class="error">Обязательное поле</p>
        </div>
        <div class="element">
            <label for="patronymic">Отчество</label>
            <input id="patronymic" class="input" type="text" v-model.trim="form.patronymic" />
        </div>
        <div class="element">
            <label for="birthdate">Дата рождения</label>
            <input id="birthdate" class="input" type="date" v-model="form.birthdate" />
            <p v-if="$v.form.birthdate.$dirty && !$v.form.birthdate.required" class="error">Обязательное поле</p>
        </div>
        <div class="element">
            <label for="tel">Телефон</label>
            <div class="telInput">
                <div class="input telInput1">+ 7</div>
                <input id="tel" class="input telInput2" type="tel" maxlength="10" v-model.trim="form.tel" />
            </div>
            <p v-if="$v.form.tel.$dirty && !$v.form.tel.required" class="error">Обязательное поле</p>
            <p v-if="$v.form.tel.$dirty && !$v.form.tel.numeric" class="error">Номер должен содержать только цифры</p>
            <p v-if="$v.form.tel.$dirty && !$v.form.tel.minLength" class="error">
                Номер телефона должен содержать 11 цифр
            </p>
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
            <p v-if="$v.form.selectedgroups.$dirty && !$v.form.selectedgroups.required" class="error">
                Обязательное поле
            </p>
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
            <p v-if="$v.form.city.$dirty && !$v.form.city.required" class="error">Обязательное поле</p>
        </div>
        <div class="element">
            <label for="street">Улица</label>
            <input id="street" class="input" type="text" v-model.trim="form.street" />
        </div>
        <div class="element">
            <label for="house">Дом</label>
            <input id="house" class="input" type="text" v-model.trim="form.house" />
        </div>

        <div class="title">Документы</div>
        <div class="element">
            <label for="document">Документ</label>
            <select id="document" v-model="form.document">
                <option v-for="(document, index) in documents" :value="document.value" :key="index">
                    {{ document.label }}
                </option>
            </select>
            <p v-if="$v.form.document.$dirty && !$v.form.document.required" class="error">Обязательное поле</p>
        </div>
        <div class="element">
            <label for="series">Серия</label>
            <input id="series" class="input" type="text" v-model="form.series" />
        </div>
        <div class="element">
            <label for="number">Номер</label>
            <input id="number" class="input" type="text" v-model="form.number" />
        </div>
        <div class="element">
            <label for="whoIssued">Кем выдан</label>
            <input id="whoIssued" class="input" type="text" v-model="form.whoIssued" />
        </div>
        <div class="element">
            <label for="issueDate">Дата выдачи</label>
            <input id="issueDate" class="input" type="date" v-model="form.issueDate" />
            <p v-if="$v.form.issueDate.$dirty && !$v.form.issueDate.required" class="error">Обязательное поле</p>
        </div>
        <button class="submitForm" type="submit">Зарегистрироваться</button>
        <p v-if="$v.form.$error" class="error__button">Пожалуйста, исправьте ошибки заполнения формы</p>
    </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, numeric } from 'vuelidate/lib/validators';
export default {
    mixins: [validationMixin],
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
                index: '',
                country: '',
                region: '',
                city: '',
                street: '',
                house: '',
                document: '',
                series: '',
                number: '',
                whoIssued: '',
                issueDate: '',
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
    validations: {
        form: {
            surname: { required },
            name: { required },
            birthdate: { required },
            tel: { required, minLength: minLength(10), numeric },
            selectedgroups: { required },
            city: { required },
            document: { required },
            issueDate: { required },
        },
    },
    methods: {
        checkForm() {
            this.$v.form.$touch();
            if (!this.$v.form.$error) {
                alert('Вы успешно зарегистрировали аккаунт!');
            }
        },
    },
};
</script>

<style lang="sass" scoped>
.form
  max-width: 750px
  background-color: rgba(255, 255, 255, 0.58)
  margin: 20px auto
  border-top-left-radius: 10px
  border-top-right-radius: 10px
  display: flex
  flex-direction: column
  align-items: center
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  @media (max-width: 1000px)
    width: 500px
  @media (max-width: 600px)
    width: 400px
  @media (max-width: 450px)
    width: 280px
.input
  font-
  width: 400px
  height: 40px
  margin: 5px 0 0
  border-radius: 5px
  padding: 10px
  background-color: rgba(255, 255, 255, 0.85)
  color: rgb(77, 77, 77)
  font-size: 18px
  ::placeholder
    color: white
    font-size: 16px
  @media (max-width: 600px)
    width: 350px
  @media (max-width: 450px)
    width: 250px
  @media (max-width: 320px)
    width: 240px
.title
  font-size: 30px
  margin: 30px 0 0
  font-weight: 500
  @media (max-width: 600px)
    font-size: 25px
  @media (max-width: 450px)
    font-size: 20px
.subtitle
  font-size: 22px
  margin: 20px 10px 0 0
select
  width: 400px
  height: 40px
  margin: 5px 0 0
  border-radius: 5px
  padding: 5px
  background-color: rgba(255, 255, 255, 0.85)
  color: rgb(77, 77, 77)
  @media (max-width: 600px)
    width: 350px
  @media (max-width: 450px)
    width: 250px
  @media (max-width: 320px)
    width: 240px
#clientgroup
  height: 60px
  overflow: hidden
.gender
  font-size: 18px
  display: flex
  flex-direction: column
  width: 400px
  margin: 25px 0 13px 0
  label
    margin: 10px 10px 0 0
  @media (max-width: 600px)
    width: 350px
  @media (max-width: 450px)
    width: 250px
  @media (max-width: 320px)
    width: 240px
label
  font-size: 18px
  margin: 13px 0 0 2px
  @media (max-width: 450px)
    font-size: 15px
.element
  display: flex
  flex-direction: column
#messages
  margin-right: 6px
#male, #female
  margin: 10px 5px 0 0
.sms
  width: 400px
  margin: 12px 0 0
  @media (max-width: 600px)
    width: 350px
  @media (max-width: 450px)
    width: 250px
  @media (max-width: 320px)
    width: 220px
.error
  color: rgb(255, 38, 92)
  margin: 3px 0 0 2px
  &__button
    margin: 0 0 30px
    color: rgb(255, 38, 92)
.telInput
  display: flex
  &1
    user-select: none
    width: 39px
    padding: 11px 5px 10px 6px
    border-top-right-radius: 0
    border-bottom-right-radius: 0
    background-color: rgb(222, 222, 222)
    @media (max-width: 320px)
      width: 32px
      padding-left: 3px
      padding-right: 0
  &2
    width: 361px
    padding-left: 9px
    border-top-left-radius: 0
    border-bottom-left-radius: 0
    @media (max-width: 600px)
      width: 311px
    @media (max-width: 450px)
      width: 211px
    @media (max-width: 320px)
      padding-left: 4px
      width: 208px
.submitForm
  width: 180px
  height: 40px
  margin: 40px 0 20px
  border-radius: 5px
  font-size: 16px
  background-color: rgba(255, 255, 255, 0.85)
  color: black
  box-shadow: 0px 0px 2px black
</style>
