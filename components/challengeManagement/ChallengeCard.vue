  <template>
    <main>
      <div
        :class="{
          'border-[#690571] border-2': isHoveredIdx === idx || item.isChecked,
          'border-gray-50 border': !(isHoveredIdx === idx || item.isChecked)
        }"
        @mouseover="isHoveredIdx = idx"
        @mouseleave="isHoveredIdx = null"
        v-for="(item, idx) in challenges" :key="idx"
        class="bg-white cursor-pointer p-4 rounded-lg border-[0.5px] shadow-sm mb-4"
        @click="handleClick(item, idx)"
      >
        <div class="flex justify-between items-center border-b border-dashed border-gray-200 pb-6">
          <div class="flex items-center gap-x-3">
            <input type="checkbox" v-model="item.isChecked" class="h-4 w-4 pointer-events-none accent-[#2A1634]" />
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#E0E7E7"/>
            </svg>
            <p class="text-sm text-gray-500">29 Dec 2022 {{Object.keys(previewItem).length}}</p>
          </div>
          <div class="flex items-center gap-x-3">
            <div class="text-white bg-[#690571] px-3 py-2 text-xs rounded-full">
              {{ item.generatedBy === 'USER' ? 'User-generated' : 'Chub-generated' }}
            </div>
            <img src="@/assets/icons/more-options.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-between mt-5 pt-3">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="w-12 h-12 flex items-center justify-center">
                <img :src="item.photo.image" alt="icon" class="w-8 h-8" />
              </div>
              <div class="ml-4">
                <h2 class="text-sm font-medium">{{ item.name }}</h2>
                <p class="text-xs text-gray-500">
                  Created by <span class="text-[#690571]">{{ item.user.firstName }} {{ item.user.lastName }}</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500">Tasks</p>
            <p class="text-xs"><span>{{ item?.tasks?.length ?? 0 }}</span></p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Created</p>
            <p class="text-xs">{{ moment.utc(item.createdAt).format('DD-MMM-YY') || 'Nil' }}</p>
          </div>
          <div v-if="!Object.keys(previewItem).length">
            <p class="text-sm text-gray-500">Participants</p>
            <p class="text-xs">{{ item.user.firstName }} {{ item.user.lastName }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Start Date</p>
            <p class="text-xs">{{ moment.utc(item.startDate).format('DD-MMM-YY') || 'Nil' }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Due Date</p>
            <p class="text-xs">{{ moment.utc(item.endDate).format('DD-MMM-YY') || 'Nil' }}</p>
          </div>
          <div v-if="!Object.keys(previewItem).length">
            <p class="text-sm text-gray-500">Goal</p>
            <p class="text-[#1D1F2C] text-xs flex gap-x-3">
              <img src="@/assets/icons/health.svg" alt="icon" class="w-4 h-4" />
              {{ item.tag }}
            </p>
          </div>
          <div>
            <p class="text-xs text-green-500 bg-[#E9FAF7] px-3 py-1.5 rounded-lg">
              {{ item.challengeStatus === 'ONGOING' ? 'Ongoing' : item.challengeStatus }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
import { filters, useChallengeList } from '@/composables/admin-mgt/fetch-admin-challenge';
import moment from 'moment';
import { ref, watch } from 'vue';
const { getChallengeList, metadata, setPaginationPage } = useChallengeList();
// Props
const props = defineProps({
  challenges: {
    type: Array,
    default: () => []
  },
  filterItem: {
    type: String
  }
});

// Emits
const emit = defineEmits<{
  (event: 'preview', state: any): void
}>();

const previewItem = ref({}) as any;

// Initialize the isChecked property for each challenge item
watch(() => props.challenges, (newChallenges) => {
  newChallenges.forEach((item: any) => {
    if (!item.hasOwnProperty('isChecked')) {
      item.isChecked = false; // Initialize each challenge with isChecked false
    }
  });
});

// Handle click to preview a challenge and toggle checkbox for that specific item
const handleClick = (item: any, idx: number) => {
  item.isChecked = !item.isChecked; // Toggle isChecked for the specific item
  localStorage.setItem('selected-challenge', JSON.stringify(item));
  previewItem.value = item;
  emit('preview', item);
};

// Watch for changes in filterItem prop and update filters accordingly
watch(() => props.filterItem, (newFilterItem) => {
  filters.value.status = newFilterItem === 'All' ? '' : newFilterItem;  // Set as string
  getChallengeList(filters.value);  // Fetch the updated challenges list
});

// Fetch challenges from composable

// Initial fetch based on the current filter status
getChallengeList(filters.value);

const isHoveredIdx = ref<number | null>(null);
</script>
