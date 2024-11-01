<template>
<main>
  <header class="lg:flex justify-between border border-gray-50 items-center p-4 bg-white">
    <h1 class="text-xl font-medium max-w-xs text-[#1D1F2C]">Create & manage challenges across the app</h1>
    <div class="space-y-3 lg:space-y-0 flex gap-x-2 lg:gap-x-0">
      <button @click="emit('featured')" class="px-4 py-2.5 border border-[#690571] bg-white text-[#690571] rounded-xl mr-2">Feature a challenge</button>
      <button  @click="emit('create-challenge')" class="px-4 py-2.5 bg-[#690571] block text-white rounded-xl">Create Challenge</button>
    </div>
  </header>

  <CoreBaseModal :show="showCreateChallengeModal " @update:show="showCreateChallengeModal = false">
   <ChallengeManagementCreateChallenge @close="showCreateChallengeModal = false" />
   </CoreBaseModal>
</main>
  </template>

  <script setup lang="ts">
  const showCreateChallengeModal = ref(false)

  const showFeaturedChallengeType = ref(false)

  const handleToggle = () => {
    showFeaturedChallengeType.valuye = !showFeaturedChallengeType
  }

  const emit = defineEmits(['featured', 'create-challenge'])
  </script>
  
  