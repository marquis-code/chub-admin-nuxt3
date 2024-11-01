<template>
  <main>
    <section class="lg:bg-[#1E0221]">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative hidden lg:flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img alt=""
            src="@/assets/img/landing.png"
            class="absolute inset-0 h-full w-full object-cover opacity-80" />

          <div class="hidden lg:relative lg:block lg:p-12">
          </div>
        </section>

        <main
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full bg-white rounded-[50px]  ">
          <div class="max-w-xl lg:max-w-3xl w-full lg:w-9/12">
            <section class="w-full">
              <slot />
            </section>
          </div>
        </main>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>
