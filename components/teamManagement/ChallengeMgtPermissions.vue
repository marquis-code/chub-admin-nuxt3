<!-- <template>
    <div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Challenge Creation:</span
            >
            <label
              for="challenge-creation"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="challenge-creation"
                  type="checkbox"
                  class="hidden peer"
                  v-model="permissions.challengeCreation"
                  @change="emitUpdate"
                />
                <div
                  class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
          </div>
          <p class="text-[#858D9D] text-sm max-w-sm font-light">
            Create draft challenges with titles, descriptions, goals, deadlines, and media requirements. 
          </p>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Schedule Challenge:</span
            >
            <label
              for="scheduled-challange"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="scheduled-challenge"
                  type="checkbox"
                  class="hidden peer"
                  v-model="permissions.scheduledChallenge"
                  @change="emitUpdate"
                />
                <div
                  class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
          </div>
          <p class="text-[#858D9D] text-sm max-w-sm font-light">
            Schedule the publishing of challenges for specific dates and times.
          </p>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Challenge Management:</span
            >
            <label
              for="challange-management"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="challenge-management"
                  type="checkbox"
                  class="hidden peer"
                  v-model="permissions.challengeManagement"
                  @change="emitUpdate"
                />
                <div
                  class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
          </div>
          <p class="text-[#858D9D] text-sm max-w-sm font-light">
            Review and edit already published challenges. 
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Archive Challenge:</span
            >
            <label
              for="archive-challange"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="archive-challenge"
                  type="checkbox"
                  class="hidden peer"
                  v-model="permissions.archiveChallenge"
                  @change="emitUpdate"
                />
                <div
                  class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
          </div>
          <p class="text-[#858D9D] text-sm max-w-sm font-light">
            Archive older challenges.
          </p>
        </div>
      </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const permissions = ref({
  challengeCreation: false,
  scheduledChallenge: false,
  challengeManagement: false,
  archiveChallenge: false
});

const emit = defineEmits(['update-permissions'])

const emitUpdate = () => {
  emit('update-permissions', permissions.value);
};
</script> -->

<template>
  <div>
    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-[#1D1F2C] text-sm font-medium">Challenge Creation:</span>
        <label
          for="challenge-creation"
          class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
        >
          <span class="relative">
            <input
              id="challenge-creation"
              type="checkbox"
              class="hidden peer"
              v-model="permissions.challengeCreation"
              @change="emitUpdate"
            />
            <div class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"></div>
            <div
              class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
            ></div>
          </span>
        </label>
      </div>
      <p class="text-[#858D9D] text-sm max-w-sm font-light">
        Create draft challenges with titles, descriptions, goals, deadlines, and media requirements.
      </p>
    </div>

    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-[#1D1F2C] text-sm font-medium">Schedule Challenge:</span>
        <label
          for="scheduled-challenge"
          class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
        >
          <span class="relative">
            <input
              id="scheduled-challenge"
              type="checkbox"
              class="hidden peer"
              v-model="permissions.scheduledChallenge"
              @change="emitUpdate"
            />
            <div class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"></div>
            <div
              class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
            ></div>
          </span>
        </label>
      </div>
      <p class="text-[#858D9D] text-sm max-w-sm font-light">
        Schedule the publishing of challenges for specific dates and times.
      </p>
    </div>

    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-[#1D1F2C] text-sm font-medium">Challenge Management</span>
        <label
          for="challenge-management"
          class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
        >
          <span class="relative">
            <input
              id="challenge-management"
              type="checkbox"
              class="hidden peer"
              v-model="permissions.challengeManagement"
              @change="emitUpdate"
            />
            <div class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"></div>
            <div
              class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
            ></div>
          </span>
        </label>
      </div>
      <p class="text-[#858D9D] text-sm max-w-sm font-light">
        Review and edit already published challenges. 
      </p>
    </div>

    <!-- Similar sections for other toggles -->

    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-[#1D1F2C] text-sm font-medium">Archive Challenge:</span>
        <label
          for="archive-challenge"
          class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
        >
          <span class="relative">
            <input
              id="archive-challenge"
              type="checkbox"
              class="hidden peer"
              v-model="permissions.archiveChallenge"
              @change="emitUpdate"
            />
            <div class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"></div>
            <div
              class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
            ></div>
          </span>
        </label>
      </div>
      <p class="text-[#858D9D] text-sm max-w-sm font-light">Archive older challenges.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const permissions = ref({
  challengeCreation: false,
  scheduledChallenge: false,
  challengeManagement: false,
  archiveChallenge: false
});

const emit = defineEmits(['update-permissions'])

const emitUpdate = () => {
  emit('update-permissions', { ...permissions.value });
};
</script>
