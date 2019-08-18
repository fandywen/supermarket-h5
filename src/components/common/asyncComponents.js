/*
 * @Description: AsyncComponents
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-15 20:53:49
 */
import React from 'react'
import ErrorComponent from './errorComponent/errorComponent'
import LoadingComponent from './loadingComponent/loadingComponent'
const AsyncComponents = props => {
  // 加载中
  if (props.isLoading) {
    return <LoadingComponent></LoadingComponent>
    // eslint-disable-next-line brace-style
  }
  // 加载出错
  else if (props.error) {
    return <ErrorComponent></ErrorComponent>
    // eslint-disable-next-line brace-style
  }
  // 加载延时
  else if (props.timedOut) {
    return <ErrorComponent></ErrorComponent>
  } else {
    return null
  }
}
export default AsyncComponents
