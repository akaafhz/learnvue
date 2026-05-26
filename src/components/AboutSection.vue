<script setup>
import ProfileCard from './ProfileCard/ProfileCard.vue';
import Mee from '../assets/mee.png';
import Grain from '../assets/grain.png';

const handleContactClick = () => {
  window.location.href = '#contact';
};
</script>

<template>
  <section class="relative py-12 md:py-24 min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
    <!-- CONTENT -->
    <div class="relative container mt-4 md:mt-10 mx-auto px-4 md:px-6 max-w-6xl w-full">
      <!-- HEADLINE -->
      <h2 class="text-3xl md:text-5xl font-bold text-center text-white mb-12 md:mb-20">About Me</h2>

      <!-- GRID -->
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- TEXT -->
        <div class="text-gray-200 order-2 md:order-1">
          <p class="text-base md:text-lg text-gray-300 mb-4">Passionate Frontend Developer crafting modern and clean web experiences.</p>

          <p class="mb-4 leading-relaxed font-thin text-sm md:text-base">Hello! I'm a web developer who enjoys turning ideas into reality through code. I focus on building responsive, user-friendly, and visually appealing websites.</p>

          <p class="mb-6 leading-relaxed font-thin text-sm md:text-base">I specialize in Vue.js and modern frontend tools, always learning and improving to build better digital experiences.</p>

          <a href="/cv.pdf" download class="inline-block px-4 md:px-6 py-2 md:py-3 bg-white text-[#021024] font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition text-sm md:text-base"> Download CV </a>
        </div>

        <!-- FOTO -->
        <div class="flex justify-center md:justify-end order-1 md:order-2">
          <div class="relative">
            <ProfileCard
              name="Hafiz Arintaka"
              title="Frontend Developer"
              handle="_akaafhz"
              status="Online"
              contact-text="Contact Me"
              :avatar-url="Mee"
              :grain-url="Grain"
              :show-user-info="true"
              :show-behind-gradient="true"
              :enable-tilt="true"
              @contact-click="handleContactClick"
            />
            <!-- kalau mau efek blur di belakang -->
            <div class="absolute -inset-2 bg-white/10 blur-xl rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
