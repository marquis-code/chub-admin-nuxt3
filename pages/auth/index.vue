<template>
    <main>
      <div class="w-full">
        <form @submit.prevent="login" class="space-y-2 w-full pt-44 lg:pt-0">
          <div class="w-full">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Email
              address</label>
            <div class="">
              <input id="email" v-model="credential.email.value" placeholder="sign in with your username or email" name="email" type="email"
                autocomplete="email"
                class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="w-full">
            <label for="password"
              class="block text-sm font-medium leading-6 text-gray-900 sr-only">Password</label>
            <div class="relative">
              <input id="password" :type="showPassword ? 'text' : 'password'"  v-model="credential.password.value" placeholder="enter your password" name="password" type="password"
                autocomplete="current-password"
                class="block w-full rounded-b-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                <img
                @click="showPassword = !showPassword"
                :src="eye"
                alt=""
                class="absolute cursor-pointer top-4 right-4 h-6 w-6"
              />
            </div>
          </div>
  
          <div class="pt-3">
            <button type="submit" :disabled="loading || isFormEmpty"
              class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">
              {{  loading ? 'Processing...' : 'Sign In' }}
            </button>
          </div>
        </form>
      <div class="flex justify-between items-center">
        <p class="mt-3 text-center text-sm text-gray-500">
          forgot password?
          <button @click="showForgotPasswordModal = true"
            class="font-semibold leading-6 text-[#690571] hover:text-[#690571]">reset here</button>
        </p>
        <NuxtLink to="/auth/request-auth-link"
        class="font-semibold leading-6 text-sm text-[#690571] hover:text-[#690571]">Request Auth Link</NuxtLink>
      </div>
      </div>
      <CoreBaseModal :show="showForgotPasswordModal" @update:show="showForgotPasswordModal = false">
       <div class="space-y-6 pb-10">
        <div class="space-y-2">
          <h1 class="lg:text-3xl text-xl font-black text-center py-0 my-0">Forgot your password ?</h1>
          <p class="text-[#777980] py-0 my-0 text-sm lg:text-base">Please enter your email address and a reset link will be sent to you</p>
        </div>
        <div class="w-full pt-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Email
            address</label>                                                                                                
          <div class="">
            <input id="email" placeholder="enter your email address" name="email" type="email" autocomplete="email"
              class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="pt-3">
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">Send
            link</button>
        </div>
       </div>
      </CoreBaseModal>
  
      <CoreBaseModal :show="showOtpModal" @update:show="showOtpModal = false">
        <div class="space-y-6 pb-10">
         <div class="space-y-2">
           <h1 class="text-3xl font-black text-center py-0 my-0">Enter OTP Code</h1>
           <p class="text-[#777980] py-0 my-0 text-center">Please enter the otp sent to your email address</p>
         </div>
         <div class="w-full pt-4">
           <label for="otp" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Email
             address</label>                                                                                                
           <div class="">
             <input id="otp" placeholder="enter otp code" name="otp" type="tel"
               class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
           </div>
         </div>
         <div class="pt-3">
           <button type="submit"
             class="flex w-full justify-center rounded-md bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">Send
             verify</button>
         </div>
        </div>
       </CoreBaseModal>
  
       <CoreBaseModal :show="showResetModal" @update:show="showResetModal = false">
        <div class="space-y-6 pb-10">
         <div class="space-y-2">
           <h1 class="text-3xl font-black text-center py-0 my-0">Reset Password</h1>
           <p class="text-[#777980] py-0 my-0 text-center">Please enter your new password below</p>
         </div>
         <div class="w-full pt-4">
           <label for="password" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Email
             address</label>                                                                                                
           <div class="">
             <input id="password" placeholder="enter otp code" name="otp" type="password"
               class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
           </div>
         </div>
         <div class="w-full">
          <label for="password"
            class="block text-sm font-medium leading-6 text-gray-900 sr-only">Password</label>
          <div class="">
            <input id="password" placeholder="enter your password" name="password" type="password"
              autocomplete="current-password"
              class="block w-full rounded-b-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
         <div class="pt-3">
           <button type="submit"
             class="flex w-full justify-center rounded-md bg-[#dfcce0] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">Send
             verify</button>
         </div>
        </div>
       </CoreBaseModal>
    </main>
  </template>
  
  <script setup lang="ts">
  import eyeOpen from '@/assets/icons/eye-open.svg'
  import eyeClose from '@/assets/icons/eye-close.svg'
  import { useLogin } from '@/composables/auth/login'
  const { credential, login, loading, isFormEmpty } = useLogin()
  const showForgotPasswordModal = ref(false)
  const showOtpModal = ref(false)
  const showResetModal = ref(false)
  definePageMeta({
    title: 'Home Page',
    layout: 'authentication',
    meta: [
      { name: 'description', content: 'This is the home page of my Nuxt 3 app.' }
    ]
  })
  
  const showPassword = ref(false)


    const eye = computed(() => {
        return !showPassword.value ? eyeClose : eyeOpen
    })
  </script>
  