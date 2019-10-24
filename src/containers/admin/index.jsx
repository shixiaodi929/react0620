/* 
后台管理的一级路由组件：admin组件
*/

import React, { Component } from 'react'
// 获取用户列表
import { reqUsers } from '../../api'
import { connect } from 'react-redux'

import { removeUserToken } from '../../redux/action-creators/user'
// 检测是否登录
import WithCheckLogin from '../with-check-login'

@connect(
  state => ({user:state.user.user}),  // 用于显示的一般属性
  {removeUserToken} // 用于更新状态的函数属性
  )
@WithCheckLogin

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
    // 原生写法：用装饰器
    // // 如果当前没有登陆, 自动跳转到登陆界面
    // if (!this.props.hasLogin) {
    //   return <Redirect to="/login"/>
    // }

    return (
      <div>
        <p>Hello, {this.props.user.username}</p>
        <button onClick={this.logout}>退出登陆</button>
        <button onClick={this.getUsers}>获取用户列表</button>
      </div>
    )
  }
}

export default Admin
