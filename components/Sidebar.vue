<template>
    <div class="fixed min-h-screen w-[72px] bg-[#272F35] dark:bg-light-bg bottom-0 flex flex-col py-8">
        <div class="top-0 mx-auto">
            <div class="bg-white rounded-full"><img class="h-10 p-2" src="../static/itsmunlogo.svg" alt="" srcset=""></div>
        </div>
        <div class="mx-auto flex flex-col">
            <div class=""><NuxtLink to="/about"><img class="h-10" src="../static/aboutus.svg" alt="" srcset=""></NuxtLink></div>
            <div class=""><NuxtLink to="/"><img class="h-10" src="../static/home.svg" alt="" srcset=""></NuxtLink></div>
            <div class=""><img class="h-10" src="../static/blog.svg" alt="" srcset=""></div>
            <div class=""><img class="h-10" src="../static/faq.svg" alt="" srcset=""></div>
        </div>
        <div class="bottom-0 mx-auto">
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