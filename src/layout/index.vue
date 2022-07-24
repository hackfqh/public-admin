<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openDidebar' : 'hideSidebar']"
  >
    <sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import variables from '../styles/variables.module.scss'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
console.log(variables)
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
