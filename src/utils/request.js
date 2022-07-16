import axios from 'axios'
import { ElMessage } from 'element-plus'

const serveice = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

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
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default serveice
