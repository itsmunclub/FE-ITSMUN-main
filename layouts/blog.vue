<template>
  <div
    :class="{
      dark: dark,
      'bg-[#ECECEC]': !dark,
    }"
    class="w-full min-h-screen h-full flex flex-col max-w-[1700px] mx-auto font-montserrat"
  >
    <div
      class="w-full min-h-screen h-full flex flex-col max-w-[1700px] mx-auto dark:bg-dark-bg"
    >
      <div class="w-[90%] py-20 mx-auto flex flex-col gap-10 md:gap-24">
        <SwitchLight @isDarkMode="switchLight" />

        <Nuxt v-lazy-load />
      </div>
    </div>
  </div>
</template>

<script>
import SwitchLight from '~/components/switchLight.vue'

export default {
  components: { SwitchLight },
  data() {
    return {
      dark: false,
    }
  },

  methods: {
    switchLight() {
      this.dark = !this.dark
      console.log(this.e)
    },
  },
}
</script>

<style></style>
