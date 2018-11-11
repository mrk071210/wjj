let urlPath = 'http://127.0.0.1:8080'
export function request (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: urlPath + url,
      data: data,
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        resolve(res.data)
      },
      fail (res) {
        reject(res)
      }
    })
  })
}
