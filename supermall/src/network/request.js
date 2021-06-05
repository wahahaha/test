import axios from 'axios';
export function request(config) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 创建axios的拦截器
  instance.interceptors.response.use( res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}

