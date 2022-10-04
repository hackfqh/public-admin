<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <svg-icon
        id="guide-start"
        icon="guide"
        @click="handleGuideClick"
      ></svg-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
import steps from './steps'

const i18n = useI18n()
let driver
onMounted(() => {
  driver = new Driver({
    // animate: false,
    allowClose: false,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev')
  })
})

const handleGuideClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>

<style>
div#driver-highlighted-element-stage,
div#driver-page-overlay {
  background: transparent !important;
  outline: 5100px solid rgba(0, 0, 0, 0.75);
}
</style>
