<template>
    <section>
        <h5 class="text-xs text-[#A3A9B6] font-medium mt-4">
            ROLE INFORMATION
          </h5>
          <div class="mt-4 max-w-7xl">
            <label for="role-name" class="block text-[#777980] text-sm"
              >Name</label
            >
            <input
              type="text"
              id="role-name"
              v-model="nameInput"
              placeholder="Type name here..."
              class="mt-1 p-2 py-2.5 border rounded w-10/12 font-light text-sm"
            />
          </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String // This is the value from the parent
})

const emit = defineEmits(['update:modelValue'])

// Create an internal value for the input
const internalValue = ref(props.modelValue)

// Watch for changes in internalValue and emit them back to parent
watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue)
})

</script>
