/*
 * @Description:RouterMap
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-08-15 15:47:30
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-18 20:17:23
 */
import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Loadable from 'react-loadable'
import asyncComponents from '../components/common/asyncComponents'


const Home = Loadable({
  loader: () => import(/*webpackChunkName: "Home"*/ '../pages/Home/Home'),
  loading: asyncComponents
})
const Page = Loadable({
  loader: () => import(/*webpackChunkName: "Page"*/'../pages/Page/Page'),
  loading: asyncComponents
})
const UserInfo = Loadable({
  loader: () => import(/*webpackChunkName: "UserInfo"*/'../pages/UserInfo/UserInfo'),
  loading: asyncComponents
})
const NotFound = Loadable({
  loader: () => import(/*webpackChunkName: "NotFound"*/'../pages/NotFound'),
  loading: asyncComponents
})


const RouterMap = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
        <li>
          <Link to="/userinfo">UserInfo</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
        <Route path="/userinfo" component={UserInfo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default RouterMap
