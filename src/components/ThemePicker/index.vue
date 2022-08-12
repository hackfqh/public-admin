<template>
  <el-dropdown
    class="theme"
    trigger="click"
    @command="handleSetTheme"
    v-bind="$attrs"
  >
    <el-tooltip :content="$t('msg.navBar.themeChange')">
      <svg-icon icon="change-theme"></svg-icon>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">{{
          $t('msg.theme.themeColorChange')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div>
    <select-color v-model="selectColorVisible"></select-color>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectColor from './components/SelectColor.vue'
const handleSetTheme = (command) => {
  selectColorVisible.value = true
}
const selectColorVisible = ref(false)
</script>

<style></style>
