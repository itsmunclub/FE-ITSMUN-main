<template>
    <div :class="{dark: dark, 'bg-[#ECECEC]': !dark}" class="px-5 sm:px-10 py-8">
        <div>
            <Nuxt v-lazy-load />
        </div>
        <FooterNoCollab />
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