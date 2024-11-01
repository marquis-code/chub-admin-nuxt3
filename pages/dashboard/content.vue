<template>
<main>
  <section class="space-y-6">
    <CoreOverviewHeader />
    <CorePageHeader />
    
    <div class="lg:flex">
      <!-- Reports Section -->
    <ContentManagementReportsTable />
    
      <!-- Featured Content Section -->
      <ContentManagementFeaturedContentsTable @toggleModal="showFeatureContentModal = true" />
    </div>
    </section>
    
    <CoreBaseModal :show="showFeatureContentModal" @update:show="showFeatureContentModal = false">
      <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg w-1/3 relative">
          <div class="flex justify-between items-center mb-4 border-b px-6 py-3">
            <div>
              <h2 class="text-lg font-medium">Feature Content</h2>
            <p class="text-gray-500 text-sm">Promote content like articles, images, videos</p>
            </div>
            <button @click="showFeatureContentModal = false" class="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
   <div class="p-6 space-y-6">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm">Title</label>
      <input type="text" placeholder="Type name here..." class="w-full p-2 py-3.5 border  border-gray-300 rounded-md outline-none mt-2"/>
    </div>
    <div class="mb-4">
     <div class="flex justify-between items-center">
      <label class="block text-gray-700 text-sm">Media</label>
      <p class="text-[#690571] font-medium text-sm cursor-pointer">Upload link instead</p>
     </div>
      <div class="flex items-center relative">
        <input type="text" placeholder="Upload image or video..." class="w-full p-2 py-3.5 border bg-gray-50  border-gray-300 rounded-md outline-none mt-2"/>
        <!-- <button class="text-purple-600 ml-2">Upload link instead</button> -->
        <img src="@/assets/icons/uploadImage.svg" class="absolute right-3 top-6" alt="" />          
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-1/2 mr-2">
        <label class="block text-sm text-gray-700">Start Date</label>
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
      <div class="w-1/2 ml-2">
       <div class="flex justify-between items-center">
        <label class="block text-sm text-gray-700">End Date</label>
        <p class="text-[#690571] font-medium text-sm cursor-pointer">Schedule </p>
       </div>
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
    </div>
          <div class="mb-4 border-t py-3 border-gray-100">
            <label class="block text-gray-700 text-sm">User Group</label>
            <div class="flex items-center mt-1">
              <div class="relative flex-grow ">
              <div>
                <input type="text" placeholder="Search for user group..." class="w-full pl-8 outline-none border border-gray-100 p-2 py-3 rounded-md"/>
                <img src="@/assets/icons/search.svg" alt="" class="absolute left-2 top-3" />
              </div>
              </div>
              <div class="flex justify-end items-end">
                <button class="bg-[#F4ECFB] text-[#690571] rounded-lg px-4 py-3 ml-2 flex items-center gap-x-3">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6661_7724)">
                    <path d="M15.8333 7.33334H9.16666V0.666656C9.16666 0.298469 8.86819 0 8.5 0C8.13181 0 7.83334 0.298469 7.83334 0.666656V7.33331H1.16666C0.798469 7.33334 0.5 7.63181 0.5 8C0.5 8.36819 0.798469 8.66666 1.16666 8.66666H7.83331V15.3333C7.83331 15.7015 8.13178 16 8.49997 16C8.86816 16 9.16662 15.7015 9.16662 15.3333V8.66666H15.8333C16.2015 8.66666 16.4999 8.36819 16.4999 8C16.5 7.63181 16.2015 7.33334 15.8333 7.33334Z" fill="#690571"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_6661_7724">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                  New group</button>
              </div>
            </div>
            <div class="flex mt-2 space-x-2 pt-3">
              <span class="bg-[#F4ECFB] text-[#690571] rounded-lg px-2.5  text-sm flex items-center gap-x-2 py-2">Target 1 
                <svg width="16" height="16" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.625 5L4.875 6.25L7.375 3.75M3.75 8.75H7.25C7.95007 8.75 8.3001 8.75 8.56749 8.61376C8.80269 8.49392 8.99392 8.30269 9.11376 8.06749C9.25 7.8001 9.25 7.45007 9.25 6.75V3.25C9.25 2.54993 9.25 2.1999 9.11376 1.93251C8.99392 1.69731 8.80269 1.50608 8.56749 1.38624C8.3001 1.25 7.95007 1.25 7.25 1.25H3.75C3.04993 1.25 2.6999 1.25 2.43251 1.38624C2.19731 1.50608 2.00608 1.69731 1.88624 1.93251C1.75 2.1999 1.75 2.54993 1.75 3.25V6.75C1.75 7.45007 1.75 7.8001 1.88624 8.06749C2.00608 8.30269 2.19731 8.49392 2.43251 8.61376C2.6999 8.75 3.04993 8.75 3.75 8.75Z" stroke="#690571" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
              </span>
              <span class="bg-[#FFEFFE] text-[#FF2BEA] rounded-lg px-2.5  text-sm flex items-center gap-x-2 py-2">Target 2
                <svg width="16" height="16" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.625 5L4.875 6.25L7.375 3.75M3.75 8.75H7.25C7.95007 8.75 8.3001 8.75 8.56749 8.61376C8.80269 8.49392 8.99392 8.30269 9.11376 8.06749C9.25 7.8001 9.25 7.45007 9.25 6.75V3.25C9.25 2.54993 9.25 2.1999 9.11376 1.93251C8.99392 1.69731 8.80269 1.50608 8.56749 1.38624C8.3001 1.25 7.95007 1.25 7.25 1.25H3.75C3.04993 1.25 2.6999 1.25 2.43251 1.38624C2.19731 1.50608 2.00608 1.69731 1.88624 1.93251C1.75 2.1999 1.75 2.54993 1.75 3.25V6.75C1.75 7.45007 1.75 7.8001 1.88624 8.06749C2.00608 8.30269 2.19731 8.49392 2.43251 8.61376C2.6999 8.75 3.04993 8.75 3.75 8.75Z" stroke="#FF2BEA" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
              </span>
              <span class="bg-[#FFF3E0] text-[#FF9E2B] rounded-lg px-2.5  text-sm flex items-center gap-x-2 py-2">Target 5
                <svg width="16" height="16" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.625 5L4.875 6.25L7.375 3.75M3.75 8.75H7.25C7.95007 8.75 8.3001 8.75 8.56749 8.61376C8.80269 8.49392 8.99392 8.30269 9.11376 8.06749C9.25 7.8001 9.25 7.45007 9.25 6.75V3.25C9.25 2.54993 9.25 2.1999 9.11376 1.93251C8.99392 1.69731 8.80269 1.50608 8.56749 1.38624C8.3001 1.25 7.95007 1.25 7.25 1.25H3.75C3.04993 1.25 2.6999 1.25 2.43251 1.38624C2.19731 1.50608 2.00608 1.69731 1.88624 1.93251C1.75 2.1999 1.75 2.54993 1.75 3.25V6.75C1.75 7.45007 1.75 7.8001 1.88624 8.06749C2.00608 8.30269 2.19731 8.49392 2.43251 8.61376C2.6999 8.75 3.04993 8.75 3.75 8.75Z" stroke="#FF9E2B" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
              </span>
            </div>
          </div>
        </div>
          <div class="flex justify-between mt-6 px-6 border-t py-4 gap-x-10">
            <button @click="showFeatureContentModal = false" class="bg-white text-[#858D9D] border-[#858D9D] border rounded-lg px-4 w-full py-3.5">Cancel</button>
            <button class="bg-[#690571] text-white rounded-lg px-4 w-full py-3.5">Feature</button>
          </div>
        </div>
      </div>
    </CoreBaseModal>
</main>
</template>

<script setup lang="ts">
const showFeatureContentModal = ref(false);
definePageMeta({
  layout: "dashboard",
});
const statusClass = (status: string) => {
  switch (status) {
    case "Approved":
      return "text-green-500";
    case "Removed":
      return "text-red-500";
    default:
      return "";
  }
};
</script>


<style scoped>
.icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>