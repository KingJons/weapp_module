// pages/star/star.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars: [0,1,2,3,4],
    normalSrc: '../../images/normal.png',
    selectedSrc: '../../images/selected.png',
    halfSrc: '../../images/half.png',
    key: 1,
    path: '',
    userInput: ''
  },
  selectLeft: function(e) {
    var key = e.currentTarget.dataset.key;
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      key=0;
    }
    console.log("得"+key+"分");
    this.setData({
      key: key
    });
  },
  selectRight: function(e) {
    var key = e.currentTarget.dataset.key;
    console.log("得" + key + "分");
    this.setData({
      key: key
    })
  },
  upload: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: (res) => {
            var data = res.data;
            wx.showModal({
              title: '上传文件返回状态',
              content: '成功',
              success: (res) => {
                if (res.confirm) {
                  console.log('用户点击确定');
                }
              }
            })
          }
        })
        this.setData({
          path: tempFilePaths
        })
      }
    })
  },
  textAreaCon: function(e) {
    this.setData({
      userInput: e.detail.value,
    })
  },
  saveData: function() {
    wx.showModal({
      title: '用户填写数据',
      content: `
      评分：${this.data.key}
      内容：${this.data.userInput}
      文件：${this.data.path.join(',')}
      `
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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