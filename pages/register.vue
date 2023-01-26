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
      class="flex flex-col gap-10 items-center justify-center w-[calc(100vw-30%)] mx-auto max-w-7xl"
    >
      <article>
        <div class="flex flex-col gap-24">
          <div class="flex flex-col gap-4 items-center justify-center">
            <h1
              style="text-decoration-skip-ink: none"
              class="underline relative bg-transparent underline-offset-[-35%] decoration-[1rem] dark:text-dark-text dark:decoration-dark-accent decoration-[#FFAFAF] under text-center text-4xl md:text-5xl tracking-wide font-bold leading-relaxed text-primary"
            >
              <strong> ITS MUN CLUB <br />MEMBER REGISTRATION</strong>
            </h1>
          </div>

          <div
            class="prose dark:prose-a:text-dark-text dark:prose-strong:text-dark-text dark:prose-em:text-dark-text dark:prose-h2:text-dark-text prose-img:pb-20 prose-h2:text-primary prose-pre:py-10 md:prose-pre:flex prose-pre:pr-24 prose-p:text-justify dark:prose-h4:text-dark-text prose-h4:py-10 prose-h4:text-primary prose-h4:underline prose-h4:font-semibold prose-h4:text-lg dark:prose-h1:text-dark-text dark:prose-li:text-dark-text dark:prose-p:text-dark-text prose-li:text-primary prose-h1:py-14 prose-p:text-primary prose-h1:uppercase prose-h1:text-primary prose-blockquote:my-10"
          >
            <h1>guidelines</h1>

            <h3>Member requirements</h3>
            <p>
              The recruitees must meet these requirements to be a part of ITS
              MUN Club 2022/2023.
            </p>

            <ul>
              <li>ITS students batch 2020 , 2021 and 2022</li>
              <li>Having good English public speaking skills</li>
              <li>Having a coherent way of thinking</li>
              <li>Having basic knowledge regarding MUN</li>
              <li>
                Willing to engage in participating in MUNs and every ITS MUN
                Club activities
              </li>
            </ul>

            <h3>Selection Process</h3>
            <ul>
              <li>
                August 25 - September 8 , 2022 :
                <em>
                  <strong>
                    <a href="#short-video"> Short Video Assignment</a> ,
                    <a href="#short-essays">Short Essays Assignment</a> ,
                    <a href="#basic-knowledge">
                      MUN Basic Knowledge Test</a
                    ></strong
                  >
                </em>
              </li>
              <li>
                September 10, 2022 :
                <em>
                  <strong> Next Stage Announcement</strong>
                </em>
              </li>
              <li>
                September 11 - September 13 , 2022 :
                <em>
                  <strong> Interview</strong>
                </em>
              </li>
              <li>
                September 15 , 2022 :
                <em>
                  <strong> New Member Announcement</strong>
                </em>
              </li>
            </ul>

            <h1>First Stage</h1>
            <ul>
              <li>
                All of the assignments in the first stage will be submitted in
                the application form:
                <a href=" https://bit.ly/MUNApplication2022" target="_blank">
                  https://bit.ly/MUNApplication2022</a
                >
              </li>
              <li>
                The MUN Basic Knowledge Test will also be available in the
                application form.
              </li>
              <li>
                Recruitees must submit the application form in between August
                25, 2022 - September 8,2022.
              </li>
            </ul>
            <blockquote>
              <h3>Topics</h3>
              <ul class="list-none">
                <li>
                  <strong> Illegal Labour</strong>
                  <ul>
                    <li>
                      <strong> Video</strong> : Illegal Labor is still Happening
                      in Developing Countries
                    </li>
                    <li>
                      <strong> Essay</strong> : They are the moderators of the
                      council and evaluate your performance.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong> EFFORTS TO FIGHT RACIAL INJUSTICE</strong>
                  <ul>
                    <li>
                      <strong> Video</strong> : Social Justice Warrior: Woke
                      Phenomenon or Internet Debaters?
                    </li>
                    <li>
                      <strong> Essay</strong> : The Effect of Colonialism to the
                      Global Knowledge Gaps
                    </li>
                  </ul>
                </li>

                <li>
                  <strong> FEMINISM</strong>
                  <ul>
                    <li>
                      <strong> Video</strong> : Gender equality, Will It Ever Be
                      Achieved?
                    </li>
                    <li>
                      <strong> Essay</strong> : Lack of Access to Education for
                      Women in Developing Countries
                    </li>
                  </ul>
                </li>
              </ul>
            </blockquote>
            <h2 id="short-video">
              Short Video Assignment Details - First Stage Assignment
            </h2>
            <p>How to do the short video assignment:</p>
            <ul>
              <li>
                Choose one out of three <a href="#topics"> topics</a> that are
                provided.
              </li>
              <li>
                Make an English speech video conveying your opinion about the
                topic you have chosen. The duration of the video is 1.5 minutes.
              </li>
              <li>
                Upload your video on your instagram with the provided caption
                and hashtags. Make sure your instagram is available for public.
              </li>
              <li>
                Submit the link of your instagram post in the application form.
              </li>
            </ul>
            <h2 id="short-essays">
              Short Essays Assignment Details - First Stage Assignment
            </h2>
            <p>How to do the short essays assignment:</p>
            <ul>
              <li>Download the essay template provided.</li>
              <li>
                There are 2 questions provided, answer each question with a
                short essay. The lenght of the essay should be up to 250 words.
              </li>
              <li>
                The Essay format is on A4 Paper, Times New Roman 12 fonts, 1.15
                spacing, normal margin (use the template that are already
                provided).
              </li>
              <li>Upload your essay in the application form as a pdf file.</li>
            </ul>

            <h2 id="basic-knowledge">MUN Basic Knowledge Test Details</h2>
            <p>How to do the Knowledge Test:</p>
            <ul>
              <li>The test will be provided in the application form.</li>
              <li>
                There will be 15 questions provided regarding MUN basic
                knowledge & UN Bodies.
              </li>
            </ul>
            <h1>Second Stage</h1>
            <ul>
              <li>
                The recruitees who proceed to the second stage will be
                interviewed by the ITS MUN Club staffs.
              </li>
              <li>
                The interview will be held on September 11- September 13, 2022.
                The detailed time will be announced on further notice.
              </li>
            </ul>
          </div>
        </div>
      </article>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdlzyT3E6ru-ucdjBudO0FHlke9ZmlMx-yOuShBOjrwA7nMug/viewform"
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
        href="https://docs.google.com/forms/d/e/1FAIpQLSdlzyT3E6ru-ucdjBudO0FHlke9ZmlMx-yOuShBOjrwA7nMug/viewform"
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
      showNavbar: true,
      lastScrollPosition: 0,
      toast: false,
    }
  },
  head() {
    return {
      ...this.$SEOMeta({
        urlSite: 'register',
        metaTitle: 'Member Registration',
        metaImage:
          'https://ik.imagekit.io/drigoalexander/Group_2_au5V9a4X_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660770852868',
        metaDesc: 'Register yourself as a new member of ITS MUN Club here!',
        metaKeywords: 'ITS MUN Club Member , ITS MUN Club Member Registration',
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
