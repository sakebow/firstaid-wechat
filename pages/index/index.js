/* 我们需要从app.js中获取全局变量 */
const app = getApp();
let fontColor = app.globalData.fontColor;
let bgColor = app.globalData.bgColor;
Page({
  thisPage: Page,
  /**
   * 初始数据
   */
  data: {
    // 轮播图的基本设置
    /** 
     * imgUrls 将传给前端的swiper展示轮播图
     * 其中的url是图片路径，description是图片描述 
     */
    imgUrls : [
      {
        url: 'http://39.96.221.155/images/催吐.jpg',
        description: '催吐'
      }, {
        url: 'http://39.96.221.155/images/骨折急救.jpeg',
        description: '骨折'
      }, {
        url:'http://39.96.221.155/images/人工呼吸.jpg',
        description: '人工呼吸'
      }
    ],
    /**
     * scrollViewImgs是第二个轮播图的图片设置
     */
    scrollViewImgs : [
      {
        url: 'http://39.96.221.155/images/擦伤急救.jpg',
        description: '发现擦伤时，需用碘液杀菌，再用纱布包裹防止感染'
      },
      {
        url: 'http://39.96.221.155/images/暂无图片.jpg',
        description: '发现扭伤时，切记胡乱走动，让脚踝充分的休息，建议立即在医生的指导下进行恢复操作'
      },
      {
        url: 'http://39.96.221.155/images/骨折急救.jpg',
        description: '发现骨折时，应立即打电话寻求医疗帮助'
      }
    ],
    autoplay: true, // 自动播放
    interval: 8000, // 时间间隔
    duration: 200,  // 播放时延
    circular: true, // 自动轮转
    currentSwiperIndex: 0,    // 当前位置
    // tab选项的设置
    tabIndex: 0, // 当前位置
    fontColor: "#ffffff",
    bgColor: "#87CEFA"
  },

  /**
   * 点击tab选项更改当前位置，进行手动轮播
   */
  tabSwitch: function(e) {
    this.setData({
      tabIndex: e.target.dataset.current
    })
  },
  /**
   * 滑动tab选项更改当前位置，进行手动轮播
   */
  scrollSwitch: function(e) {
    this.setData({
      tabIndex: e.detail.current
    })
  },
  /**
   * 滑动轮播图更改当前位置，进行手动轮播
   */
  rollSwicth: function(e) {
    this.setData({
      currentSwiperIndex: e.detail.current
    })
  },
  /**
   * 点击自定义轮播索引点更改当前位置，进行手动轮播
   */
  tapSwitch: function(e) {
    this.setData({
      currentSwiperIndex: e.target.dataset.index
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // var thisPage = this;
    // var localData = require("../../test.js");
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   * 页面一出现的时候就加载自定义主题设置
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