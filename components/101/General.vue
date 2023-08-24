<template>
    <div class="w-full px-8">
      <form class="flex-col flex gap-y-3 font-montserrat text-grey" @submit.prevent="submitForm">
          <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="name" v-model="form.name" placeholder="Name" required>
          <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="email" id="email" v-model="form.email" placeholder="Email" required>
          <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="studentId" v-model="form.studentId" placeholder="Student ID" required>
          <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="University" v-model="form.University" placeholder="University" required>
          <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 text-gray-400 appearance-none" id="faculty" v-model="form.faculty" required>
              <option value="">Select</option>
              <option value="Engineering">Engineering</option>
              <option value="Science">Science</option>
              <option value="Business Administration">Business Administration</option>
              <!-- Add more options as needed -->
          </select>
          <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 text-gray-400 appearance-none" id="major" v-model="form.major" required>
            <option value="">Select</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <!-- Add more options as needed -->
          </select>
          <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="lineId" v-model="form.lineId" placeholder="Line ID" required>
          <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="phoneNumber" v-model="form.phoneNumber" placeholder="Phone Number" required>
          <!-- <input class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4" type="text" id="isRegist" v-model="form.isRegist" placeholder="Did you register as a new member?" required> -->
          <select class="w-full rounded-2xl py-2 px-3 sm:py-3 sm:px-4 text-gray-400 appearance-none" id="isRegist" v-model="form.isRegist" required>
            <option value="" class="text-sm sm:text-base">Did you register as a new ITS MUN member?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <!-- Add more options as needed -->
          </select>
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