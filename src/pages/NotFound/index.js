/*
 * @Description: NotFound
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-18 20:33:12
 */
import React, {Component} from 'react'
export default class NotFound extends Component {
    render() {
        return (
            <div className="notfound-page">
                <img alt="" src="https://cdn.weimob.com/saas/integral/images/flag_no_info.png"s></img>
                <div className="text">您访问的页面不存在！</div>
            </div>
        )
    }
  }