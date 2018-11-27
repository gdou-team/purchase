// 修改用户信息
export const setUserInfo = (state,userInfo)=>{
    state.userInfo = userInfo
    window.localStorage.setItem('userInfo',JSON.stringify(userInfo))
} 

// 修改地理位置
export const setLocation = (state,location)=>{
    state.location = location
}