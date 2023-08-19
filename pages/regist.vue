<template>
  <div>
    <div class="flex flex-row items-center gap-x-2 pb-10 font-montserrat text-gray font-bold">
      <svg v-if="currentStep !== 1" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.39642 10.1903L1 5.79389L5.39642 1.39746" stroke="black" stroke-width="1.46547" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <button v-if="currentStep !== 1" @click="prevStep">{{ previousStepName }}</button>
    </div>
    <!-- Navigation bar -->
    <nav class="mb-16">
      <ul class="flex flex-row gap-x-2">
        <li class="flex flex-row items-center gap-x-2 text-[#9A5257] font-montserrat text-grey font-bold text-sm whitespace-nowrap mx-auto" v-for="(stepName, index) in stepNames" :key="index">
          <!-- Use a method to set the currentStep when a step button is clicked -->
          <button class="flex flex-row gap-x-2" @click="handleStepClick(index + 1)" :class="{ active: (index + 1) === currentStep }">
          <div class="w-6 h-6 rounded-full text-[#9A5257] bg-transparent border-[#9A5257] border flex items-center justify-center">
          {{ index + 1 }}
          </div>
            {{ stepName }}
          </button>
          <svg v-if="index != 3 " height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.3252 5.7609L3.57674 3.50936L1.3252 1.25781" stroke="#9A5257" stroke-width="0.900618" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>          
        </li>
      </ul>
    </nav>
    <!-- Render the current step component based on the currentStep value -->
    <component :is="getCurrentStepComponent" :form="formData" @updateFormData="updateFormData" />


    <!-- Navigation buttons -->
    <div class="px-8 py-8 font-montserrat text-white font-bold text-xl">
      <button class="w-full px-8 py-4 rounded-3xl bg-[#9A5257]" v-if="currentStep !== totalSteps" @click="handleNext">Proceed</button>
      <button class="w-full px-8 py-4 rounded-3xl bg-[#9A5257]" v-else @click="submitForm">Enroll</button>
    </div>
    <!-- Confirmation Modal -->
    <div v-if="showConfirmationModal" class="min-h-screen w-full absolute bg-red">
      <div class="modal-content">
        <p>Proceed to the payment page?</p>
        <div class="modal-buttons">
          <button @click="confirmProceed">Yes</button>
          <button @click="cancelProceed">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import General from '../components/Regist/General.vue';
import Prev from '../components/Regist/Prev.vue';
import Mun from '../components/Regist/Mun.vue';
import Final from '../components/Regist/Final.vue';
import Payment from '../components/Regist/Payment.vue';

export default {
  components: {
    General,
    Prev,
    Mun,
    Final,
    Payment,
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 5,
      formData: {
        // Initialize form fields with default values if needed
        name: '',
        email: '',
        studentId: '',
        lineId: '',
        phoneNumber: '',
        faculty: '',
        major: '',
        exp: '',
        tellExp: '',
        topic: '',
        postLink: '',
        submitEssay: '',
        isMun: '',
        intMun: '',
        paperMun: '',
        typeMun: '',
        roleMun: '',
        diffMun: '',
        yieldMun: '',
        modMun:'',
        unmodMun: '',
        drafMun: '',
        paymentProofFile: '',
        final: ''
        // Add other form fields as needed
      },
      stepNames: ['General Information', 'Previous Experience', 'MUN Related', 'Payment', 'Final'],
      showConfirmationModal: false,
    };
  },
  methods: {
    nextStep() {
      // Get the current step's form data
      const currentStepData = this.formData;
      // Validate the data if needed for this step
      // ...

      // Move to the next step
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    handleNext() {
      if (this.currentStep === 3) { // Adjust the step index accordingly
        this.showConfirmationModal = true; // Show the confirmation modal
        console.log(this.showConfirmationModal);
      } else {
        this.nextStep();
      }
    },
    handleStepClick(step) {
      if (step === 4) { // Adjust the step index accordingly
        this.showConfirmationModal = true; // Show the confirmation modal
        console.log(this.showConfirmationModal);
      } else {
        this.currentStep = step;
      }
    },
    confirmProceed() {
      this.showConfirmationModal = false;
      this.nextStep(); // Proceed to the payment step
    },
    cancelProceed() {
      // this.currentStep = this.totalSteps; // Redirect to the final step
      if(this.formData.name && this.formData.email && this.formData.studentId && this.formData.lineId && this.formData.phoneNumber && this.formData.faculty && this.formData.major && this.formData.exp && this.formData.tellExp && this.formData.topic && this.formData.postLink && this.formData.submitEssay && this.formData.isMun && this.formData.intMun && this.formData.paperMun && this.formData.typeMun && this.formData.roleMun && this.formData.diffMun && this.formData.yieldMun && this.formData.modMun && this.formData.unmodMun && this.formData.drafMun){
        this.showConfirmationModal = false;
        this.currentStep = this.totalSteps;
        console.log(this.formData)
      } else {
        this.showConfirmationModal = false;
        console.log(this.formData)
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    // Method to handle the user's choice in the optional step
    updateFormData(updatedData) {
      // Update the formData object with the updated form data from the current step
      this.formData = { ...this.formData, ...updatedData };
    },
    updatePaymentProof(paymentProofFile) {
      this.formData.form.paymentProofFile = paymentProofFile;
    },
    submitForm() {
      // Perform the actual form submission using the formData object
      console.log(this.formData);

      // After successful submission, you might want to reset the form data and navigate to a success page or display a confirmation message.
    //   this.formData = {
    //     exp: '',
    //     tellExp: '',
    //     // Reset other form fields as needed
    //   };

      // Reset the currentStep to the first step to restart the form
      this.currentStep = 1;
    },
    goToStep(step) {
      this.currentStep = step;
    },
  },
  computed: {
    steps() {
      // Get the list of step names from the component object
      return Object.keys(this.stepNames);
    },
    getCurrentStepComponent() {
      // Map the current step to the corresponding component
      switch (this.currentStep) {
        case 1:
          return 'General';
        case 2:
          return 'Prev';
        case 3:
          return 'Mun';
        case 4:
          return 'Payment';
        case 5:
          return 'Final';
        default:
          return null;
      }
    },
        previousStepName() {
      if (this.currentStep > 1) {
        return this.stepNames[this.currentStep - 2];
      }
      return '';
    },
  },
};
</script>
