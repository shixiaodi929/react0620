/**
 * 向外暴露一个统一的reducter（管理者所有的reducter）
 */
import { combineReducers } from 'redux'

import user from './user'
import xxx from './xxx'

export default combineReducers({
  user,
  xxx
})