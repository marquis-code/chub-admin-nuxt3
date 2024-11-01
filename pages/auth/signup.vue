<template>
  <main>
    <div v-if="route.query.step === 'intro'" class="w-full">
      <h1 class="text-gray-400 text-2xl">Email Address Verified, </h1>
      <h1 class="text-2xl">
        <span class="text-gray-900">Please complete your</span> <span class="text-[#1E0221]">profile.</span>
      </h1>
      <form @submit.prevent="register" class="space-y-2 w-full pt-6">
        <div class="flex gap-x-3">
          <div class="w-full">
            <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900 sr-only">First Name</label>
            <div>
              <input id="firstname"  v-model="credential.firstname.value" placeholder="enter your first name" name="firstname" type="text"
                class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="w-full">
            <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Last Name</label>
            <div>
              <input id="lastname"  v-model="credential.lastname.value" placeholder="enter your last name" name="lastname" type="text"
                class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>

        <div class="w-full">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Password</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" v-model="credential.password.value" id="password" placeholder="enter your password" name="password" type="password"
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
          <button type="submit"
            class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">
            {{ loading ? 'Processing...' : 'Create profile' }}
          </button>
        </div>
      </form>
      <p class="mt-3 text-center text-sm text-gray-500">
        already have an account?
        <button @click="router.push('/')"
          class="font-semibold  leading-6 text-[#690571] hover:text-[#690571]">login to your account</button>
      </p>
    </div>
    <div class="w-full" v-if="route.query.step === 'success'">
      <h1 class="text-gray-400 font-black text-3xl text-center tracking-wide">Profile complete, <span class="text-[#1E0221]">An Admin</span></h1>
      <h1 class="text-3xl font-black text-center tracking-wide"><span class="text-[#1E0221]"> will review within 24 hours.</span></h1>
      <div class="pt-6">
        <button type="button" @click="viewHomepage" 
          class="flex w-full justify-center rounded-xl bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">
          {{ loading ? 'Processing...' : 'View Homepage' }}
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import eyeOpen from '@/assets/icons/eye-open.svg'
  import eyeClose from '@/assets/icons/eye-close.svg'
  import { useRegister } from '@/composables/auth/register'
  const { credential, register, loading, isFormEmpty } = useRegister()
import { useRouter, useRoute } from 'vue-router'
const showPassword = ref(false)
const router = useRouter()
const route = useRoute()
onMounted(() => {
  if (!route.query.step) {
    router.replace({ path: route.path, query: { step: 'intro' } })
  }
})

definePageMeta({
  title: 'Admin Signup',
  layout: 'authentication',
  meta: [
    { name: 'description', content: 'This is the home page of my Nuxt 3 app.' }
  ]
})

const viewHomepage = () => {
  router.push('/dashboard')
}



const eye = computed(() => {
        return !showPassword.value ? eyeClose : eyeOpen
    })
</script>
