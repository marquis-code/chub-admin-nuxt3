<template>
  <main>
    <table class="min-w-full table-fixed divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
            <input
              :checked="indeterminate || selectedPeople.length === usersList.length"
              :indeterminate="indeterminate"
              @change="selectedPeople = $event.target.checked ? usersList.map((p) => p.email) : []"
              type="checkbox"
              class="custom-checkbox"
            />
          </th>
          <th scope="col" class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-medium text-[#1D1F2C]">Name
        </th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Email</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Phone</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Joined</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Last login</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Status</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-[#1D1F2C]">Challenges
          Completed</th>
        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3 text-sm font-medium text-[#1D1F2C]">
          Action
        </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr
          v-for="(person, idx) in usersList"
          :key="person.email"
          class="cursor-pointer"
          :class="[selectedPeople.includes(person.email) && 'bg-gray-50']"
        >
          <td class="relative px-7 sm:w-12 sm:px-6">
            <div
              v-if="selectedPeople.includes(person.email)"
              class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
            ></div>
            <input
              :value="person.email"
              v-model="selectedPeople"
              type="checkbox"
              class="custom-checkbox"
            />
          </td>
          <!-- Remaining data cells here -->
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
            <div class="flex items-center">
              <div class="h-11 w-11 flex-shrink-0">
                <img class="h-11 w-11 rounded-full"
                  :src="person?.photo?.image"
                  alt="">
              </div>
              <div class="ml-4">
                <div class="font-medium text-gray-900">{{ `${person?.firstName} ${person?.lastName}` ?? 'Nil' }}</div>
              </div>
            </div>
          </td>
          <td @click="router.push(`/dashboard/user/${idx}`)"
            :class="['whitespace-nowrap py-4 pr-3 text-sm font-medium', selectedPeople.includes(person.email) ? 'text-indigo-600' : 'text-gray-900']"
            class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person?.email ?? 'Nil' }}</td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person?.phone ?? 'Nil' }}</td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{ moment.utc(person?.createdAt).format('DD-MMM-YY') || 'Nil' }}</td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">  {{ moment.utc(person?.lastSeen).format('DD-MMM-YY') || 'Nil' }}</td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <span class="px-5 py-1.5 font-medium rounded-lg"
              :class="[person.status === 'ACTIVE' ? 'bg-[#E9FAF7] text-[#1A9882]' : person.status === 'DEACTIVATED' ? 'bg-[#FEECEE] text-[#EB3D4D]' : person.status === 'SUSPENDED' ? 'bg-[#F0F1F3] text-[#667085]' : 'bg-[#F0F1F3] text-[#667085]']">
              {{ person.status }}</span>
          </td>
          <td @click="router.push(`/dashboard/user/${idx}`)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person?.challenge_completed ?? 'Nil' }}</td>
          <!-- <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 relative">
            <p class="text-indigo-600 hover:text-indigo-900 flex items-center gap-x-4">
              <img @click="toggleDropdown(idx)" src="@/assets/icons/horizontal-more.svg" />
              <img src="@/assets/icons/envelope.svg" />
            </p>
            <div v-if="openDropdownIndex === idx"
            class="absolute mt-1.5 w-[150px] bg-white -left-14 rounded-lg shadow-xl z-10">
            <div>
              <a href="#" @click.prevent="handleUserAction(person, 'edit')"
                class="flex items-center p-3 text-xs text-gray-800 font-semibold capitalize transition-colors duration-300 transform gap-x-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.75 11.625H5.625C4.57833 11.625 4.05499 11.625 3.62914 11.7542C2.67034 12.045 1.92003 12.7953 1.62918 13.7541C1.5 14.18 1.5 14.7033 1.5 15.75M10.875 5.625C10.875 7.48896 9.36396 9 7.5 9C5.63604 9 4.125 7.48896 4.125 5.625C4.125 3.76104 5.63604 2.25 7.5 2.25C9.36396 2.25 10.875 3.76104 10.875 5.625ZM8.25 15.75L10.576 15.0854C10.6874 15.0536 10.7431 15.0377 10.795 15.0138C10.8412 14.9927 10.885 14.9669 10.9259 14.9368C10.972 14.903 11.013 14.862 11.0949 14.7801L15.9375 9.93753C16.4553 9.41975 16.4553 8.58025 15.9375 8.06248C15.4197 7.54472 14.5803 7.54473 14.0625 8.0625L9.21988 12.9051C9.13796 12.987 9.097 13.028 9.06318 13.0741C9.03314 13.115 9.00734 13.1588 8.98616 13.205C8.96231 13.2569 8.9464 13.3126 8.91457 13.424L8.25 15.75Z" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
                <span class="mx-1">
                  Edit user
                </span>
              </a>

              <a href="#" @click.prevent="handleUserAction(person, 'activity')"
              class="flex items-center p-3 text-xs text-gray-800 font-semibold capitalize transition-colors duration-300 transform gap-x-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 9.72V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.49756 10.8678L7.28256 8.55031C7.53756 8.22031 8.01006 8.16031 8.34006 8.41531L9.71256 9.49531C10.0426 9.75031 10.5151 9.69031 10.7701 9.36781L12.5026 7.13281" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
                <span class="mx-1">
                  View activity
                </span>
              </a>

              <a href="#" @click.prevent="handleUserAction(person, 'reset')"
              class="flex items-center p-3 text-xs text-gray-800 font-semibold capitalize transition-colors duration-300 transform gap-x-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 6.74996C12.75 6.36609 12.6035 5.98222 12.3107 5.68934C12.0178 5.39645 11.6339 5.25 11.25 5.25M11.25 11.25C13.7353 11.25 15.75 9.23528 15.75 6.75C15.75 4.26472 13.7353 2.25 11.25 2.25C8.76472 2.25 6.75 4.26472 6.75 6.75C6.75 6.95526 6.76374 7.15731 6.79036 7.35528C6.83413 7.68089 6.85602 7.84369 6.84129 7.94669C6.82594 8.05399 6.8064 8.11181 6.75352 8.20642C6.70275 8.29725 6.61328 8.38672 6.43435 8.56565L2.60147 12.3985C2.47176 12.5282 2.4069 12.5931 2.36052 12.6688C2.3194 12.7359 2.2891 12.809 2.27072 12.8856C2.25 12.9719 2.25 13.0636 2.25 13.2471V14.55C2.25 14.97 2.25 15.1801 2.33175 15.3405C2.40365 15.4816 2.51839 15.5963 2.65951 15.6683C2.81994 15.75 3.02996 15.75 3.45 15.75H5.25V14.25H6.75V12.75H8.25L9.43435 11.5657C9.61328 11.3867 9.70275 11.2973 9.79358 11.2465C9.88819 11.1936 9.94601 11.1741 10.0533 11.1587C10.1563 11.144 10.3191 11.1659 10.6447 11.2096C10.8427 11.2363 11.0447 11.25 11.25 11.25Z" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
              <span class="mx-1">
                Reset password
              </span>
            </a>

            <a href="#" @click.prevent="handleUserAction(person, 'delete')"
            class="flex items-center p-3 text-xs text-gray-800 font-semibold capitalize transition-colors duration-300 transform gap-x-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H8.4C7.55992 1.5 7.13988 1.5 6.81901 1.66349C6.53677 1.8073 6.3073 2.03677 6.16349 2.31901C6 2.63988 6 3.05992 6 3.9V4.5M7.5 8.625V12.375M10.5 8.625V12.375M2.25 4.5H15.75M14.25 4.5V12.9C14.25 14.1601 14.25 14.7902 14.0048 15.2715C13.789 15.6948 13.4448 16.039 13.0215 16.2548C12.5402 16.5 11.9101 16.5 10.65 16.5H7.35C6.08988 16.5 5.45982 16.5 4.97852 16.2548C4.55516 16.039 4.21095 15.6948 3.99524 15.2715C3.75 14.7902 3.75 14.1601 3.75 12.9V4.5" stroke="#4A4C56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
            <span class="mx-1">
              Delete user
            </span>
          </a>

            </div>
          </div>
          </td> -->
          <td
          class="py-4 px-5 relative whitespace-nowrap text-sm text-[#667185]"
        >
          <button
            @click="toggleDropdown(idx)"
            class="inline-flex items-center text-sm font-medium text-[#667185] hover:text-black"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99609 10H10.0036"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 10H15.0075"
                stroke="#1D2739"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 10H5.00748"
                stroke="#1D2739"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            v-if="activeDropdown === idx"
            class="absolute -top-2 right-10 z-50 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg"
          >
            <ul
              class="py-1 text-sm text-gray-700 divide divide-y-[0.5px]"
            >
              <li>
                <a
                  @click.prevent="
                    handleDropdownClick('view', person)
                  "
                  href="#"
                  class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                >
                  <!-- <img :src="dynamicIcons('view-property')" /> -->
                  View User
                </a>
              </li>
              <li>
                <a
                  @click.prevent="
                    handleDropdownClick('update', person)
                  "
                  href="#"
                  class="block flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-gray-100 text-start"
                >
                  <!-- <img :src="dynamicIcons('edit-property')" /> -->
                  Update User
                </a>
              </li>
            </ul>
          </div>
        </td>
        </tr>
      </tbody>
    </table>

    <div
    v-if="activeDropdown !== null"
    @click="closeDropdown"
    class="fixed inset-0 z-40 bg-black opacity-25"
  ></div>

    <CoreBaseModal
    :show="showUpdateUserModal"
    @update:show="showUpdateUserModal = false"
  >
    <UserProfileUpdateForm :user="selectedUser" @close="showUpdateUserModal = false" />
  </CoreBaseModal>
  </main>
  </template>
  
  <script setup lang="ts">
  import moment from "moment";
  const props = defineProps({
    usersList: {
      type: Object,
      default: () => ({}),
    },
  });

  const showUpdateUserModal = ref(false)

  const selectedUser = ref({}) as any

const activeDropdown = ref<number | null>(null);

const closeDropdown = () => {
  activeDropdown.value = null;
};

const handleDropdownClick = (action: any, item: any) => {
  if (action === "view") {
    return router.push(`/dashboard/tenant-mgt/${item.id}`);
  }

  if (action === "update") {
    selectedUser.value = item
    showUpdateUserModal.value = true
    // return router.push(`/dashboard/tenant-mgt/${item.id}`);
  }
  closeDropdown();
};

const toggleDropdown = (index: number) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = index;
  }
};
  
  const router = useRouter();
  const openDropdownIndex = ref(null);
  
  // function toggleDropdown(index: any) {
  //   openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
  // }
  
  // const showUpdateUserModal = ref(false);
  const selectedPeople = ref([]);
  const indeterminate = computed(
    () =>
      selectedPeople.value.length > 0 &&
      selectedPeople.value.length < props.usersList.length
  );
  
  const showEditModal = ref(false);
  
  const handleUserAction = (user: any, action: string) => {
    openDropdownIndex.value = null;
    if (action === "edit") {
      showEditModal.value = true;
    }
  };
  </script>
  
  <style scoped>
  .custom-checkbox {
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: #690571; /* Purple background */
    border-radius: 8px; /* Rounded corners */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: none; /* Remove default border */
  }
  
  .custom-checkbox:checked {
    background-color: #690571; /* Purple color for checked state */
  }
  
  .custom-checkbox:checked::after {
    content: "";
    width: 10px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 8px;
  }
  </style>
  