// 注册小程序实例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1、从缓存中取出token
    const token = wx.getStorageSync('token')
    // 2、判断是否取出token
    if(token && token.length !== 0) { //已有token
      this.check_token(token) //验证token是否过期
    } else { ///没有token，进行登陆操作 
      this.login()
    }
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log(options);
    // 小程序打开方式
    switch(options.scene) {
      case 1001: break;
      case 1005: break;
    }
    // 获取用户信息的方式1
    // wx.getUserInfo({
    //   success: res => {
    //     console.log(res)
    //   } 
    // })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  login() {
    console.log('执行了登陆操作');
    wx.login({
      success: (res) =>  {
        // 1、获取code
        const code = res.code;
        // 2、向服务器发送请求
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res);
            // 1、取出token
            const token = res.data.token;
            // 2、储存到全局变量中
            this.globalData.token = token;
            console.log(this.globalData.token)
            // 3、储存到storage中
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },
  check_token(token) {
    console.log('执行了验证token操作')
    console.log(token),
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.token) {
          // console.log('token有效');
          this.globalData.token = token;
        } else{
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  globalData() {
    name: 'ac';
    age: 23;
    token: ''
  }
})


// App({
//   onLaunch: function () {
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       }
//     })
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               // 可以将 res 发送给后台解码出 unionId
//               this.globalData.userInfo = res.userInfo

//               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//               // 所以此处加入 callback 以防止这种情况
//               if (this.userInfoReadyCallback) {
//                 this.userInfoReadyCallback(res)
//               }
//             }
//           })
//         }
//       }
//     })
//   },
//   globalData: {
//     userInfo: null
//   }
// }),
