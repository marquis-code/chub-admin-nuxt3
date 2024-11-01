<template>
  <main>
    <CoreOverviewHeader title="Challenges" class="mb-6" />
    <div class="space-y-10">
      <div class="space-y-10">
        <ChallengeManagementHeader
          @featured="challengeType = 'featured'"
          @create-challenge="handleCreateChallenge"
          class="rounded-xl border-[0.5px] border-gray-100"
        />
      </div>

      <div v-if="challengeType === 'featured'">
        <ChallengeManagementFeatured
          v-if="!loading && challengeList.length"
          :challenges="challengeList"
        />
      </div>

      <!-- Challenges and Details section -->
      <div class="flex items-start gap-x-3">
        <!-- Challenge list section (larger width) with independent vertical scroll -->
        <div
          class="border border-gray-50 rounded-2xl p-3 space-y-6 bg-gray-25 transition-all duration-300 overflow-y-scroll"
          :class="[Object.keys(selectedChallenge).length ? 'w-9/12' : 'w-full']"
          style="
            max-height: 80vh;
            scrollbar-width: none;
            -ms-overflow-style: none;
          "
        >
          <ChallengeManagementChallengeFilter
            @selected="selectedTab"
            @toggleFilter="showFilterModal = true"
          />
          <ChallengeManagementChallengeCard
            :filterItem="activeTabFilter"
            v-if="!loading && challengeList?.length"
            :challenges="challengeList"
            @preview="handlePreview"
            class="cursor-pointer"
          />
          <div v-else-if="!challengeList?.length && loading" class="h-44 w-full bg-slate-300 animate-pulse rounded"></div>
          <div v-else class="h-44 flex justify-center items-center font-medium">No Challenges Available</div>
        </div>

        <!-- Challenge detail section (smaller width) with independent scroll and sticky position -->
        <div
          class="transition-all duration-300 sticky top-0"
          :class="
            Object.keys(selectedChallenge).length
              ? 'w-3/12 opacity-100'
              : 'opacity-0'
          "
          style="max-height: 80vh; overflow-y-scroll; scrollbar-width: none; -ms-overflow-style: none;"
        >
          <ChallengeManagementChallengeDetail
            :challenge="selectedChallenge"
            v-if="Object.keys(selectedChallenge).length"
          />
        </div>
      </div>
    </div>

    <!-- Filter modal -->

    <ModalFilterModal
      :loading="loading"
      v-if="showFilterModal"
      :isOpen="showFilterModal"
      @close="closeModal"
      @apply="fetchChallenges"
    />

    <CoreSideDrawer :showSideDescription="false" title="Create Challenge" description="Please fill the form to create a challenge" @close="showCreateModal = false" :show="showCreateModal" >
      <template #content>
        <section class="p-3">
         <ChallengeManagementCreateChallengeForm @challenge-payload="submitChallenge" class=""/>
        </section>
      </template>

    <template #action-btn>
      <div class="flex justify-end space-x-3">
        <button @click="closeModal"  type="button" class="rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
          <button
          type="button"
          class="rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Save to drafts
        </button>
        <button :disabled="creating" @click="submitChallenge" class="inline-flex disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-[#690571] px-3 py-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">{{creating ? 'processing..'  : 'Create Challenge'}} </button>
      </div>
    </template>
     </CoreSideDrawer>
  </main>
</template>

<script setup lang="ts">
import { useChallengeList } from "@/composables/admin-mgt/fetch-admin-challenge";
import { useCreateChallenge } from "@/composables/admin-mgt/create-challenge";
const { createChallenge, loading: creating } = useCreateChallenge();

const { challengeList, loading, getChallengeList, tabFilter } = useChallengeList();
const showFilterModal = ref(false);

const fetchChallenges = async () => {
  await getChallengeList(); // Trigger API call with current filters
  closeModal()
};

const submitChallenge = (payload: any) => {
  createChallenge()
    .then(response => {
      // handle successful creation
    })
    .catch(error => {
      // handle errors
    });
}

definePageMeta({
  layout: "dashboard",
});

const showCreateModal = ref(false)

const handleCreateChallenge = () => {
  showCreateModal.value = true
}


const closeModal = () => {
  showFilterModal.value = false;
};

const challengeType = ref("all");
const selectedChallenge = ref({});

// When a challenge is previewed (selected), set it to the selectedChallenge
const handlePreview = (item: any) => {
  selectedChallenge.value = item;
};

// For tab filtering
const activeTabFilter = ref("");

const selectedTab = (item: any) => {
  activeTabFilter.value = item
  tabFilter.value = item
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
