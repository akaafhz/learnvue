<script setup>
import router from '../router';
import { ref } from 'vue';

const isOpen = ref(false);

const menus = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];
</script>

<template>
  <nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
    <!-- NAVBAR -->
    <div class="bg-black/70 backdrop-blur-lg rounded-full px-6 py-4 flex justify-between items-center shadow-lg">
      <!-- Logo -->
      <h1 class="text-white font-bold">Achorge</h1>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-6">
        <router-link v-for="menu in menus" :key="menu.path" :to="menu.path" class="text-gray-300 hover:text-white transition" active-class="text-white font-bold underline underline-offset-4">
          {{ menu.name }}
        </router-link>
      </div>

      <!-- Hamburger -->
      <button @click="isOpen = !isOpen" class="md:hidden flex flex-col justify-center items-center gap-1">
        <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="isOpen ? 'rotate-45 translate-y-1.5' : ''"></span>

        <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="isOpen ? 'opacity-0' : ''"></span>

        <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="isOpen ? '-rotate-45 -translate-y-1.5' : ''"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden mt-3 bg-black/70 backdrop-blur-lg rounded-2xl p-4 shadow-xl transition-all duration-300">
      <div class="flex flex-col gap-4 text-center">
        <router-link v-for="menu in menus" :key="menu.path" :to="menu.path" @click="isOpen = false" class="text-gray-300 hover:text-white transition" active-class="text-white font-bold underline underline-offset-4">
          {{ menu.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
