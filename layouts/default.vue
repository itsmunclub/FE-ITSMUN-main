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
      <div class="w-[90%] py-20 mx-auto flex flex-col gap-36 md:gap-56">
        <SwitchLight @isDarkMode="switchLight" />
        <Hero class="-mt-32" v-lazy-load />
        <Journey v-lazy-load />
        <Nuxt v-lazy-load />
        <FAQ v-lazy-load />
        <Supporters v-lazy-load />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Journey from '../components/Journey.vue'
import Hero from '../components/Hero.vue'
import SwitchLight from '~/components/switchLight.vue'
import FAQ from '~/components/FAQ.vue'
import Supporters from '~/components/Supporters.vue'
export default {
  components: { SwitchLight, Hero, Journey, FAQ, Supporters },
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
