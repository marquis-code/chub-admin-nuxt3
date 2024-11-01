<template>
 <main>
  <section class="space-y-10" >
    <CoreHeaderWithStats :showAddSection="false" title="Manage App Users" description="Create and manage admins, content admins and challenge admins" />
    <div class="bg-white lg:flex items-start gap-x-10">
      <div  v-if="!loadingStats && Object.keys(statsObj).length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:w-4/12">
        <userStats :statsObj="statsObj" />
      </div>
      <div v-else-if="loading && !Object.keys(statsObj).length" class="rounded-lg bg-gray-100 h-96 w-full mt-4"></div>

      <div v-else class="border-[0.5px] text-gray-500 h-44 font-medium lg:w-4/12 rounded-lg flex justify-center flex-col space-y-2 items-center">
        <svg class="h-16 w-16" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M21 20H3V5" stroke="#E0E2E7" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 7L13 14L9 10L3 15" stroke="#E0E2E7" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>

          No User Statistics Available
      </div>
      <div class="lg:w-8/12 border border-gray-50 rounded-lg relative bg-white p-6">
       <div class="absolute top-6" >
        <h2 class="text-lg pb-0 mb-0">Statistic</h2>
        <p class="text-[#777980] text-sm pt-0 mt-0">Active and drop-off</p>
       </div>
        <apexchart type="line" height="350" class="mt-6" :options="chartOptions" :series="chartSeries" />
      </div>
    </div>
    <div class="">
      <div class="flex space-x-4 justify-between items-center">
        <div class="relative w-96">
          <img src="@/assets/icons/search.svg" alt="date-picker" class="absolute left-3 top-3" />
          <input v-model="searchQuery" type="text" placeholder="Search team members. . ."
            class="px-4 py-3.5 w-full pl-10 text-sm border outline-none rounded-md flex-grow" />
        </div>
        <div>
          <button class="px-4 py-2.5 text-gray-500 border rounded-md text-xs flex items-center gap-x-3">
            <img src="@/assets/icons/filter.svg" alt="date-picker" />
            Filters</button>
        </div>
      </div>
      <div v-if="!loading && usersList.length" class="mt-8 flow-root border bg-white rounded-xl border-gray-50 shadow-sm">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="relative">
             <UsersList :usersList="usersList" />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
          </div>
          <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">10</span>
                of
                <span class="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav class="isolate inline-flex rounded-md shadow-sm space-x-3" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center rounded-xl px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span class="sr-only">Previous</span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                    </svg>
                     </a>
                <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                <a href="#" aria-current="page" class="relative z-10 rounded-xl inline-flex items-center bg-[#690571] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                <a href="#" class="relative bg-[#F4ECFB] text-[#690571] inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                <a href="#" class="relative bg-[#F4ECFB] text-[#690571] hidden items-center px-4 py-2 text-sm font-semibold rounded-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                <span class="relative bg-[#F4ECFB] text-[#690571] inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                <a href="#" class="relative bg-[#F4ECFB] text-[#690571] hidden items-center px-4 py-2 text-sm font-semibold rounded-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                <a href="#" class="relative bg-[#F4ECFB] text-[#690571] inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                <a href="#" class="relative bg-[#F4ECFB] text-[#690571] inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                <a href="#" class="relative bg-[#F4ECFB] text-[#690571] inline-flex items-center rounded-r-md px-2 py-2 rounded-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span class="sr-only">Next</span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="loading && !usersList.length" class="rounded-lg bg-gray-100 h-96 w-full mt-4"></div>

      <div v-else class="border-[0.5px] text-gray-500 h-44 font-medium rounded-lg mt-4 flex justify-center flex-col space-y-2 items-center">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        {{searchQuery ? `No Users Found based on search query "${searchQuery}"` : 'No Users Available'}}
      </div>
      
    </div>
  </section>
 </main>
</template>

<script setup lang="ts">
import { useGetUsersList } from '@/composables/users/getUsersList'
import { useGetUserStats } from '@/composables/users/getStats'
const { loading: loadingStats, statsObj } = useGetUserStats()
const { loading, usersList, searchQuery } = useGetUsersList()
definePageMeta({
  layout: 'dashboard'
})

const chartOptions = ref({
  chart: {
    type: 'line',
    height: 350,
    toolbar: { show: false },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 5
  },
  tooltip: {
    y: {
      formatter: (val) => val + " participants"
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right'
  },
  colors: ['#883DCF', '#F86624']
});

const chartSeries = ref([
  {
    name: 'Active',
    data: [1000, 1200, 900, 1400, 1050, 950, 1150, 1200, 1250, 1300, 1100, 1150]
  },
  {
    name: 'Drop-off',
    data: [900, 1100, 800, 1300, 1040, 850, 1050, 1100, 1150, 1100, 1000, 1000]
  }
]);
</script>

<style scoped>
.bg-red-100 {
  background-color: #fee2e2;
  /* Light red background for checked rows */
}
</style>