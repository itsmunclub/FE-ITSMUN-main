<template>
  <div class="w-full h-full">
    <div class="w-full bg-[#272F35] dark:bg-[#E4E6E8] dark:shadow-xl dark:hover:shadow-gray-700 rounded-none duration-500 ease-in-out">
      <div class="flex flex-col pt-20 lg:pt-32 lg:pl-44 items-center lg:items-start justify-between pb-10 gap-20 lg:gap-40 lg:pr-20">
        <div class="flex flex-col gap-10 justify-center lg:justify-start items-center lg:items-start"> <h1 class="text-2xl lg:text-4xl lg:text-7xl font-bold text-white dark:text-[#272F35]">
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
      <div class="flex flex-col lg:flex-row gap-10 justify-center w-full items-center">
        <!-- <h1 class="text-2xl font-bold text-white">ValiantVenture.</h1> -->
        <div class="flex flex-row gap-10">
          <img class="h-40" src="../assets/gg.svg" alt="">
          <div class="flex flex-col mb-6">
            <img class="h-20 min-h-16 dark:hidden" src="../assets/diplomaticheroes.svg" alt="">
            <img class="h-20 min-h-16 hidden dark:inline" src="../assets/diplomaticheroes-dark.svg" alt="">
            <div class="flex flex-row justify-between">
              <img class="h-14 w-14 p-2 rounded-xl bg-dark-bg dark:hidden" src="../assets/instagram.svg" alt="">
              <img class="h-14 w-14 p-2 rounded-xl bg-dark-bg dark:hidden" src="../assets/linkedin.svg" alt="">
              <img class="h-14 w-14 p-2 rounded-xl bg-dark-bg dark:hidden" src="../assets/mail.svg" alt="">
              <img class="h-14 w-14 p-2 rounded-xl bg-light-bg hidden dark:inline" src="../assets/instagram-dark.svg" alt="">
              <img class="h-14 w-14 p-2 rounded-xl bg-light-bg hidden dark:inline" src="../assets/linkedin-dark.svg" alt="">
              <img class="h-14 w-14 p-2 rounded-xl bg-light-bg hidden dark:inline" src="../assets/mail-dark.svg" alt="">
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between lg:w-[50%] w-full px-7 lg:px-0 lg:pl-7 pt-12 lg:pt-0">
          <button class="ml-3">
            <NuxtLink to="/about/#" class="whitespace-nowrap">About Us</NuxtLink>
          </button>
          <button class="ml-3">
            <span>Register</span>
          </button>
          <button class="ml-3">
            <span>Blog</span>
          </button>
          <button class="ml-3">
            <span>FAQ</span>
          </button>
          <button class="ml-3">
            <span>Media</span>
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
