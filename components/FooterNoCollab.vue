<template>
  <div class="w-full h-full dark:bg-dark-bg dark:text-dark-text">
    
    <div class="pt-32 pb-16 lg:ml-16">
      <div class="flex flex-col lg:flex-row px-5 lg:px-0 gap-10 justify-center w-full items-center">
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
        <div class="flex flex-row justify-between lg:w-[50%] w-full px-7 lg:pl-7 pt-12 lg:pt-0">
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
