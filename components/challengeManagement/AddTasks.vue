<template>
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-4">Add Task</h2>
      <div class="flex items-center">
        <input
          type="text"
          placeholder="name your task..."
          class="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button class="ml-4 bg-purple-200 text-purple-600 px-4 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Add task
        </button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .form-checkbox {
    accent-color: #a855f7; /* Tailwind CSS purple-500 */
  }
  </style>
  