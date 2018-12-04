let userInfo = window.localStorage.getItem('userInfo')

userInfo = userInfo ? JSON.parse(userInfo) : {}


// 仓库
let state = {
    userInfo:userInfo,
    location:'湛江市',
    orderDetail:{}
}


export default state;