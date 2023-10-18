<template>
    <div class="login-box">
        <Form @submit="onSubmit" :validation-schema="validationSchema">
            <div class="input-wrapper" data-test="email">
                <TextInput
                    name="email"
                    label="EMAIL"
                    id="email"
                    type="text"
                    autocomplete="email"
                />
            </div>
            <div class="input-wrapper" data-test="password">
                <TextInput
                    name="password"
                    label="PASSWORD"
                    id="password"
                    type="password"
                    autocomplete="new-password"
                />
            </div>
            <Button
                type="submit"
                :variants="['default']"
                class="button-signup"
                data-test="button-signup"
            >
            Sign up
            </Button>
        </Form>
    </div>
    <!-- <button>Hello</button> -->
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const validationSchema = yup.object({
    email: yup.string()
    .required("Email is required"),
    password: yup.string()
    .required("Password is required"),
})

function onSubmit(values) {
    console.log(values)
}
</script>

<style scoped>

p {
    color: var(--font-white);
}
.link {
    text-decoration: none;
    color: var(--font-blue);
}

.link:hover {
    text-decoration: underline;
}

.divider {
    margin-top: 28px;
    margin-bottom: 28px;
    color: var(--font-white);
    border-color: var(--font-white);
}
.login-box{
  background-color: var(--grey);
  padding: 40px;
  border-radius: 20px;
  width: 500px;
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 0.2);
}

@media screen and (max-width: 720px) {
  .login-box{
    width: 70vw;
  }
}

.input-wrapper {
    margin-bottom: 20px;
}

.button-signup {
    width: 100%;
}
</style>