<template>
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:w-4/12"> -->
        <div class="stat-card border shadow-sm border-gray-50 py-6 flex justify-between bg-white rounded-lg p-3" v-for="({name, count, icon}, idx) in stats" :key="idx">
         <div>
          <h4 class="text-[#777980] text-sm font-medium">{{name}}</h4>
          <p class="text-lg text-[#1D1F2C] font-semibold">{{count}}</p>
         </div>
        <div>
          <img :src="icon" alt="date-picker" class="h-10 w-10" />
        </div>
        </div>
      <!-- </div> -->
</template>

<script setup lang="ts">
import challengeListBadge from '@/assets/img/challenges-list-badge.png'
import completedChallengeBadge from '@/assets/img/completed-challenge-badge.png'
import progressChallengeBadge from '@/assets/img/progress-challenge-badge.png'
const props = defineProps({
    statsObj: {
        type: Object,
        default: () => {}
    }
})
const stats = computed(() => [
  {
    name: 'Challenges',
    count: props.statsObj?.totalChallenges?.toLocaleString() || '0', // formats number with commas or defaults to '0'
    icon: challengeListBadge
  },
  {
    name: 'Challenges In Progress',
    count: props.statsObj?.ongoingChallenges?.toLocaleString() || '0',
    icon: progressChallengeBadge
  },
  {
    name: 'Challenges Done',
    count: props.statsObj?.completedChallenges?.toLocaleString() || '0',
    icon: completedChallengeBadge
  },
  {
    name: 'Completion rate',
    count: props.statsObj?.completionRate != null ? `${(props.statsObj.completionRate * 100).toFixed(0)}%` : '0%', // checks for null or undefined
    icon: completedChallengeBadge
  }
]);
</script>
