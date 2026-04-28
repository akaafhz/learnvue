<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: null,
  },
});

const handleClick = () => {
  if (props.to) {
    router.push(props.to);
  }
};
</script>

<template>
  <button @click="handleClick" class="bg-[#5483B3] hover:bg-[#7DA0CA] text-text font-bold py-2 px-4 sm:py-3 sm:px-5 rounded-xl cursor-pointer transition-colors duration-400 text-sm sm:text-base">
    {{ text }}
  </button>
</template>
