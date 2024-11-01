<template>
  <div class="mb-3">
      <h2 class="text-xs text-[#A3A9B6] font-medium">ROLE PERMISSIONS </h2>
      {{ roleData }}
      <div class="mt-1">
        <div>
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <select
              id="tabs"
              v-model="activeTab"
              name="tabs"
              class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
            <option value="administrator">Administrator</option>
            <option value="challenge-management">Challenge Management</option>
            <option value="content-management">Content Management</option>
            <option value="user-management">User Management</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-50">
              <nav class="-mb-px flex space-x-4" aria-label="Tabs">
                <a
                  href.prevent="#" @click="setActiveTab('administrator')"
                  :class="[activeTab === 'administrator' ? 'border-[#690571] text-[#690571]' : 'border-transparent text-gray-500']"
                  class="whitespace-nowrap border-b px-1 py-3 text-xs font-medium cursor-pointer"
                  aria-current="page"
                  >Administrator</a
                >
                <a
                  href.prevent="#" @click="setActiveTab('challenge-management')"
                  :class="[activeTab === 'challenge-management' ? 'border-[#690571] text-[#690571]' : 'border-transparent text-gray-500']"
                  class="whitespace-nowrap border-b px-1 py-3 text-xs font-medium cursor-pointer"
                  >Challenge Management</a
                >
                <a
                  href.prevent="#" @click="setActiveTab('content-management')"
                  :class="[activeTab === 'content-management' ? 'border-[#690571] text-[#690571]' : 'border-transparent text-gray-500']"
                  class="whitespace-nowrap border-b px-1 py-3 text-xs font-medium cursor-pointer"
                  >Content Management</a
                >
                <a
                  href.prevent="#" @click="setActiveTab('user-management')"
                  :class="[activeTab === 'user-management' ? 'border-[#690571] text-[#690571]' : 'border-transparent text-gray-500']"
                  class="whitespace-nowrap border-b px-1 py-3 text-xs font-medium cursor-pointer"
                  >User Management</a
                >
              </nav>
            </div>
          </div>
        </div>
        <TeamManagementAdminPermissions v-if="activeTab === 'administrator'" @update-permissions="updatePermissions('administrator', $event)" />
        <TeamManagementChallengeMgtPermissions v-if="activeTab === 'challenge-management'"  @update-permissions="updatePermissions('challengeManagement', $event)" />
        <TeamManagementContentMgtPermissions v-if="activeTab === 'content-management'" @update-permissions="updatePermissions('contentManagement', $event)" />
        <TeamManagementUserMgtPermissions v-if="activeTab === 'user-management'" @update-permissions="updatePermissions('userManagement', $event)" />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('administrator');

// State for the form
const roleName = ref('');
const roleColor = ref('');

// Permissions data
const permissions = ref({
administrator: {},
challengeManagement: {},
contentManagement: {},
userManagement: {},
});

// Set the active tab
const setActiveTab = (tab: string) => {
activeTab.value = tab;
};

const emit = defineEmits(['permissionOptions'])
// Update permissions data
const updatePermissions = (tab: string, data: any) => {
permissions.value[tab] = data;

emit('permissionOptions', permissions)
};

// Save role (handle the data as needed)
const saveRole = () => {
const roleData = {
  name: roleName.value,
  color: roleColor.value,
  permissions: permissions.value,
};
console.log(roleData);
};
</script>
