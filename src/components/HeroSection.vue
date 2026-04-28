<script setup>
import Button from './Button.vue';
import Aurora from "./Aurora/Aurora.vue";
import ShinyText from "./ShinyText/ShinyText.vue";
</script>

<template>
  <section class="relative isolate min-h-screen overflow-hidden bg-[#0a0a0a] mb-0">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <Aurora
        class="w-full h-full"
        :color-stops="[ '#5483B3', '#5483B3', '#052659', '#021024' ]"
        :amplitude="0.8"
        :blend="0.5"
        :speed="0.5"
        :intensity="0.8"
      />
      <!-- <div class="absolute inset-0 bg-linear-to-b from-[#021024]/20 via-[#021024]/40 to-[#021024]/85"></div> -->
    </div>

    <div class="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
      <div class="max-w-3xl text-center text-white">
  <ShinyText 
    text="Frontend Developer"
    class="font-semibold text-2xl"
    :speed="2"
    :delay="0.5"
    :disabled="false"
    :color="'#b5b5b5'"
    :shine-color="'#5483B3'"
    :spread="120"
    :direction="'left'"
    :yoyo="false"
    :pause-on-hover="false"
  />
        <h1 class="mx-auto mb-6 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
          Welcome to My Portfolio
        </h1>
        <p class="mx-auto mb-10 max-w-xl text-base text-white/80 sm:text-lg lg:text-xl">
          Discover my projects and skills in web development.
        </p>
        <div class="flex justify-center">
          <Button text="View Projects" to="/projects" />
        </div>
      </div>
    </div>
  </section>
</template>
