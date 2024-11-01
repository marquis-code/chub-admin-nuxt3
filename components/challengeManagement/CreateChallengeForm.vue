<template>
  <main class="border rounded-xl gap-x-4 border-gray-200">
    <section class="lg:flex space-y-6 lg:space-y-6 rounded-lg gap-x-4 px-5 pb-6">
     <section class="">
      <div class="bg-white w-full">
          <!-- {{ challengeObj }} -->
          <form @submit.prevent="submitChallenge" class="pt-3" >
            <!-- <h3 class="text-[#A3A9B6] font-medium text-sm">CHALLENGE INFORMATION</h3> -->
            <div class="mb-4">
              <label class="block text-gray-700 mb-2 text-sm" for="name">Name</label>
              <input
                class="w-full px-4 py-3 text-sm border rounded-lg border-[#E0E2E7] outline-none"
                type="text"
                id="name"
                v-model="challengeObj.name"
                placeholder="Type name here..."
              />
            </div>
      
             <!-- Image Upload -->
             <div class="col-span-full">
              <label for="imageUpload" class="block text-sm font-medium leading-6 text-gray-900">Upload challenge image</label>
              <input
               v-if="!imagePreview"
                type="file"
                name="imageUpload"
                id="imageUpload"
                @change="onImageChange"
                accept="image/*"
                class="hidden"
              />
              <div  v-if="!imagePreview" class="mt-2 flex items-center gap-x-3">
                <!-- Trigger button for file input -->
                <label for="imageUpload" class="cursor-pointer">
                  <svg fill="#000000" width="800px" class="w-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z"/></svg>
                </label>
              </div>
            </div>
      
            <!-- Image Preview -->
            <div class="mb-4">
              <div v-if="imagePreview" class="mt-2">
                <img :src="imagePreview" alt="Image Preview" class="max-h-40 h-20 w-20 object-cover rounded-full" />
              </div>
            </div>
             <div class="mb-4">
            </div>
      
            <div class="mb-4">
              <label class="block text-gray-700 mb-2 text-sm" for="description"
                >Description</label
              >
              <textarea
                v-model="challengeObj.description"
                class="w-full px-4 py-3 outline-none border rounded-lg text-sm border-[#E0E2E7] resize-none"
                id="description"
                placeholder="Type challenge description here..."
              ></textarea>
            </div>
      
            <div class="flex pb-4">
              <div class="w-1/2 mr-2">
                <label class="block text-xs text-gray-700">Start Date</label>
                <div class="relative mt-2">
                  <input v-model="challengeObj.startDate" type="date" placeholder="DD/MM/YY" class="w-full text-sm p-2 py-3 rounded-md pl-10 outline-none border border-gray-300"/>
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
                <label class="block text-xs text-gray-700">End Date</label>
               </div>
                <div class="relative mt-2">
                  <input v-model="challengeObj.endDate" type="date" placeholder="DD/MM/YY" class="w-full text-sm p-2 py-3 rounded-md pl-10 outline-none border border-gray-300"/>
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
      
            <div class="mb-4">
              <label class="block text-gray-700 mb-2 text-sm" for="description"
                >Color</label
              >
              <input
                v-model="challengeObj.color"
                class="w-full p-2 h-20 border outline-none rounded-lg border-[#E0E2E7] resize-none "
                id="color"
                 name="head"
                type="color"
             />
            </div>
      
          <div>
            <label class="block text-gray-700 mb-2 text-sm" for="description"
            >Goal</label
          >
            <div class="mb-6 flex flex-wrap gap-3">
              <div v-for="(item, idx) in goalsList" :key="idx">
                <label
                  :for="taskItem.label"
                  class="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 px-3 py-2 text-gray-900 hover:border-gray-200"
                  :class="{'bg-[#2A1634] text-white': challengeObj.tag === item.label}"
                >
                  <input 
                    v-model="challengeObj.tag" 
                    type="radio" 
                    name="goal" 
                    :value="item.label" 
                    :id="item.label" 
                    class="sr-only" 
                    @change="updateSelectedGoal(item.label)" 
                  />
                  <p class="text-sm font-medium flex items-center gap-x-2">
                    <img :src="dynamicIcons(item.icon)" alt="" />
                    {{item.label}}
                  </p>
                </label>
              </div>
            </div>
          </div>
      
            <div class="mb-6">
             <div class="flex justify-between items-center pb-3">
              <h2 class="font-medium mb-4 text-sm text-[#A3A9B6]">
                Challenge Settings
              </h2>
              <div @click="previewTasks = true" type="button" class="text-sm cursor-pointer bg-black rounded-lg text-white px-3 py-2.5">Preview Task</div>
             </div>
              <div class="mb-4">
                <div>
                  <div class="">
                    <div class="border-b border-gray-200">
                      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                        <a @click="setActiveTab('tasks')"
                          href.prevent="#"
                          class="whitespace-nowrap border-b-2 w-full cursor-pointer px-1 py-2 text-sm font-medium text-gray-500"
                          :class="[ activeTab === 'tasks' ? 'border-[#690571] text-[#690571]' : 'border-transparent']"
                          >Tasks</a
                        >
                        <a @click="setActiveTab('settings')"
                          href.prevent="#"
                          class="whitespace-nowrap border-b-2 w-full cursor-pointer px-1 py-2 text-sm font-medium text-gray-500"
                          :class="[ activeTab === 'settings' ? 'border-[#690571] text-[#690571]' : 'border-transparent']"
                          >Settings</a
                        >
                        <a @click="setActiveTab('members')"
                          href.prevent="#"
                          class="whitespace-nowrap border-b-2 w-full cursor-pointer px-1 py-2 text-sm font-medium"
                          :class="[ activeTab === 'members' ? 'border-[#690571] text-[#690571]' : 'border-transparent']"
                          aria-current="page"
                          >Members</a
                        >
                      </nav>
                    </div>
                  </div>
                </div>
              </div>        
              <div v-if="activeTab === 'tasks'" class="mb-4">
                <label class="block text-gray-700 mb-2 text-sm" for="task">Add Task {{selectedEmoji}}</label>
                <div class="flex  pb-4">
                  <div class="w-1/2 mr-2">
                    <label class="block text-xs text-gray-700">Start Date</label>
                    <div class="relative mt-2">
                      <input v-model="taskItem.startDate" type="date" placeholder="DD/MM/YY" class="w-full p-2 py-2 rounded-md pl-10 outline-none border border-gray-300"/>
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
                    <label class="block text-xs text-gray-700">End Date</label>
                    <p class="text-[#690571] font-medium text-xs cursor-pointer">Schedule </p>
                   </div>
                    <div class="relative mt-2">
                      <input v-model="taskItem.endDate" type="date" placeholder="DD/MM/YY" class="w-full p-2 py-2 rounded-md pl-10 outline-none border border-gray-300"/>
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
                <div class="pt-1">
                  <label class="block text-gray-700 mb-2 text-sm" for="description"
                  >Select Emoji {{ selectedEmojiItem }}</label
                >
                
                  <CoreEmojiPicker @selectedEmoji="handleEmojiSelected" />
                </div>
            <div class="mt-3">
              <input
              class="w-full flex-grow px-4 py-3 outline-none border rounded-lg"
              type="text"
              id="task"
              v-model="taskItem.task"
              placeholder="Enter task title"
            />
            </div>
                <div class="flex gap-x-4 pt-4">
                 <div class="flex-grow w-full">
                  <input
                  class="w-full flex-grow px-4 py-3 outline-none border rounded-l-lg"
                  type="text"
                  id="task"
                  v-model="taskItem.title"
                  placeholder="name your task..."
                />
                 </div>
               <div class="w-5/12" >
                <button @click="createTask" type="button"
                class="text-[#690571] w-full font-semibold px-4 py-3.5 flex justify-center items-center gap-x-2 text-sm rounded-r-lg bg-[#F4ECFB] focus:outline-none"
              >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3333 7.33334H8.66666V0.666656C8.66666 0.298469 8.36819 0 8 0C7.63181 0 7.33334 0.298469 7.33334 0.666656V7.33331H0.666656C0.298469 7.33334 0 7.63181 0 8C0 8.36819 0.298469 8.66666 0.666656 8.66666H7.33331V15.3333C7.33331 15.7015 7.63178 16 7.99997 16C8.36816 16 8.66662 15.7015 8.66662 15.3333V8.66666H15.3333C15.7015 8.66666 15.9999 8.36819 15.9999 8C16 7.63181 15.7015 7.33334 15.3333 7.33334Z" fill="#690571"/>
                </svg>
                
                Add task
              </button>
               </div>
                </div>
              </div>
       
              <ChallengeManagementSettings :challengeObj="challengeObj" v-if="activeTab === 'settings'" />
              <ChallengeManagementMembers :challengeObj="challengeObj" v-if="activeTab === 'members'" />
            </div>
      
            <!-- <div class="flex justify-between items-center gap-4 pt-6">
            <div class="w-full">
              <button
               @click="handleCloseChallenge"
              type="button"
              class="bg-white border w-full px-6 text-sm border-[#858D9D] text-[#858D9D] py-3.5 rounded-md"
            >
              Cancel
            </button>
            </div>
            <div>
              <button
              type="button"
              class="text-[#FF5724] text-xs px-4 py-2 rounded-lg"
            >
              Save to drafts
            </button>
            </div>
            <div class="w-full">
              <button
              type="submit"
              :disabled="loading"
              class="bg-[#690571] w-full disabled:cursor-not-allowed disabled:opacity-25 text-sm text-white px-4 py-3.5 rounded-md"
            > 
            {{ loading ? 'processing...' : 'Create Challenge' }}
            </button>
            </div>
            </div> -->
          </form>
        </div>
     </section>
        <!-- <div class="custom-scrollbar bg-white w-full lg:max-w-6xl border rounded-xl p-6">
       <div v-if="!tasks" class="flex justify-center items-center place-content-center min-h-screen" >
          <div  class="flex justify-center font-semibold items-center space-y-4 flex-col">
              <img src="@/assets/icons/not-found.svg" alt="" />
              <p>No Tasks Available</p>
          </div>
    </div>
    <div v-if="tasks" class="">
      <h1 class="text-sm font-medium mb-4 text-start">Task Manager</h1>
      <div v-for="(item, index) in tasks" :key="index" class="bg-gray-25 p-4 border rounded-lg mb-4 flex flex-col justify-start items-start">
        <div v-if="editIndex !== index" class="flex items-center space-x-4">
          <span class="text-xl">{{ item.emoji }}</span>
          <div class="space-y-1">
            <h2 class="font-semibold text-">{{ item.title }}</h2>
            <p class="text-gray-600 text-sm">{{ new Date(item.startDate).toLocaleDateString() }} - {{ new Date(item.endDate).toLocaleDateString() }}</p>
            <p class="text-gray-700 text-sm">{{ item.task }}</p>
          </div>
        </div>
        <div v-else class="w-full">
          <input v-model="editItem.title" type="text" placeholder="Title" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
          <input v-model="editItem.startDate" type="date" placeholder="Start Date" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
          <input v-model="editItem.endDate" type="date" placeholder="End Date" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
          <input v-model="editItem.task" type="text" placeholder="Task" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
          <input v-model="editItem.emoji" type="text" placeholder="Emoji" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
        </div>
        <div class="flex space-x-2 pt-4">
          <button v-if="editIndex !== index" @click="editItemDetails(index)" class="transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
          </button>
          <button v-if="editIndex === index" @click="saveItemDetails(index)" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm transition">Save</button>
          <button v-if="editIndex === index" @click="cancelEdit" class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition text-sm">Cancel</button>
          <button @click="deleteItem(index)" class="transition"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#d0021b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
        </div>
      </div>
    </div>
        </div>  -->
    </section>

     <CoreBaseModal :show="previewTasks" @update:show="previewTasks = false">
  <main>
      <h1 class="text-base font-medium mb-4 text-start">Task Manager</h1>
      <div  v-if="tasks.length">
        <div v-for="(item, index) in tasks" :key="index" class="bg-gray-25 p-4 border rounded-lg mb-4 flex flex-col justify-start items-start">
          <div v-if="editIndex !== index" class="flex items-center space-x-4">
            <span class="text-xl">{{ item.emoji }}</span>
            <div class="space-y-1">
              <h2 class="font-semibold text-">{{ item.title }}</h2>
              <p class="text-gray-600 text-sm">{{ new Date(item.startDate).toLocaleDateString() }} - {{ new Date(item.endDate).toLocaleDateString() }}</p>
              <p class="text-gray-700 text-sm">{{ item.task }}</p>
            </div>
          </div>
          <div v-else class="w-full">
            <input v-model="editItem.title" type="text" placeholder="Title" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
            <input v-model="editItem.startDate" type="date" placeholder="Start Date" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
            <input v-model="editItem.endDate" type="date" placeholder="End Date" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
            <input v-model="editItem.task" type="text" placeholder="Task" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
            <input v-model="editItem.emoji" type="text" placeholder="Emoji" class="w-full mb-2 p-2 border rounded-md outline-none py-3">
          </div>
          <div class="flex space-x-2 pt-4">
            <button v-if="editIndex !== index" @click="editItemDetails(index)" class="transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
            </button>
            <button v-if="editIndex === index" @click="saveItemDetails(index)" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm transition">Save</button>
            <button v-if="editIndex === index" @click="cancelEdit" class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition text-sm">Cancel</button>
            <button @click="deleteItem(index)" class="transition"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#d0021b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
          </div>
        </div>
      </div>
      <div v-else class="h-32 w-full border rounded-md font-semibold flex justify-center items-center">
        No Task Available to preview
    </div>
  </main>
    </CoreBaseModal>
  </main>
</template>

<script lang="ts" setup>
import { useGeolocation } from '@/composables/core/useGeolocation'
// import EmojiPicker from 'vue3-emoji-picker'
import { useDuration } from '@/composables/core/useDuration'
import { dynamicIcons } from '@/utils/assets'
import { useCreateChallenge } from "@/composables/admin-mgt/create-challenge";
const { createChallenge, challengeObj } = useCreateChallenge();
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const activeTab = ref("tasks");
const router = useRouter()
const { latitude, longitude, setCoordinates } = useGeolocation()

const emit = defineEmits(['close', 'challenge-payload'])

const handleCloseChallenge = () => {
  emit('close')
}

const previewTasks = ref(false)

definePageMeta({
layout: "dashboard",
});

const setActiveTab = (item: string) => {
  activeTab.value = item;
};
const goalsList = ref([
  {
  label: 'Health',
  icon: 'goal1'
},
{
  label: 'Sleep',
  icon: 'goal2'
},
{
  label: 'Workout',
  icon: 'goal3'
},
{
  label: 'Productivity',
  icon: 'goal4'
},
{
  label: 'Personal Development',
  icon: 'goal5'
},
{
  label: 'Organization',
  icon: 'goal6'
},
{
  label: 'Finances',
  icon: 'goal7'
}
])


const imagePreview = ref('');
const selectedEmojiItem = ref('');

const taskItem = ref({
  startDate: 0,
  endDate: 0,
  title: '',
  task: '',
  emoji: null
}) as any

const tasks = ref([]);

const addTask = () => {
  if (!taskItem.value.title) return;
  
  tasks.value.push({
    title: taskItem.value.title,
    startDate: new Date(taskItem.value.startDate).getTime(),
    endDate: new Date(taskItem.value.endDate).getTime(),
    task: taskItem.value.task,
    emoji: selectedEmojiItem.value
  });
  
  challengeObj.value.tasks = tasks.value;

  taskItem.value.title = '';
  taskItem.value.startDate = '';
  taskItem.value.endDate = '';
  taskItem.value.task = '';
};

const removeTask = (index: number) => {
  tasks.value.splice(index, 1);
  challengeObj.value.tasks = tasks.value;
};

const submitChallenge = () => {
  const { duration} = useDuration(challengeObj.value.startDate, challengeObj.value.endDate)
   console.log(duration, 'duration here')
  const payload = {...challengeObj.value, duration }
  emit('challenge-payload', payload)
  // createChallenge(payload)
  //   .then(response => {
  //     // handle successful creation
  //   })
  //   .catch(error => {
  //     // handle errors
  //   });
};

const onImageChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  console.log(file, 'file here')
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      imagePreview.value = e.target.result;
      challengeObj.value.imageUrl = e.target.result; // Here you would normally upload to a server and get a URL
    };
    reader.readAsDataURL(file);
  }
};

const selectedGoal = ref('Health')

const updateSelectedGoal = (label: string) => {
  console.log(label, 'label here')
  selectedGoal.value = label;
  challengeObj.tag = label;
};

const handleEmojiSelected = (data: any) => {
  console.log(data, ';gere')
  selectedEmojiItem.value = data
}

// Sample data
// const items = ref([
//   { title: "Tessadvvdsa", startDate: 1729987200000, endDate: 1729728000000, task: "text test", emoji: "🍊" },
// ]);

const editIndex = ref(null);
const editItem = ref(null);

// Function to create a new task
const createTask = () => {
if (taskItem.value.title.length && taskItem.value.startDate.length && taskItem.value.endDate.length && taskItem.value.task.length) {
  tasks.value.push({
    title: taskItem.value.title,
    startDate: new Date(taskItem.value.startDate).getTime(),
    endDate: new Date(taskItem.value.endDate).getTime(),
    task: taskItem.value.task,
    emoji: selectedEmojiItem.value,
  });
  challengeObj.value.tasks = tasks.value;
  // Reset new task form
  taskItem.value = {
    title: '',
    startDate: '',
    endDate: '',
    task: '',
    emoji: '',
  };
} else {
  showToast({
        title: "Error",
        message: "Please fill in all fields to add a task",
        toastType: "error",
        duration: 3000
      });
}
};


const editItemDetails = (index: number) => {
editIndex.value = index;
editItem.value = { ...tasks.value[index] };
};


const saveItemDetails = (index: number) => {
if (editItem.value) {
  tasks.value[index] = { ...editItem.value };
}
editIndex.value = null;
editItem.value = null;
};

const cancelEdit = () => {
editIndex.value = null;
editItem.value = null;
};

const deleteItem = (index: number) => {
tasks.value.splice(index, 1);
};
</script>

<style scoped>
.goal-tag {
@apply px-3 py-1 border rounded-full text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-200 focus:outline-none;
}
/* Custom scrollbar styling */
</style>
