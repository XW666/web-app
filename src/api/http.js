import request from '@/utils/request'
export default {
  //获取apen_id
  getToken(data) {
    return request({
      url: '/wechat/v1/auth/access_token',
      method: 'get',
      params: data
    })
  },
  // 登记联系人
  // http://localhost:8080/wechat/v1/wxLuckDraw/addParticipantInfo
  addParticipantInfo(data) {
    return request({
      url: '/wechat/v1/wxLuckDraw/addParticipantInfo',
      method: 'post',
      data
    })
  },

  // 查询中奖信息
  // http://localhost:8080/wechat/v1/wxLuckDrawPrize/queryLuck
  queryLuck(data) {
    return request({
      url: '/wechat/v1/wxLuckDrawPrize/queryLuck',
      method: 'get',
      params: data
    })
  },
  // http://localhost:8080/wechat/v1/wxLuckDraw/sendSms 发送短信验证码
  sendSms(data) {
    return request({
      url: '/wechat/v1/wxLuckDraw/sendSms',
      method: 'post',
      data
    })
  },

  // 修改联系人信息
  // http://localhost:8080/wechat/v1/
  editParticipantInfo(data) {
    return request({
      url: '/wechat/v1/wxLuckDraw/editParticipantInfo',
      method: 'post',
      data
    })
  }
}
