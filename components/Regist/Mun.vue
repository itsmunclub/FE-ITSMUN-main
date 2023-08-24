<template>
  <div class="w-full px-8">
    <form class="flex-col flex gap-y-6 font-montserrat text-grey" @submit.prevent="submitForm">
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="isMun">What is the chair's role during conference?</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="isMun" v-model="form.answer1" required>
            <option value="" disabled>Select</option>
            <option value="a.Moderate the council and evaluate each of the participants' performance">Moderate the council and evaluate each of the participants' performance</option> <!--bener-->
            <option value="b.Makes rules on how MUN council is supposed to run">Makes rules on how MUN council is supposed to run</option>
            <option value="c.Participants of the council">Participants of the council</option>
            <option value="d.Open a debate">Open a debate</option>
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="intMun">What is the participants of MUN called?</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="intMun" v-model="form.answer2" required>
            <option value="" disabled>Select</option>
            <option value="a.Chair">Chair</option>
            <option value="b.Committee">Committee</option>
            <option value="c.Delegates">Delegates</option> <!--bener-->
            <option value="d.Moderator">Moderator</option>
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="paperMun">A document that contains basic information about the council and topics for the conference is called...</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="paperMun" v-model="form.answer3" required>
            <option value="" disabled>Select</option>
            <option value="a.Position Paper">Position Paper</option>
            <option value="b.Study guide">Study guide</option> <!--bener-->
            <option value="c.Draft Resolution">Draft Resolution</option> 
            <option value="d.Working Paper">Working Paper</option>
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="typeMun">A document that written by participants of their country's stances regarding the topic...</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="typeMun" v-model="form.answer4" required>
            <option value="" disabled>Select</option>
            <option value="a.Draft Resolution">Draft Resolution</option>
            <option value="b.Working Paper">Working Paper</option> 
            <option value="c.Position Paper">Position Paper</option> <!--bener-->
            <option value="d.Study">Study</option>
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="roleMun">Which council is considered with generally 'tame' topics and usually classify as "beginner-intermediate" councils?</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="roleMun" v-model="form.answer5" required>
            <option value="" disabled>Select</option>
            <option value="a.Intermediate-Political council">Intermediate-Political council</option>
            <option value="b.Low-Political council">Low-Political council</option> <!--bener-->
            <option value="c.Beginner-Political council">Beginner-Political council</option>
            <option value="d.High-Political council">High-Political council</option> 
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="roleMun">Which council is considered with clear political agenda and contrasting beliefs, usually classify as advance councils?</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="roleMun" v-model="form.answer6" required>
            <option value="" disabled>Select</option>
            <option value="a.Intermediate-Political council">Intermediate-Political council</option>
            <option value="b.Low-Political council">Low-Political council</option>
            <option value="c.Beginner-Political council">Beginner-Political council</option>
            <option value="d.High-Political council">High-Political council</option> <!--bener-->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="drafMun">Who will present the Draft Resolution?</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="drafMun" v-model="form.answer7" required>
            <option value="" disabled>Select</option>
            <option value="a.Chair">Chair</option>
            <option value="b.Signatories">Signatories</option>
            <option value="c.Sponsor of the Resolution">Sponsor of the Resolution</option> <!--bener-->
            <option value="d.Delegates">Delegates</option>
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="diffMun">Which is the correct way to respond during roll call</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="diffMun" v-model="form.answer8" required>
            <option value="" disabled>Select</option>
            <option value="a.Present and Voting">"Present and Voting"</option> <!--bener-->
            <option value="b.Abstain">"Abstain"</option>
            <option value="c.Raises placard">Raises placard</option>
            <option value="d.Here">"Here"</option>
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="yieldMun">When can Participants give general speeches about any area of the topic?</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="yieldMun" v-model="form.answer9" required>
            <option value="" disabled>Select</option>
            <option value="a.General Speaking List">General Speaking List</option> <!--bener-->
            <option value="b.Unmoderated Caucus">Unmoderated Caucus</option>
            <option value="c.Consultation Of The Whole">Consultation Of The Whole</option>
            <option value="d.Amendments">Amendments</option>
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="modMun">Which is not the correct way to yield time?</label>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="modMun" v-model="form.answer10" required>
            <option value="" disabled>Select</option>
            <option value="a.Back to chair">Back to chair</option> 
            <option value="b.To continue the speech">To continue the speech</option> <!--bener-->
            <option value="c.To questions">To questions</option>
            <option value="d.To other delegates">To other delegates</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['form'],
  methods: {
    nextStep() {
      // Perform any form validation if needed
      // Emit the current step's form data to the parent component (MultiStepForm.vue)
      this.$emit('updateFormData', this.form);
      // Move to the next step
      this.$emit('next');
    },
  },
};
</script>
