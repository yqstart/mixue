import swiper from "../../api/swiper"

// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    current: 0,
    isLogin: false,
    memberInfo: false
  },

  onSweiperChange(event) {
    this.setData({
      current: event.detail.current
    })
  },
  onImageTab(event) {
    const { item } = event.currentTarget.dataset
    if(item.type === "url") {
      wx.navigateTo({
        url: `/pages/webview/index?url=${item.target}`,
      })
    } else {
      wx.navigateTo({
        url: `/pages/product/details?id=${item.target}`,
      })
    }
  },
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
  loadMemberInfo() {
    if(wx.getStorageSync('phoneNumber')) {
      this.setData({
        isLogin: true
      })
    } else {
      this.setData({
        isLogin: false
      })
    }
  },
  onMunuCardTap() {
    wx.switchTab({
      url: '/pages/store/index',
    })
  },
  onTodayTap(){
    wx.navigateTo({
      url: '/pages/webview/index?url=https://baidu.com',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const result = await swiper.getList()
    this.setData({
      swiperList: result.data
    })
    this.loadMemberInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.loadMemberInfo()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})