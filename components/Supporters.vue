<template>
  <div
    class="w-full h-full flex justify-center text-center md:text-start flex-col items-center gap-20"
  >
    <h4>OUR AMAZING SUPPORTERS</h4>
    <h3>MEDIA PARTNERS</h3>
    <div class="flex flex-col tablet:flex-row justify-evenly items-center">
      <div
        v-for="(el, idx) in sponsors"
        :key="idx"
        class="px-20 py-16 cursor-alias text-3xl font-bold duration-500 ease-in-out hover:bg-black/[2%] dark:border-white/5 dark:hover:bg-white/[2%] text-primary dark:text-dark-text border-black/5 first:border-r-0 first:border-b-[2px] first:border-t-0 first:border-l-0 last:border-l-0 last:border-b-[2px] last:border-t-0 last:border-r-0 border-b-[2px] border-l-0 tablet:border-l-[2px] border-r-0 tablet:border-r-[2px]"
      >
        <a :href="el.url" target="_blank" class="cursor-alias whitespace-nowrap">
          {{ el.name }}</a
        >
      </div>
    </div>
  </div>
</template>
2E2E2E
<script>
export default {
  data() {
    return {
      sponsors: [
        {
          url: 'https://www.instagram.com/hmsi_its/',
          name: `HMSI ITS`,
        },
        {
          url: 'https://www.instagram.com/yadayouth.id/',
          name: 'YADAYOUTH',
        },
        {
          url: 'https://www.instagram.com/knowla_id/',
          name: 'KNOWLA',
        },
      ],
    }
  },
}
</script>

<style></style>
