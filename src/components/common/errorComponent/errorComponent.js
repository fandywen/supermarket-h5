/*
 * @Description: ErrorComponent
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-15 20:54:40
 */
import './errorComponent.scss'
import React from 'react'
class ErrorComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      link: window.location.href
    }
  }
  componentDidMount() {}

  render() {
    return (
      <div className="error-page g-flex g-flex-v g-flex-center g-flex-v-center g-tac bc-w">
        <a href={this.state.link} className="s-fc-9 s-fs-24 link-text">
          {this.state.link}
        </a>
        <div className="img s-pic msg"></div>
        <div className="s-fc-red fs-28 s-fc-6 g-mt-30">页面加载失败</div>
        <div className="s-fc-9 s-fs-24 g-mt-30">请联系商家处理</div>
        <a className="fs-28 s-fc-9 link" href={this.state.link}>
          刷新
        </a>
      </div>
    )
  }
}
export default ErrorComponent
