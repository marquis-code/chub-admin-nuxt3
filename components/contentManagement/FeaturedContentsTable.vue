<template>
    <div class="lg:w-1/3 bg-white shadow-md rounded-lg m-4 border border-gray-50">
        <div class="flex items-center justify-between mb-4 border-b pb-5 border-gray-100 px-4 pt-4">
          <h2 class="text-lg font-semibold text-[#1D1F2C]">Featured Content</h2>
          <button @click="handleFeatureContent" class="bg-[#690571] text-white rounded-lg px-4 py-2 text-sm">Feature content</button>
        </div>
        <div v-for="content in 6" :key="content" class="flex items-center mb-4 p-4">
          <img src="@/assets/img/challenge.png" class="w-8 h-8 mr-2" />
          <div class="flex-1">
            <h3 class="text-sm font-medium">Create 15 comics</h3>
            <p class="text-xs text-[#667085]">Target group: <span class="text-[#690571]">John something</span></p>
          </div>
          <p class="text-gray-500 text-xs">End date: <br /> <span class="text-xs">12 Sept 2024</span></p>
        <div class="flex items-center pl-6">
          <button class="ml-2">
            <span class="sr-only">View</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z" stroke="#858D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z" stroke="#858D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
          </button>
          <button class="ml-2">
            <span class="sr-only">Edit</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20.0002H21M3 20.0002H4.67454C5.16372 20.0002 5.40832 20.0002 5.63849 19.945C5.84256 19.896 6.03765 19.8152 6.2166 19.7055C6.41843 19.5818 6.59138 19.4089 6.93729 19.063L19.5 6.50023C20.3285 5.6718 20.3285 4.32865 19.5 3.50023C18.6716 2.6718 17.3285 2.6718 16.5 3.50023L3.93726 16.063C3.59136 16.4089 3.4184 16.5818 3.29472 16.7837C3.18506 16.9626 3.10425 17.1577 3.05526 17.3618C3 17.5919 3 17.8365 3 18.3257V20.0002Z" stroke="#858D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
          </button>
        </div>
        </div>
      </div>
</template>


<script setup lang="ts">
const emit = defineEmits<{
  (event: 'toggleModal'): void
}>()
const handleFeatureContent = () => {
    emit('toggleModal')
}
</script>
