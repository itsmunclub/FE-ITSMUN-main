<template>
    <div class="w-full px-8">
      <form class="flex-col flex gap-y-5" @submit.prevent="submitForm" enctype="multipart/form-data">
        <!-- Existing payment method dropdown -->
        <div class="flex-col flex gap-y-3">
          <label class="font-montserrat text-grey font-bold" for="payment">Payment Method</label>
          <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 appearance-none text-gray-400" id="payment" v-model="form.payment" required>
              <option value="" disabled>Select</option>
              <option value="Mandiri">Mandiri</option>
              <option value="GoPay">GoPay</option>
              <option value="ShopeePay">ShopeePay</option>
              <option value="OVO">OVO</option>
              <option value="LinkAja">LinkAja</option>
              <!-- Add more options as needed -->
          </select>
        </div>

        <div class="pb-8 pt-2">
          <p>Pay to the following:</p>
          <div class="py-2">
            <p class="font-semibold">Mandiri a/n SABHINA PUTRI MAHARANI 1400022816913</p>
            <p class="font-semibold">e-money a/n Sabhina Putri Maharani 081252684206</p>
          </div>
        </div>

        <!-- File input for payment proof -->
        <div class="flex-col flex gap-y-3">
          <label class="font-montserrat text-grey font-bold" for="paymentProof">Upload Payment Proof (Total fee for the webinar is Rp10.000)</label>
          <div class="border w-full bg-[#FFFFFF] rounded-2xl">
            <input type="file" id="paymentProof" @change="handleFileChange" accept=".jpg, .jpeg, .png, .pdf" class="px-4 py-3 border-none"/>
          </div>
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
