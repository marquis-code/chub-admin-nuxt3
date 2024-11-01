 <template>
    <main>
      <div class="w-full flex justify-center items-center pt-32 px-4 lg:px-0">
            <form @submit.prevent="verifyOtp" class="w-full max-w-md text-center">
              <div class="mb-8 flex justify-center items-center">
              <img src="@/assets/img/logo.png" alt="" />
              </div>
              <h1 class="text-2xl font-semibold mb-4 text-[#1D2739]">Verify your email</h1>
              <p class="text-[#667185] mb-8">
                We just sent a 4 digit code to {{ route.query.email }}. Enter the code to verify your email.
              </p>
              <section>
                <div class="flex justify-center space-x-2 mb-4">
                  <input :class="[errorMessage ? 'border-[#9E0A05] border-2' : '']" v-model="otp[0]" @input="focusNext(0)" type="text" maxlength="1" class="w-16 outline-none focus-within:border-2 focus-within:border-[#690571] h-14 text-center border rounded-lg text-2xl" />
                  <input :class="[errorMessage ? 'border-[#9E0A05] border-2' : '']" v-model="otp[1]" @input="focusNext(1)" type="text" maxlength="1" class="w-16 outline-none focus-within:border-2 focus-within:border-[#690571] h-14 text-center border rounded-lg text-2xl" />
                  <input :class="[errorMessage ? 'border-[#9E0A05] border-2' : '']" v-model="otp[2]" @input="focusNext(2)" type="text" maxlength="1" class="w-16 outline-none focus-within:border-2 focus-within:border-[#690571] h-14 text-center border rounded-lg text-2xl" />
                  <input :class="[errorMessage ? 'border-[#9E0A05] border-2' : '']" v-model="otp[3]" @input="focusNext(3)" type="text" maxlength="1" class="w-16 outline-none focus-within:border-2 focus-within:border-[#690571] h-14 text-center border rounded-lg text-2xl" />
                </div>
                <p v-if="errorMessage" class="text-sm text-[#1D2739]">The entered OTP code is incorrect. Please verify or click 'Resend code' for a new one.</p>
              </section>
          <div class="mt-10">
            <button :disabled="loading || !isOtpComplete" type="submit" class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">
              {{  loading ? 'processing..' : 'Verify email' }}
            </button>
          </div>
              <!-- <p class="text-gray-500">
              <a @click="handleResendOtp" href="#" class="text-[verif667185]">{{ resending ? 'processing...' : 'Resend code'}}</a>
              </p> -->
            </form>
      </div>
    </main>
  </template>
  
  <!-- <script setup lang="ts">
  import { useVerifyOtp } from '@/composables/auth/verifyOtp'
  const { verifyOtp, loading, credential, disabled } = useVerifyOtp()
  definePageMeta({
    title: 'Verify Login Session',
    layout: 'authentication',
    meta: [
      { name: 'description', content: 'This is the home page of my Nuxt 3 app.' }
    ]
  })
  </script>
   -->

    
  <script setup lang="ts">
  import { useVerifyOtp } from '@/composables/auth/verifyOtp'
   const { verifyOtp, loading, credential, disabled, setPayload } = useVerifyOtp()
  const route = useRoute()
  // Define a ref to hold each OTP digit
  const otp = ref(['', '', '', ''])
  
  // Function to automatically move focus to the next input
  const focusNext = (index: number) => {
    if (otp.value[index].length === 1 && index < 3) {
      const nextInput = document.querySelectorAll('input')[index + 1]
      if (nextInput) {
        nextInput.focus()
      }
    }
    // Update the concatenated OTP code
    credential.verificationPin.value = otp.value.join('')
  }
  
  // Computed property to check if all OTP fields are filled
  const isOtpComplete = computed(() => otp.value.every((digit: any) => digit.length === 1))
  
  // Watch for the OTP value to be complete
  watch(otp, (newOtp: any) => {
  
    // if(!newOtp.length) return
    // Check if all four digits have been entered
    if (newOtp.every((digit: any) => digit.length === 1)) {
  
      const payload = {
        email: route.query.email,
        verificationPin: otp.value
      }
      // Trigger OTP verification
      setPayload(payload)
      verifyOtp().catch((error: any) => {
        console.log(error, 'error here')
      })
    }
  }, { deep: true })
  
  // const handleResendOtp = () => {
  //   const payload = {
  //     email: route.query.email,
  //   }
  //   setObj(payload.email)
  //   initiate_otp().then(() => {
  //     // otp.value.length = 0
  //     // errorMessage.value = ''
  //   })
  // }
  
  </script>
  