import axios from "axios";
import { config } from './config'

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    console.log(baseURL)
    
    // 拦截器
    this.instance.interceptors.request.use(config => {
     return config 
    }, err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      let result = res.data
      return result
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, methods: 'get' })
  }

  post(config) {
    return this.request({ ...config, methods: 'post' })
  }
}

export default new Request(config.BASE_URL, config.TIMEOUT)