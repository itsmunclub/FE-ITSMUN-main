<template>
  <div class="w-full px-8">
    <form class="flex-col flex gap-y-6" @submit.prevent="submitForm">
      <div class="flex-col flex gap-y-20">
        <label class="font-montserrat text-grey font-bold" for="final">If you are accepted as a member, will you fulfill and take part in all ITS MUN Club Activities?</label>
        <select class="w-full rounded-3xl py-3 px-4 appearance-none text-gray-400" id="final" v-model="form.final" required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <!-- Add more options as needed -->
        </select>
      </div>
    <!-- Checkbox to Open Terms and Conditions Modal -->
    <label class="flex items-center cursor-pointer">
      <input type="checkbox" class="form-checkbox mr-2" v-model="form.termsAgreed" required>
      <span>I accept terms and conditions for this form. </span>
    </label>
    <p class="mt-2">
      <span class=" font-montserrat font-bold text-[#9A5257] cursor-pointer" @click="openTermsModal">Terms & Conditions</span>
    </p>
    </form>
    <!-- Terms and Conditions Modal -->
    <div v-if="showTermsModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg max-w-lg overflow-y-auto">
        <h2 class="text-lg font-semibold mb-4">Terms and Conditions</h2>
        <!-- Replace with your terms and conditions content -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <div class="mt-6 flex justify-end">
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="closeTermsModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['form'],
  data() {
    return {
      showTermsModal: false,
    };
  },
  methods: {
    nextStep() {
      // Perform any form validation if needed
      // Emit the current step's form data to the parent component (MultiStepForm.vue)
      this.$emit('updateFormData', this.form);
      // Move to the next step
      this.$emit('next');
    },
    openTermsModal() {
      this.showTermsModal = true;
    },
    // Method to close the terms and conditions modal
    closeTermsModal() {
      this.showTermsModal = false;
    },
  },
};
</script>