   <template>
    <div class="bg-white rounded-lg border border-gray-50 shadow-md p-4">
      <h2 class="text-lg font-bold mb-3">Activity</h2>
      <div class="relative space-y-4 h-96 overflow-y-auto">
        <div class="absolute left-2 top-6 bottom-6 w-px border-dashed border-gray-300 border"></div>
        <div v-for="(activity, index) in logs" :key="index" class="relative flex items-start">
          <span class="w-4 h-4 bg-purple-700 rounded-full mt-1 mr-4 relative z-10"></span>
          <div class="flex-1">
            <p class="font-medium text-base text-[#1D1F2C]">{{ activity.title }}</p>
            <p class="text-xs text-[#4A4C56]  pt-1">{{ activity.description }}</p>
            <div v-if="activity.roleFrom && activity.roleTo" class="flex items-center mt-2 space-x-2">
              <span class="text-xs font-medium bg-[#FFEFFE] text-[#FF2BEA] rounded-xl py-1 px-2">{{ activity.roleFrom }}</span>
              <span class="text-xs font-medium text-gray-500">→</span>
              <span class="text-xs font-medium bg-[#F4ECFB] text-[#690571] rounded-xl py-1 px-2">{{ activity.roleTo }}</span>
            </div>
          </div>
          <span class="text-[#858D9D] text-xs ml-4">{{ formatDate(activity.createdAt) }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import moment from "moment";
  import { ref } from 'vue';

  const props = defineProps({
    logs: {
      type: Array,
      default: () => []
    }
  })

  // Helper function to display relative time if the date is recent
const formatDate = (createdAt: string) => {
  const date = moment(createdAt);
  const now = moment();
  
  // If the date is within 7 days, display relative time (e.g., "2 days ago")
  if (now.diff(date, 'days') < 7) {
    return date.fromNow(); // e.g., "2 days ago"
  }
  
  // Otherwise, display the full date (e.g., "5 Jan 2023, 15:15")
  return date.format("D MMM YYYY, HH:mm");
};
  </script>
  
  <style>
  /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
  .relative {
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
  }

  .relative::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
</style>
