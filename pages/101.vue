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
        <ul class="flex flex-row justify-between">
          <li class="flex flex-row h-full items-center gap-x-2 text-[#9A5257] font-montserrat text-grey font-bold text-sm whitespace-nowrap mx-auto" v-for="(stepName, index) in stepNames" :key="index">
            <!-- Use a method to set the currentStep when a step button is clicked -->
            <button class="flex flex-row gap-x-2" @click="goToStep(index + 1)" :class="{ active: (index + 1) === currentStep }">
            <div class="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 rounded-full text-[#9A5257] bg-transparent border-[#9A5257] border flex items-center justify-center">
                <p class="text-[#9A5257] text-xs sm:text-sm lg:text-base">{{ index + 1 }}</p>
            </div>
                <p class="text-[#9A5257] text-xs sm:text-sm lg:text-base">{{ stepName }}</p>
            </button>
            <!-- <svg v-if="index != 3 " height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.3252 5.7609L3.57674 3.50936L1.3252 1.25781" stroke="#9A5257" stroke-width="0.900618" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>           -->
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
    </div>
</template>
  
<script>
  import General from '../components/101/General.vue';
  import Payment from '../components/101/Payment.vue';
  import axios from 'axios'
  
  export default {
    layout: "forms",

    components: {
      General,
      Payment,
    },
    data() {
      return {
        currentStep: 1,
        totalSteps: 2,
        formData: {
          // Initialize form fields with default values if needed
          name: '',
          email: '',
          studentId: '',
          university: '',
          lineId: '',
          phoneNumber: '',
          faculty: '',
          major: '',
          isRegist: '',
          payment: '',
          paymentProofFile: null,
          // Add other form fields as needed
        },
        stepNames: ['General Information', 'Payment'],
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
      isComplete() {
        const requiredFields = [
          'name', 'email', 'studentId', 'lineId', 'phoneNumber', 'faculty', 'major',
          'isRegist', 'payment', 'paymentProofFile'
        ];

        return requiredFields.every(field => !!this.formData[field]);
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
      async submitForm() {
        // let myToast = this.$toasted.show("Registration complete!").goAway(3000);
        let myToast = this.$toasted;
        
        let formData = new FormData()
        formData.append('name', this.formData.name)
        formData.append('email', this.formData.email)
        formData.append('student_id', this.formData.studentId)
        formData.append('university', this.formData.university)
        formData.append('faculty', this.formData.faculty)
        formData.append('major', this.formData.major)
        formData.append('line_id', this.formData.lineId)
        formData.append('phone', this.formData.phoneNumber)
        formData.append('question_seminar', this.formData.isRegist)
        formData.append('bukti_pembayaran', this.formData.paymentProofFile)
        // const formData = this.formData;
        // Perform the actual form submission using the formData object
        // console.log(this.formData);
        myToast.show("Registration complete!").goAway(3000)
        this.$router.push('/')
        if(this.isComplete()) {
          //API
          const res = await axios.post("https://its-mun-backend-production.up.railway.app/api/registration-seminar", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response) => {
            console.log("Form submitted successfully")
            this.$router.push('/')
            myToast.show("Registration Complete!").goAway(2500);
          })
          .catch((err) => {
            console.log(err)
            myToast.show("There is an error submitting the form!").goAway(2500);
          })
        }
        else {
          myToast.text("Fill all the fields!").goAway(2500);
          this.currentStep = 1;
        }
        // After successful submission, you might want to reset the form data and navigate to a success page or display a confirmation message.
      //   this.formData = {
      //     exp: '',
      //     tellExp: '',
      //     // Reset other form fields as needed
      //   };
  
        // Reset the currentStep to the first step to restart the form
      },
      goToStep(step) {
        this.currentStep = step;
      },
          confirmProceed() {
        this.showConfirmationModal = false;
        this.currentStep =1;
      },
      cancelProceed() {
        this.$router.push('/');
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
            return 'Payment';
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
  