import router from './router'
import store from './store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    console.log('存在token')
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    console.log('没有登录')
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
