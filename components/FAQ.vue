<template>
  <div class="w-full h-full flex justify-center flex-col items-center gap-20">
    <div class="flex flex-col gap-6 items-center justify-center">
      <h4>you have any questions?</h4>
      <h3>FAQ</h3>
    </div>

    <div
      class="flex flex-col md:flex-row flex-no-wrap md:flex-wrap gap-14 justify-center items-start"
    >
      <div
        v-for="(el, idx) in FAQ"
        :key="idx"
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 rounded-box w-full md:w-[40%] bg-[#252A34] text-[#9BA3B1]"
      >
        <div class="collapse-title text-lg font-medium">
          {{ el.question }}
        </div>
        <div class="collapse-content" v-html="el.answer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FAQ: [
        {
          question:
            "I've never heard about ITS MUN Club before, so What is ITS MUN Club?",
          answer:
            '<p>ITS MUN Club is a professional student club ran by dedicated undergraduate students with an interest in international relations and diplomacy.</p>',
        },
        {
          question:
            'After joining ITS MUN Club, what are the things that I will get?',
          answer:
            '<p>You will be able to gain these benefits through ITS MUN Club programs:</p> <br/> <ul><li>Updates about upcoming MUN competitions (more than 10+ competitions per year!) </li> <br/> <li> MUN Training and mentoring</li><br/> <li>Personal Branding and Networking with Indonesia’s best MUNer from UI, ITB, UGM, UB, and many more! </li> <br/> <li> Soft skill development such as Professionalism, Critical Thinking, Problem-Solving, Analysis, creative writing, negotiations, Leadership and more high quality workshops!</li><br/>  <li> E-Certificates</li> </ul > ',
        },
        {
          question:
            'When will ITS MUN Club open their new members recruitment?',
          answer:
            '<p>ITS MUN Club member recruitment will be open from 25 August until 17.00 WIB of 8 September 2022. Be sure to mind the dates!</p>',
        },
        {
          question:
            'If I have never had MUN experience before, can I register?',
          answer:
            '<p>Of course you can still join! We are open to anyone as long as they have the willingness to learn. Also, don’t worry because we will provide a “MUN 101” session that will explain the basic things you need to know about MUN.</p>',
        },
        {
          question:
            'Where can I register to become a member of the ITS MUN Club?',
          answer:
            '<p>You can register by <a href="#register" class="text-white font-bold"> clicking here!</a> </p>',
        },
      ],
    }
  },
}
</script>

<style></style>
