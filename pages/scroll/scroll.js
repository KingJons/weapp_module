// pages/scroll/scroll.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    refreshing: false,
    refreshAnimation: {},
    clientY: 0,
    refreshHeight: 0,
    windowHeight: 0,
    words: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight: res.windowHeight
        })
        console.log('屏幕高度：' + res.windowHeight);
      }
    });
    wx.request({
      url: 'http://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie',
      complete: function (res) {
        // console.log(res);
        if (res.statusCode == 200) {
          that.setData({
            words: res.data.subjects
          })
        }
      }
    })
  },
  scroll: function () {
    console.log('滑动了...');
  },
  lower: function() {
    var that = this;
    wx.request({
      url: 'http://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie',
      complete: function(res) {
        var words = that.data.words.concat(res.data.subjects);
        that.setData({
          words: words
        })
      }
    })
  },
  start: function(e) {
    var startPoint = e.touches[0];
    var clientY = startPoint.clientY;
    this.setData({
      clientY: clientY,
      refreshHeight: 0
    });
  },
  end: function (e) {
    var endPoint = e.changedTouches[0];
    var y = (endPoint.clientY - this.data.clientY) * 0.6;
    if (y > 50) {
      y = 50;
    }
    this.setData({
      refreshHeight: y
    })
  },
  move: function(e) {
    console.log('下拉滑动了');
  },
  upper: function(e) {
    console.log("下拉了....")  
    //获取用户Y轴下拉的位移  
  
    if (this.data.refreshing) return;  
    this.setData({ refreshing: true });  
    updateRefreshIcon.call(this);
    var that = this;
    var i = Math.random();
    i = Math.ceil(i* 10);
    var words = ['龙', '一', '万', '千', '浩', '金', '得', '而', '可', '人'];  
    var word = words[i]; 
    wx.request({  
      url: 'http://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie',  
  
      complete: function (res) {  
          
          setTimeout(function () {  
            that.setData({  
              words: res.data.subjects
            })  
          }, 2000)  
          
        setTimeout(function () {  
          that.setData({  
            refreshing: false  
          })  
        }, 2500)  
      }  
    })  
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


function updateRefreshIcon() {  
  var deg = 0;  
  var _this = this;  
  console.log('旋转开始了.....')  
  var animation = wx.createAnimation({  
    duration: 1000  
  });  
  
  var timer = setInterval(function () {  
    if (!_this.data.refreshing)  
      clearInterval(timer);  
    animation.rotateZ(deg).step();//在Z轴旋转一个deg角度  
    deg += 360;  
    _this.setData({  
      refreshAnimation: animation.export()  
    })  
  }, 1000);  
}  