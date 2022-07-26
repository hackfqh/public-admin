import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './styles/index.scss'
import installIcons from '@/icons'
import i18n from '@/i18n'

// 导入权限控制模块
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
