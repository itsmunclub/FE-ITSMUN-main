<template>
    <div class="fixed min-w-[100vw] h-[80px] bottom-0 bg-[#272F35] dark:bg-light-bg flex flex-row justify-between">
        <div class="ml-4 my-auto">
            <div class="bg-white rounded-full"><img class="h-10 p-2" src="../static/itsmunlogo.svg" alt="" srcset=""></div>
        </div>
        <div class="my-auto flex flex-row">
            <div class=""><NuxtLink to="/about"><img class="h-10" src="../static/aboutus.svg" alt="" srcset=""></NuxtLink></div>
            <div class=""><NuxtLink to="/"><img class="h-10" src="../static/home.svg" alt="" srcset=""></NuxtLink></div>
            <div class=""><img class="h-10" src="../static/blog.svg" alt="" srcset=""></div>
            <div class=""><img class="h-10" src="../static/faq.svg" alt="" srcset=""></div>
        </div>
        <div class="mr-4 my-auto">
            <img class="h-10" src="../static/close.svg" alt="" srcset="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            default: false,
        },
    },
}
</script>