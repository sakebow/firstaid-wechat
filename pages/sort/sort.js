/* 我们需要从app.js中获取全局变量 */
const app = getApp();
let fontColor = app.globalData.fontColor;
let bgColor = app.globalData.bgColor;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,//自动播放
    interval: 5000,//时间间隔
    duration: 1000,//播放时延
    /** 
     * imgUrls 将传给前端的swiper展示轮播图
     */
    imgUrls: [
      "http://39.96.221.155/images/溺水急救.jpg",
      "http://39.96.221.155/images/触电急救.jpg",
      "http://39.96.221.155/images/老人异物阻塞急救.jpg",
      "http://39.96.221.155/images/骨折紧急处理.jpeg"
    ],
    /**
     * navs是轮播图下方的四个图片按钮的图片链接
     */
    navs:[
      {
        url: 'http://39.96.221.155/icons/needle.png',
        description: '全部'
      },
      {
        url: 'http://39.96.221.155/icons/heart.png',
        description: '心脏复苏'
      },
      {
        url: 'http://39.96.221.155/icons/brokenhands.png',
        description: '包扎'
      },
      {
        url: 'http://39.96.221.155/icons/broken.png',
        description: '骨折'
      }
    ],
    /**
     * array是下方的急救头条部分内容
     */
    array:[
      {
        url: 'http://39.96.221.155/images/心肺按压.jpg',
        title: '心肺按压',
        type : '心肺复苏',
        browse : '19585浏览',
        comment : '7评论'
      },
      {
        url: 'http://39.96.221.155/images/骨折急救.jpg',
        title : '骨折固定',
        type : '骨折',
        browse : '5688浏览',
        comment : '13评论'
      },
      {
        url: 'http://39.96.221.155/images/人工呼吸.jpg',
        title : '人工呼吸',
        type : '心肺复苏',
        browse : '3965浏览',
        comment : '5评论'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 按钮跳转（主要针对轮播图下方的四个图片按钮）
   */
  jumpLink: function(e) {
    switch(e.currentTarget.dataset.index) {
      case 0:
      wx.navigateTo({
        url: '../variety/variety',
      })
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 一显示页面就加载自定义的主题
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})