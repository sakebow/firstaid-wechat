//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
  },
  globalData: {
    userInfo: null,
    bgColor: "#87CEFA",
    fontColor: "#ffffff",
    variety: [
      {
        type: 'facture',
        name: "骨折",
        video: [
          {
            title: '骨折急救',
            breif: '骨折急救',
            imageUrl: 'http://47.102.106.227/wechat/7208.jpg',
            description: 'userImage',
            id: 0,
            difficulty: 1
          }, {
            title: '骨折急救',
            breif: '骨折急救',
            imageUrl: 'http://47.102.106.227/wechat/7209.jpg',
            description: 'userImage',
            id: 1,
            difficulty: 2
          }, {
            title: '骨折急救',
            breif: '骨折急救',
            imageUrl: 'http://47.102.106.227/wechat/7210.jpg',
            description: 'userImage',
            id: 2,
            difficulty: 3
          }, {
            title: '骨折急救',
            breif: '骨折急救',
            imageUrl: 'http://47.102.106.227/wechat/firstAid1.jpg',
            description: 'userImage',
            id: 2,
            difficulty: 4
          }
        ]
      }, {
        type: 'sprain',
        name: '扭伤',
        video: [
          {
            title: '扭伤急救',
            breif: '扭伤急救',
            imageUrl: 'http://47.102.106.227/wechat/firstAid2.jpg',
            description: 'userImage',
            id: 0,
            difficulty: 1
          }, {
            title: '扭伤急救',
            breif: '扭伤急救',
            imageUrl: 'http://47.102.106.227/wechat/firstAid3.jpg',
            description: 'userImage',
            id: 1,
            difficulty: 2
          }, {
            title: '扭伤急救',
            breif: '扭伤急救',
            imageUrl: 'http://47.102.106.227/wechat/firstAid4.jpg',
            description: 'userImage',
            id: 2,
            difficulty: 3
          }, {
            title: '扭伤急救',
            breif: '扭伤急救',
            imageUrl: 'http://47.102.106.227/wechat/扭伤急救.jpg',
            description: 'userImage',
            id: 3,
            difficulty: 4
          }
        ]
      }, {
        type: 'drown',
        name: "溺水",
        video: [
          {
            title: '溺水急救',
            breif: '排水、输气、恢复心跳',
            imageUrl: 'http://47.102.106.227/wechat/firstAid4.jpg',
            description: '溺水急救可是超极重要的！',
            id: 0,
            difficulty: 1
          }, {
            title: '溺水急救',
            breif: '溺水急救',
            imageUrl: 'http://47.102.106.227/wechat/骨折急救.jpg',
            description: 'userImage',
            id: 1,
            difficulty: 2
          }, {
            title: '溺水急救',
            breif: '溺水急救',
            imageUrl: 'http://47.102.106.227/wechat/擦伤急救.jpg',
            description: 'userImage',
            id: 2,
            difficulty: 3
          }, {
            title: '溺水急救',
            breif: '溺水急救',
            imageUrl: 'http://47.102.106.227/wechat/n4.png',
            description: 'userImage',
            id: 3,
            difficulty: 4
          }
        ]
      }
    ]
  }
})