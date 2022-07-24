import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from './auth'

const serveice = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

serveice.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

serveice.interceptors.response.use(
  (response) => {
    console.log(response)
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return new Promise(new Error(message))
    }
  },
  (error) => {
    // 处理 token 超时问题
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // token 超时
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default serveice
