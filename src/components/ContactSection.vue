<script setup>
import { ref } from 'vue';

const scriptURL = 'https://script.google.com/macros/s/AKfycbxjByN0Ar5JphRFv4NGZTZGdx6FnFId2W6DQh7ZN43UkQFiIR8uwXp8I_PsUBNcWT70/exec';

const loading = ref(false);
const success = ref(false);

const handleSubmit = async (event) => {
  event.preventDefault();
  loading.value = true;
  success.value = false;

  const form = event.target;
  const formData = new FormData(form);

  try {
    await fetch(scriptURL, { method: 'POST', body: formData });
    success.value = true;
    form.reset();
  } catch (error) {
    console.error('Error!', error.message);
    alert('Terjadi kesalahan, coba lagi.');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white py-12 md:py-24">
    <div id="contact" class="flex flex-col justify-center items-center px-4 md:px-6 max-w-3xl mx-auto text-center">
      <h1 class="font-bold leading-tight text-white text-3xl md:text-4xl px-2">Contact Me</h1>
      <p class="mt-4 text-gray-300 opacity-80 text-sm md:text-base px-2">Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.</p>

      <form class="bg-zinc-800 p-4 md:p-8 w-full max-w-lg mx-auto rounded-xl mt-8 md:mt-10 shadow-[0_0_60px_#5483B3]" autocomplete="off" @submit="handleSubmit">
        <div class="flex flex-col gap-6">
          <div v-if="success" class="bg-blue-600 text-white rounded-md py-2 px-4 flex justify-between items-center text-sm md:text-base">
            <span> <strong>Terimakasih!</strong> Pesanmu sudah terkirim 😊 </span>
            <button type="button" class="ml-3 text-white hover:text-gray-200 font-bold" @click="success = false">✕</button>
          </div>

          <div class="flex flex-col gap-2 text-left">
            <label class="font-semibold text-gray-200 text-sm md:text-base">Nama Lengkap</label>
            <input type="text" name="nama" placeholder="Masukan Nama" required class="border border-zinc-600 bg-zinc-900 p-2 md:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
          </div>

          <div class="flex flex-col gap-2 text-left">
            <label class="font-semibold text-gray-200 text-sm md:text-base">Email</label>
            <input type="email" name="email" placeholder="Masukan email" required class="border border-zinc-600 bg-zinc-900 p-2 md:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
          </div>

          <div class="flex flex-col gap-2 text-left">
            <label for="pesan" class="font-semibold text-gray-200 text-sm md:text-base">Pesan</label>
            <textarea id="pesan" name="pesan" rows="6" placeholder="Kasih pesan dong.." class="border border-zinc-600 bg-zinc-900 p-2 md:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"></textarea>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading"
              class="w-full md:w-auto flex justify-center items-center gap-2 bg-[#1565C0] text-white shadow-[0_0_20px_#1565C0] font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-70 text-sm md:text-base"
            >
              <svg v-if="loading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              {{ loading ? 'Mengirim...' : 'Kirim' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
