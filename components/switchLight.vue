<template>
  <div
    class="dark:bg-dark-bg duration-300 delay-150 ease-in-out w-full h-full mx-auto"
  >
    <div class="flex items-center justify-end w-full gap-2">
      <div
        @click="$emit('isDarkMode', isDarkMode)"
        class="cursor-pointer w-16 rounded-full aspect-[5/2] bg-white border-black border-[1px] dark:bg-dark-bg dark:border-dark-accent dark:border-[1px] relative"
      >
        <div
          class="w-4 aspect-square rounded-full bg-black cursor-pointer dark:bg-dark-accent absolute flex items-center justify-center top-1 left-1 dark:translate-x-9 duration-500 ease-in-out"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
