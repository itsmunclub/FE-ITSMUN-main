<template>
  <div class="w-full h-full">
    <div class="w-full bg-[#272F35] dark:bg-[#E4E6E8] dark:shadow-xl dark:hover:shadow-gray-700 rounded-none duration-500 ease-in-out">
      <div class="flex flex-col pt-20 lg:pt-32 lg:pl-48 items-center lg:items-start justify-between pb-10 gap-20 lg:gap-40 lg:pr-20">
        <div class="flex flex-col gap-10 justify-center lg:justify-start items-center lg:items-start"> <h1 class="text-2xl lg:text-7xl font-bold text-white dark:text-[#272F35]">
            Collaborate.
          </h1>
          <h2 class="text-white/75 dark:text-[#272F35] font-medium text-base lg:text-2xl text-center lg:text-start">
            Have an idea to build something with us? <br />
            Hit us on our email
          </h2>
          <a href="mailto:itsmunclub2022@gmail.com?subject=Request for Collaboration" class="flex items-center justify-center lg:justify-start input lg:w-full max-w-xl text-[#272F35] dark:text-[#E4E6E8] bg-[#E4E6E8] dark:bg-[#272F35] focus:ring-[#9BA3B1] focus:ring-1 focus:scale-105">
            <p class="hidden lg:flex">
              Click here to collaborate with ITS MUN Club
            </p>
            <p class="flex lg:hidden text-center justify-center items-center">
              Click here to collaborate with ITS MUN Club
            </p>
          </a>
        </div>
        
      </div>
    </div>
    <div class="pt-32 pb-16 lg:mr-10 lg:ml-20 mx-5 dark:bg-dark-bg dark:text-dark-text">
      <div class="flex flex-col xl:flex-row gap-10 justify-center w-full items-center">
        <!-- <h1 class="text-2xl font-bold text-white">ValiantVenture.</h1> -->
        <div class="flex flex-col xl:flex-row gap-10 lg:gap-4">
          <img class="h-auto w-full" src="../assets/gg.png" alt="">
          <div class="flex flex-col lg:space-y-10 mb-6 mx-20 sm:mx-16 lg:mx-0">
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
            <NuxtLink to="/register" class="font-bold text-sm sm:text-base">Register</NuxtLink>
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
