let userInfo = window.localStorage.getItem('userInfo')

userInfo = userInfo ? JSON.parse(userInfo) : {}


// 仓库
let state = {
    userInfo:userInfo,
    location:'湛江市广东海洋大学'
}


export default state;