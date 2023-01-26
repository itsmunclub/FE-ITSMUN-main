<template>
  <div class="w-full h-full relative">
    <nuxt-link to="/">
      <div
        :class="{
          hidden: !showNavbar,
          flex: showNavbar,
        }"
        class="fixed left-4 bottom-4 font-bold text-primary dark:text-dark-text hover:px-6 hover:py-6 px-4 py-4 duration-500 ease-in-out group"
      >
        <span
          class="opacity-0 group-hover:opacity-100 duration-500 ease-in-out cursor-pointer"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z"
              fill="#33363F"
            />
          </svg>
        </span>
        Back
      </div>
    </nuxt-link>

    <div
      :class="{
        'translate-x-full': !toast,
        'translate-x-0': toast,
        'opacity-0': !toast,
        'opacity-100': toast,
      }"
      class="fixed right-4 bottom-4 dark:bg-dark-accent bg-primary rounded-lg hidden md:flex gap-6 px-4 py-6 items-start justify-between duration-500 ease-in-out"
    >
      <p class="w-auto p text-[#ececec] dark:text-dark-bg text-xs">
        Don't forget to register <br />
        yourself in MUN 101
      </p>

      <svg
        @click="close"
        width="20"
        height="20"
        class="stroke-2 group"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="rotate-[45deg] origin-center group-hover:rotate-0 duration-500 ease-in-out stroke-white dark:stroke-dark-bg"
          d="M18 6L6 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="rotate-[-45deg] origin-center group-hover:rotate-0 duration-500 ease-in-out stroke-white dark:stroke-dark-bg"
          d="M6 6L18 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div
      class="flex flex-col gap-10 items-center justify-center w-[calc(100vw-30%)] mx-auto max-w-7xl"
    >
      <article>
        <div class="flex flex-col gap-10 md:gap-24">
          <h4 class="text-center">3 MIN READ</h4>

          <div class="flex flex-col gap-4 items-center justify-center">
            <h1
              style="text-decoration-skip-ink: none"
              class="underline relative bg-transparent underline-offset-[-35%] decoration-[1rem] dark:text-dark-text dark:decoration-dark-accent decoration-[#FFAFAF] under text-center text-5xl md:text-6xl tracking-wide font-bold leading-relaxed text-primary"
            >
              <strong> MUN 101 : EVERYTHING <br />YOU NEED TO KNOW</strong>
            </h1>
            <div
              class="flex flex-col md:flex-row gap-4 items-center text-primary font-bold dark:text-dark-text"
            >
              <h1 class="uppercase">Bayu Prayogo</h1>
              <div class="w-3 h-3 rounded-full bg-primary"></div>
              <h1 class="uppercase">THURSDAY, 18 August 2022</h1>
              <div class="w-3 h-3 rounded-full bg-primary"></div>
              <h1 class="uppercase">{{ viewers }} Readers</h1>
            </div>
          </div>

          <div
            class="prose dark:prose-h2:text-dark-text prose-img:pb-20 prose-h2:text-primary prose-pre:py-10 md:prose-pre:flex prose-pre:pr-24 prose-p:text-justify dark:prose-h4:text-dark-text prose-h4:py-10 prose-h4:text-primary prose-h4:underline prose-h4:font-semibold prose-h4:text-lg dark:prose-h1:text-dark-text dark:prose-li:text-dark-text dark:prose-p:text-dark-text prose-li:text-primary prose-h1:py-14 prose-p:text-primary prose-h1:uppercase prose-h1:text-primary prose-blockquote:my-10 px-10"
          >
            <h1>Chapter 1 : What is MUN?</h1>
            <p>
              MUN (Model United Nations) is a conference-like competition where
              one plays the role of a diplomat. You could be a nation’s
              delegate, an important historical/government figure, or even
              representatives of foreign bodies; NGOs, press, etc. to discuss
              regarding various topics and problems with other participants and
              create a draft resolution.
            </p>

            <p>In MUNs you can expect to master these skills:</p>
            <ul>
              <li>Communication; diplomacy, public speaking, negotiations</li>
              <li>Leadership</li>
              <li>Academics and Research</li>
              <li>Networing</li>
            </ul>

            <h3>Why MUN? We’re an engineering institution!</h3>
            <ul>
              <li>Developing soft skills</li>
              <li>Getting out of your comfort zone</li>
              <li>
                Networking and getting to know cool people from other
                universities
              </li>
            </ul>

            <blockquote>
              <h3>Key Terms</h3>
              <ul>
                <li>
                  <strong> Chairs</strong>: They are the moderators of the
                  council and evaluate your performance.
                </li>
                <li>
                  <strong>Delegate</strong>: The participants of the council.
                  Study Guide: Written by the chairs, contains basic information
                  about the topic and the council.
                </li>
                <li>
                  <strong> Placcards</strong> You raise your placard to make a
                  point or a motion.
                </li>
              </ul>
            </blockquote>

            <h1>Chapter 2 : What in the MUN?</h1>
            <h2>Study Guide - What are the contents?</h2>
            <p>
              Generally, UN councils can be differed as low-pol and high-pol.
              Low-pol is usually considered as beginner friendly since there
              isn’t many politic and contention happen there. Example of low-pol
              such as UNHCR and UNESCO. As for high-pol council, there are many
              political things that delegates need to understand. The examples
              are UNSC and Crisis. However, in some conferences you might be
              able to find unique councils or international bodies such as
              African Union (AU), G20, European Union (EU), and Asean. The main
              thing that delegates need to understand is to make sure their
              solutions and flow of debate are in line with the mandate of the
              council that they’re in.
            </p>
            <ul>
              <li>Mandates</li>
              <ul>
                <li>
                  A mandate is the authority to carry out policy or course of
                  action. The mandate of a council directly influences the
                  solution that a delegate can bring into the debate, i.e on one
                  hand a delegate may bring foward an economic sanction as a
                  part of their solution in one council (UNSC) on the other
                  hand, a delegate might only be able to propose a
                  recommendation as their main solution in other.
                </li>
              </ul>
            </ul>
            <h2>How the MUN?</h2>
            <ul>
              <li>
                Roll Call, all delegates will be called by chair to confirm
                their presence and voting.
              </li>
              <li>
                General Speaker List (GSL), usually consist of 90 seconds speech
                where delegate can present their opinion regarding the topic.
              </li>
              <li>
                Formal debate, delegates need to deliver their arguments and
                propose their solutions regarding spesific motion that has been
                proposed and voted upon before.
              </li>
              <ol>
                <li>
                  Moderated Caucus (MC), delegates need to deliver their
                  argument sequentially and same time constrain for each
                  speaker.
                </li>
                <li>
                  Unmoderated Caucus (UMC), debate forum where delegates are
                  free to express their argument without any rules, except to
                  keep their diplomatic manner and respect each other.
                </li>
                <li>
                  Consultation of The Whole (COTW), delegates need to speak
                  after one another where the delegate who speak is given the
                  privilege to choose next delegate to speak. There will no time
                  constrain for each speaker.
                </li>
              </ol>
              <li>
                Working Paper (WP), a document which consist of compilation of
                all issues and solutions from delegates and there’s no strict
                formatting
              </li>
              <li>
                Draft Resolution (DR), a formal document which consist solutions
                and will be the final result of conference
              </li>
              <li>
                DR Voting, DR will be presented by sponsor(s) and there will be
                a QnA session. There’s a possibility of amendments if delegates
                wanting to change anything in DR. Then, council can proceed to
                DR Voting as the last stage.
              </li>
            </ul>

            <img src="../assets/flow.png" />

            <h2>Why the MUN?</h2>
            <p>
              MUN is aimed to discuss a problem thoroughly from root causes,
              challenges, status quo, and past actions. From there, delegates
              are expected to formulate possible solutions that are in line with
              UN council’s mandate. The solutions will be collected through
              working paper. Then, it will be finalized and presented as Draft
              of Resolution as the end result of a conference.
            </p>
            <p>
              If you want to get a more comprehensive explanation, you can join
              the MUN 101 event on <strong> September 4th 2022</strong>. This is
              perfect to answer your concerns! We will provide an extensive
              explanation for the entirety of the MUN procedures. So, what are
              you waiting for? register yourself for MUN 101 session.
            </p>
          </div>
        </div>
      </article>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdp0dYyuUGoTjkaCc36ExBYCicDG-tC8UX63qKwAe2SLShk1Q/viewform"
        target="_blank"
        class="cursor-pointer hidden sm:flex dark:text-dark-text dark:border-dark-accent group text-md md:text-5xl px-6 py-4 items-center justify-center border-2 rounded-full border-black duration-300 ease-in-out"
      >
        Interested?
        <span
          class="flex items-center group-hover:pl-4 justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3 duration-300 ease-in-out"
          >Join us here!</span
        >
      </a>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdp0dYyuUGoTjkaCc36ExBYCicDG-tC8UX63qKwAe2SLShk1Q/viewform"
        target="_blank"
        class="cursor-pointer flex sm:hidden dark:text-dark-text dark:border-dark-accent group text-sm px-6 py-4 items-center justify-center border-2 rounded-full border-black duration-300 ease-in-out"
      >
        Join us here!
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'blog',

  data() {
    return {
      toast: false,
      showNavbar: true,
      lastScrollPosition: 0,
      viewers: null,
    }
  },

  async fetch() {
    const config = {
      method: 'get',
      url: `https://plausible.io/api/v1/stats/aggregate?site_id=itsmunclub.space&period=6mo&filters=event:page==/mun-101`,
      headers: {
        Authorization:
          'Bearer NrWiTfBKhUO75EqPmTeMT4pkLTIaEUaa4ku-PWsWM7e97AI1pW3Vut0_wcRYD8XH',
      },
    }
    await this.$axios(config).then((res) => {
      this.viewers = res.data.results.visitors.value
      console.log(res.data.results.visitors.value)
    })
  },
  head() {
    return {
      ...this.$SEOMeta({
        urlSite: 'mun-101',
        metaTitle: 'MUN 101',
        metaImage:
          'https://ik.imagekit.io/drigoalexander/Group_2_au5V9a4X_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660770852868',
        metaDesc:
          'MUN (Model United Nations) is a conference-like competition where one plays the role of a diplomat. in this blog, Bayu Prayogo will tell you everything you need to know about MUN before joining the conference',
        metaKeywords: 'MUN 101 , Basic MUN',
      }),
    }
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    close() {
      this.toast = false
    },
  },
  created() {
    setTimeout(() => (this.toast = true), 1000)
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
