<template>
  <div class="forms">
    <reg-start @changeStep="changeStep" v-show="step === 1" />
    <reg-address @changeStep="changeStep" v-show="step === 2" />
    <reg-docs @changeStep="changeStep" v-show="step === 3" />
  </div>
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
  methods: {
    changeStep(value) {
      this.step = value;
    },
  },
};
</script>

<style lang="scss">
.forms {
  margin-top: 100px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
}

.reg {
  //reg__form
  &__form {
    width: 700px;
    min-height: 660px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.58);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    @media (max-width: 1000px) {
      width: 500px;
    }
    @media (max-width: 600px) {
      width: 400px;
    }
    @media (max-width: 450px) {
      width: 280px;
    }
  }
  // reg__title
  &__title {
    font-size: 30px;
    margin: 30px 0 0;
    font-weight: 500;
    @media (max-width: 600px) {
      font-size: 25px;
    }
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  // reg__subtitle
  &__subtitle {
    font-size: 22px;
    margin: 20px 10px 0 0;
  }
  // reg__element
  &__element {
    display: flex;
    flex-direction: column;
  }
  // reg__input
  &__input {
    width: 400px;
    height: 45px;
    margin: 5px 0 0;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.85);
    color: rgb(77, 77, 77);
    font-size: 18px;

    ::placeholder {
      color: white;
      font-size: 16px;
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
  // reg__button
  &__button {
    min-width: 140px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 10px;
    margin: 30px 0 0;
    font-size: 17px;
    padding: 0 10px;
  }
  // reg__stepButtons
  &__stepButtons {
    width: 400px;
    display: flex;
    flex: 1 0 auto;
    justify-content: space-between;
    align-items: flex-end;
  }
}

label {
  font-size: 18px;
  margin: 13px 0 0 2px;
  @media (max-width: 450px) {
    font-size: 15px;
  }
}
select {
  width: 400px;
  height: 40px;
  margin: 5px 0 0;
  border-radius: 5px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.85);
  color: rgb(77, 77, 77);
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
.error {
  color: rgb(255, 38, 92);
  margin: 3px 0 0 2px;
}
</style>
