<template>
  <div class="w-full px-8">
    <form class="flex-col flex gap-y-6" @submit.prevent="submitForm">
      <!-- Existing payment method dropdown -->
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="payment">Payment Method</label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="payment" v-model="form.payment" required>
            <option value="">Select</option>
            <option value="Mandiri">Mandiri</option>
            <option value="BCA">BCA</option>
            <option value="BNI">BNI</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      
      <!-- File input for payment proof -->
      <div class="flex-col flex gap-y-3">
        <label class="font-montserrat text-grey font-bold" for="paymentProof">Upload Payment Proof</label>
        <!-- <input type="file" id="paymentProof" @change="handleFileChange" accept=".jpg, .jpeg, .png, .pdf" class="file-input file-input-bordered w-full max-w-xs" /> -->
        <input type="file" class="file-input w-full max-w-xs" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['form'],
  methods: {
    handleFileChange(event) {
      // Update the paymentProofFile directly in the formData object
      this.form.paymentProofFile = event.target.files[0];
    },
    nextStep() {
      // Emit the optional choice to the parent component (MultiStepForm.vue)
      this.$emit('updateFormData', this.form);
      // Move to the next step
      this.$emit('next');
    },
  },
};
</script>
