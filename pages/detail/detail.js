// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 获取首页页面对象 getCurrentPages()
    const pages = getCurrentPages();
    const home = pages[pages.length - 2]
    // 调用页面setData
    home.setData({
      navigatorTitle: "Fine"
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleNavigateBack() {
    wx.navigateBack({
      // 返回一个层级
      delta: 1
    })
  }
})