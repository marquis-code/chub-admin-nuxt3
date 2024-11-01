<template>
    <div class="p-4 max-w-lg mx-auto bg-white border rounded-lg shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">What type of proof</h2>
        <button class="text-gray-500">&times;</button>
      </div>
      <p class="text-gray-500 mb-6">Choose Image or video evidence</p>
      <div class="flex justify-around mb-6">
        <div class="flex flex-col items-center cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span class="text-purple-600">Image</span>
        </div>
        <div class="flex flex-col items-center cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span class="text-purple-600">Video</span>
        </div>
      </div>
      <p class="text-gray-500 text-center mb-6">Note</p>
      <p class="text-gray-500 text-center mb-6">You or your admins will be required to manually verify all uploaded proof sent by community members</p>
      <div class="flex justify-between">
        <button class="text-gray-500 px-4 py-2 rounded-md">Cancel</button>
        <button class="bg-purple-600 text-white px-4 py-2 rounded-md">Submit</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .form-checkbox {
    accent-color: #a855f7; /* Tailwind CSS purple-500 */
  }
  </style>
  