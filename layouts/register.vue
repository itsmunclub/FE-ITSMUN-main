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
        <header>
            <nav>
                <ul>
                    <li><Nuxtlink to="/">general</Nuxtlink></li>
                </ul>
            </nav>
        </header>
        <General v-lazy-load />
        <Prev v-lazy-load />
        <Mun v-lazy-load />
        <Final v-lazy-load />
        <Nuxt v-lazy-load />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
// import General from '../pages/Regist/General.vue'
// import Prev from '../pages/Regist/Prev.vue'
// import Mun from '../pages/Regist/Mun.vue'
// import Final from '../pages/Regist/Final.vue'
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