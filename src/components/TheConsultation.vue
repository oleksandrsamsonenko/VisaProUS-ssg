<script setup>
import { computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, integer } from '@vuelidate/validators'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const rules = {
  name: { required, minLength: minLength(2), maxLength: maxLength(45) },
  email: { required, email },
  phone: { required, integer, minLength: minLength(10), maxLength: maxLength(14) },
  message: { maxLength: maxLength(100) }
}

const v$ = useVuelidate(rules, formData)

const handleSubmit = async () => {
  const result = await v$.value.$validate()
  if (result) {
    console.log(formData)
  } else {
    console.log(`error`)
  }
}
const buttonDisabled = computed(() => {
  return formData.name.length === 0 || formData.email.length === 0 || formData.phone.length === 0
})
</script>

<template>
  <section class="container">
    <form id="consultation" @submit.prevent="handleSubmit" class="form" novalidate>
      <h2 class="section-title">Get a consultation</h2>
      <div class="wrapper">
        <fieldset class="field">
          <input
            class="input"
            id="name"
            type="text"
            placeholder="Your name"
            v-model="formData.name"
          />
          <label for="name" class="secondary-text label">Your name</label>
          <span class="error" v-for="error in v$.name.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </fieldset>
        <fieldset class="field">
          <input
            class="input"
            id="email"
            type="email"
            placeholder="Email"
            v-model="formData.email"
          />
          <label for="email" class="secondary-text label">Email</label>
          <span class="error" v-for="error in v$.email.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </fieldset>
        <fieldset class="field">
          <input
            class="input"
            id="phone"
            type="tel"
            v-model="formData.phone"
            placeholder="Phone number"
          />
          <label for="phone" class="secondary-text label">Phone number</label>
          <span class="error" v-for="error in v$.phone.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </fieldset>
        <fieldset class="field">
          <input
            class="input"
            id="message"
            type="text"
            placeholder="Message"
            v-model="formData.message"
          />
          <label for="message" class="secondary-text label">Message</label>
        </fieldset>
      </div>
      <button class="button" :disabled="buttonDisabled">Send</button>
    </form>
  </section>
</template>

<style scoped lang="scss">
.container {
  padding: 30px 20px 60px;
  @media (min-width: 1440px) {
    padding: 90px 140px;
  }
}
.wrapper {
  display: grid;
  gap: 30px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 25px;
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    column-gap: 40px;
  }
}
.form {
  margin-top: 90px;
}
.field {
  position: relative;
  padding: 0;
  border: none;
}
.input {
  font-size: 18px;
  line-height: 22px;
  height: 46px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #e6e9ea;
  outline: none;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #22282b;
  width: 100%;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    font-size: 20px;
    line-height: 25px;
  }
}
.label {
  position: absolute;
  top: 0;
  left: 2px;
  transition: all 400ms ease;
  @media (min-width: 768px) {
    font-size: 10.66px;
    line-height: 14.92px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25.2px;
  }
}
.input::placeholder {
  opacity: 0;
}
.input:focus ~ .label,
.input:not(:placeholder-shown) ~ .label {
  color: #22282b;
  top: -15px;
  @media (min-width: 1440px) {
    top: -30px;
  }
}
.button {
  width: 100%;
  margin-top: 40px;
  background-color: #073826;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 14px 0px;
  border: 1px solid transparent;
  border-radius: 11px;
  transition: all 350ms ease;

  @media (min-width: 768px) {
    font-size: 10.66px;
    line-height: 14.92px;
    padding: 11px 0px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 21.6px;
    padding: 18px 0px;
  }
}
.button:disabled {
  filter: opacity(0.5);
}
.button:not(:disabled) {
  &:hover {
    background-color: #0e5e40;
  }
  &:active {
    color: #073826;
    background-color: #ffffff;
    border: 1px solid #073826;
  }
}
.error {
  color: red;
  margin-right: 15px;
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  @media (min-width: 768px) {
    font-size: 10.66px;
    line-height: 14.92px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25.2px;
  }
}
</style>
