// pages/store/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    markers: [
      { id: 1, title: '蜜雪冰城(前门大街店)', latitude: 39.893764, longitude: 116.398087, with: '55rpx', height: '68rpx', iconPath: '../../assets/images/marker.png' },
      { id: 2, title: '蜜雪冰城(望京店)', latitude: 39.998971, longitude: 116.47233, with: '55rpx', height: '68rpx', iconPath: '../../assets/images/marker.png' },
      { id: 3, title: '蜜雪冰城(三里屯SOHO店)', latitude: 39.93144, longitude: 116.45429, iconPath: '../../assets/images/marker.png', with: '55rpx', height: '68rpx', iconPath: '../../assets/images/marker.png' },
      { id: 4, title: '蜜雪冰城(阜通店)', latitude: 39.991851, longitude: 116.470973, with: '55rpx', height: '68rpx', iconPath: '../../assets/images/marker.png' }
    ],
    mapContext: null
  },
  toCurrent(){
    this.data.mapContext.moveToLocation()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        // const latitude = res.latitude
        // const longitude = res.longitude
        // const speed = res.speed
        // const accuracy = res.accuracy
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
     })
     wx.createSelectorQuery().select('#store-map').context((res) => {
       this.setData({
         mapContext: res.context
       })
     }).exec()
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