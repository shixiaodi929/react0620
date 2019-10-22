/**
 * redux的核心管理对象
 */
// 可以使用工具对状态进行调试
import { createStore, applyMiddleware } from 'redux'
// 可以进行异步编程
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'


import reducer from './reducters/index'  // 总reducer函数
import { IS_DEV } from '../../config/index'

export default createStore(
  reducer, 
  IS_DEV ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
)