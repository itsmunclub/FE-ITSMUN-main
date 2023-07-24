<template>
    <div class="flex flex-col">
      <!-- <Sidebar class="hidden lg:inline-block"/> -->
      <div :class="{dark: dark, 'bg-[#E4E6E8]': !dark}" class="w-full min-h-screen h-full flex flex-col mx-auto font-montserrat lg:pl-4 duration-500 ease-in-out">
        <Sidebar class="z-10 hidden lg:inline-block" :class="{dark: dark, 'bg-dark-bg': !dark}"/>
        <div class="w-full min-h-screen h-full flex flex-col mx-auto dark:bg-dark-bg duration-500 ease-in-out">
          <div class="pb-20 pt-10 px-4 flex flex-col gap-10 mx-10"> <!-- buat setiap page kasih mx-10 -->
            <SwitchLight @isDarkMode="switchLight" />
            <!-- <Supporters v-lazy-load /> -->
          </div>
          <Nuxt v-lazy-load />
          <FooterNoCollab />
        </div>
        <SidebarMobile id="fixedDiv" class="lg:hidden flex flex-row duration-200 ease-in-out"/>
      </div>
    </div>
  </template>
  
  <script>
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
        visible: true,
        currentPath: ''
      }
    },
  
    mounted() {
      const fixedDiv = document.getElementById('fixedDiv');
  
      // Set the distance from the top where the div should stop following
      
      const stopFollowingDistance = 1400; // Adjust this value as needed
  
      // Function to handle scroll event
      function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
  
        if (scrollY > stopFollowingDistance) {
          // If the user scrolled beyond the stopFollowingDistance, make the div absolute
          // fixedDiv.style.position = 'fixed';
          fixedDiv.style.transition = '0.3s ease-in-out';
          fixedDiv.style.opacity = `0`; // Set top position to the stopFollowingDistance value
          // fixedDiv.classList.add('hidden');
        } else {
          // If the user is within the stopFollowingDistance, keep the div fixed
          // fixedDiv.style.position = 'fixed';
          fixedDiv.style.transition = '0.3s ease-in-out';
          fixedDiv.style.opacity = '1'; // Reset the top position for the fixed state
          // fixedDiv.classList.remove('hidden');
          // fixedDiv.classList.add('hidden');

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
  