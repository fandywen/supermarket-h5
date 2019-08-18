/*
 * @Description: LoadingComponent
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-18 20:18:27
 */
import './loadingComponent.scss'
import React from 'react'
class LoadingComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div className="loading-wrap">
        <div className="loading-ani">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="s-fc-9 s-fs-20 loading-tip">loading...</div>
      </div>
    )
  }
}
export default LoadingComponent
