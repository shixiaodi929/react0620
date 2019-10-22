/**
 * 对axios进行二次封装（发送ajax请求）
    1). 将post请求的data对象数据转换为urlencode格式的字符串数据
    2). 如果请求成功, 判断操作是否成功
        如果成功返回返回的data数据, 外部具体请求得到需要的数据
        如果失败返回携带msg的错误, 外部具体请求处理错误
    3).统一处理请求异常, 外部调用者不用再处理请求异常
    4). 请求过程中显示请求进度的效果
 */

//  axios发送请求
 import axios from "axios";
//  将json参数转换为urlenclde参数
 import qs from 'qs'
//  进度条
 import NProgress from 'nprogress'
import { promises } from "dns";



/**
 * 创建instance：用于发送ajax请求
 */
const instance = axios.create({// 配置对象
  timeout:10000 //允许超时时间

})

// 添加请求拦截器
/**
 * 1). 将post请求的data对象数据转换为urlencode格式的字符串数据
 */
instance.interceptors.request.use((config) =>{

  // 显示请求进度
  NProgress.start()

  const {data} = config
  // 当传入的数据为对象时，将其转换为urlencode格式
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }

  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {

    // 隐藏进度条
  NProgress.done()

  const result = response.data
  return result
  },
  error =>{
    // 显示请求进度
  NProgress.start()

  Message.error('请求出错: ' + error.message)

  // 中断promise链
  return new Promise(()=>{})
  }

)
