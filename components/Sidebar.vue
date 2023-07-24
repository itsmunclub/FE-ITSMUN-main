<template>
    <div class="fixed h-full w-[72px] bg-[#272F35] dark:bg-light-bg bottom-0 left-0 flex flex-col py-8">
        <div class="h-full grid grid-flow-row grid-rows-1 gap-4 content-evenly">
            <div class="top-0 mx-auto">
                <div class="bg-white rounded-full"><img class="h-10 p-2" src="../static/itsmunlogo.svg" alt="" srcset=""></div>
            </div>
            <div class="mx-auto flex flex-col items-center justify-center flex-1 space-y-4">
                <div class="dark:hidden"><NuxtLink to="/about"><img class="h-10" src="../static/aboutus.svg" alt="" srcset=""></NuxtLink></div>
                <div class="dark:hidden"><NuxtLink to="/"><img class="h-10" src="../static/home.svg" alt="" srcset=""></NuxtLink></div>
                <div class="dark:hidden"><img class="h-10" src="../static/blog.svg" alt="" srcset=""></div>
                <div class="dark:hidden"><img class="h-10" src="../static/faq.svg" alt="" srcset=""></div>
                <div class="hidden dark:inline"><NuxtLink to="/about"><img class="h-10" src="../static/aboutus-dark.svg" alt="" srcset=""></NuxtLink></div>
                <div class="hidden dark:inline"><NuxtLink to="/"><img class="h-10" src="../static/home-dark.svg" alt="" srcset=""></NuxtLink></div>
                <div class="hidden dark:inline"><img class="h-10" src="../static/blog-dark.svg" alt="" srcset=""></div>
                <div class="hidden dark:inline"><img class="h-10" src="../static/faq-dark.svg" alt="" srcset=""></div>
            </div>
            <div class="bottom-0 mx-auto">
                <img class="h-10" src="../static/close.svg" alt="" srcset="">
            </div>
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