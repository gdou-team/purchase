import axios from 'axios'

// get请求
export const get = (url,params={},headers={}) => {
  return new Promise((resolve,reject) => {
    axios.get(url,{
        params,
        headers
    }).then(res=>{
        if(res.status == 200){
            resolve(res.data)
        }else{
            reject({
                msg:'请求出现错误'
            })
        }
    }).catch(err=>{
        reject({
            msg:'请求出现错误'
        })
    })
  })
}

// post请求
export const post = (url,params)=>{
    return new Promise((resolve,reject)=>{
        axios.post(url,params).then(res=>{
            if(res.status == 200){
                resolve(res.data)
            }else{
                reject({
                    msg:'请求出现错误'
                })
            }
        }).catch(err=>{
            reject({
                msg:'请求出现错误'
            })
        })
    })
}

// 校验手机
export const checkPhone = (phone) =>{
    const reg = /^1(3|4|5|7|8)\d{9}$/
    return reg.test(phone)
}

export const formateDate = (str) => {
    let date = new Date(str)

    let year = date.getFullYear()

    let month = date.getMonth()

    let day = date.getDate()

    let h = date.getHours()

    let m = date.getMinutes()

    let s = date.getSeconds()

    return `${year}-${month+1}-${day} ${h}:${m}:${s}`
}