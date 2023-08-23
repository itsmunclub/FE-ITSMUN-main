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
    <div v-if="showTermsModal" class="fixed inset-0 flex items-center justify-center bg-[#161F2AE5] bg-opacity-50 overflow-y-scroll overflow-x-auto">
      <div class="bg-white px-6 sm:py-6 py-10 rounded-lg max-w-lg overflow-y-auto">
        <div class="flex justify-end">
          <button class="px-2 py-2" @click="closeTermsModal">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 2L2 24M2 2L24 24" stroke="#4B6587" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <h2 class="text-center text-lg text-[#4B6587] font-bold mb-1">ITS MUN Club</h2>
          <h2 class="text-center text-lg text-[#9A5257] font-bold mb-4">Terms & Conditions</h2>
            <h3 class="text-lg font-semibold mb-1">1. Definition</h3>
              <ul class="list-disc pl-4">
                <li class="text-sm md:text-base font-normal">The Club: ITS Model United Nations Club (ITS MUN Club) is a student unit activity in ITS.</li>
                <li class="text-sm md:text-base font-normal">The Club Rules: The rules and regulations of the Club, as amended from time to time. A copy of the Club rules will be supplied to you with your application for membership and further copies will be made available on request.</li>
                <li class="text-sm md:text-base font-normal">Commitment Period: The minimum term you are committing to remain a member of the Club is 1 year period. </li>
              </ul>
            <h3 class="text-lg font-semibold mb-1">2. Membership</h3>
              <ul class="list-disc pl-4">
                <li class="text-sm md:text-base font-normal">By signing this Membership Application Form the member agrees to comply with these Terms and Conditions of Membership and the Club Rules.</li>
                <li class="text-sm md:text-base font-normal">You will only be permitted to use the Club facilities provided your membership is current.</li>
              </ul>
            <h3 class="text-lg font-semibold mb-1">3. Duration</h3>
              <ul class="list-disc pl-4">
                <li class="text-sm md:text-base font-normal">When you join the Club, you are agreeing to remain a member for the Commitment Period. Your Club membership will continue if you choose to renew your membership.</li>
              </ul>
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