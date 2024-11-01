<template>
    <div class="bg-white rounded-lg border border-gray-50 shadow-md p-4">
      <h2 class="text-xl font-bold mb-4">Activity</h2>
      <div class="relative space-y-4">
        <div class="absolute left-2 top-6 bottom-6 w-px border-dashed border-gray-300 border"></div>
        <div v-for="(activity, index) in activities" :key="index" class="relative flex items-start">
          <span class="w-4 h-4 bg-[#690571] rounded-full mt-1 mr-4 relative z-10"></span>
          <div class="flex-1">
            <p class="font-semibold text-base text-[#1D1F2C]">{{ activity.title }}</p>
            <p class="text-sm text-[#4A4C56]  pt-1">{{ activity.description }}</p>
            <div v-if="activity.roleFrom && activity.roleTo" class="flex items-center mt-2 space-x-2">
              <span class="text-xs font-medium bg-[#FFF0EA] text-[#F86624] rounded-md py-1 px-2">{{ activity.roleFrom }}</span>
              <span class="text-xs font-medium text-gray-500">→</span>
              <span class="text-xs font-medium bg-[#E9FAF7] text-[#1A9882] rounded-md py-1 px-2">{{ activity.roleTo }}</span>
            </div>
            <div class="flex items-center gap-x-3 pt-3">
                <img v-for="item in activity.attachmentArray" :key="item" :src="item" class="h-20 w-20" alt=""/>
            </div>
          </div>
          <span class="text-gray-400 text-xs ml-4">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import attachment1 from '@/assets/img/attachment1.png'
  import attachment2 from '@/assets/img/attachment2.png'
  import attachment3 from '@/assets/img/attachment3.png'
  
  const activities = ref([
    {
      title: 'New Task Added',
      description: 'You created new task',
      roleFrom: 'Co',
      roleTo: '',
      time: '2 days ago'
    },
    {
      title: 'Task Status Chaged',
      description: 'You move Moodboard task to Done',
      roleFrom: 'In Progress',
      roleTo: 'Done',
      time: '2 days ago'
    },
    {
      title: 'New Comment',
      description: 'You commented “Oke Veronica thank you ~~” in Wireframe Task',
      roleFrom: '',
      roleTo: '',
      time: '2 days ago'
    },
    {
      title: 'New Attachment',
      description: 'You upload new attachment',
      attachmentArray: [attachment1, attachment2, attachment3],
      roleFrom: '',
      roleTo: '',
      time: '5 Jan 2023, 15:15'
    },
    {
      title: 'New Task Added',
      description: 'You created new task',
      roleFrom: '',
      roleTo: '',
      time: '2 days ago'
    },
    {
      title: 'New Comment',
      description: 'You commented “i’ve been drop some reference” in Wireframe Task”',
      roleFrom: '',
      roleTo: '',
      time: '5 Jan 2023, 15:15'
    },
  ]);
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  