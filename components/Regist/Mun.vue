<template>
  <div class="w-full px-8">
    <form class="flex-col flex gap-y-6 font-montserrat text-grey" @submit.prevent="submitForm">
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="isMun">What does the acronym MUN stand for?</label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="isMun" v-model="form.isMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Model Union Negotiations ">Model Union Negotiations </option>
            <option value="Model Understanding Network">Model Understanding Network</option>
            <option value="Model United Nations Conference">Model United Nations Conference</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="intMun">Which international organization is commonly simulated in MUN conferences?</label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="intMun" v-model="form.intMun" required>
            <option value="">Select</option>
            <option value="European Union">European Union</option>
            <option value="North Atlantic Treaty Organization">North Atlantic Treaty Organization</option>
            <option value="United Nations">United Nations</option>
            <option value="World Trade Organization">World Trade Organization</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="paperMun">What is the purpose of a position paper in MUN?</label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="paperMun" v-model="form.paperMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="typeMun">What are the three main types of MUN committees?</label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="typeMun" v-model="form.typeMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="roleMun">What is the role of the Secretary-General in an MUN conference?</label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="roleMun" v-model="form.roleMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="diffMun">What is the difference between a resolution and a draft resolution in MUN?</label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="diffMun" v-model="form.diffMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="yieldMun">What does it mean to "yield the floor" in MUN? </label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="yieldMun" v-model="form.yieldMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="modMun">What is the purpose of a moderated caucus in MUN? </label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="modMun" v-model="form.modMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="unmodMun">What does the term "unmoderated caucus" refer to in MUN? </label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="unmodMun" v-model="form.unmodMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <!-- Add more options as needed -->
        </select>
      </div>
      <div class="flex-col flex gap-y-2">
        <label class="font-montserrat text-grey font-bold" for="drafMun">What is the difference between a working paper and a draft resolution in MUN?  </label>
        <select class="w-full rounded-2xl py-3 px-4 appearance-none text-gray-400" id="drafMun" v-model="form.drafMun" required>
            <option value="">Select</option>
            <option value="Model United Nations">Model United Nations</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
            <option value="Lorem Ipsum">Lorem Ipsum</option>
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
