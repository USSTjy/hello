// pages/other/other.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guwenInfo: [],
    nameIndex: 0,


  },
  guwen: function (e) {

    // console.log(e.detail.value.guwenList)

    if (e.detail.value.guwenList == "") {//判断是否选择顾问
      wx.showToast({
        title: '不能不选择',
        duration: 1000
      })
      setTimeout(function () {
        wx.hideToast();
      }, 1000)
    } else {
      //顾问信息
      var selected = e.detail.value;
      console.log(selected)
      //  顾客信息
      console.log(this.data.test);
     
      setTimeout(function(){
        wx.switchTab({
          url: '../../pages/carfirst/carfirst',
        })
      },2000)


      //记录时间
      var date = new Date();
      var myDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      //将顾客信息与顾问信息接连一起提交给服务器，数据库
      const db=wx.cloud.database();
      db.collection('all').add({
        data: {
          sex: this.data.test.sexList,
          age: this.data.test.ageList,
          car: this.data.test.carList,
          guwen:selected.guwenList,
          done:false,
          time:myDate

        },
        success: function (res) {
          console.log("上传所有信息成功");
          wx.showToast({
            title: '提交成功', 
          })
        },
        fail:function(res){
           wx.showToast({
             title: '提交失败',
           })
        }

      })
     



    }
  },

  selectChange: function (e) {
    var that = this;
    that.setData({
      //确定所选的顾问
      nameIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  getlogs: function () {

    var that=this;
    wx.cloud.callFunction({
      name:'getCustomers',
      data:{},
      success:function(res){
        console.log('获取顾问信息成功', res.result.data)
        that.setData({
          guwenInfo: res.result.data
        })
      },
      fail:function(res){
        console.log('获取顾问信息失败')
      }
    })
  },

  onLoad: function (options) {
    this.getlogs();

    this.setData({
      //从首页获得首页所选的信息
      test: JSON.parse(options.str)
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