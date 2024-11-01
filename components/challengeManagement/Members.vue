<template>
    <div class="">
      <h2 class="font-medium text-sm mb-2 uppercase text-[#858D9D]">Add Members</h2>
      <div class="mb-4">
        <div class="flex gap-x-4">
         <div class="flex-grow w-full">
          <input
          class="w-full flex-grow text-sm px-4 py-3 outline-none border rounded-lg"
          type="text"
          id="task"
          placeholder="Search for a user by email or username"
        />
         </div>
       <div class="w-5/12" >
        <button
        class="text-[#690571] w-full font-semibold px-4 py-3.5 flex justify-center items-center gap-x-2 text-sm rounded-lg bg-[#F4ECFB] focus:outline-none"
      >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3333 7.33334H8.66666V0.666656C8.66666 0.298469 8.36819 0 8 0C7.63181 0 7.33334 0.298469 7.33334 0.666656V7.33331H0.666656C0.298469 7.33334 0 7.63181 0 8C0 8.36819 0.298469 8.66666 0.666656 8.66666H7.33331V15.3333C7.33331 15.7015 7.63178 16 7.99997 16C8.36816 16 8.66662 15.7015 8.66662 15.3333V8.66666H15.3333C15.7015 8.66666 15.9999 8.36819 15.9999 8C16 7.63181 15.7015 7.33334 15.3333 7.33334Z" fill="#690571"/>
        </svg>
        
        Add User
      </button>
       </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex items-center justify-between">
         <div class="flex items-center gap-x-3">
          <img src="@/assets/img/member-avatar.png" alt="" class="h-10 w-10" /> <p class="text-[#1D1F2C] font-medium text-sm">Josh Adam</p>
         </div>

   <div class="flex flex-col gap-y-2">
    <p class="text-[#A3A9B6] font-medium text-xs">ADMIN</p>
    <label
      for="admin1"
      class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
    > 
      <span class="relative">
        <input
          id="admin1"
          type="checkbox"
          class="hidden peer"
        />
        <div
          class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
        ></div>
        <div
          class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
        ></div>
      </span>
    </label>
   </div>
        </div>
      </div>
    
      <div class="mt-4">
        <div class="flex items-center justify-between">
         <div class="flex items-center gap-x-3">
          <img src="@/assets/img/member-avatar.png" alt="" class="h-10 w-10" /> <p class="text-[#1D1F2C] font-medium text-sm">Josh Adam</p>
         </div>

   <div class="flex flex-col gap-y-2">
    <p class="text-[#A3A9B6] font-medium text-xs">ADMIN</p>
    <label
      for="admin2"
      class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
    > 
      <span class="relative">
        <input
          id="admin2"
          type="checkbox"
          class="hidden peer"
        />
        <div
          class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
        ></div>
        <div
          class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
        ></div>
      </span>
    </label>
   </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between">
         <div class="flex items-center gap-x-3">
          <img src="@/assets/img/member-avatar.png" alt="" class="h-10 w-10" /> <p class="text-[#1D1F2C] font-medium text-sm">Josh Adam</p>
         </div>

   <div class="flex flex-col gap-y-2">
    <p class="text-[#A3A9B6] font-medium text-xs">ADMIN</p>
    <label
      for="admin3"
      class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
    > 
      <span class="relative">
        <input
          id="admin3"
          type="checkbox"
          class="hidden peer"
        />
        <div
          class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
        ></div>
        <div
          class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
        ></div>
      </span>
    </label>
   </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between">
         <div class="flex items-center gap-x-3">
          <img src="@/assets/img/member-avatar.png" alt="" class="h-10 w-10" /> <p class="text-[#1D1F2C] font-medium text-sm">Josh Adam</p>
         </div>

   <div class="flex flex-col gap-y-2">
    <p class="text-[#A3A9B6] font-medium text-xs">ADMIN</p>
    <label
      for="admin4"
      class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
    > 
      <span class="relative">
        <input
          id="admin4"
          type="checkbox"
          class="hidden peer"
        />
        <div
          class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
        ></div>
        <div
          class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
        ></div>
      </span>
    </label>
   </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const users = ref([
    { id: 1, name: 'Josh Adam', avatar: '/path/to/avatar1.png' },
    { id: 2, name: 'Josh Adam', avatar: '/path/to/avatar2.png' },
    { id: 3, name: 'Josh Adam', avatar: '/path/to/avatar3.png' },
    { id: 4, name: 'Josh Adam', avatar: '/path/to/avatar4.png' }
  ])
  </script>
  
  <style scoped>
  .form-checkbox {
    width: 1rem;
    height: 1rem;
    accent-color: #a855f7; /* Tailwind CSS purple-500 */
  }
  </style>
  