<template>
    <section
    class="bg-white shadow-sm border border-gray-50 rounded-2xl lg:flex justify-between items-center px-6"
  >
    <h1>{{title}}</h1>
    <div class="relative lg:w-3/12 py-6">
      <input
        type="search"
        placeholder="Search...."
        class="w-full border-b pl-6 text-sm outline-none"
      />
      <img
        src="@/assets/icons/search.svg"
        alt="search icon"
        class="absolute left-0 top-6"
      />
      <img
        src="@/assets/icons/notifications.svg"
        alt=""
        class="absolute right-0 top-5 h-6 w-6"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String, 
    default: 'Overview'
  }
})
</script>
