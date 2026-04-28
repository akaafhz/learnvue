<script setup>
import ChromaGrid from './ChromaGrid/ChromaGrid.vue';
import heroImage from '../assets/hero.png';

const items = [
  {
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'ADN TRansportation',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    handle: 'View Project',
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, rgba(59,130,246,0.15) 0%, rgba(10,10,10,1) 50%)',
    url: '#',
  },
  {
    image: 'https://i.pravatar.cc/300?img=2',
    title: 'Web sekolah SMPN 1 Sanden',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    handle: 'View Project',
    borderColor: '#10B981',
    gradient: 'linear-gradient(180deg, rgba(16,185,129,0.15) 0%, rgba(10,10,10,1) 50%)',
    url: '#',
  },
  {
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'Dasboard CMS backend',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    handle: 'View Project',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(120deg, rgba(139,92,246,0.15) 0%, rgba(10,10,10,1) 50%)',
    url: '#',
  },
  {
    image: 'https://i.pravatar.cc/300?img=4',
    title: 'Dashboard Admin',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    handle: 'View Project',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(120deg, rgba(139,92,246,0.15) 0%, rgba(10,10,10,1) 50%)',
    url: '#',
  }
];
</script>

<template>
  <section class="relative py-24 bg-[#0a0a0a] flex flex-col items-center overflow-hidden">
    <div class="container mx-auto px-6 max-w-6xl text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">My Projects</h2>
      <p class="text-gray-400 mb-16 max-w-2xl mx-auto">Here are some of the projects I've worked on. Each project showcases my skills in creating modern, responsive, and user-friendly web applications.</p>

      <div class="w-full">
        <div class="bg-[#0b0b0b] rounded-2xl p-8 shadow-inner border border-white/5 overflow-hidden">
          <ChromaGrid :items="items" :radius="300" :damping="0.45" :fadeOut="0.6" ease="power3.out" />
        </div>
      </div>
    </div>
  </section>
</template>
