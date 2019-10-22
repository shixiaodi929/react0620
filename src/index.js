/* 
入口js
*/
import React from 'react'
import ReactDOM from 'react-dom'
// 对状态进行管理
import {Provider} from 'react-redux'

import App from './App'
import store from './pages/redux/store'


ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
  ),document.getElementById('root'))