/*
 * @Description: 
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-18 18:47:47
 */
'use strict';
const NODE_ENV = process.env.NODE_ENV;

const appcfg = {

    development : {
        // _global : JSON.stringify({
        //     "pid":"2744",
        //     "appId":"wx61adaa4b8221e6aa",
        //     "storeId": "12000785744",
        //     "prefix": "saas/integral",
        //     "prefixAPI": "/api3",
        //     "filePath":"integral.n.dev.weimob.com",
        //     "env":"dev",
        //     "payPath":"//n.dev.weimob.com",
        //     "user": {
        //         "wid": "2583944",
        //         "openid":"orad_w_tn1UmeszhUZGBEqZfkat8",
        //         "uuid":"pXIz8eGPEx7ZBpgY066lLpuvqMGoMFl0",
        //         "weimobopenid":"oi93P1YJ8MGxcMhWycZ4dycuTxrc"
        //     }, 
        //     "isLocal":true
        // }),
        
        _global : JSON.stringify({
            "prefix": "",
            "prefixAPI": "/productcenter",
            "filePath":"http://xszt-sit.yh-soi-2c-productcenter.xszt-001.sitapis.yonghui.cn'",
            "env":"dev",
            "user": {
              "openId":"owvK45ZoF8GjBwoEzkMDk7IcFKWM",
              "userId":"242990948318726041",
              "nickName":"宸源",
              "avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI9ebA1jJpia8EKF72jpnQTCVR7X8Y4sDQJYXicpACkT32A9verhs9qALibjibvSbYUy54JgdvPywck7A/132",
              "unionId":"otIeGuPb1gK7RfUAKAa0tD5JPVO4",
              "memberNo":"242990948318726041",
              "memberId":"242990948318726041",
              "phoneNum":"15211047294"
            },
            "isLocal":true
        }),

        // _global : JSON.stringify({
        //     "pid": "100000136934",
        //     "prefixAPI": "/api3",
        //     "prefix": "saas/integral",
        //     "filePath": "integral.n.weimob.com",
        //     "payPath": "//n.weimob.com",
        //     "commonPath": "n.weimob.com",
        //     "env": "prod",
        //     "user": {
        //         "city": "静安",
        //         "country": "中国",
        //         "headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoxuaiamZw7HxVoyNZbMeO0T44DLPB57ZwnmhyymodLbiaOrPgMibkeaz6LicUZfu2lUkhcJkrp3JvwBg/132",
        //         "nickname": "沉沦的键盘",
        //         "openid": "ojfrgwFLiraEgRVW-iVYB0inhZ_U",
        //         "pid": 100000136934,
        //         "province": "上海",
        //         "sex": 1,
        //         "unionid": "oeJoe1Ko7XI-XvVcnM3sD-FKhfQ8",
        //         "uuid": "inUnvSFvd6O0_qup36sikqYM77Krlo9Z",
        //         "weimobopenid": "oAvF9wrZ4KZYyPsF8a9BFcPgl5fg",
        //         "wid": "1212873985"
        //     },
        //     "appId": "wx6232eb39da160f2a"
        // }),

        // _global : JSON.stringify({
        //     "pid":"2491",
        //     "appId":"wx61adaa4b8221e6aa",
        //     "storeId": "12000785744",
        //     "prefix": "saas/integral",
        //     "prefixAPI": "/api3",
        //     "filePath":"integral.n.dev.weimob.com",
        //     "env":"dev",
        //     "payPath":"//n.dev.weimob.com",
        //     "user": {
        //         "wid": "4290070",
        //         "openid":"oj2EV1FObH52f5VFYm-dDRVUYxzQ",
        //         "uuid":"VJSrhIstgNUWQk69YcJ6vwKCGHPm_kqt",
        //         "weimobopenid":"oEMTjtzbbwOyuWmzQltFYFjUB-UM"
        //     },
        //     "isLocal":true
        // }),
        // _global : JSON.stringify({
        //     "pid":"1787",
        //     "appId":"wx6232eb39da160f2a",
        //     "storeId": "12000785744",
        //     "prefix": "saas/integral",
        //     "prefixAPI": "/api3",
        //     "filePath":"integral.n.dev.weimob.com",
        //     "env":"dev",
        //     "payPath":"//n.dev.weimob.com",
        //     "user": {
        //         "wid": "4273534",
        //         "openid":"ojfrgwOzwKR66bRojXElRON2w8PQ",
        //         "uuid":"VJSrhIstgNUWQk69YcJ6vwKCGHPm_kqt",
        //         "weimobopenid":"oEMTjt1uIAkPmpcGCHKUxWqLWYRA"
        //     },
        //     "isLocal":true
        // }),
        // _global : JSON.stringify({
        //     "pid":"1967",
        //     "appId":"wxec835d298cd36d10",
        //     "storeId": "12000785744",
        //     "prefix": "saas/integral",
        //     "prefixAPI": "/api3",
        //     "filePath":"integral.n.dev.weimob.com",
        //     "env":"dev",
        //     "payPath":"//n.dev.weimob.com",
        //     "user": {
        //         "city": "静安",
        //         "country": "中国",
        //         "headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq4BH8gxvGD1icvSsodJ8znu0TLhhmL5KlaH53sdvJJptC62Mo1ZzC2IKclyQuCBTS7c0EzqVYcuQA/132",
        //         "nickname": "沉沦的键盘",
        //         "openid": "o9AhGxKLUdamy_mEWdZ757iT3p9Q",
        //         "pid": 1967,
        //         "province": "上海",
        //         "sex": 1,
        //         "unionid": "o53bi1KAa-5_-_xsW8KolXrhaH3M",
        //         "uuid": "Po5ydH1m7PfWCg-PqKqbGqr3RaKQkHIB",
        //         "weimobopenid": "oEMTjtzbbwOyuWmzQltFYFjUB-UM",
        //         "wid": "4289836"
        //     },
        //     "isLocal":true
        // }),
        theme:''
    },

    production : {
        _global : JSON.stringify({
            "storeId": "9010",
            "prefix": "",
            "prefixAPI": "/productcenter",
            "filePath":"http://xszt-pre.yh-soi-2c-productcenter.xszt-001.sitapis.yonghui.cn",
            "env":"qa",
            "user": {
              "wid": "1015626858"
            }
        }),
        theme:''
    },
}

module.exports = {
    title:'永辉到家',
    template: 'index.ejs',
    ...appcfg[NODE_ENV]
};

