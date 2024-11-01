<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

definePageMeta({
  title: 'Home Page',
  layout: 'authentication',
  meta: [
    { name: 'description', content: 'This is the home page of my Nuxt 3 app.' }
  ]
})

onMounted(() => {
  router.push('/auth')
})
</script>
