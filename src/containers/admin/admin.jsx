/* 
后台管理的一级路由组件：admin组件
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
// 重定向
import {Redirect} from 'react-router-dom'
//重新登录页面
import { removeUserToken } from '../../redux/action-creators/user'
// 获取用户列表
import { reqUsers } from '../../api'

class Admin extends Component {

  // 退出登录：将username、password、token值清除
  logout = () => {
    this.props.removeUserToken()
  }

  // 获取用户列表：
  getUsers = async () => {
    reqUsers()
    const result = await reqUsers()
    console.log('result', result)
  }

  render() {
    // 如果当前没有登陆, 自动跳转到登陆界面
    if (!this.props.hasLogin) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <p>Hello, {this.props.user.username}</p>
        <button onClick={this.logout}>退出登陆</button>
        <button onClick={this.getUsers}>获取用户列表</button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user.user, hasLogin: state.user.hasLogin}),
  {removeUserToken}
)(Admin)
