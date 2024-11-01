<template>
  <main class="space-y-32">
    <div class="bg-[#F4ECFB] h-44 w-full relative">
    <div class="flex items-center">
      <img src="@/assets/img/super-admin.png" alt="" class="h-32 w-32 absolute -bottom-24 left-10" />
    </div>
    <div class="absolute -bottom-16 left-44">
      <div>
        <h1 class="font-semibold text-[#101828] text-lg">Olivia Rhye</h1>
        <p class="text-[#475467]">olivia@untitledui.com</p>
      </div>
    </div>
    </div>
   <div class="space-y-6">
    <div>
      <div class="">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 " -->
            <a :class="[activeTab === 'profile' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'profile'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium ">
              Profile
              <!-- Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" -->
            </a>
            <a :class="[activeTab === 'password' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'password'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium ">
              Password
            </a>
            <a :class="[activeTab === 'team' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'team'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium" aria-current="page">
              Team
              <span
                class="ml-3 hidden rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-600 md:inline-block">4</span>
            </a>
            <a :class="[activeTab === 'plan' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'plan'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium "> Plan </a>
            <a :class="[activeTab === 'billing' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'billing'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium "> Billing
              <span
                class="ml-3 hidden rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 md:inline-block">52</span>
            </a>
            <a :class="[activeTab === 'email' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'email'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium "> Email</a>
            <a :class="[activeTab === 'notification' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'notification'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium "> Notifications
              <span
                class="ml-3 hidden rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 md:inline-block">52</span>
            </a>
            <a :class="[activeTab === 'integrations' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'integrations'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium "> Integrations </a>
            <a :class="[activeTab === 'api' ? 'text-indigo-600 border-indigo-500' : 'border-transparent text-gray-500']"
              @click="activeTab = 'api'" href="#"
              class="flex whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium "> API </a>
          </nav>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'profile'" class="space-y-10 divide-y divide-gray-900/10">
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Personal info</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Update your photo and personal details.</p>
        </div>

        <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 w-full max-w-3xl">
          <div class="px-4 py-6 sm:p-8 w-full">
            <div class="max-w-2xl space-y-6">
              <div class="flex w-full gap-x-5">
                <div class="w-full">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                  <div class="mt-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>

                <div class="w-full">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                  <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                      class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </div>

              <div class="">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email"
                    class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>

              <div class="flex gap-x-5">
                <div class="">
                  <div class="mt-2 flex items-center gap-x-3">
                    <img src="@/assets/img/member-avatar.png" alt="" class="h-14 w-16" />
                  </div>
                </div>
                <div
                  class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-full">
                  <div class="text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clip-rule="evenodd" />
                    </svg>
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <label for="file-upload"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span class="text-[#690571]">Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only w-full">
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button"
              class="text-sm font-medium leading-6 text-gray-900 border border-gray-200 px-5 py-2.5 rounded-md">Cancel</button>
            <button type="submit"
              class="rounded-md bg-[#690571] px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">Save
              changes</button>
          </div>
        </form>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Update your portfolio and bio.</p>
        </div>

        <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 p-6 space-y-6 max-w-3xl w-full">
          <div class="w-full">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <select id="country" name="country" autocomplete="country-name"
              class="mt-2 block w-full rounded-md border-0 bg-white py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div class="w-full">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Timezone</label>
            <select id="country" name="country" autocomplete="country-name"
              class="mt-2 block w-full rounded-md border-0 bg-white py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button"
              class="text-sm font-medium leading-6 text-gray-900 border border-gray-200 px-5 py-2.5 rounded-md">Cancel</button>
            <button type="submit"
              class="rounded-md bg-[#690571] px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">Save
              changes</button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="activeTab === 'password'" class="space-y-10 divide-y divide-gray-900/10">
      <form>
        <div class="space-y-12 sm:space-y-16">
          <div>
            <h2 class="text-base font-semibold leading-7 text-gray-900">Password</h2>
            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Please enter your current password to change your password.</p>

            <div class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Current password</label>
                <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">New password</label>
              <div class="space-y-2">
                <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <p class="text-sm text-[#475467] block">Your new password must be more than 8 characters.</p>
              </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Confirm new password</label>
                <input id="email" name="email" type="email" autocomplete="email"
                class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>

              <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button type="button"
                  class="text-sm font-medium leading-6 text-gray-900 border border-gray-200 px-5 py-2.5 rounded-md">Cancel</button>
                <button type="submit"
                  class="rounded-md bg-[#690571] px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">Update password</button>
              </div>

      <div>

      </div>
            </div>
          </div>

          <div>
            <h2 class="text-base font-semibold leading-7 text-gray-900">Where you’re logged in</h2>
            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">We’ll alert you via olivia@untitledui.com if there is any unusual activity on your account.</p>

            <div class="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
             <div class="flex items-center gap-x-3 py-6" v-for="item in 2" :key="item" >
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 17V21H9V17M5.2 17H18.8C19.9201 17 20.4802 17 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C22 15.4802 22 14.9201 22 13.8V6.2C22 5.0799 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H5.2C4.07989 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.07989 2 6.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.0799 17 5.2 17Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                  
              </div>
              <div>
                <p class="text-sm text-[#344054] flex items-center gap-x-3"><span class="font-semibold">2018 Macbook Pro 15-inch</span> <button class="font-medium border rounded-xl text-sm px-3 py-1 flex items-center gap-x-2">
                  <span class="h-1 w-1 rounded-full bg-green-600 p-1"></span>
                  Active now</button></p>
                <p class="text-sm text-[#475467]">Melbourne, Australia • 22 Jan at 10:40am</p>
              </div>
             </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div v-if="activeTab !== 'profile' || 'password'" class="flex justify-center items-center border-gray-100 font-semibold place-content-center border h-44 rounded-lg">
       <p>Coming Soon</p>
    </div>
   </div>

  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const activeTab = ref('profile')
</script>