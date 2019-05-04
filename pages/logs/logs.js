/* 我们需要从app.js中获取全局变量 */
const app = getApp();
Page({
  /**
   * Page initial data
   */
  data: {
    userName: '请点击头像授权登录',
    userIcon: 'http://39.96.221.155/icons/headpic.png',
    btnColor: '#87cefa'
  },
  // 获得登录权限
  getUserPermission: function() {
    var thisPage = this;
    wx.getSetting({
      success: function(res) { // 如果没有登录信息
        if (app.globalData.userInfo == null || app.globalData.userInfo.userName == "请点击头像授权登录") {
          wx.showModal({ // 出现询问框
            title: '是否授权登陆？',
            content: '这将只获取您的个人头像信息，并在您的账户中加入少量(小于1M)浏览记录信息',
            confirmText: '确定授权',
            cancelText: '取消授权',
            cancelColor: 'red',
            success: function(res) {
              if (res.confirm) {
                wx.getUserInfo({
                  success: function(res) {
                    app.globalData.userInfo = res.userInfo;
                    thisPage.setData({
                      userName: res.userInfo.nickName,
                      userIcon: res.userInfo.avatarUrl
                    });
                    wx.showToast({
                      title: '授权成功！'
                    });
                  }
                });
              }
            }
          });
        }
      }
    });
  },
  // 修改主题
  changeThemeFunc: function (fontColor, bgColor, btnColor) {
    wx.setNavigationBarColor({
      frontColor: fontColor,
      backgroundColor: bgColor,
    });
    app.globalData.fontColor = fontColor;
    app.globalData.bgColor = bgColor;
    this.setData({
      btnColor: btnColor
    });
  },
  // 点击出现更换主题的提示
  changeThemeAlert: function() {
    var thisPage = this;
    wx.showActionSheet({
      itemList: [
        '蓝色',
        '黑色',
        '红色',
        '白色'
      ],
      success: function(res) {
        switch(res.tapIndex) {
          case 0:
            thisPage.changeThemeFunc('#ffffff', '#87cefa', '#87cefa');
            break;
          case 1:
            thisPage.changeThemeFunc('#ffffff', '#000000', '#000000');
            break;
          case 2:
            thisPage.changeThemeFunc('#ffffff', '#ff0000', '#ff0000');
            break;
          case 3:
            thisPage.changeThemeFunc('#000000', '#ffffff', '#000000');
            break;
        }
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function() {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})