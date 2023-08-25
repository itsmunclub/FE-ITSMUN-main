<template>
  <div class="w-full px-8">
    <div class="pb-10">
      <p class="font-semibold text-center sm:text-start">See the guidebook by clicking <a href="http://bit.ly/GGITSMUNTemplate" class="hover:underline text-[#9A5257]">here.</a></p>
    </div>
    <form class="flex-col flex gap-y-3 font-montserrat text-grey" @submit.prevent="submitForm">
        <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="name" v-model="form.name" placeholder="Name" required>
        <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="email" id="email" v-model="form.email" placeholder="Email" required>
        <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="studentId" v-model="form.studentId" placeholder="Student ID" required>
        <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="lineId" v-model="form.lineId" placeholder="Line ID" required>
        <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="number" id="phoneNumber" v-model="form.phoneNumber" placeholder="Phone Number" required>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 text-gray-400 appearance-none" id="faculty" v-model="form.faculty" required>
          <option value="" disabled>Faculty</option>
          <option value="INDSYS">INDSYS</option>
          <option value="SCIENTICS">SCIENTICS</option>
          <option value="CIVPLAN">CIVPLAN</option>
          <option value="VOCATION">VOCATION</option>
          <option value="ELECTICS">ELECTICS</option>
          <option value="MARTECH">MARTECH</option>
          <option value="CREABIZ">CREABIZ</option>
          <option value="MEDICS">MEDICS</option>
        </select>
        <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 text-gray-400 appearance-none" id="major" v-model="form.major" required>
          <option value="" disabled>Major</option>
          <option v-if="form.faculty === 'INDSYS'" value="Physics Engineering">Physics Engineering</option>
          <option v-if="form.faculty === 'INDSYS'" value="Chemical Engineering">Chemical Engineering</option>
          <option v-if="form.faculty === 'INDSYS'" value="Mechanical Engineering">Mechanical Engineering</option>
          <option v-if="form.faculty === 'INDSYS'" value="Industrial Engineering">Industrial Engineering</option>
          <option v-if="form.faculty === 'INDSYS'" value="Material & Metallurgical Engineering">Material & Metallurgical Engineering</option>
          <option v-if="form.faculty === 'SCIENTICS'" value="Physics">Physics</option>
          <option v-if="form.faculty === 'SCIENTICS'" value="Mathematics">Mathematics</option>
          <option v-if="form.faculty === 'SCIENTICS'" value="Statistics">Statistics</option>
          <option v-if="form.faculty === 'SCIENTICS'" value="Chemistry">Chemistry</option>
          <option v-if="form.faculty === 'SCIENTICS'" value="Biology">Biology</option>
          <option v-if="form.faculty === 'SCIENTICS'" value="Actuarial">Actuarial</option>
          <option v-if="form.faculty === 'CIVPLAN'" value="Civil Engineering">Civil Engineering</option>
          <option v-if="form.faculty === 'CIVPLAN'" value="Architecture">Architecture</option>
          <option v-if="form.faculty === 'CIVPLAN'" value="Environmental Engineering">Environmental Engineering</option>
          <option v-if="form.faculty === 'CIVPLAN'" value="Urban & Regional Planning">Urban & Regional Planning</option>
          <option v-if="form.faculty === 'CIVPLAN'" value="Geomatics Engineering">Geomatics Engineering</option>
          <option v-if="form.faculty === 'CIVPLAN'" value="Geophysics Engineering">Geophysics Engineering</option>
          <option v-if="form.faculty === 'VOCATION'" value="Civil Infrastructure Engineering">Civil Infrastructure Engineering</option>
          <option v-if="form.faculty === 'VOCATION'" value="Industrial Mechanical Engineering">Industrial Mechanical Engineering</option>
          <option v-if="form.faculty === 'VOCATION'" value="Electrical Automation Engineering">Electrical Automation Engineering</option>
          <option v-if="form.faculty === 'VOCATION'" value="Industrial Chemical Engineering">Industrial Chemical Engineering</option>
          <option v-if="form.faculty === 'VOCATION'" value="Instrumentation Engineering">Instrumentation Engineering</option>
          <option v-if="form.faculty === 'VOCATION'" value="Business Statistics">Business Statistics</option>
          <option v-if="form.faculty === 'MEDICS'" value="Medical Technology">Medical Technology</option>
          <option v-if="form.faculty === 'MEDICS'" value="Medical">Medical</option>
          <option v-if="form.faculty === 'MEDICS'" value="Medical Professional Education">Medical Professional Education</option>
          <option v-if="form.faculty === 'MARTECH'" value="Naval Architecture">Naval Architecture</option>
          <option v-if="form.faculty === 'MARTECH'" value="Marine Engineering">Marine Engineering</option>
          <option v-if="form.faculty === 'MARTECH'" value="Ocean Engineering">Ocean Engineering</option>
          <option v-if="form.faculty === 'MARTECH'" value="Sea Transportation ENgineering">Sea Transportation ENgineering</option>
          <option v-if="form.faculty === 'ELECTICS'" value="Informatics Engineering">Informatics Engineering</option>
          <option v-if="form.faculty === 'ELECTICS'" value="Biomedics Engineering">Biomedics Engineering</option>
          <option v-if="form.faculty === 'ELECTICS'" value="Computer Engineering">Computer Engineering</option>
          <option v-if="form.faculty === 'ELECTICS'" value="Electrical Engineering">Electrical Engineering</option>
          <option v-if="form.faculty === 'ELECTICS'" value="Information Systems">Information Systems</option>
          <option v-if="form.faculty === 'ELECTICS'" value="Information Technology">Information Technology</option>
          <option v-if="form.faculty === 'CREABIZ'" value="Industrial Product Design">Industrial Product Design</option>
          <option v-if="form.faculty === 'CREABIZ'" value="Interior Design">Interior Design</option>
          <option v-if="form.faculty === 'CREABIZ'" value="Visual Communication Design">Visual Communication Design</option>
          <option v-if="form.faculty === 'CREABIZ'" value="Business Management">Business Management</option>
          <option v-if="form.faculty === 'CREABIZ'" value="Development Studies">Development Studies</option>
          <option v-if="form.faculty === 'CREABIZ'" value="Technological Management">Technological Management</option>
          <!-- Add more options as needed -->
        </select>
    </form>
  </div>
</template>

<script>
export default {
  props: ['form'],
  data() {
    return {
      faculty: ''
    }
  },
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
