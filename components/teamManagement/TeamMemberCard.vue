<template>
  <main>
    <div
    :class="{
      'border-[#690571]': isHovered || isChecked,
      'border-gray-50': !(isHovered || isChecked)
    }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    @click="toggleCheckbox"
    class="border bg-white p-4 rounded-lg shadow-sm relative cursor-pointer"
  >
    <input type="checkbox"  v-model="isChecked" class="absolute left-4 top-4 h-4 w-4 pointer-events-none accent-[#2A1634]" />
    <img
      src="@/assets/icons/more.svg"
      @click.stop="toggleDropdown"
      class="absolute right-4 top-4 cursor-pointer"
      alt="more"
    />
    <div
      v-if="isDropdownVisible"
      class="absolute right-4 top-10 bg-white shadow-lg rounded-lg p-2 w-48"
    >
      <ul class="">
        <li @click="handleAction('modify')" class="p-2 hover:bg-gray-50 rounded cursor-pointer flex items-center gap-x-2 text-xs">            
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13.5L14.25 11.25M14.25 11.25L16.5 13.5M14.25 11.25V15.75M9 11.625H5.625C4.57833 11.625 4.05499 11.625 3.62914 11.7542C2.67034 12.045 1.92003 12.7953 1.62918 13.7541C1.5 14.18 1.5 14.7033 1.5 15.75M10.875 5.625C10.875 7.48896 9.36396 9 7.5 9C5.63604 9 4.125 7.48896 4.125 5.625C4.125 3.76104 5.63604 2.25 7.5 2.25C9.36396 2.25 10.875 3.76104 10.875 5.625Z" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>              
          Modify role
        </li>
        <li @click="handleAction('edit')" class="p-2 hover:bg-gray-50 rounded cursor-pointer flex items-center gap-x-2 text-xs">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75 11.625H5.625C4.57833 11.625 4.05499 11.625 3.62914 11.7542C2.67034 12.045 1.92003 12.7953 1.62918 13.7541C1.5 14.18 1.5 14.7033 1.5 15.75M10.875 5.625C10.875 7.48896 9.36396 9 7.5 9C5.63604 9 4.125 7.48896 4.125 5.625C4.125 3.76104 5.63604 2.25 7.5 2.25C9.36396 2.25 10.875 3.76104 10.875 5.625ZM8.25 15.75L10.576 15.0854C10.6874 15.0536 10.7431 15.0377 10.795 15.0138C10.8412 14.9927 10.885 14.9669 10.9259 14.9368C10.972 14.903 11.013 14.862 11.0949 14.7801L15.9375 9.93753C16.4553 9.41975 16.4553 8.58025 15.9375 8.06248C15.4197 7.54472 14.5803 7.54473 14.0625 8.0625L9.21988 12.9051C9.13796 12.987 9.097 13.028 9.06318 13.0741C9.03314 13.115 9.00734 13.1588 8.98616 13.205C8.96231 13.2569 8.9464 13.3126 8.91457 13.424L8.25 15.75Z" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
          Edit member
        </li >
        <li @click="handleAction('view')" class="p-2 hover:bg-gray-50 rounded cursor-pointer flex items-center gap-x-2 text-xs">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 9.72V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.49756 10.8678L7.28256 8.55031C7.53756 8.22031 8.01006 8.16031 8.34006 8.41531L9.71256 9.49531C10.0426 9.75031 10.5151 9.69031 10.7701 9.36781L12.5026 7.13281" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
          View activity
        </li>
        <li @click="handleAction('remove')" class="p-2 hover:bg-gray-50 rounded cursor-pointer flex items-center gap-x-2 text-xs">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H8.4C7.55992 1.5 7.13988 1.5 6.81901 1.66349C6.53677 1.8073 6.3073 2.03677 6.16349 2.31901C6 2.63988 6 3.05992 6 3.9V4.5M7.5 8.625V12.375M10.5 8.625V12.375M2.25 4.5H15.75M14.25 4.5V12.9C14.25 14.1601 14.25 14.7902 14.0048 15.2715C13.789 15.6948 13.4448 16.039 13.0215 16.2548C12.5402 16.5 11.9101 16.5 10.65 16.5H7.35C6.08988 16.5 5.45982 16.5 4.97852 16.2548C4.55516 16.039 4.21095 15.6948 3.99524 15.2715C3.75 14.7902 3.75 14.1601 3.75 12.9V4.5" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
          Suspend member
        </li>
      </ul>
    </div>
    <div>
      <div class="flex items-center justify-center flex-col gap-y-2">
        <img :src="avatar" alt="avatar" class="rounded-full w-16 h-16" />
        <!-- <h3 class="font-medium text-sm">{{ name }}</h3> -->
        <!-- <span :class="`text-xs text-[${textColor}] bg-[${bgColor}] px-2 py-1 rounded-2xl`">{{ role }}</span> -->
        <!-- <span 
        :class="{
          'text-xs text-white bg-green-500 px-2 py-1 rounded-2xl': role === 'SUPER_ADMIN',
          'text-xs text-black bg-gray-300 px-2 py-1 rounded-2xl': role !== 'SUPER_ADMIN'
        }"
      >
        {{ formatRole(role) }}
      </span> -->
    <div class="mt-2 flex justify-center items-center flex-col gap-y-1 font-medium">
      <p class="text-sm text-[#1D1F2C]"> {{ firstName }}  {{ lastName }}</p>
      <CoreRoleBadge :role="role" />
    </div>
      </div>
      <div class="flex items-center flex-col justify-center gap-y-2">
        <div class="border border-dashed border-gray-100 w-full my-4"></div>
        <div class="text-sm text-gray-500 flex justify-between items-center w-full">
          <p class="text-xs">Email:</p>
          <p class="text-[#4A4C56] font-semibold text-xs">{{ email }}</p>
        </div>
        <div class="text-sm text-gray-500 flex justify-between items-center w-full">
          <p class="text-xs">Last Active: </p>
          <p class="text-[#4A4C56] font-semibold text-xs">{{ moment.utc(lastSeen).format('DD-MMM-YY') || 'Nil' }}</p>
        </div>
      </div>
    </div>
  </div>
  <ModalRemoveAdminModal :member="member" :isOpen="showRemoveModal" @close="showRemoveModal = false" />
  <CoreBaseModal
  :show="openEditModal"
  @update:show="openEditModal = false"
>
  <TeamManagementCreateAdminForm :isModify="isModifyOptionSelected" title="Edit Admin" :member="member" @close="openEditModal = false" />
</CoreBaseModal>
  </main>
  </template>
  
  <script lang="ts" setup>  
  import moment from "moment";
  const props = defineProps<{
    name: string
    firstName: string
    lastName: string
    role: string
    email: string
    lastActive: string
    lastSeen: string
    avatar: string
    textColor: string
    bgColor: string
    member: Object
    activeTab: string
  }>()

// Format the role to replace underscores and capitalize each word
const formattedRole = computed(() => {
  return props.role.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
});

// Assign different colors based on the role
const badgeClass = computed(() => {
  switch (props.role) {
    case 'SUPER_ADMIN':
      return 'text-xs bg-[#F4ECFB] text-[#690571] px-2 py-1 rounded-2xl';
    case 'CONTENT_ADMIN':
      return 'text-xs bg-[#FFEFFE] text-[#FF2BEA] px-2 py-1 rounded-2xl';
    case 'CHALLENGE_ADMIN':
      return 'text-xs bg-[#FFF3E0] text-[#FF9E2B] px-2 py-1 rounded-2xl';
    case 'USER_ADMIN':
      return 'text-xs bg-[#EAF8FF] text-[#2BB2FE] px-2 py-1 rounded-2xl';
    default:
      return 'text-xs text-black bg-gray-300 px-2 py-1 rounded-2xl';
  }
});

const isModifyOptionSelected = ref(false)

  const openEditModal = ref(false)
  
  const isHovered = ref(false)
  const isChecked = ref(false)
  const isDropdownVisible = ref(false)
  
  const toggleCheckbox = () => {
    isChecked.value = !isChecked.value
  }
  
  const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value
  }
  
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.dropdown')) {
      isDropdownVisible.value = false
    }
  }
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  const showRemoveModal = ref(false)

  const handleAction = (item: any) => {
    if(item === 'remove'){
      showRemoveModal.value = true
    }

    if(item === 'modify'){
      isModifyOptionSelected.value = true
      openEditModal.value = true
    }

    if(item == 'edit'){
      openEditModal.value = true
    }
   console.log('action')
  }
  </script>
  
