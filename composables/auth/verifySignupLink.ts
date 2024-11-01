import { useAlert } from '@/composables/core/notification'
import { authApiFactory } from '@/apiFactory/modules/auth'
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useVerifySignupLink = () => {
    const router = useRouter()
    const route = useRoute()
    const verificationPayload = {
        verificationToken: ref(''), // Store the token here
    }
    const loading = ref(false)

    // Computed property to check if the token is available
    const disabled = computed({
        get: () => verificationPayload.verificationToken.value === '',
        set: () => {}
    })

    // Function to verify the signup link
    const verifySignupLink = async () => {
        loading.value = true
        try {
            const res = await authApiFactory.$_verify_signup_link({
                verificationToken: verificationPayload.verificationToken.value
            }) as any

            if (res.type !== 'ERROR') {
                useAlert().openAlert({
                    type: 'SUCCESS',
                    msg: 'Signup link was verified successfully.'
                })
                router.push('/auth/signup') // Redirect to login or dashboard
            } else {
                throw new Error('Verification failed.')
            }
        } catch (error) {
            console.log(error, 'error here')
            useAlert().openAlert({
                type: 'ERROR',
                msg: error.message || 'Verification failed. Redirecting to login...'
            })
            router.push('/auth/request-auth-link') // Redirect to login on failure
        } finally {
            loading.value = false // Stop loading spinner
        }
    }

    // Automatically extract token from URL and verify on page load
    onMounted(() => {
        const token = route.query.token as string // Extract token from URL query params
        if (token) {
            verificationPayload.verificationToken.value = token // Set the token
            verifySignupLink() // Trigger the verification automatically
        } else {
            useAlert().openAlert({
                type: 'ERROR',
                msg: 'Invalid verification link. Redirecting to login...'
            })
            router.push('/auth/login') // Redirect to login if token is not present
        }
    })

    return { verificationPayload, loading, verifySignupLink, disabled }
}
