export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      console.log('----')
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
