<template>
    <div class="w-auto h-full lg:mx-20 carousel rounded-3xl">
        <div id="slide1" class="carousel-item relative w-full">
            <img src="../assets/carousel/1.png" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
            <img src="../assets/carousel/2.png" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a> 
                <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
            <img src="../assets/carousel/3.png" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
            <img src="../assets/carousel/4.png" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a> 
                <a href="#slide5" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide5" class="carousel-item relative w-full">
            <img src="../assets/carousel/5.png" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
        </div>
        <img class="w-44 h-w-44 lg:bottom-52 lg:right-10" src="../assets/flower.svg" alt="">
    </div>
</template>

<script>
    export default {

    }
</script>