<template>
  <main>
    <CoreToast class="fixed top-4 right-4 z-[9999999]" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<style lang="css">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #app {
    @apply min-h-screen font-sans;
  }
</style>

  <script setup lang="ts">
  import { provide } from 'vue';
  
  // Initialize the inactivity composable with a 10-minute timeout and a 1-minute warning time
  import { visible, toastData, useCustomToast } from '@/composables/core/useCustomToast';
  
  // Provide the toast state globally
  provide('toastVisible', visible);
  provide('toastData', toastData);
  </script>
  