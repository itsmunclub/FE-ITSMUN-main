<template>
  <div class="mx-auto">
    <div class="flex flex-row items-center gap-x-2 pb-10 font-montserrat text-gray font-bold">
      <svg v-if="currentStep !== 1" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.39642 10.1903L1 5.79389L5.39642 1.39746" stroke="black" stroke-width="1.46547" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <button v-if="currentStep !== 1" @click="prevStep">{{ previousStepName }}</button>
    </div>
    <!-- Navigation bar -->
    <nav class="mb-16">
      <ul class="flex flex-row justify-between">
        <li class="hidden sm:inline scroll-m-8:flex flex-row items-center gap-x-2 text-[#9A5257] font-montserrat text-grey font-bold whitespace-nowrap mx-auto" v-for="(stepName, index) in stepNames" :key="index">
          <!-- Use a method to set the currentStep when a step button is clicked -->
          <button class="flex flex-row gap-x-2" @click="goToStep(index + 1)" :class="{ active: (index + 1) === currentStep }">
          <div class="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 rounded-full bg-transparent border-[#9A5257] border flex items-center justify-center">
            <p class="text-[#9A5257] text-xs sm:text-sm lg:text-base">{{ index + 1 }}</p>
          </div>
          <p class="text-[#9A5257] text-xs sm:text-sm lg:text-base">{{ stepName }}</p>
          </button>
          <!-- <svg v-if="index != 3 " height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3252 5.7609L3.57674 3.50936L1.3252 1.25781" stroke="#9A5257" stroke-width="0.900618" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> -->
        </li>
        <li class="sm:hidden w-full">
          <h4 class="text-center text-[#9A5257]">{{ stepNames[currentStep - 1] }}</h4>
        </li>
      </ul>
    </nav>
    <!-- Render the current step component based on the currentStep value -->
    <component :is="getCurrentStepComponent" :form="formData" @updateFormData="updateFormData" class="md:max-w-xl md:mx-auto lg:max-w-2xl"/>


    <!-- Navigation buttons -->
    <div class="sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-8 py-8 font-montserrat text-white font-bold text-xl">
      <button class="w-full md:mx-auto px-8 py-4 rounded-3xl bg-[#9A5257]" v-if="currentStep !== totalSteps" @click="nextStep">Proceed</button>
      <button class="w-full md:mx-auto px-8 py-4 rounded-3xl bg-[#9A5257]" v-else @click="submitForm">Enroll</button>
    </div>
    
    <!-- <button class="mx-auto sm:max-w-xl lg:max-w-2xl px-8 py-4 rounded-3xl bg-[#9A5257] text-white font-bold" v-if="currentStep !== totalSteps" @click="handleNext">Proceed</button>
    <button class="mx-auto sm:max-w-xl lg:max-w-2xl px-8 py-4 rounded-3xl bg-[#9A5257] text-white font-bold" v-else @click="submitForm">Enroll</button> -->

    <!-- Confirmation Modal -->
    <div v-if="showConfirmationModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg">
        <p class="mb-4">Are you willing to participate in MUN 101 seminar?</p>
        <div class="flex justify-center">
          <button class="px-4 py-2 mr-2 bg-[#4B6587] font-montserrat text-white rounded font-bold hover:bg-blue-600" @click="confirmProceed">Yes</button>
          <button class="px-4 py-2 bg-[#9A5257] font-montserrat text-white rounded font-bold hover:bg-red-500" @click="cancelProceed">No</button>
        </div>
      </div>
    </div>
    <!-- isSubmitall -->
    <div v-if="showComplete" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg">
        <p class="mb-4">Please fill all the fields</p>
        <div>
          <button class="px-4 py-2 bg-[#9A5257] font-montserrat text-white rounded font-bold hover:bg-red-500" @click="closeMod">Close</button>
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

export default {
  layout: 'forms',
  components: {
    General,
    Prev,
    Mun,
    Final,
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 4,
      formData: {
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
        termsAgreed: false,
        final: ''
      },
      stepNames: ['General Information', 'Previous Experience', 'MUN Related', 'Final'],
      showConfirmationModal: false,
      showComplete: false,
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
    isComplete() {
      const requiredFields = [
        'name', 'email', 'studentId', 'lineId', 'phoneNumber', 'faculty', 'major',
        'exp', 'tellExp', 'topic', 'postLink', 'submitEssay',
        'isMun', 'intMun', 'paperMun', 'typeMun', 'roleMun', 'diffMun',
        'yieldMun', 'modMun', 'unmodMun', 'drafMun', 'termsAgreed', 'final'
      ];

      return requiredFields.every(field => !!this.formData[field]);
    },
    confirmProceed() {
      this.showConfirmationModal = false;
      this.$router.push('/101');
    },
    cancelProceed() {
      // this.currentStep = this.totalSteps; // Redirect to the final step
      this.showConfirmationModal = false;
      this.$router.push('/');
    },
    closeMod() {
      this.showComplete = false;
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    // updateFormData(updatedData) {
    //   // Update the formData object with the updated form data from the current step
    //   this.formData = { ...this.formData, ...updatedData };
    // },
    // updatePaymentProof(paymentProofFile) {
    //   this.formData.form.paymentProofFile = paymentProofFile;
    // },
    // updateFormData(updatedData) {
    //   // Update the formData object with the updated form data from the current step
    //   this.formData = { ...this.formData, ...updatedData };
    // },
    // updatePaymentProof(paymentProofFile) {
    //   this.formData.form.paymentProofFile = paymentProofFile;
    // },
    submitForm() {
      let myToast = this.$toasted.show("test");

      const formData = this.formData;
      if(this.isComplete()) {
      // axios.post('/api/submit', formData)
      //   .then(response => {
      //     console.log('Form submitted successfully:', response.data);
      //   })
      //   .catch(error => {
        //     console.error('Error submitting form:', error);
        // });
        myToast.text("Registration complete!").goAway(2500);
        this.showConfirmationModal = true;
      } 
      else {
        console.log(this.formData)
        myToast.text("Fill all the fields!").goAway(2500);
        this.showComplete = true;
      }
      // this.showConfirmationModal = true;
      // axios.post('/api/submit', formData)
      //   .then(response => {
      //     console.log('Form submitted successfully:', response.data);
      //     this.showConfirmationModal = true;
      //   })
      //   .catch(error => {
      //     console.error('Error submitting form:', error);
      //   });
    },
    goToStep(step) {
      this.currentStep = step;
    },
  },
  computed: {
    steps() {
      // steps
      return Object.keys(this.stepNames);
    },
    getCurrentStepComponent() {
      // switch case step
      switch (this.currentStep) {
        case 1:
          return 'General';
        case 2:
          return 'Prev';
        case 3:
          return 'Mun';
        case 4:
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
