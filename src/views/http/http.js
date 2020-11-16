import axios from 'axios';

//环境的切换 环境指的就是开发环境和生产环境
//开发环境(development) 中用到的是测试接口 
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://120.53.31.103:84/'
}
if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.365msmk.com/'
}

//设置请求超时的时间
axios.defaults.timeout = 5000;
// 请求拦截
axios.interceptors.request.use(
    config => {
        //获取轮播图要设置的头信息
        config.headers = { DeviceType: 'H5', Authorization: sessionStorage.getItem("token") }
        //可每次发送请求之间的逻辑处理 ，比如判断token
        return config
    }
)
// 响应拦截
axios.interceptors.response.use(
    response => {
        //如果返回的·状态码为200时，说明接口请求成功
        return response
    },
    error => {
        if (error.response.status) {
        }
    }
)
//设置get请求方式 用promise方式返回的实例来实现
export function get(url, params) {
    return new Promise((resolve, reject) => {
        // console.log(ages);
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

//设置put请求方式
export function put(url, params) {
    return new Promise((resolve, reject) => {
        // console.log(ages);
        axios.put(url,
            params
        ).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

//设置post请求方式 用promise方式返回的实例来实现
export function post(url, params) {
    return new Promise((resolve, reject) => {
        console.log(params);
        axios.post(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

