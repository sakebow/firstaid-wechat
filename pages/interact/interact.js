/** 
 *从app.js中获取数据
 *这个页面可能需要修改为视频浏览的页面 
 */
const app = getApp();
let fontColor = app.globalData.fontColor;
let bgColor = app.globalData.bgColor;
let variety = app.globalData.variety;
let interval;
Page({

  /**
   * Page initial data
   */
  data: {
    fontColor: "#ffffff",
    bgColor: "#87CEFA",
    video: { // 赋予初始值，便于直接查看调试
      type: '最大难度急救',
      id: 0,
      difficulty: 7,
      title: '最大难度急救',
      description: '在呼吸停止、大量出血、心跳微弱、失去意识的情况下进行急救',
      imageUrl: '../../images/bronya_in_kimono.jpg',
      breif: '呼吸停止、大量出血等'
    },
    word: '开始模拟',
    simulation: {
      temper: 0,
      heart: 0,
      error: 0
    },
    // 错误率（需求是达到一定错误率就显示错误数据）
    errorRate: 8 // for testing only
  },

  /**
   * Lifecycle function--Called when page load
   * 接收传入的值
   */
  onLoad: function (options) {
    // 遍历全局变量variety，如果发现和options中传入的值相同，就将这个json对象中的所有数据拿下来
    for (var i = 0; i < variety.length; i++) {
      for (var j = 0; j < variety[i].video.length; j++) {
        if (variety[i].type == options.type && variety[i].video[j].id == options.id) {
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
  // 随机min到max中的数据
  getRandom : function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  },
  // 随机模拟体温、心率数据
  popSimulationData: function() {
    var thisPage = this;
    var index = 0;
    var gap = 800;
    interval = setInterval(function () {
      // 这里需要随机生成40个体温、心率数值，传输到前端页面中（大约1分钟到一分半）
      var temper, heart, error = thisPage.getRandom(0, 10);
      temper = (error > thisPage.data.errorRate ? thisPage.getRandom(38, 45) : thisPage.getRandom(20, 38));
      heart = (error > thisPage.data.errorRate ? thisPage.getRandom(80, 100) : thisPage.getRandom(40, 80));
      if (error > 8) {
        wx.showToast({
          title: '用力过猛'
        })
      }
      thisPage.setData({
        simulation: {
          temper: temper,
          heart: heart,
          error: error
        }
      });
      index++;
      if (index == (parseInt(60000 / gap) - 1)) {
        clearInterval(interval);
      }
    }, gap);
    this.setData({
      word: '正在模拟'
    });
  },

  stopPopUpData: function() {
    clearInterval(interval);
    this.setData({
      simulation: {
        temper: 0,
        heart: 0
      },
      word: '开始模拟'
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
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