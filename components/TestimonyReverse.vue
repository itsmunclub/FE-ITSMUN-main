<template>
    <div>
        <div class="w-auto h-full flex flex-row gap-[10px] lg:gap-[18px] lg:justify-between relative">
            <div class="bg-[#9A5257] min-w-[180px] w-auto h-auto rounded-xl">
                <img class="min-w-[100%] min-h-[100%] object-cover overflow-clip" src="../assets/ryo.png" alt="">
            </div>
            <div class="bg-[#272F35] dark:bg-light-bg lg:hidden w-auto h-auto rounded-xl rounded-bl-none z-10">
                <p class="p-6 p-inverse">
                    {{ words }}
                </p>
            </div>
            <img class="lg:hidden absolute scale-50 -right-20 -bottom-20 z-0" src="../assets/flower.svg" alt="">
            <div class="hidden lg:flex lg:flex-col lg:justify-between">
                <div class="lg:flex lg:flex-row justify-between lg:justify-start lg:gap-6">
                    <div class="flex flex-col">
                        <h2 class="underline underline-offset-8 font-bold whitespace-nowrap">{{ name }}</h2>
                        <p class="whitespace-nowrap">{{ department }}</p>
                    </div>
                    <div class="flex flex-col">
                        <h4 class="">Achievements</h4>
                        <p>{{ achievement1 }} <br>{{ achievement2 }} <br>{{ achievement3 }}</p>
                    </div>
                </div>
                <div class="bg-[#272F35] dark:bg-light-bg hidden lg:inline w-auto h-auto rounded-xl rounded-bl-none z-10">
                    <p class="p-6 p-inverse">
                        {{ words }}
                    </p>
                </div>
                <img class="absolute scale-75 -bottom-20 -right-20 z-0" src="../assets/flower.svg" alt="">
            </div>
        </div>
        <div class="lg:hidden flex flex-col pt-14">
            <h2 class="underline underline-offset-8 font-bold">{{ name }}</h2>
            <p>{{ department }}</p>
            <h4 class="py-2">Achievements</h4>
            <p>{{ achievement1 }} <br>{{ achievement2 }} <br>{{ achievement3 }}</p>
        </div>
    </div>
</template>

<script>
// import { defineProps } from 'vue';

export default {
    props: {
        name: String,
        department: String,
        achievement1: String,
        achievement2: String,
        achievement3: String,
        words: String,
        imagePath: String,
    }
};
</script>