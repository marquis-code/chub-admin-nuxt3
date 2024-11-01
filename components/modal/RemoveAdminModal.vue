<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" v-if="isOpen">
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
        <button @click="emit('close')" class="absolute top-2 right-2 text-gray-500">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="flex flex-col items-center">
          <img :src="member.photo.image" alt="Lion Avatar" class="w-16 h-16 mb-4" />
          <h3 class="text-lg font-bold text-purple-600">{{member.firstName ?? 'Nil'}} {{member.lastName ?? 'Nil'}}</h3>
          <p class="text-center mt-4">Are you sure you want to remove <span class="text-purple-600 font-semibold">{{member.firstName ?? 'Nil'}} {{member.lastName ?? 'Nil'}}'s</span> role access?</p>
        </div>
        <div class="flex justify-between gap-x-4 items-center mt-10">
          <button @click="emit('close')" class="bg-gray-200 w-full text-gray-800 text-sm rounded-lg px-4 py-3 mr-2">Cancel</button>
          <button :disabled="loading" @click="confirmRemove" class="bg-red-500 disabled:cursor-not-allowed disabled:opacity-25 w-full text-white text-sm rounded-lg px-4 py-3">{{loading ? 'processing...' : 'Remove'}}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {  useSuspendAdmin } from '@/composables/admin-mgt/suspendAdmin'
  const { suspendAdmin, loading } = useSuspendAdmin()
  const props = defineProps({
    isOpen : {
      type: Boolean
    },
    member : {
      type: Object
    },
  })
  
  const closeModal = () => {
    props.isOpen = false;
  };

  const emit = defineEmits(['close'])
  
  const confirmRemove = async () => {
    await suspendAdmin(props?.member?.id)
    emit('close')
  };
  </script>
  