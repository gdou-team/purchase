import storage from 'good-storage'

let userInfo = storage.session.get('userInfo',{})

let userDetail = storage.session.get('userDetail',{})
// 仓库
let state = {
    userInfo:userInfo,
    location:'湛江市',
    orderDetail:{},
    userDetail:userDetail,
    orderPayDetail:null,
    isShowSelectCity:false
}


export default state;