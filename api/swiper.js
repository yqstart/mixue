const db = wx.cloud.database()

const getList = () => {
  return db.collection('mx_swiper').get()
}



export default {
  getList
}