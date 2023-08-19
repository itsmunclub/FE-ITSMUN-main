<template>
  <div class="w-auto h-full relative lg:mx-32">
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

    <img class="mx-auto my-10 pt-24 lg:pb-10 scale-150" src="../assets/blog.svg" alt="">

    <div class="flex flex-col lg:flex-row justify-between py-8">
      <div class="lg:hidden mx-auto py-12">
        <img class="rounded-xl scale-125" src="../assets/blog-img.svg" alt="">
      </div>
      <div class="flex flex-col pr-8 relative">
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
  
        <div class="flex items-center justify-start w-auto pt-5 z-10">
          <button @click.prevent="toBlog" class="hidden sm:flex bg-dark-bg text-dark-text dark:bg-light-bg dark:text-light-text dark:border-dark-accent group text-md lg:text-2xl px-6 py-2 items-center justify-center rounded-full duration-300 ease-in-out">
            Curious?
            <span class="flex items-center group-hover:pl-4 justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3 duration-300 ease-in-out">See here!</span>
          </button>
  
          <button
            @click.prevent="toBlog"
            class="flex sm:hidden dark:text-dark-text dark:border-dark-accent group text-sm px-6 py-4 items-center justify-center rounded-full duration-300 ease-in-out"
          >
            See here!
          </button>
        </div>
        <img src="../assets/flower.svg" class="absolute z-0 -bottom-[72px] left-[104px] lg:left-44 scale-30 lg:scale-50" alt="">
      </div>
      <div class="hidden lg:inline">
        <img class="rounded-xl scale-110" src="../assets/blog-img.svg" alt="">
      </div>
    </div>
    <img class="mx-auto my-10 pt-16 scale-150 pb-8" src="../assets/testimony.svg" alt="">
    <div class="py-12 flex flex-col gap-28 lg:gap-[128px]">
      <Testimony :name="testimony1[0]" :department="testimony1[1]" :achievement1="testimony1[2]" :achievement2="testimony1[3]" :achievement3="testimony1[4]" :words="testimony1[5]"/>
      <TestimonyReverse :name="testimony2[0]" :department="testimony2[1]" :achievement1="testimony1[2]" :achievement2="testimony1[3]" :achievement3="testimony1[4]" :words="testimony2[5]"/>
      <Testimony2 :name="testimony3[0]" :department="testimony3[1]" :achievement1="testimony1[2]" :achievement2="testimony1[3]" :achievement3="testimony1[4]" :words="testimony3[5]"/>
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
import Testimony2 from '../components/Testimony2.vue'
import TestimonyReverse from '../components/TestimonyReverse.vue'

export default {
    name: "IndexPage",
    data() {
        return {
            loading: false,
            toast: false,
            testimony1: ["M. Haikhal Fazad", "Chemistry 2021", 'ITS MUN Club International Delegation for Singapore MUN 2023', 'Honorable Mention Indonesia MUN 2023', 'Honorable Mention Best Position Paper JAVAMUN 2022', "There are so many things that can be developed and obtained in ITS MUN! First of all, public speaking skills will certainly improve and not as scary as it used to be. In MUN, it's not only about English and speaking, we can also develop critical thinking and problem solving skills here by dealing with global issues. Things like this are found when you want to join MUN and have to do research and position papers."],
            testimony2: ["Satryo Akbar Nurizki", "Civil Engineering 2022", 'ITS MUN Club International Delegation for Singapore MUN 2023', 'Verbal Commendation Jakarta International MUN 2022', 'Verbal Commendation Makassar MUN', "ITS MUN Club is a perfect place either for those who claim themselves as jack of all trades or master of one because you can be the master of all trades here! Not only will you achieve a higher ceiling to your English proficiency, but also to your public speaking and critical thinking. Besides, the world of Model United Nations is an accommodating place to plentiful interests. Keen to history and politics? Go for UNSC, love the planet and the environment? Go for UNEP or COP, excited to economy? Go for ECOSOC or G20, and so much more! Not to mention that your idea is not only visible through the position paper you wrote, but also audible during the council where you will meet and exchange ideas with great people!"],
            testimony3: ["Nailah Fiorenza F.", "Urban and Regional Planning 2022", 'Best Delegate Impactional MUN 2023', '3rd Place Smart City Division GemasTIK XV 2022', 'Verbal Commendation SEINMUN 2023', "Joining ITS MUN Club will benefit you a lot. By participating in many MUN simulations, you may first improve your English abilities, and as you work to address international issues, your mindset will expand as you get new perspectives on the world. Another advantage is that the ITS MUN Club is a great place to make a lot of amazing friends and excellent mentors who will motivate you to perform at your best not only in the MUN circumstances but also throughout your university experience."],
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
    components: { Testimony, Testimony2, TestimonyReverse }
}
</script>
