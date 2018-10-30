// pages/carlog/carlog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      all:[],
    modalHidden:true,
    time:''
  },



  // 显示提示
  switchModal:function(){
     this.setData({
       modalHidden: !this.data.modalHidden,
     })
  },


  clearLog:function(e){
    //删除日志数据
    wx.cloud.callFunction({
      name:'cancelLogs',
      data:{},
     success:function(res){
       console.log("删除成功",res)
     }
    })

  
   

   // 删除顾客信息
    wx.cloud.callFunction({
      name: 'cancelCustomerInfo',
      data:{},
      success: function (res) {
        console.log("删除成功",res)
      }
    })
   

    //清空历史记录页面
     this.setData({
       all:[],
       modalHidden: !this.data.modalHidden
     })
   
     
  },
 
  //获取日志数据
  getlogs: function () {
    const db = wx.cloud.database();
    var that = this;
    db.collection('all').get({
      success: function (res) {
        // console.log("获取日志数据", that.data)
        console.log("获取日志数据成功后的数据",res.data);
        that.setData({
          all: res.data
        })
      }
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
    this.getlogs();
   
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