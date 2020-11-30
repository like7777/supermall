import  axios from 'axios'

export function request(config, success, failure){
  //创建实例
  const instance = axios.create({
    baseUrl : 'http://152.136.185.210:7878/api/m5',
    timeOut : 5000
  })
  
  //拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })
  
  //响应
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  
  return instance(config)
  }