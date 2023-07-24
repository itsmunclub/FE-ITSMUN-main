<template>
  <div class="w-auto h-full relative lg:mx-20">
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

    <Hero class="" v-lazy-load />

    <img class="mx-auto pt-10 lg:pb-10 scale-150" src="../assets/blog.svg" alt="">

    <div class="flex flex-col lg:flex-row justify-between py-8">
      <div class="lg:hidden mx-auto py-12">
        <img class="rounded-xl" src="../assets/blog-img.svg" alt="">
      </div>
      <div class="flex flex-col pr-8">
        <div class="relative">
          <p>Written by Bayu Prayogo</p>
          <h1 id="mun101" style="text-decoration-skip-ink: none" class="relative bg-transparent dark:text-dark-text text-start dark:decoration-dark-accent decoration-[#FFAFAF] text-6xl tracking-wide font-bold leading-tight text-primary">
            MUN 101
          </h1>
          <img class="absolute scale-150 right-12 top-1" src="../assets/index101-1.png" alt="">
          <img class="absolute scale-150 right-3 top-10" src="../assets/index101-2.png" alt="">
        </div>
  
        <p class="text-primary dark:text-dark-text lg:text-2xl font-medium text-justify lg:w-[52rem] pt-3 leading-relaxed">
          For almost 3 years ITS MUN Club has been found Many of them turned their backs away because “MUN is complicated,” Most of them quit because “there are too much rules,” they are missing out. For this reason, we have gathered our three years worth of knowledge to provide everything you need to know about MUN in “MUN 101” article.
        </p>
  
        <div class="flex items-center justify-start w-auto pt-5">
          <button @click.prevent="toBlog" class="hidden sm:flex dark:text-dark-text dark:border-dark-accent group text-md lg:text-2xl px-6 py-2 items-center justify-center border-2 rounded-full border-black duration-300 ease-in-out">
            Curious?
            <span class="flex items-center group-hover:pl-4 justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3 duration-300 ease-in-out">See here!</span>
          </button>
  
          <button
            @click.prevent="toBlog"
            class="flex sm:hidden dark:text-dark-text dark:border-dark-accent group text-sm px-6 py-4 items-center justify-center border-2 rounded-full border-black duration-300 ease-in-out"
          >
            See here!
          </button>
        </div>
      </div>
      <div class="hidden lg:block">
        <img class="rounded-xl" src="../assets/blog-img.svg" alt="">
      </div>
    </div>
    <img class="mx-auto pt-16 scale-150 pb-8" src="../assets/testimony.svg" alt="">
    <div class="py-12 flex flex-col gap-8 lg:gap-[80px]">
      <Testimony />
      <TestimonyReverse />
      <Testimony />
    </div>
    
    <img class="mx-auto pt-16 pb-8" src="../assets/mediapartner.svg" alt="">
    <div class="grid grid-cols-3 gap-3">
      <div class="bg-[#D9D9D9]">
        Logo Medpar
      </div>
      <div class="bg-[#D9D9D9]">
        Logo Medpar
      </div>
      <div class="bg-[#D9D9D9]">
        Logo Medpar
      </div>
    </div>
  </div>
</template>

<script>
import Testimony from '../components/Testimony.vue'
import TestimonyReverse from '../components/TestimonyReverse.vue'

export default {
    name: "IndexPage",
    data() {
        return {
            loading: false,
            toast: false,
        };
    },
    head() {
        return {
            ...this.$SEOMeta({
                metaTitle: "ITS MUN CLUB",
                metaImage: "https://ik.imagekit.io/drigoalexander/Group_2_au5V9a4X_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660770852868",
                metaDesc: "An ITS Educational Organization who aims to develop an engineer to be able simulate the procedures of the United Nations",
                metaKeywords: "ITS MUN CLUB , MUN , ITS ",
            }),
        };
    },
    created() {
        setTimeout(() => (this.toast = true), 1000);
        setTimeout(() => (this.toast = false), 2000);
    },
    methods: {
        toBlog() {
            this.loading = true;
            setTimeout(() => {
                this.$router.push("/mun-101");
                this.loading = false;
            }, 4000);
        },
    },
    components: { Testimony }
}
</script>
