<script setup>
import Navbar from '../components/Navbar.vue';
import HeroSection from '../components/HeroSection.vue';
import ScrollVelocity from '../components/ScrollVelocity/ScrollVelocity.vue';
import AboutSection from '../components/AboutSection.vue';
import ProjectSection from '../components/ProjectSection.vue';
import ContactSection from '../components/ContactSection.vue';
</script>

<template>
  <div>
    <Navbar />
    <HeroSection />

    <!-- SCROLL VELOCITY BORDER -->
    <div class="w-full bg-[#0a0a0a] overflow-hidden relative z-10">
      <ScrollVelocity :texts="['Frontend Developer', 'Tech Enthusiast']" :velocity="70" class-name="text-white/10 font-bold" />
    </div>

    <AboutSection />
    <ProjectSection />
    <ContactSection />
  </div>
</template>
