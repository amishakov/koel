<template>
  <div
    :style="{ backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : 'none' }"
    class="pointer-events-none fixed z-[1000] overflow-hidden opacity-10 bg-cover bg-center top-0 left-0 h-full w-full"
    data-testid="album-art-overlay"
  />
</template>

<script lang="ts" setup>
import { ref, toRefs, watchEffect } from 'vue'
import { albumStore } from '@/stores/albumStore'
import { logger } from '@/utils/logger'

const props = defineProps<{ album: Album['id'] }>()
const { album } = toRefs(props)

const thumbnailUrl = ref<string | null>(null)

watchEffect(async () => {
  try {
    thumbnailUrl.value = await albumStore.fetchThumbnail(album.value)
  } catch (error: unknown) {
    logger.error(error)
    thumbnailUrl.value = null
  }
})
</script>
