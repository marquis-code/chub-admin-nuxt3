<template>
  <div class="w-full p-2">
      <NuxtEmojiPicker
        :hide-search="false"
        style="width: 100%;"
        :native="true"
        theme="light"
        @select="onSelectEmoji"
        class="w-full"
      />
  </div>
</template>

<script lang="ts" setup>
const selectedEmoji = ref();

const emit = defineEmits<{
  (event: 'selectedEmoji', state: any): void
}>()

const onSelectEmoji = (emoji: any) => {
  selectedEmoji.value = emoji.i;
  emit('selectedEmoji', emoji.i); // Emit the value, not the ref
};
</script>
