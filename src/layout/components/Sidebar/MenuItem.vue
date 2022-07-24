<template>
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style></style>
