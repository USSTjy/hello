// pages/two/two.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    done:false,
    sexList: [
      {
        index: 1,
        sex: "男"
      },
      {
        index: 2,
        sex: "女"
      }
    ],
    sexIndex: "",
    ageList: [
      {
        index: 1,
        age: "20以下"
      },
      {
        index: 2,
        age: "20-25"
      },
      {
        index: 3,
        age: "25-30"
      },
      {
        index: 4,
        age: "30-35"
      },
      {
        index: 5,
        age: "35-40"
      },
      {
        index: 6,
        age: "40-45"
      },
      {
        index: 7,
        age: "45-50"
      },
      {
        index: 8,
        age: "50以上"
      },


    ],
    agesIndex: "",

    carList: [
      {
        index: 1,
        car: "one"
      },
      {
        index: 2,
        car: "two"
      },
      {
        index: 3,
        car: "three"
      },
      {
        index: 4,
        car: "four"
      },
      {
        index: 5,
        car: "five"
      },
      {
        index: 6,
        car: "six"
      },
      {
        index: 7,
        car: "seven"
      },
      {
        index: 8,
        car: "eight"
      },
      {
        index: 9,
        car: "nine"
      },
      {
        index: 10,
        car: "ten"
      }

    ],
    carIndex:""

  }, 

  getCustomer: function (e) {//判断顾客信息是否为空
  
    if (e.detail.value.sexList.length == 0) {
      wx.showToast({
        title: '性别不能为空',
        duration: 1000
      })
      setTimeout(function () {
        wx.hideToast();
      }, 2000)
    } else if (e.detail.value.ageList.length == 0) {
      wx.showToast({
        title: '年龄不能为空',
        duration: 1000
      })
      setTimeout(function () {
        wx.hideToast();
      }, 2000)
    } else if (e.detail.value.carList.length == 0) {
      wx.showToast({
        title: '车型不能为空',
        duration: 1000
      })
      setTimeout(function () {
        wx.hideToast();
      }, 2000)
    } else {
      
      var postdata = e.detail.value;
      console.log("顾客信息-------",postdata);
      //将数据跳转到下一页面
        wx.redirectTo({
          url: '../../pages/carsecond/second?str=' + JSON.stringify(postdata),
        })
      // --------------------将选择的数据上传到云端
       const db=wx.cloud.database();
       db.collection('user').add({
         data:{
           sex:postdata.sexList,
           age:postdata.ageList,
           car:postdata.carList,
           done:false
         },
         success:function(res){
           console.log("上传数据成功---------------")
         }
       })
      
      
      //删除跳转后首页页面数据,清空所选颜色
    
      this.setData({
        carIndex: 0,
        sexIndex: 0,
        agesIndex: 0,
      })

     
    }
    
  },
// 获取用户信息
  // onGetOpenid: function () {
  //   // 调用云函数
  //   wx.cloud.callFunction({
  //     name: 'login',
  //     data: {},
  //     success: res => {
  //       console.log('[云函数] [login] user openid: ', res.result.openid)
  //       app.globalData.openid = res.result.openid
        
  //     },
  //     fail: err => {
  //       console.error('[云函数] [login] 调用失败', err)
  //     }
  //   })
  // },


//-----------------为了填充所选信息的颜色:开始
  radioChangeSex: function (res) {
    //  console.log(res);
    var that = this;
    that.setData({
      // 确定顾客所选性别信息
      sexIndex: res.currentTarget.dataset.sindex,
     
    })
   
  },
  radioChangeAge: function (res) {
    //  console.log(res);
    var that = this;
    that.setData({
      // 确定顾客所选年龄信息
      agesIndex: res.currentTarget.dataset.aindex,
    })

  },
  radioChangeCar: function (res) {
    //  console.log(res);
    var that = this;
    that.setData({
      // 确定顾客所选车型信息
      carIndex: res.currentTarget.dataset.cindex

    })

  },
  //-----------------为了填充所选信息的颜色:结束


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.onGetOpenid();
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