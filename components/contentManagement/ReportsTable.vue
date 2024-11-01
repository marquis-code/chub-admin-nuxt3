<template>
    <div class="flex-1 bg-white shadow-md rounded-lg m-4 border border-gray-50">
        <div class="border-b px-4 pt-4 lg:flex justify-between">
         <div class="flex items-center justify-between gap-x-3 mb-4">
           <h1 class="text-lg font-semibold text-[#1D1F2C]">Reports</h1>
           <button class="bg-[#E9FAF7] text-[#1A9882] rounded-lg px-2.5 py-1 text-sm">+2 reports</button>
         </div>
         <div class="lg:flex space-x-4 w-full">
           <div class="relative w-full">
             <img src="@/assets/icons/search.svg" alt="date-picker" class="absolute left-3 top-2" />
             <input type="text" placeholder="Search for a challenge" class="px-4 py-2 pl-10 text-sm border rounded-md flex-grow" />
            </div>
            <div>
             <button class="px-4 py-2.5 text-gray-500 border rounded-md text-xs flex items-center gap-x-3">
               <img src="@/assets/icons/date-picker.svg" alt="date-picker" />
               Select Date</button>
            </div>
          <div>
           <button class="px-4 py-2.5 text-gray-500 border rounded-md text-xs flex items-center gap-x-3">
             <img src="@/assets/icons/filter.svg" alt="date-picker" />
             Filters</button>
          </div>
          </div>
        </div>
             <div class="flow-root px-4">
               <div class="-mx-4 -my-2 overflow-x-auto">
                 <div class="inline-block min-w-full py-2 align-middle">
                   <div class="overflow-hidden">
                     <table class="min-w-full divide-y divide-gray-100">
                       <thead class="bg-[#F9F9FC]">
                         <tr>
                           <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#1D1F2C] sm:pl-6">Content</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Reported by</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Created by</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Date</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Time</th>
                           <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-[#1D1F2C]">Status</th>
                         </tr>
                       </thead>
                       <tbody class="divide-y divide-gray-200 bg-white">
                         <tr  v-for="report in 6" :key="report">
                           <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                             <div class="flex">
                               <div><img src="@/assets/img/reportIcon.png" class="h-10 w-10" alt="" /></div>
                              <div> 
                               <p class="text-[#1D1F2C] text-sm font-semibold">Image</p>
                               <p class="text-[#667085] text-xs">Challenge name</p>
                             </div>
                             </div>
                           </td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-[#883DCF]">Johnathan Daniel</td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-[#667085]">John doe</td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-[#667085]">23 Sept 2024</td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-[#667085]">12:00</td>
                           <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                             <div class="flex gap-x-3">
                               <button class="flex flex-col items-center">
                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <rect x="1" y="0.5" width="23" height="23" rx="11.5" stroke="#EB3D4D"/>
                                   <path d="M8.5 8L16.5 16" stroke="#EB3D4D" stroke-width="1.5" stroke-linecap="round"/>
                                   <path d="M8.5 16L16.5 8" stroke="#EB3D4D" stroke-width="1.5" stroke-linecap="round"/>
                                   </svg>
                                   <span class="text-xs font-medium text-[#000000]">Remove</span>
                               </button>
                               <button class="flex flex-col items-center">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#1A9882"/>
                                   <path d="M5 11.5043L9.8 16.2L18 8" stroke="#1A9882" stroke-width="1.5" stroke-linecap="round"/>
                                   </svg>
       <span class="text-xs font-medium text-[#000000]">Approve</span>                            
                               </button>
                             </div>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
             </div>
           
         </div>
       
</template>
