<template>
  <section
    class="lg:flex justify-between space-y-6 lg:space-y-0 bg-white shadow-sm border border-gray-50 rounded-2xl p-6"
  >
    <div>
      <h1 class="lg:text-4xl text-2xl font-medium max-w-xs">{{title}}</h1>
      <p class="text-sm text-[#777980] max-w-xs">
        {{ description }}
      </p>
    </div>
    <div v-if="showAddSection" class="overflow-x-auto scrollbar-hide">
      <div class="flex w-max space-x-1">
        <div @click="emit('add')" class="flex-shrink-0 w-40 relative border cursor-pointer border-dashed border-[#690571] rounded-2xl mr-1">
          <div class="absolute top-3 left-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                fill="#292D32"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="#292D32"
              />
            </svg>
          </div>
          <div
          class="flex justify-center items-center flex-col pt-14 gap-y-2"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 52 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.4175 6.39627C30.6325 5.03627 28.4225 4.25 26 4.25C20.135 4.25 15.375 9.01 15.375 14.875C15.375 20.74 20.135 25.5 26 25.5C31.865 25.5 36.625 20.74 36.625 14.875"
              stroke="#690571"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M44.2538 46.75C44.2538 38.5263 36.0726 31.875 26.0001 31.875C15.9276 31.875 7.74634 38.5263 7.74634 46.75"
              stroke="#690571"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="text-[#690571] text-xs">Add a team member</p>
        </div>
        </div>
        <div v-for="(value, key) in formattedStatData" :key="key" class="flex-shrink-0 w-40 border border-white relative">
          <img :src="getImageForRole(key)" class="rounded-b-2xl" alt="stat card" />
          <div class="absolute left-0 bottom-0 pl-4 pb-4">
            <h4 class="text-sm py-0 my-0 font-semibold text-white">{{ key }}</h4>
            <p class="font-light text-white">{{ value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import imageOne from '@/assets/img/admin-stat1.png'
import imageTwo from '@/assets/img/admin-stat2.png'
import imageThree from '@/assets/img/admin-stat3.png'
import imageFour from '@/assets/img/admin-stat1.png'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    showAddSection: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        default: ''
    },
    stats: {
        type: Array,
        default: () => []
    },
    statData: {
      type: Object,
      default: () => {}
    }
})

// const formattedStatData = computed(() => {
//       const keyMap = {
//         superAdminCount: 'Super Admin',
//         contentAdminCount: 'Content Admin',
//         challengeAdminCount: 'Challenge Admin',
//         userAdminCount: 'User Admin'
//       };

//       return Object.entries(props.statData)
//         .filter(([key]) => keyMap[key]) // Filter out unwanted keys
//         .reduce((acc, [key, value]) => {
//           acc[keyMap[key]] = value; // Map keys to their formatted names
//           return acc;
//         }, {});
//     })

const formattedStatData = computed(() => {
  const keyMap = {
    superAdminCount: 'Super Admin',
    contentAdminCount: 'Content Admin',
    challengeAdminCount: 'Challenge Admin',
    userAdminCount: 'User Admin'
  };

  return Object.entries(props.statData || {}) // Provide an empty object as a fallback
    .filter(([key]) => keyMap[key]) // Filter out unwanted keys
    .reduce((acc, [key, value]) => {
      acc[keyMap[key]] = value; // Map keys to their formatted names
      return acc;
    }, {});
});

// Role to image mapping
const roleImageMap = {
  'Super Admin': imageOne,
  'Content Admin': imageTwo,
  'Challenge Admin': imageThree,
  'User Admin': imageFour
}

// Function to get the image based on the role
const getImageForRole = (role: string) => {
  return roleImageMap[role] || imageOne; // Fallback to imageOne if no image is found
}

const emit = defineEmits(['add'])
</script>
