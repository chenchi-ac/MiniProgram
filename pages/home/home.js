// pages/home/home.js
// 注册一个页面
import request from '../../service/network.js'

// getApp()获取App()产生的示例对象
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age

Page({
  // 2、-----------数据初始化
  data: {
    name: 'jack',
    students: [{
        id: 110,
        name: 'Tom',
        age: 5
      },
      {
        id: 111,
        name: 'Jack',
        age: 3
      }
    ],
    counter: 0,
    list: [],
    inputShowed: false,
    inputVal: "",
    nowTime: new Date().toLocaleString(),
    isActive: false,
    price: "26.222222",
    titles: ['Tom', 'and', 'Jack'],
    counter1: 0,
    navigatorTitle: "OK"
  },
  addClick() {
    // 界面不会更新
    // this.data.counter += 1
    this.setData({
      counter: this.data.counter += 1
    })
  },

  // 生命周期函数--监听页面加载
  onLoad: function(options) {
    wx.request({
      // url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    }),
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000),

    // 网络请求
    // 原生请求
    // 1、基本的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   success(res) {
    //     console.log(res)
    //   },
    //   fail(err) {
    //   }
    // })
    // 2、get请求，并且携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    // 3、post请求并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'tom',
    //     age: 3
    //   },
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    
    // 封装请求
      request({
        url: 'http://123.207.32.32:8000/home/data'
      }).then(res => {
        // console.log(res)
      }).catch(err => {
        // cconsole.log(err)
      })
  },
  // 1、---------------监听声明周期函数
  // 生命周期函数--监听页面初次渲染完成
  onReady: function() {

  },

  // 生命周期函数--监听页面显示
  onShow: function() {

  },

  // 生命周期函数--监听页面隐藏
  onHide: function() {

  },

  // 生命周期函数--监听页面卸载
  onUnload: function() {

  },

  // 4、------------监听其他事件
  // 页面滚动
  onPageScroll(obj) {
    // console.log(obj)
  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function() {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function() {

  },

  // 用户点击右上角分享

  onShareAppMessage(options) {
    title: '猫鼠游戏';
    path: 'pages/category/category';
    imageUrl: 'https://account.bilibili.com/account/face/upload'
  },

// 3、-----------监听wxml中的事件
  subClick() {
    this.setData({
      counter: this.data.counter -= 1
    })
  },
  handGetUserInfo(event) {
    // console.log(event)
  },
  load() {

  },
  inputFocus(event) {
    console.log('input获得焦点', event)
  },
  handleScroll(event) {
    // console.log(event)
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  changeActive() {
     this.setData({
       isActive: !this.data.isActive
     })
  },
  itemClick(event) {
    // console.log(event);
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const item = dataset.item;
    // console.log(index, item)
  },
  addCounters(event) {
    this.setData({
      counter1: this.data.counter1 += 1
    })
  },
  handleTabClick(event) {
    console.log(event)
  },
  handelAddCpn() {
    const my_sel = this.selectComponent('#my-sel');
    // my_sel.setData({
    //   counter: my_sel.data.counter + 10
    // })
    my_sel.addCounter()
  },
  handleShowToast() {
    wx.showToast({
      title: 'ing...',
      duration: 2000,
      icon: 'loading',
      image: '',
      mask: true,
      success() {
        console.log('success')
      },
      fail() {
        cconsole.log('fail')
      }
    })
  },
  handleShowModel() {
    wx.showModal({
      title: '标题',
      content: '内容',
      success(res) {
        console.log(res)
        if(res.cancel) {
          console.log('用户点了取消按钮')
        };
        if(res.confirm) {
          console.log('用户点了确定按钮')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载中ing...',
      mask: true
    })
    // 必须手动调用hideLoading()才会消失
    setTimeout(() => {
      wx.hideLoading()
    },2000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      itemColor: 'green',
      success(res) {
        console.log(res);
        switch(res.tapIndex) {
        }
      }
    })
  },
  handleNavigator() {
    wx.navigateTo({
      url: '/pages/detail/detail?name=Jack&age=2',
    })
    // wx.redirectTo({
    //   url: '/pages/detail/detail',
    // })
  }
})