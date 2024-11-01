<template>
    <span 
      :class="badgeClass"
    >
      {{ formattedRole }}
    </span>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  
  interface Props {
    role: string;
  }
const props = defineProps<Props>();

// Format the role to replace underscores and capitalize each word
const formattedRole = computed(() => {
  return props.role
    ? props.role.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
    : 'PENDING'; // Fallback to an empty string if role is undefined
});

// Assign different colors based on the role
const badgeClass = computed(() => {
  switch (props.role) {
    case 'SUPER_ADMIN':
      return 'text-xs bg-[#F4ECFB] text-[#690571] px-2 py-1.5 rounded-md';
    case 'CONTENT_ADMIN':
      return 'text-xs bg-[#FFEFFE] text-[#FF2BEA] px-2 py-1.5 rounded-md';
    case 'CHALLENGE_ADMIN':
      return 'text-xs bg-[#FFF3E0] text-[#FF9E2B] px-2 py-1.5 rounded-md';
    case 'USER_ADMIN':
      return 'text-xs bg-[#EAF8FF] text-[#2BB2FE] px-2 py-1.5 rounded-md';
    default:
      return 'text-xs text-black bg-gray-300 px-2 py-1.5 rounded-md';
  }
});
  </script>
  