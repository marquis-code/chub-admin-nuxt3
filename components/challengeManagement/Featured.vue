 <template>
  <main class="border border-gray-100 rounded-lg bg-white shadow pt-6">
    <div class="px-6 lg:flex justify-between items-center space-y-4 lg:space-y-0">
      <div>
        <h4 class="text-xl text-[#1D1F2C]">Featured Challenges</h4>
      </div>
      <div class="lg:flex justify-end lg:space-x-4 space-y-4 lg:space-y-0">
        <div class="border rounded-md text-xs">
          <button @click="setTab('all')"  :class="[activeTab === 'all' ? 'text-[#690571] font-semibold border-b-2 rounded-md bg-[#F4ECFB]' : 'text-[#667085]']" class="px-4 py-2 m-0.5">All Features</button>
        <button @click="setTab('user-generated')"  :class="[activeTab === 'user-generated' ? 'text-[#690571] font-semibold border-b-2 rounded-md bg-[#F4ECFB]' : 'text-[#667085]']" class="px-4 py-2">User-generated</button>
        <button @click="setTab('chub-generated')"  :class="[activeTab === 'chub-generated' ? 'text-[#690571] font-semibold border-b-2 rounded-md bg-[#F4ECFB]' : 'text-[#667085]']" class="px-4 py-2">Chub-generated</button>
        </div>
      <div class="relative">
        <img src="@/assets/icons/search.svg" alt="date-picker" class="absolute left-3 top-2" />
        <input type="text" placeholder="Search for a challenge" class="px-4 py-2 pl-10 text-sm border rounded-md flex-grow" />
       </div>
      </div>
    </div>
  
    <div class="overflow-x-auto scrollbar-hide">
      <section>
        <!-- All Challenges -->
        <div v-if="activeTab === 'all' && challenges.length" class="flex w-full space-x-1 py-6 overflow-x-auto scrollbar-hidden">
          <ChallengeManagementFeatureCard
            v-for="(challenge, index) in challenges"
            :key="index"
            :challenge="challenge"
            :avatar="challenge.photo.image"
            :name="challenge.name"
            :role="challenge.generatedBy"
            :roleClass="challenge.color"
            :fname="challenge.user.firstName"
            :lname="challenge.user.lastName"
            :textColor="challenge.color"
            :bgColor="challenge.bgColor"
            :lastActive="challenge.createdAt"
            class="flex-shrink-0 w-64"
          />
        </div>
        <div v-else-if="activeTab === 'all'" class="flex justify-center border-t mt-4 items-center text-gray-800 h-32 rounded-md border-dashed">
          No Challenges Found
        </div>
      </section>
  
      <section>
        <!-- User-generated Challenges -->
        <div v-if="activeTab === 'user-generated' && userGeneratedChallenges.length" class="flex w-full space-x-1 py-6 overflow-x-auto scrollbar-hidden">
          <ChallengeManagementFeatureCard
            v-for="(challenge, index) in userGeneratedChallenges"
            :key="index"
            :avatar="challenge.photo.image"
            :name="challenge.name"
            :role="challenge.generatedBy"
            :roleClass="challenge.color"
            :fname="challenge.user.firstName"
            :lname="challenge.user.lastName"
            :textColor="challenge.color"
            :bgColor="challenge.bgColor"
            :lastActive="challenge.createdAt"
            class="flex-shrink-0 w-64"
          />
        </div>
        <div v-else-if="activeTab === 'user-generated'" class="flex justify-center border-t mt-4 items-center text-gray-800 h-32 rounded-md border-dashed">
          No User-generated Challenges Found
        </div>
      </section>
  
      <section>
        <!-- Chub-generated Challenges -->
        <div v-if="activeTab === 'chub-generated' && chubGeneratedChallenges.length" class="flex w-full space-x-1 py-6 overflow-x-auto scrollbar-hidden">
          <ChallengeManagementFeatureCard
            v-for="(challenge, index) in chubGeneratedChallenges"
            :key="index"
            :avatar="challenge.photo.image"
            :name="challenge.name"
            :role="challenge.generatedBy"
            :roleClass="challenge.color"
            :fname="challenge.user.firstName"
            :lname="challenge.user.lastName"
            :textColor="challenge.color"
            :bgColor="challenge.bgColor"
            :lastActive="challenge.createdAt"
            class="flex-shrink-0 w-64"
          />
        </div>
        <div v-else-if="activeTab === 'chub-generated'" class="flex justify-center border-t mt-4 items-center text-gray-800 h-32 rounded-md border-dashed">
          No Chub-generated Challenges Found
        </div>
      </section>
    </div>
  </main>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps({
    challenges: {
      type: Array,
      default: () => []
    }
  })
  
  const activeTab = ref('all')
  const setTab = (item: string) => {
    activeTab.value = item
  }
  
  const userGeneratedChallenges = computed(() => {
    if (props.challenges) {
      const filteredChallenges = props.challenges.filter(c => c.generatedBy === 'USER');
      return filteredChallenges.length > 0 ? filteredChallenges : [];
    }
    return []; // Return empty array if props.challenges is undefined
  });
  
  const chubGeneratedChallenges = computed(() => {
    if (props.challenges) {
      const filteredChallenges = props.challenges.filter(c => c.generatedBy === 'CHUB');
      return filteredChallenges.length > 0 ? filteredChallenges : [];
    }
    return []; // Return empty array if props.challenges is undefined
  });
  
  </script>
  
  <style>
  .scrollbar-hidden {
    scrollbar-width: none; /* For Firefox */
  }
  
  .scrollbar-hidden::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Edge */
  }
  </style>
  