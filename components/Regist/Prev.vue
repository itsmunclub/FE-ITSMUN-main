<template>
  <div class="w-full px-8">
    <form class="flex-col flex gap-y-6 font-montserrat text-grey" @submit.prevent="submitForm">
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="exp">Do you have any experience in MUN or English related-competition?</label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="exp" v-model="form.exp" required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="tellExp">If you have any, please tell us your previous experience in MUN or English related-competition!</label>
        <input class="w-full rounded-2xl py-3 px-4" type="tellExp" id="tellExp" v-model="form.tellExp" required>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="topic">What topic did you choose for your video and essay?</label>
       <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="topic" v-model="form.topic" required>
            <option value="">Select</option>
            <option value="Universal Healthcare">Universal Healthcare</option>
            <option value="Governmental and Cultural Censorship on All Modern Media">Governmental and Cultural Censorship on All Modern Media</option>
            <option value="Criminal Justice Reform">Criminal Justice Reform</option>
            <option value="Conscription">Conscription</option>
       </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="postLink">Please insert Your Instagram video post link here!</label>
        <input class="w-full rounded-2xl py-3 px-4" type="text" id="postLink" v-model="form.postLink" required>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="submitEssay">Submit your essay link here!</label>
        <input class="w-full rounded-2xl py-3 px-4" type="text" id="submitEssay" v-model="form.submitEssay" required>
      </div>
      <!-- <button type="submit">Submit</button> -->
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
