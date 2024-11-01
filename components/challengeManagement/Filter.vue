<template>
  <div class="mx-auto max-w-4xl">
    <h3 class="text-[#1D1F2C] text-base font-medium">Filters</h3>
 <div class="space-y-4">
  <dl class="space-y-6 divide-y divide-gray-900/10">
    <div class="rounded-t-xl rounded-b-xl">
      <dt>
        <button type="button" class="flex w-full items-start justify-between bg-[#F0F1F3] border text-xs py-2 rounded-t-xl px-3 text-left text-[#1D1F2C]" aria-controls="faq-0" aria-expanded="false">
          <span class="text-sm font-medium leading-7">Status</span>
          <span class="ml-6 flex h-7 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.27614 10.3912H11.7241C11.856 10.3911 11.9848 10.352 12.0944 10.2788C12.2041 10.2055 12.2895 10.1014 12.3399 9.9796C12.3904 9.8578 12.4036 9.72378 12.3779 9.59448C12.3522 9.46518 12.2887 9.3464 12.1955 9.25317L8.47148 5.52918C8.34646 5.40419 8.17692 5.33398 8.00014 5.33398C7.82337 5.33398 7.65383 5.40419 7.52881 5.52918L3.80481 9.25317C3.7116 9.3464 3.64813 9.46518 3.62242 9.59448C3.59671 9.72378 3.60991 9.8578 3.66036 9.9796C3.71081 10.1014 3.79623 10.2055 3.90584 10.2788C4.01544 10.352 4.14431 10.3911 4.27614 10.3912Z" fill="#A3A9B6"/>
              </svg>
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </button>
      </dt>
      <dd class="pr-12 pt-4 border-x border-b rounded-b-xl" id="faq-0">
        <div class="flex flex-col space-y-3 px-4 pb-3">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#690571]">Scheduled</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#690571]">Drafts</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#690571]">Ongoing</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-gray-400" />
            <span class="ml-2 text-gray-400">Archived</span>
          </label>
        </div>
      </dd>
    </div>
  </dl>

  <dl class="space-y-6 divide-y divide-gray-900/10">
    <div class="border border-gray-200 rounded-t-xl rounded-b-xl">
      <dt>
        <button type="button" class="flex w-full items-start justify-between border-b bg-[#F0F1F3] text-xs py-2 rounded-t-xl px-3 text-left text-[#1D1F2C]" aria-controls="faq-0" aria-expanded="false">
          <span class="text-sm font-medium leading-7">Type</span>
          <span class="ml-6 flex h-7 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.27614 10.3912H11.7241C11.856 10.3911 11.9848 10.352 12.0944 10.2788C12.2041 10.2055 12.2895 10.1014 12.3399 9.9796C12.3904 9.8578 12.4036 9.72378 12.3779 9.59448C12.3522 9.46518 12.2887 9.3464 12.1955 9.25317L8.47148 5.52918C8.34646 5.40419 8.17692 5.33398 8.00014 5.33398C7.82337 5.33398 7.65383 5.40419 7.52881 5.52918L3.80481 9.25317C3.7116 9.3464 3.64813 9.46518 3.62242 9.59448C3.59671 9.72378 3.60991 9.8578 3.66036 9.9796C3.71081 10.1014 3.79623 10.2055 3.90584 10.2788C4.01544 10.352 4.14431 10.3911 4.27614 10.3912Z" fill="#A3A9B6"/>
              </svg>
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </button>
      </dt>
      <dd class="mt-2 pr-12" id="faq-0">
        <div class="flex flex-col space-y-3 px-4 pb-3">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#690571]">CHUB generated</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#690571]">User generated</span>
          </label>
        </div>
      </dd>
    </div>
  </dl>

  <dl class="space-y-6 divide-y divide-gray-900/10">
    <div class="border border-gray-200 rounded-t-xl rounded-b-xl">
      <dt>
        <button type="button" class="flex w-full border-b items-start justify-between bg-[#F0F1F3] text-xs py-2 rounded-t-xl px-3 text-left text-[#1D1F2C]" aria-controls="faq-0" aria-expanded="false">
          <span class="text-sm font-medium leading-7">Date</span>
          <span class="ml-6 flex h-7 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.27614 10.3912H11.7241C11.856 10.3911 11.9848 10.352 12.0944 10.2788C12.2041 10.2055 12.2895 10.1014 12.3399 9.9796C12.3904 9.8578 12.4036 9.72378 12.3779 9.59448C12.3522 9.46518 12.2887 9.3464 12.1955 9.25317L8.47148 5.52918C8.34646 5.40419 8.17692 5.33398 8.00014 5.33398C7.82337 5.33398 7.65383 5.40419 7.52881 5.52918L3.80481 9.25317C3.7116 9.3464 3.64813 9.46518 3.62242 9.59448C3.59671 9.72378 3.60991 9.8578 3.66036 9.9796C3.71081 10.1014 3.79623 10.2055 3.90584 10.2788C4.01544 10.352 4.14431 10.3911 4.27614 10.3912Z" fill="#A3A9B6"/>
              </svg>
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </button>
      </dt>
      <dd class="mt-2 px-4 pb-3 space-y-4" id="faq-0">
        <div class="space-y-2">
          <label class="block text-xs text-gray-700">Start Date</label>
          <div class="relative mt-2">
            <input type="text" placeholder="DD/MM/YY" class="w-full p-2 py-3.5 rounded-md pl-10 outline-none border border-gray-300"/>
            <span class="absolute inset-y-0 left-4 flex items-center pr-3 text-gray-400">
              <svg width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6661_7698)">
                <path d="M0.5 12.666C0.501059 13.5497 0.852588 14.397 1.47748 15.0219C2.10237 15.6468 2.9496 15.9983 3.83333 15.9993H13.1667C14.0504 15.9983 14.8976 15.6468 15.5225 15.0219C16.1474 14.397 16.4989 13.5497 16.5 12.666V6.66602H0.5V12.666ZM11.8333 9.66602C12.0311 9.66602 12.2245 9.72466 12.3889 9.83455C12.5534 9.94443 12.6815 10.1006 12.7572 10.2833C12.8329 10.4661 12.8527 10.6671 12.8141 10.8611C12.7755 11.0551 12.6803 11.2333 12.5404 11.3731C12.4006 11.513 12.2224 11.6082 12.0284 11.6468C11.8344 11.6854 11.6334 11.6656 11.4507 11.5899C11.2679 11.5142 11.1117 11.386 11.0019 11.2216C10.892 11.0571 10.8333 10.8638 10.8333 10.666C10.8333 10.4008 10.9387 10.1464 11.1262 9.95891C11.3138 9.77137 11.5681 9.66602 11.8333 9.66602ZM8.5 9.66602C8.69778 9.66602 8.89112 9.72466 9.05557 9.83455C9.22002 9.94443 9.34819 10.1006 9.42388 10.2833C9.49957 10.4661 9.51937 10.6671 9.48079 10.8611C9.4422 11.0551 9.34696 11.2333 9.20711 11.3731C9.06726 11.513 8.88907 11.6082 8.69509 11.6468C8.50111 11.6854 8.30004 11.6656 8.11732 11.5899C7.93459 11.5142 7.77841 11.386 7.66853 11.2216C7.55865 11.0571 7.5 10.8638 7.5 10.666C7.5 10.4008 7.60536 10.1464 7.79289 9.95891C7.98043 9.77137 8.23478 9.66602 8.5 9.66602ZM5.16667 9.66602C5.36445 9.66602 5.55779 9.72466 5.72224 9.83455C5.88669 9.94443 6.01486 10.1006 6.09055 10.2833C6.16623 10.4661 6.18604 10.6671 6.14745 10.8611C6.10887 11.0551 6.01363 11.2333 5.87377 11.3731C5.73392 11.513 5.55574 11.6082 5.36176 11.6468C5.16778 11.6854 4.96671 11.6656 4.78398 11.5899C4.60126 11.5142 4.44508 11.386 4.3352 11.2216C4.22532 11.0571 4.16667 10.8638 4.16667 10.666C4.16667 10.4008 4.27202 10.1464 4.45956 9.95891C4.6471 9.77137 4.90145 9.66602 5.16667 9.66602Z" fill="#858D9D"/>
                <path d="M13.1667 1.33333H12.5V0.666667C12.5 0.489856 12.4298 0.320286 12.3047 0.195262C12.1797 0.0702379 12.0101 0 11.8333 0C11.6565 0 11.487 0.0702379 11.3619 0.195262C11.2369 0.320286 11.1667 0.489856 11.1667 0.666667V1.33333H5.83333V0.666667C5.83333 0.489856 5.7631 0.320286 5.63807 0.195262C5.51305 0.0702379 5.34348 0 5.16667 0C4.98986 0 4.82029 0.0702379 4.69526 0.195262C4.57024 0.320286 4.5 0.489856 4.5 0.666667V1.33333H3.83333C2.9496 1.33439 2.10237 1.68592 1.47748 2.31081C0.852588 2.93571 0.501059 3.78294 0.5 4.66667L0.5 5.33333H16.5V4.66667C16.4989 3.78294 16.1474 2.93571 15.5225 2.31081C14.8976 1.68592 14.0504 1.33439 13.1667 1.33333Z" fill="#858D9D"/>
                </g>
                <defs>
                <clipPath id="clip0_6661_7698">
                <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                
            </span>
          </div>
        </div>
        <div class="space-y-2">
          <label class="block text-xs text-gray-700">End Date</label>
          <div class="relative mt-2 w-full">
            <input type="text" placeholder="DD/MM/YY" class="w-full p-2 py-3.5 rounded-md pl-10 outline-none border border-gray-300"/>
            <span class="absolute inset-y-0 left-4 flex items-center pr-3 text-gray-400">
              <svg width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6661_7698)">
                <path d="M0.5 12.666C0.501059 13.5497 0.852588 14.397 1.47748 15.0219C2.10237 15.6468 2.9496 15.9983 3.83333 15.9993H13.1667C14.0504 15.9983 14.8976 15.6468 15.5225 15.0219C16.1474 14.397 16.4989 13.5497 16.5 12.666V6.66602H0.5V12.666ZM11.8333 9.66602C12.0311 9.66602 12.2245 9.72466 12.3889 9.83455C12.5534 9.94443 12.6815 10.1006 12.7572 10.2833C12.8329 10.4661 12.8527 10.6671 12.8141 10.8611C12.7755 11.0551 12.6803 11.2333 12.5404 11.3731C12.4006 11.513 12.2224 11.6082 12.0284 11.6468C11.8344 11.6854 11.6334 11.6656 11.4507 11.5899C11.2679 11.5142 11.1117 11.386 11.0019 11.2216C10.892 11.0571 10.8333 10.8638 10.8333 10.666C10.8333 10.4008 10.9387 10.1464 11.1262 9.95891C11.3138 9.77137 11.5681 9.66602 11.8333 9.66602ZM8.5 9.66602C8.69778 9.66602 8.89112 9.72466 9.05557 9.83455C9.22002 9.94443 9.34819 10.1006 9.42388 10.2833C9.49957 10.4661 9.51937 10.6671 9.48079 10.8611C9.4422 11.0551 9.34696 11.2333 9.20711 11.3731C9.06726 11.513 8.88907 11.6082 8.69509 11.6468C8.50111 11.6854 8.30004 11.6656 8.11732 11.5899C7.93459 11.5142 7.77841 11.386 7.66853 11.2216C7.55865 11.0571 7.5 10.8638 7.5 10.666C7.5 10.4008 7.60536 10.1464 7.79289 9.95891C7.98043 9.77137 8.23478 9.66602 8.5 9.66602ZM5.16667 9.66602C5.36445 9.66602 5.55779 9.72466 5.72224 9.83455C5.88669 9.94443 6.01486 10.1006 6.09055 10.2833C6.16623 10.4661 6.18604 10.6671 6.14745 10.8611C6.10887 11.0551 6.01363 11.2333 5.87377 11.3731C5.73392 11.513 5.55574 11.6082 5.36176 11.6468C5.16778 11.6854 4.96671 11.6656 4.78398 11.5899C4.60126 11.5142 4.44508 11.386 4.3352 11.2216C4.22532 11.0571 4.16667 10.8638 4.16667 10.666C4.16667 10.4008 4.27202 10.1464 4.45956 9.95891C4.6471 9.77137 4.90145 9.66602 5.16667 9.66602Z" fill="#858D9D"/>
                <path d="M13.1667 1.33333H12.5V0.666667C12.5 0.489856 12.4298 0.320286 12.3047 0.195262C12.1797 0.0702379 12.0101 0 11.8333 0C11.6565 0 11.487 0.0702379 11.3619 0.195262C11.2369 0.320286 11.1667 0.489856 11.1667 0.666667V1.33333H5.83333V0.666667C5.83333 0.489856 5.7631 0.320286 5.63807 0.195262C5.51305 0.0702379 5.34348 0 5.16667 0C4.98986 0 4.82029 0.0702379 4.69526 0.195262C4.57024 0.320286 4.5 0.489856 4.5 0.666667V1.33333H3.83333C2.9496 1.33439 2.10237 1.68592 1.47748 2.31081C0.852588 2.93571 0.501059 3.78294 0.5 4.66667L0.5 5.33333H16.5V4.66667C16.4989 3.78294 16.1474 2.93571 15.5225 2.31081C14.8976 1.68592 14.0504 1.33439 13.1667 1.33333Z" fill="#858D9D"/>
                </g>
                <defs>
                <clipPath id="clip0_6661_7698">
                <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>              
            </span>
          </div>
        </div>
      </dd>
    </div>
  </dl>

  <dl class="space-y-6 divide-y divide-gray-900/10">
    <div class="border border-gray-200 rounded-t-xl rounded-b-xl">
      <dt>
        <button type="button" class="flex w-full items-start border-b justify-between bg-[#F0F1F3] text-xs py-2 rounded-t-xl px-3 text-left text-[#1D1F2C]" aria-controls="faq-0" aria-expanded="false">
          <span class="text-sm font-medium leading-7">Goals</span>
          <span class="ml-6 flex h-7 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.27614 10.3912H11.7241C11.856 10.3911 11.9848 10.352 12.0944 10.2788C12.2041 10.2055 12.2895 10.1014 12.3399 9.9796C12.3904 9.8578 12.4036 9.72378 12.3779 9.59448C12.3522 9.46518 12.2887 9.3464 12.1955 9.25317L8.47148 5.52918C8.34646 5.40419 8.17692 5.33398 8.00014 5.33398C7.82337 5.33398 7.65383 5.40419 7.52881 5.52918L3.80481 9.25317C3.7116 9.3464 3.64813 9.46518 3.62242 9.59448C3.59671 9.72378 3.60991 9.8578 3.66036 9.9796C3.71081 10.1014 3.79623 10.2055 3.90584 10.2788C4.01544 10.352 4.14431 10.3911 4.27614 10.3912Z" fill="#A3A9B6"/>
              </svg>
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </button>
      </dt>
      <dd class="mt-2 pr-12" id="faq-0">
        <div class="flex flex-col space-y-3 px-4 pb-3">
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#667085]">Productivity</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#667085]">Self development</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#667085]">Creativity</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#667085]">Health</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#667085]">Wellness</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#667085]">Organization</span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox text-[#690571]" checked />
            <span class="ml-2 text-[#667085]">Finance</span>
          </label>
        </div>
      </dd>
    </div>
  </dl>
 </div>
    <div class="flex justify-end items-center gap-x-4 py-4">
      <div class="">
        <button @click="emit('close')"
        type="button"
        class="bg-white border px-6 text-xs border-[#858D9D] text-[#858D9D] py-2.5 rounded-lg"
      >
        Cancel
      </button>
      </div>
      <div>
        <button
        type="button"
        class="bg-[#690571] text-xs text-white px-4 py-2.5 rounded-lg"
      >
       Apply Filter
      </button>
      </div>
      </div>
  </div>    
  </template>

  <script setup lang="ts">
  import { useChallengeList } from '@/composables/useChallengeList';
  
  const emit = defineEmits<{
    (event: 'close'): void
  }>()
  
  // // Status checkboxes
  // const statusFilters = ref({
  //   scheduled: false,
  //   drafts: false,
  //   ongoing: false,
  //   archived: false
  // });
  
  // // Date range
  // const startDate = ref<string | null>(null);
  // const endDate = ref<string | null>(null);
  
  // // Get challenges composable
  // const { getChallengeList } = useChallengeList();
  
  // // Function to apply filters
  // const applyFilters = () => {
  //   const filters = {
  //     challengeStatus: Object.keys(statusFilters.value)
  //       .filter((key) => statusFilters.value[key]) // Get selected status filters
  //       .map((key) => key.toUpperCase()), // Convert status to uppercase (e.g., 'ONGOING')
  //     startDate: startDate.value ? new Date(startDate.value).getTime() : undefined,
  //     endDate: endDate.value ? new Date(endDate.value).getTime() : undefined
  //   };
  
  //   // Pass the filters to the getChallengeList function from the composable
  //   getChallengeList(filters);
  // };
  
  </script>
  