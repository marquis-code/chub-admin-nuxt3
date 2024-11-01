<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white w-11/12 md:w-[600px] p-6 rounded-lg shadow-lg relative">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-gray-900">Filters</h2>
          <button @click="resetFilters" class="text-sm text-[#858D9D] flex items-center gap-x-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6326_3292)">
                <path d="M7.82471 7.00064L13.829 0.996394C13.9352 0.886376 13.994 0.739025 13.9927 0.586077C13.9914 0.433129 13.93 0.286822 13.8219 0.178667C13.7137 0.0705122 13.5674 0.00916363 13.4144 0.00783455C13.2615 0.00650547 13.1141 0.0653022 13.0041 0.171561L6.99988 6.17581L0.995625 0.171561C0.885607 0.0653022 0.738256 0.00650547 0.585308 0.00783455C0.43236 0.00916363 0.286053 0.0705122 0.177898 0.178667C0.0697432 0.286822 0.00839465 0.433129 0.00706557 0.586077C0.0057365 0.739025 0.0645332 0.886376 0.170792 0.996394L6.17504 7.00064L0.170792 13.0049C0.061434 13.1143 0 13.2626 0 13.4173C0 13.572 0.061434 13.7203 0.170792 13.8297C0.280183 13.9391 0.42853 14.0005 0.583209 14.0005C0.737888 14.0005 0.886234 13.9391 0.995625 13.8297L6.99988 7.82548L13.0041 13.8297C13.1135 13.9391 13.2619 14.0005 13.4165 14.0005C13.5712 14.0005 13.7196 13.9391 13.829 13.8297C13.9383 13.7203 13.9998 13.572 13.9998 13.4173C13.9998 13.2626 13.9383 13.1143 13.829 13.0049L7.82471 7.00064Z" fill="#858D9D"/>
                </g>
                <defs>
                <clipPath id="clip0_6326_3292">
                <rect width="14" height="14" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                
            Reset</button>
        </div>
  
        <div class="space-y-6">
          <!-- Status Filter -->
          <div class="border-[0.5px] border-gray-200 rounded-lg">
            <h3 class="text-sm text-[#1D1F2C] font-medium mb-2 py-3 bg-[#F9F9FC] px-3 rounded-lg">Status</h3>
            <div class="flex flex-col space-y-3 p-4">
              <label v-for="status in statuses" :key="status.value" class="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  :value="status.value"
                  v-model="selectedFilters.status"
                  class="custom-checkbox"
                />
                <span :class="{'text-gray-400': !selectedFilters.status.includes(status.value), 'text-[#690571] font-medium': selectedFilters.status.includes(status.value)}">
                  {{ status.label }}
                </span>
              </label>
            </div>
          </div>
  
          <!-- Type Filter -->
          <div class="border-[0.5px] border-gray-200 rounded-lg">
            <h3 class="text-sm text-[#1D1F2C] font-medium mb-2 py-3 bg-[#F9F9FC] px-3 rounded-lg">Type</h3>
            <div class="flex flex-col space-y-3 p-4">
              <label v-for="type in types" :key="type.value" class="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  :value="type.value"
                  v-model="selectedFilters.type"
                  class="custom-checkbox"
                />
                <span :class="{'text-gray-400': !selectedFilters.type.includes(type.value), 'text-[#690571] font-medium': selectedFilters.type.includes(type.value)}">
                  {{ type.label }}
                </span>
              </label>
            </div>
          </div>
  
          <!-- Date Filter -->
          <div class="border-[0.5px] border-gray-200 rounded-lg">
            <h3 class="text-sm text-[#1D1F2C] font-medium mb-2 py-3 bg-[#F9F9FC] px-3 rounded-lg">Date</h3>
            <div class="flex space-x-2 p-4">
              <input type="date" v-model="selectedFilters.date.startDate" placeholder="DD/MM/YY" class="form-input w-full border-gray-300 rounded-md border-[0.5px] py-3 px-2 text-gray-500 placeholder-gray-500 text-sm">
              <input type="date" v-model="selectedFilters.date.endDate" placeholder="DD/MM/YY" class="form-input w-full border-gray-300 rounded-md border-[0.5px] py-3 px-2 text-gray-500 placeholder-gray-500 text-sm">
            </div>
          </div>
  
          <!-- Goals Filter -->
          <div class="border-[0.5px] border-gray-200 rounded-lg">
            <h3 class="text-sm text-[#1D1F2C] font-medium mb-2 py-3 bg-[#F9F9FC] px-3 rounded-lg">Goals</h3>
            <div class="flex flex-col space-y-3 p-4">
              <label v-for="goal in goals" :key="goal.value" class="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  :value="goal.value"
                  v-model="selectedFilters.goals"
                  class="custom-checkbox"
                />
                <span class="text-gray-700">{{ goal.label }}</span>
              </label>
            </div>
          </div>
        </div>
  
        <div class="flex justify-end mt-6 space-x-4">
          <button :disabled="loading" @click="closeModal" class="text-sm text-gray-500 disabled:cursor-not-allowed disabled:opacity-25 hover:text-gray-700 py-3 border px-3 rounded-lg">Cancel</button>
          <button :disabled="loading" @click="applyFilters" class="bg-[#690571] disabled:cursor-not-allowed disabled:opacity-25 text-white px-4 py-3 rounded-md text-sm">{{loading ? 'processing..' : 'Apply Filter'}}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineProps, defineEmits } from 'vue'
  import { filters } from "@/composables/admin-mgt/fetch-admin-challenge";
  
  // Props and Emits
  const props = defineProps<{ isOpen: boolean, loading: boolean }>()
  const emit = defineEmits(['close', 'apply'])
  
  // Filter options
  const statuses = [
    { label: 'Scheduled', value: 'scheduled' },
    { label: 'Drafts', value: 'drafts' },
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Archived', value: 'archived' }
  ]
  const types = [
    { label: 'CHUB generated', value: 'chub_generated' },
    { label: 'User generated', value: 'user_generated' }
  ]
  const goals = [
    { label: 'Productivity', value: 'productivity' },
    { label: 'Self development', value: 'self_development' },
    { label: 'Creativity', value: 'creativity' },
    { label: 'Health', value: 'health' },
    { label: 'Wellness', value: 'wellness' },
    { label: 'Organization', value: 'organization' },
    { label: 'Finance', value: 'finance' }
  ]
  
  // Selected filters
  const selectedFilters = ref({
    status: [] as string[],
    type: [] as string[],
    date: { startDate: '', endDate: '' },
    goals: [] as string[]
  })
  
  // Reset filters to default state
  const resetFilters = () => {
    selectedFilters.value = { status: [], type: [], date: { startDate: '', endDate: '' }, goals: [] }
  }
  
  // Close modal
  const closeModal = () => emit('close')
  
  // Apply filters and update composable's filter object
  const applyFilters = () => {
    filters.value = { ...selectedFilters.value } // Update the composable's filter
    emit('apply', filters.value) // Emit the applied filters
    // closeModal()
  }
  </script>
  
  <style scoped>
  /* Custom checkbox styling to match the uploaded image */
  .custom-checkbox {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    background-color: #e5e7eb; /* Light gray background when unchecked */
    border: 2px solid transparent;
    border-radius: 0.25rem; /* Square shape with rounded corners */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
  }
  
  .custom-checkbox:checked {
    background-color: #690571; /* Purple background when checked */
  }
  
  .custom-checkbox:checked::before {
    content: '✓';
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
  }
  </style>
  