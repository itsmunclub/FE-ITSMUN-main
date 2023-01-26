<template>
  <section
    class="w-full body-font flex justify-center items-center min-h-screen gap-64"
  >
    <h1 class="text-5xl font-bold">
      Welcome, <br />
      <span class="motion-safe:animate-pulse">Admin</span> ITS MUN Club!
    </h1>

    <div
      class="p-8 bg-gray-200 rounded-xl flex flex-col gap-10 hover:drop-shadow-sm duration-300 ease-in-out"
    >
      <p class="text-2xl font-semibold">Login to your account!</p>
      <div class="flex flex-col gap-3">
        <label class="">Username</label>
        <input
          type="text"
          placeholder="Username"
          :class="{
            'border-red-200': $v.email.$error,
            'border-2': $v.email.$error,
            'focus:ring-black': !$v.email.$error,
          }"
          class="text-sm w-96 pr-4 pl-2 focus:pl-6 py-2 rounded-md focus:ring-0 duration-300 ease-in-out focus:border-0"
          v-model="$v.email.$model"
          @blur="$v.email.$touch()"
        />
        <div v-if="$v.email.$error" class="text-red-500 text-sm pl-2">
          <div v-if="!$v.email.email">Please fill the username field</div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <label class="">Password</label>
        <input
          type="password"
          @blur="$v.password.$touch()"
          v-model="$v.password.$model"
          :class="{
            'border-red-200': $v.password.$error,
            'border-2': $v.password.$error,
            'focus:ring-black': !$v.password.$error,
          }"
          placeholder="Password"
          class="text-sm w-96 py-2 pr-4 pl-2 focus:pl-6 rounded-md focus:ring-0 focus:ring-black duration-300 ease-in-out focus:border-0"
        />
        <div v-if="$v.password.$error" class="text-red-500 text-sm pl-2">
          <div v-if="!$v.password.required">Please fill the password</div>
        </div>
      </div>
      <button
        @click="masuk"
        type="submit"
        :disabled="$v.$invalid"
        class="cursor-pointer w-full bg-black active:bg-black/75 py-2 flex justify-center items-center rounded-md text-white"
      >
        Login
      </button>
    </div>
  </section>
</template>

<script>
import { maxLength, required } from 'vuelidate/lib/validators'

export default {
  layout: 'login',

  data() {
    return {
      email: null,
      password: null,
    }
  },
  validations: {
    email: {
      required,

      maxLength: maxLength(256),
    },
    password: {
      required,
      maxLength: maxLength(20),
    },
  },

  methods: {
    async masuk() {
      await this.$auth
        .loginWith('local', {
          data: {
            username: this.email,
            password: this.password,
          },
        })
        .then((res) => console.log(res))
    },
  },
}
</script>

<style></style>
