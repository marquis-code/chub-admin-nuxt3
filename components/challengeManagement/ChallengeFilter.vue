<template>
    <div class="lg:flex justify-between lg:space-x-4 mb-4 space-y-4 lg:space-y-0">
      <div class="border rounded-md text-xs">
      <button
        @click="setTab('all')"
                   :class="[activeTab === 'all' ? 'text-[#690571] bg-[#F4ECFB] border-b-2 rounded-md font-semibold' : 'text-[#667085]']"
      class="px-4 py-3 m-0.5">All</button>
      <button
        @click="setTab('ONGOING')"
                   :class="[activeTab === 'ongoing' ? 'text-[#690571] bg-[#F4ECFB] border-b-2 rounded-md font-semibold' : 'text-[#667085]']"
      class="px-4 py-3">Ongoing</button>
      <button
        @click="setTab('SCHEDULED')"
                   :class="[activeTab === 'scheduled' ? 'text-[#690571] bg-[#F4ECFB] border-b-2 rounded-md font-semibold' : 'text-[#667085]']"
      class="px-4 py-3">Scheduled</button>
      <button
        @click="setTab('ARCHIVED')"
                   :class="[activeTab === 'archived' ? 'text-[#690571] bg-[#F4ECFB] border-b-2 rounded-md font-semibold' : 'text-[#667085]']"
      class="px-4 py-3">Archived</button>
      <button
        @click="setTab('ended')"
                   :class="[activeTab === 'ended' ? 'text-[#690571] bg-[#F4ECFB] border-b-2 rounded-md font-semibold' : 'text-[#667085]']"
      class="px-4 py-3">Ended</button>
      </div>
   <div class="lg:flex lg:space-x-4 w-full lg:w-auto space-y-4 lg:space-y-0">
    <div class="relative">
      <img src="@/assets/icons/search.svg" alt="date-picker" class="absolute left-3 top-2" />
      <input type="text" placeholder="Search for a challenge" class="px-4 w-full lg:w-auto outline-none py-3 pl-10 text-sm border rounded-md flex-grow" />
     </div>
      <div class="px-4 py-3 text-gray-500 border rounded-md text-xs flex w-full lg:w-auto items-center gap-x-3">
        <input  type="date" class="w-full lg:w-auto" />
        <img src="@/assets/icons/date-picker.svg" alt="date-picker" /></div>
      <button @click="handleFilter" class="px-4 w-full lg:w-auto py-2.5 text-gray-500 border rounded-md text-xs flex items-center gap-x-3">
        <img src="@/assets/icons/filter.svg" alt="date-picker" />
        Filters</button>
   </div>
    </div>
  </template>
  

  <script setup lang="ts">
const emit = defineEmits<{
  (event: 'toggleFilter'): void
  (event: 'selected', data: string): void
}>()
  const handleFilter = () => {
    emit('toggleFilter')
  }

  const activeTab = ref('all')
const setTab = (item: string) => {
  emit('selected', item)
  activeTab.value = item
}
  </script>
  