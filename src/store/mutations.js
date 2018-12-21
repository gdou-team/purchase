import storage from 'good-storage'
// 修改用户信息
export const setUserInfo = (state,userInfo)=>{
    state.userInfo = userInfo.user
    state.userDetail = userInfo.userDetail
    storage.session.set('userInfo',userInfo.user)
    storage.session.set('userDetail',userInfo.userDetail)
} 

// 修改地理位置
export const setLocation = (state,location)=>{
    state.location = location
}

// 修改订单详情
export const setOrderDetail = (state,orderDetail)=>{
    state.orderDetail = orderDetail
}

// 修改用户信息
export const setUser = (state,user)=>{
    state.userInfo = user
    storage.session.set('userInfo',user)
} 

export const setOrderPayDetail = (state,orderPayDetail) =>{
    state.orderPayDetail = orderPayDetail
}

export const setIsShowSelectCity = (state,isShowSelectCity)=>{
    state.isShowSelectCity=isShowSelectCity
}