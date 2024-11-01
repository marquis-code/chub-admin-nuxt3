<template>
    <div class="flex items-center justify-center min-h-screen">
      <!-- Show spinner while loading -->
      <div v-if="loading" class="spinner"></div>
      <!-- Message after loading finishes -->
      <div v-else>
        <p>Verifying your signup link...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useVerifySignupLink } from '@/composables/auth/verifySignupLink'
  
  const { loading } = useVerifySignupLink()
  </script>
  
  <style scoped>
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #3490dc;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  