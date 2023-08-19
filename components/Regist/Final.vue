<template>
  <div class="w-full px-8">
    <form class="flex-col flex gap-y-5" @submit.prevent="submitForm">
      <div class="flex-col flex gap-y-3">
        <label class="font-montserrat text-grey font-bold" for="final">If you are accepted as a member, will you fulfill and take part in all ITS MUN Club Activities?</label>
        <select class="w-full rounded-3xl py-3 px-4 appearance-none text-gray-400" id="final" v-model="form.final" required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <!-- Add more options as needed -->
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
