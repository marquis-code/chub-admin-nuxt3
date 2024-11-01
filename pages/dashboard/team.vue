<script setup lang="ts">
import { useCreateAdminRole } from '@/composables/admin-mgt/createAdminRole';
import { useSuperAdminActivityLogs } from '@/composables/admin-mgt/getSuperAdminActivityLogs';
import { useAdminUserDistribution } from '@/composables/admin-mgt/fetchAdminUsersDistribution';
import { useAdminTeams } from '@/composables/admin-mgt/getAdminTeam';
import { useGetAuditLogs } from '@/composables/admin-mgt/getAuditLogos';
import { useSuspendAdmin } from '@/composables/admin-mgt/suspendAdmin';
import { useAssignRoleToAdmin } from '@/composables/admin-mgt/assignRoleToAdmin';
import { useUpdateAdminProfile } from '@/composables/admin-mgt/updateAdminProfile';
import imageOne from '@/assets/img/admin-stat1.png';
import imageTwo from '@/assets/img/admin-stat2.png';
import imageThree from '@/assets/img/admin-stat3.png';

definePageMeta({
  layout: 'dashboard',
});

const { loading: loadingTeamStats, adminUserDistribution } = useAdminUserDistribution();
const { adminTeams, loading: loadingAdminTeams } = useAdminTeams();
const { loading: loadingAuditLogs, auditLogsList } = useGetAuditLogs();
const { suspendAdmin, loading: suspending } = useSuspendAdmin();
const { assignRoleToAdmin, loading, payload, setPayload } = useAssignRoleToAdmin();
const { updateAdminProfile, loading: updating, setUpdatePayload } = useUpdateAdminProfile();
const { getAdminActivityLogs, loading: loadingLogs, adminActivityLogs } = useSuperAdminActivityLogs();
const { createAdminRole, loading: creatingRole, setRoleObj } = useCreateAdminRole();

const userStats = ref([
  {
    image: imageOne,
    key: '',
    title: 'USER ADMIN',
    count: '0',
  },
  {
    image: imageTwo,
    key: '',
    title: 'USER ADMIN',
    count: '0',
  },
  {
    image: imageThree,
    key: '',
    title: 'USER ADMIN',
    count: '0',
  },
  {
    image: imageOne,
    key: '',
    title: 'USER ADMIN',
    count: '0',
  },
]);

const payloadObj = ref({
  name: '',
  tag: '',
  permissions: {},
});

const handleSubmit = () => {
  setRoleObj(payloadObj.value);
  createAdminRole().then(() => {
    showAddRoleModal.value = false;
  });
};

const handleSelectedRoleTag = (item: any) => {
  payloadObj.value.tag = item;
};

const handlePermissionOptions = (item: any) => {
  payloadObj.value.permissions = item;
};

const activeTab = ref('all');
const setTab = (item: string) => {
  activeTab.value = item;
};

// Computed property to filter adminTeams based on the activeTab value
const filteredAdminTeams = computed(() => {
  if (activeTab.value === 'all') {
    return adminTeams.value;
  } else {
    return adminTeams.value.filter((member) => {
      switch (activeTab.value) {
        case 'admin':
          return member.role === 'ADMIN';
        case 'super-admin':
          return member.role === 'SUPER_ADMIN';
        case 'content-admin':
          return member.role === 'CONTENT_ADMIN';
        case 'challenge-admin':
          return member.role === 'CHALLENGE_ADMIN';
        case 'user-admin':
          return member.role === 'USER_ADMIN';
        default:
          return false;
      }
    });
  }
});

const showAddAdminModal = ref(false);
const showAddRoleModal = ref(false);

const addTeamMember = () => {
  showAddAdminModal.value = true;
};

const handleAddRole = () => {
  showAddRoleModal.value = true;
};

const handleAdminActivityDetails = (member: any) => {
  console.log(member, 'here');
  getAdminActivityLogs(member.id);
};
</script>

<template>
  <main>
    <section
        class="bg-white shadow-sm border border-gray-50 rounded-2xl lg:flex justify-between items-center px-6"
      >
        <h1>Overview</h1>
        <div class="relative w-full lg:w-3/12 py-6">
          <input
            type="search"
            placeholder="Search...."
            class="w-full border-b pl-6 text-sm outline-none"
          />
          <img
            src="@/assets/icons/search.svg"
            alt="search icon"
            class="absolute left-0 top-6"
          />
          <img
            src="@/assets/icons/notifications.svg"
            alt=""
            class="absolute right-0 top-5 h-6 w-6"
          />
        </div>
      </section>
   <section class="py-4">
    <CoreHeaderWithStats :statData="adminUserDistribution" @add="addTeamMember" title="Manage your team" description="Create and manage admins, content admins and challenge admins" :stats="userStats"  />
   </section>
   
    <section class="bg-white shadow-sm border border-gray-50 rounded-2xl">
      <div class="border-b border-gray-50">
        <div class="lg:flex justify-between items-center px-6 pt-5 border-b-[0.5px] border-gray-100 pb-3">
          <h1 class="text-xl font-semibold">Team members</h1>
          <div class="lg:flex justify-end items-end">
            <div class="lg:flex gap-x-5 space-y-3 lg:space-y-0">
              <div class="border rounded-md text-xs flex overflow-x-auto hide-scrollbar">
                <!-- <button
                  @click="setTab('all')"
                  :class="[activeTab === 'all' ? 'text-[#690571] bg-[#F4ECFB]' : 'text-[#667085]']"
                  class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                >
                  All
                </button> -->
                <!-- <div>
                  <button
                    @click="setTab('all-admin')"
                    :class="[activeTab === 'all-admin' ? 'text-[#690571] bg-[#F4ECFB]' : 'text-[#667085]']"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    All Admin
                  </button>
                </div> -->
                <div>
                  <button
                    @click="setTab('super-admin')"
                    :class="[activeTab === 'super-admin' ? 'text-[#690571] bg-[#FFEFFE]' : 'text-[#667085]']"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    Super Admin
                  </button>
                </div>
                <div>
                  <button
                    @click="setTab('content-admin')"
                    :class="[activeTab === 'content-admin' ? 'text-[#FF2BEA] bg-[#F4ECFB]' : 'text-[#667085]']"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    Content Admin
                  </button>
                </div>
                <div>
                  <button
                    @click="setTab('challenge-admin')"
                    :class="[activeTab === 'challenge-admin' ? 'text-[#FF9E2B] bg-[#FFF3E0]' : 'text-[#667085]']"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    Challenge Admin
                  </button>
                </div>
                <div>
                  <button
                    @click="setTab('user-admin')"
                    :class="[activeTab === 'user-admin' ? 'text-[#2BB2FE] bg-[#EAF8FF]' : 'text-[#667085]']"
                    class="px-4 py-3 my-0.5 rounded-lg font-semibold block"
                  >
                    User Admin
                  </button>
                </div>
              </div>
              <div class="relative">
                <img
                  src="@/assets/icons/search.svg"
                  alt="date-picker"
                  class="absolute left-3 top-2"
                />
                <input
                  type="text"
                  placeholder="Search admins. . ."
                  class="px-4 py-2 pl-10 text-sm border rounded-md flex-grow"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="!loadingAdminTeams">
          <div v-if="filteredAdminTeams.length === 0" class="p-6 text-center flex justify-center items-center h-44 rounded-md">
            <p class="text-gray-500">No team members found for this role. {{activeTab}}</p>
          </div>
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-2 lg:p-6">
            <TeamManagementTeamMemberCard
              class="cursor-pointer"
              :activeTab="activeTab"
              :member="member"
              v-for="(member, index) in filteredAdminTeams"
              :key="index"
              :avatar="member.photo.image"
              :id="member.id"
              :online="member.online"
              :name="member.name"
              :firstName="member.firstName"
              :lastName="member.lastName"
              :role="member.role"
              :roleClass="member.roleClass"
              :email="member.email"
              :textColor="member.textColor"
              :bgColor="member.bgColor"
              :lastSeen="member.lastSeen"
              :lastActive="member.lastActive"
              @click="handleAdminActivityDetails(member)"
            />
          </div>
        </div>
        <div v-else class="h-44 w-full bg-slate-300 animate-pulse rounded"></div>
      </div>
    </section>

    <div class="lg:p-4 p-2">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="lg:col-span-1">
          <TeamManagementAllAdminsSummary :statData="adminUserDistribution" @addRole="handleAddRole" />
        </div>
        <div class="lg:col-span-2">
          <TeamManagementActivityFeed v-if="!loadingAuditLogs" :logs="auditLogsList " />
          <div v-else class="h-44 w-full bg-slate-300 animate-pulse rounded"></div>
        </div>
      </div>
    </div>

    <CoreBaseModal
      :show="showAddAdminModal"
      @update:show="showAddAdminModal = false"
    >
      <TeamManagementCreateAdminForm @close="showAddAdminModal = false" />
    </CoreBaseModal>

    <CoreBaseModal
      :show="showAddRoleModal"
      @update:show="showAddRoleModal = false"
    >
      <section class="p-2">
        <div class="border-b border-gray-100 pb-4">
          <h1 class="text-[#1D1F2C] font-semibold pl-1 text-lg">Add role</h1>
          <p class="text-[#667085] text-sm">Define role and its permissions</p>
        </div>
        <div class="">
          <div class="mb-6">
            <section>
              <h5 class="text-xs text-[#A3A9B6] font-medium mt-4">
                  ROLE INFORMATION
                </h5>
                <div class="mt-4 max-w-7xl">
                  <label for="role-name" class="block text-[#777980] text-sm"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="role-name"
                    v-model="payloadObj.name"
                    placeholder="Type name here..."
                    class="mt-1 p-2 py-2.5 border rounded w-10/12 font-light text-sm"
                  />
                </div>
          </section>
            <TeamManagementColorTags @role-tag="handleSelectedRoleTag" />
          </div>

          <TeamManagementPermissionTabs @permissionOptions="handlePermissionOptions" />

          <div class="flex justify-between items-center pt-6 border-t border-gray-100">
            <div>
              <button
                @click="showAddRoleModal = false"
                class="mr-4 px-6 py-2 bg-white border border-[#858D9D] rounded-lg text-sm font-light"
              >
                Cancel
              </button>
            </div>
            <div>
              <button  
                type="button"
                @click="handleSubmit"
                class="px-6 py-2 disabled:cursor-not-allowed disabled:opacity-25 bg-[#690571] text-white rounded-lg text-sm font-medium"
              >
              {{ creatingRole ? 'processing...' : 'Save Role'  }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </CoreBaseModal>
  </main>
</template>