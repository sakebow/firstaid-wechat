/* 从app.js中获取数据 */
const app = getApp();
let fontColor = app.globalData.fontColor;
let bgColor = app.globalData.bgColor;
let variety = app.globalData.variety;
Page({
  /**
   * Page initial data
   */
  data: {
    fontColor: "#ffffff",
    bgColor: "#87CEFA",
    video: { // 赋予初值以便直接查看调试
      type: '最大难度急救',
      id: 0,
      difficulty: 7,
      title: '最大难度急救',
      description: '在呼吸停止、大量出血、心跳微弱、失去意识的情况下进行急救',
      imageUrl: 'http://39.96.221.155/images/救护车.png',
      breif: '呼吸停止、大量出血等'
    }
  },
  jumpToMenu: function() { // 主页按钮，直接跳到主页
    wx.switchTab({
      url: '../index/index',
    });
  },
  jumpToSort: function() { // 分类按钮，直接跳到分类
    wx.switchTab({
      url: '../sort/sort',
    });
  },
  jumpToMyself: function() { // 我的按钮，直接跳到个人信息
    wx.switchTab({
      url: '../logs/logs',
    })
  },
  /**
   * Lifecycle function--Called when page load
   * 遍历全局变量variety，将传入的数据和他进行比较，如果找到了json对象就将数据全部拿出来
   */
  onLoad: function (option) {
    for (var i = 0; i < variety.length; i++) {
      for (var j = 0; j < variety[i].video.length; j++) {
        if (variety[i].type == option.type && variety[i].video[j].id == option.id) {
          this.setData({
            video: {
              type: variety[i].type,
              id: variety[i].video[j].id,
              difficulty: variety[i].video[j].difficulty,
              title: variety[i].video[j].title,
              description: variety[i].video[j].description,
              imageUrl: variety[i].video[j].imageUrl,
              breif: variety[i].video[j].breif
            }
          });
        }
      }
    }
  },

  clickToPlay: function() { // 观看按钮，跳转到观看页面
    var thisPage = this;
    wx.navigateTo({
      url: '../interact/interact?type=' + thisPage.data.video.type + '&id=' + thisPage.data.video.id
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
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