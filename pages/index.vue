<template>
  <div class="w-full h-full relative">
    <!-- <div
      :class="{
        '-translate-y-full': !toast,
        'translate-y-0': toast,
        'opacity-0': !toast,
        'opacity-100': toast,
      }"
      class="z-10 duration-500 ease-in-out fixed top-0 left-1/2 bg-black/75 px-4 py-4 flex rounded-b-lg -translate-x-1/2"
    >
      <div class="relative w-full">
        <div
          class="w-2 h-2 absolute bg-dark-accent rounded-full -left-1 animate-ping"
        ></div>
        <p class="text-white text-sm lg:text-base">New Event : MUN 101</p>
        <div class="flex gap-1 lg:gap-4 text-xs lg:text-base text-[#9BA3B1]">
          <p>Attend the event?</p>
          <a href="#mun101">Click Here</a>
        </div>
      </div>
    </div> -->
    <div
      v-if="loading"
      class="z-20 fixed min-h-screen h-full w-full left-0 -top-0 bg-black/75 backdrop-blur-md"
    >
      <div
        class="w-full h-full flex items-center justify-center flex-col gap-4"
      >
        <img
          class="w-32 aspect-square animate-flip flex items-center justify-center"
          src="../static/LogoITSMUNWhite.png"
          alt=""
        />

        <p>On the way!</p>
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <h1
        id="mun101"
        style="text-decoration-skip-ink: none"
        class="underline relative bg-transparent underline-offset-[-35%] decoration-[1rem] dark:text-dark-text text-center md:text-start dark:decoration-dark-accent decoration-[#FFAFAF] text-6xl tracking-wide font-bold leading-relaxed text-primary"
      >
        MUN 101
      </h1>

      <p
        class="text-primary dark:text-dark-text text-sm md:text-2xl font-medium text-justify md:w-[52rem]"
      >
        For almost 3 years ITS MUN Club has been found Many of them turned their
        backs away because “MUN is complicated,” Most of them quit because
        “there are too much rules,” they are missing out. For this reason, we
        have gathered our three years worth of knowledge to provide everything
        you need to know about MUN in “MUN 101”article.
      </p>

      <div class="flex items-center justify-center md:justify-start w-auto">
        <button
          @click.prevent="toBlog"
          class="hidden sm:flex dark:text-dark-text dark:border-dark-accent group text-md md:text-5xl px-6 py-4 items-center justify-center border-2 rounded-full border-black duration-300 ease-in-out"
        >
          Curious?
          <span
            class="flex items-center group-hover:pl-4 justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3 duration-300 ease-in-out"
            >See here!</span
          >
        </button>

        <button
          @click.prevent="toBlog"
          class="flex sm:hidden dark:text-dark-text dark:border-dark-accent group text-sm px-6 py-4 items-center justify-center border-2 rounded-full border-black duration-300 ease-in-out"
        >
          See here!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      loading: false,
      toast: false,
    }
  },

  head() {
    return {
      ...this.$SEOMeta({
        metaTitle: 'ITS MUN CLUB',
        metaImage:
          'https://ik.imagekit.io/drigoalexander/Group_2_au5V9a4X_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660770852868',
        metaDesc:
          'An ITS Educational Organization who aims to develop an engineer to be able simulate the procedures of the United Nations',
        metaKeywords: 'ITS MUN CLUB , MUN , ITS ',
      }),
    }
  },
  created() {
    setTimeout(() => (this.toast = true), 1000)
    setTimeout(() => (this.toast = false), 2000)
  },
  methods: {
    toBlog() {
      this.loading = true

      setTimeout(() => {
        this.$router.push('/mun-101')
        this.loading = false
      }, 4000)
    },
  },
}
</script>
