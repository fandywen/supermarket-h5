/*
 * @Description: 
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-18 18:06:23
 */
 const proxy = require('http-proxy-middleware');

 module.exports = function(app) {
    app.use(proxy('/productcenter',{
        target: 'https://yh-soi-2c-productcenter.yonghui.cn',
        changeOrigin: true,
        pathRewrite: {
            '^/productcenter' : ''
        }
    }))
    app.use(proxy('/usercenter',{
        target: 'https://yh-sod-usercenter.yonghui.cn',
        changeOrigin: true,
        pathRewrite: {
            '^/usercenter' : ''
        }
    }))
    app.use(proxy('/ordercenter',{
        target: 'https://yh-soi-2c-order.yonghui.cn',
        changeOrigin: true,
        pathRewrite: {
            '^/ordercenter' : ''
        }
    }))
 }