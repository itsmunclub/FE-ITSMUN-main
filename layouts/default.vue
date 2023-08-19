<template>
  <div class="flex flex-col">
    <div :class="{dark: dark, 'bg-[#E4E6E8]': !dark}" class="w-full min-h-screen h-full flex flex-col mx-auto font-montserrat lg:pl-4 duration-500 ease-in-out">
      <Sidebar class="hidden lg:inline-block" :class="{dark: dark, 'bg-dark-bg': !dark}"/>
      <div class="w-full min-h-screen h-full flex flex-col mx-auto dark:bg-dark-bg duration-500 ease-in-out">
        <div class="pb-20 pt-10 px-4 mx-10 flex flex-col gap-10">
          <SwitchLight @isDarkMode="switchLight" />
          <Carousel class="z-10 lg:mx-32" />
          <img class="w-32 h-32 lg:w-44 lg:h-w-44 scale-75 lg:scale-100 right-2 lg:right-16 top-56 md:top-64 lg:top-80 xl:top-[392px] 2xl:top-[500px] 3xl:top-[550px] absolute z-0" src="../assets/flower.svg" alt="">
          <Nuxt v-lazy-load />
          <!-- <Supporters v-lazy-load /> -->

        </div>
        <Footer />
      </div>
      <SidebarMobile id="fixedDiv" class="lg:hidden flex flex-row duration-200 ease-in-out" :dark="dark"/>
    </div>
  </div>
</template>

<script>
// top-56 md:top-64 md2:top-72 lg:top-80 xl:top-[392px] xl2:top-[440px] 2xl:top-[500px] 3xl:top-[550px]
// import Journey from '../components/Journey.vue'
// import Hero from '../components/Hero.vue'
// import SwitchLight from '~/components/switchLight.vue'
// import FAQ from '~/components/FAQ.vue'
// import Supporters from '~/components/Supporters.vue'

export default {
  // components: { SwitchLight, Hero, Journey, Supporters },
  data() {
    return {
      dark: false,
      visible: true
    }
  },

  mounted() {
    const fixedDiv = document.getElementById('fixedDiv');

    // Set the distance from the top where the div should stop following
    const stopFollowingDistance = 2000; // Adjust this value as needed

    // Function to handle scroll event
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > stopFollowingDistance) {
        // If the user scrolled beyond the stopFollowingDistance, make the div absolute
        // fixedDiv.style.position = 'fixed';
        fixedDiv.style.transition = '0.3s ease-in-out';
        fixedDiv.style.opacity = `0`; // Set top position to the stopFollowingDistance value
        // fixedDiv.style.display = 'none'
      } else {
        // If the user is within the stopFollowingDistance, keep the div fixed
        // fixedDiv.style.position = 'fixed';
        fixedDiv.style.transition = '0.3s ease-in-out';
        fixedDiv.style.opacity = '1'; // Reset the top position for the fixed state
        // fixedDiv.style.display = 'flex'
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
  },

  methods: {
    switchLight() {
      this.dark = !this.dark
      console.log(this.e)
    },

    isVisible() {
      this.visible = !this.visible
      console.log(this.e)
    }
  },
}
</script>

<style></style>
