<template>
  <div>
    <svg-icon
      id="guide-full"
      :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
      @click="onToggle"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isFullscreen = ref(false)

const onToggle = () => {
  screenfull.toggle()
}
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

onMounted(() => {
  screenfull.on('change', change)
})

onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<style></style>
