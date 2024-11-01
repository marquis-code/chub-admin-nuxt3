<template>
    <div
      v-if="notifications.length"
      aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          :class="[
            'pointer-events-auto w-full max-w-lg overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5',
            notification.type === 'success' ? 'bg-green-50' : 'bg-red-100'
          ]"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg v-if="notification.type === 'success'" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#3EAF00"/>
                  <path d="M23.02 11.01C22.18 10.37 21.14 10 20 10C17.24 10 15 12.24 15 15C15 17.76 17.24 20 20 20C22.76 20 25 17.76 25 15" stroke="#F6F6FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28.5899 30C28.5899 26.13 24.7399 23 19.9999 23C15.2599 23 11.4099 26.13 11.4099 30" stroke="#F6F6FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-if="notification.type === 'error'" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#FF5858"/>
                  <path d="M23.02 11.01C22.18 10.37 21.14 10 20 10C17.24 10 15 12.24 15 15C15 17.76 17.24 20 20 20C22.76 20 25 17.76 25 15" fill="#FF5858"/>
                  <path d="M23.02 11.01C22.18 10.37 21.14 10 20 10C17.24 10 15 12.24 15 15C15 17.76 17.24 20 20 20C22.76 20 25 17.76 25 15" stroke="#F6F6FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28.5899 30C28.5899 26.13 24.7399 23 19.9999 23C15.2599 23 11.4099 26.13 11.4099 30" fill="#FF5858"/>
                  <path d="M28.5899 30C28.5899 26.13 24.7399 23 19.9999 23C15.2599 23 11.4099 26.13 11.4099 30" stroke="#F6F6FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p :class="notification.type === 'success' ? 'text-sm font-medium text-[#3EAF00]' : 'text-sm font-medium text-[#000000]'">
                  {{ notification.message }}
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  @click="removeNotification(notification.id)"
                  type="button"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span v-if="notification.type === 'success'">👍</span>
                  <span v-if="notification.type === 'error'">🙁</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useNotification } from '@/composables/core/useNotification';
  
  const { notifications, removeNotification } = useNotification();
  </script>
  