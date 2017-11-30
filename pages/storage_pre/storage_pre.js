// pages/storage_pre/storage_pre.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '没有地址'
  },
  gotoStorage: function() {
    wx.navigateTo({
      url: '../storage/storage'
    });
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
    // 每次显示都会有
    var that = this;
    wx.getStorage({
      key: 'address',
      success: function(data) {
        console.log(data);
        that.setData(
          {
            address: data.data
          }
        )
      }
    })
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