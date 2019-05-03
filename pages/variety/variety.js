/* 我们需要从app.js中获取全局变量 */
const app = getApp();
let fontColor = app.globalData.fontColor;
let bgColor = app.globalData.bgColor;
Page({

  /**
   * Page initial data
   */
  data: {
    fontColor: app.globalData.fontColor,
    bgColor: app.globalData.bgColor,
    variety: app.globalData.variety
  },
  // 跳转到video页面进行数据模拟（之后可能会改成视频播放）
  jumpToVideo: function(e) {
    // console.log(e.currentTarget.dataset.type + " "  + e.currentTarget.dataset.id);
    wx.navigateTo({ // 点击跳转
      url: '../video/video?' + 'type=' + e.currentTarget.dataset.type + '&id=' + e.currentTarget.dataset.id, // 问号后面都是传递的参数
      success: function(res) {},
      fail: function(res) { // 如果传参失败就出现提示
        wx.showToast({
          title: '出现未知错误...',
        });
      },
      complete: function(res) {},
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   * 一显示就加载自定义的主题
   */
  onShow: function () {
    this.setData({
      fontColor: app.globalData.fontColor,
      bgColor: app.globalData.bgColor
    });
    wx.setNavigationBarColor({
      frontColor: app.globalData.fontColor,
      backgroundColor: app.globalData.bgColor,
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})