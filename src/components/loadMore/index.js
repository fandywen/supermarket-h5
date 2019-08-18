/*
 * @Description: LoadMore
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-15 20:53:00
 */
import React from 'react'

class LoadMore extends React.Component {
  render() {
    return (
      <div ref="wrapper" className="auto-load-more">
        {this.props.isLoadingMore ? (
          <div className="loadmore">
            <i className="iconfont icon-loading"></i>
            <span className="loadings">正在加载，请稍后...</span>
          </div>
        ) : !this.props.hasLoadAll ? (
          <div className="loadmore">
            <span className="loadings">滑动加载更多</span>
          </div>
        ) : (
          <div className="loadmore">
            <span className="loadings">没有更多了</span>
          </div>
        )}
      </div>
    )
  }

  loadMoreHandle() {
    // 执行传输过来的
    this.props.loadMoreFn()
  }

  componentDidMount() {
    // 使用滚动时自动加载更多
    const loadMoreFn = this.props.loadMoreFn

    const wrapper = this.refs.wrapper

    let timeoutId

    function callback() {
      const top = wrapper.getBoundingClientRect().top

      const windowHeight = document.documentElement.clientHeight

      if (top && top - 30 < windowHeight) {
        // 证明 滚动到页面底部了
        loadMoreFn()
      }
    }

    window.addEventListener(
      'scroll',
      evt => {
        if (this.props.isLoadingMore) {
          return
        }

        if (timeoutId) {
          clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(callback, 50)

        evt.stopPropagation()

        return false
      },
      false
    )
  }
}

export default LoadMore
