<template>
  <div class="border border-gray-50 bg-white p-4 rounded-lg shadow-sm relative">
    <input type="checkbox" class="absolute left-4 top-4" />
    <img
      src="@/assets/icons/more.svg"
      class="absolute right-4 top-4"
      alt="more"
    />
    <div class="">
      <div class="flex items-center justify-center flex-col gap-y-2">
        <img :src="avatar" alt="avatar" class="rounded-full w-16 h-16" />
        <h3 class="font-medium text-sm">{{ name }}</h3>
        <span
        class="text-xs rounded-2xl px-4 py-1.5"
          :class="[role === 'USER' ? 'bg-[#690571] text-white' : 'bg-[#FF5724] text-white']"
          >{{ role === 'USER' ? 'User-generated' : 'Chub-generated' }}</span
        >
      </div>
      <div class="flex items-center flex-col justify-center gap-y-2">
        <div class="border border-dashed border-gray-100 w-full my-3 mt-6"></div>
        <div
          class="text-sm text-gray-500 flex justify-between items-center w-full"
        >
          <p class="text-xs">Creator</p>
          <p class="text-[#4A4C56] font-semibold text-xs">
            {{ fname }}  {{ lname }}
          </p>
        </div>
        <div
          class="text-sm text-gray-500 flex justify-between items-center w-full pt-3"
        >
          <p class="text-xs">Goal</p>
          <p class="text-[#4A4C56] font-semibold text-xs flex gap-x-1">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.500244" y="1" width="16" height="16" rx="8" stroke="#00CC99"/>
              <g clip-path="url(#clip0_6586_1651)">
              <path d="M6.37055 13.2236C5.39125 12.7432 4.6031 11.9459 4.13406 10.9611C3.66502 9.97637 3.54263 8.86196 3.78677 7.79886C4.03092 6.73577 4.62725 5.78642 5.47895 5.10496C6.33065 4.4235 7.38769 4.04996 8.47845 4.04497C9.5692 4.03999 10.6296 4.40386 11.4875 5.07751C12.3454 5.75116 12.9504 6.69502 13.2042 7.75584C13.4581 8.81666 13.3459 9.93213 12.8858 10.9211C12.4258 11.9102 11.645 12.7146 10.6701 13.2039" stroke="#00CC99" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.3458 12.4512L9.87573 13.4815L10.8783 13.9608" stroke="#00CC99" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.8098 6.73873C9.09793 6.73873 9.33151 6.50516 9.33151 6.21702C9.33151 5.92889 9.09793 5.69531 8.8098 5.69531C8.52166 5.69531 8.28809 5.92889 8.28809 6.21702C8.28809 6.50516 8.52166 6.73873 8.8098 6.73873Z" stroke="#00CC99" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.48572 10.472L6.7966 11.3116C6.46649 11.6936 6.94299 12.0286 7.29232 11.6979L7.96736 10.8476L8.18892 10.0162L8.54512 10.3725L8.7826 11.602C8.93969 11.944 9.45028 11.9252 9.43368 11.4853L9.08168 10.1716L8.57728 9.29801L8.85976 8.24377L9.17495 8.32821C9.17049 8.36423 9.17681 8.40076 9.19312 8.43319C9.20942 8.46561 9.23497 8.49248 9.26654 8.51039C9.37633 8.56902 10.1656 8.81077 10.1656 8.81077C10.6621 8.96325 10.7181 8.46347 10.3169 8.34707L9.65957 8.17084L9.3342 7.62899L8.80555 7.15544L7.99734 7.13672L6.85511 7.82633L6.43087 8.96009C6.33708 9.27692 6.79129 9.35942 6.91678 9.11297C6.97775 9.00481 7.28469 8.27435 7.28469 8.27435L7.95163 7.94344L7.62537 9.4389L7.48572 10.472Z" stroke="#00CC99" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_6586_1651">
              <rect width="11.3333" height="11.3333" fill="white" transform="translate(2.8335 3.33594)"/>
              </clipPath>
              </defs>
              </svg>              
              {{ moment.utc(lastActive).format('DD-MMM-YY') || 'Nil' }}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import moment from "moment";
defineProps<{
  name: string;
  role: string;
  fname: string;
  lname: string;
  lastActive: string;
  avatar: string;
  textColor: string;
  bgColor: string;
  challenge: Object
}>();
</script>
