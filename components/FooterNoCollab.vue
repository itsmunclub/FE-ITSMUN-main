<template>
  <div class="w-full h-full dark:bg-dark-bg dark:text-dark-text">
    
    <div class="pt-32 pb-16 lg:ml-16">
      <div class="flex flex-col lg:flex-row px-5 lg:px-0 gap-10 justify-center w-full items-center">
        <!-- <h1 class="text-2xl font-bold text-white">ValiantVenture.</h1> -->
        <div class="flex flex-col xl:flex-row gap-10 lg:gap-4">
          <img class="h-auto w-full" src="../assets/gg.png" alt="">
          <div class="flex flex-col justify-between mb-6 mx-20 sm:mx-16 lg:mx-0">
            <img class="dark:hidden" src="../assets/diplomaticheroes.svg" alt="">
            <img class="hidden dark:inline" src="../assets/diplomaticheroes-dark.svg" alt="">
            <div class="flex flex-row justify-between space-x-6 xl:space-x-2">
              <a target="_blank" class="dark:hidden" href="https://www.instagram.com/itsmunclub/"><img class="h-10 sm:h-14 w-10 sm:w-14 p-2 rounded-xl bg-dark-bg dark:hidden" src="../assets/instagram.svg" alt=""></a>
              <a target="_blank" class="dark:hidden" href="https://www.linkedin.com/company/its-mun-club/mycompany/"><img class="h-10 sm:h-14 w-10 sm:w-14 p-2 rounded-xl bg-dark-bg dark:hidden" src="../assets/linkedin.svg" alt=""></a>
              <a target="_blank" class="dark:hidden" href=""><img class="h-10 sm:h-14 w-10 sm:w-14 p-2 rounded-xl bg-dark-bg dark:hidden" src="../assets/mail.svg" alt=""></a>
              <a target="_blank" class="hidden dark:inline" href="https://www.instagram.com/itsmunclub/"><img class="h-10 sm:h-14 w-10 sm:w-14 p-2 rounded-xl bg-light-bg hidden dark:inline" src="../assets/instagram-dark.svg" alt=""></a>
              <a target="_blank" class="hidden dark:inline" href="https://www.linkedin.com/company/its-mun-club/mycompany/"><img class="h-10 sm:h-14 w-10 sm:w-14 p-2 rounded-xl bg-light-bg hidden dark:inline" src="../assets/linkedin-dark.svg" alt=""></a>
              <a target="_blank" class="hidden dark:inline" href=""><img class="h-10 sm:h-14 w-10 sm:w-14 p-2 rounded-xl bg-light-bg hidden dark:inline" src="../assets/mail-dark.svg" alt=""></a>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between lg:w-[50%] w-full mx-10 xl:mx-0 px-10 lg:px-0 lg:pl-7 lg:pr-20 pt-12 lg:pt-0 text-center">
          <button class="lg:ml-3">
            <NuxtLink to="/about/#" class="whitespace-nowrap font-bold text-sm sm:text-base">About Us</NuxtLink>
          </button>
          <button class="lg:ml-3">
            <NuxtLink to="/register-member" class="font-bold text-sm sm:text-base">Register</NuxtLink>
          </button>
          <button class="lg:ml-3">
            <NuxtLink to="/mun-101" class="font-bold text-sm sm:text-base">Blog</NuxtLink>
          </button>
          <button class="lg:ml-3">
            <span class="font-bold text-sm sm:text-base">FAQ</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sender: null,
    }
  },
  methods: {
    sendMail() {
      this.$mail.send({
        from: this.sender,
        subject: 'Request for Collaboration',
        text: `${this.sender} want to collaborate with ITS MUN CLUB`,
      })
    },
  },
}
</script>

<style></style>
