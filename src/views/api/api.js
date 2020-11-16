import { post, get, put } from '../http/http.js'

//首页讲师和精选课堂  资讯数据的渲染
export function Indexlist() {
    return get('api/app/recommend/appIndex')
}
//轮播图
export function Indexbanner() {
    return get('api/app/banner')
}

//课程评论
export function IndexCurreview(params) {
    return post('api/app/courseComment', params)
}

//课程介绍
export function Indexiption(id) {
    return get('api/app/courseInfo/basis_id=' + id)
}

//课程大纲
export function IndexCourse(params) {
    return post('api/app/courseChapter', params)
}

//讲师介绍信息
export function Indexinfo(id) {
    return get('api/app/teacher/info/' + id)
}

 

//讲师图片以及名字表头信息
export function Indexteacher(id) {
    return get('api/app/teacher/' + id)
}
//请求讲师主讲课程数据
export function Indexspeaker(params) {
    return post('api/app/teacher/mainCourse', params)
}

//请求资讯详情数据
export function Indexaction(params) {
    return post('api/app/information/detail', params)
}

 

//特色课
export function Indexbooks(params) {
    return get('api/app/courseBasis?', params)
}

//验证码登录
export function smsCode(params) {
    return post('api/app/smsCode', params)
}

//登录
export function myLogin(params) {
    return post('api/app/login', params)
}
//修改密码
export function mypar(params) {
    return post('api/app/password', params)
}

//获取用户名
export function myusername() {
    return get('api/app/userInfo')
}

//特色课下拉菜单
export function Mygrade(params) {
    return get('api/app/courseClassify?', params)
}

//点击课程进行筛选
export function Myscreen(params) {
    return get('api/app/courseBasis?', params)
}

//点击课程进行跳转详情
export function Mycourse(id) {
    return get('api/app/courseInfo/basis_id=' + id)
}


//立即报名
export function MyApply(params) {
    return post('api/app/order/downOrder', params)
}

//立即学习详情
export function Mystudy(id) {
    return get('api/app/myStudy/course/' + id)
}

//课程收藏
export function Mystsrs(params) {
    return post('api/app/collect', params)
}

//取消收藏
export function MyId(id) {
    return put(`api/app/collect/cancel/${id}/1`)

}

//获取收藏后的数据
export function MyCollect(params) {
    return get('/api/app/collect?', params)
}

//一对一辅页面选择老师条渲染里面数据
export function MyTeacher(params) {
    return get('api/app/otoCourseOptions?', params)
}


//一对一辅导
export function myOneTutoring(params) {
    return post('api/app/otoCourse', params)
}

//点击my我的页面特色课进入详情
export function Mystouy() {
    return get('api/app/myStudy/2?')
    
}

//我的页面 获取头部信息和登录过后的手机号 并更新页面
export function MyMy() {
    return get('api/app/userInfo');
}

//更新上传图片
export function MyImg(params){
    return post('api/app/public/img',params)
}

//更新男女性别 和更新昵称
export function MySex(params){
    return put('api/app/user',params)
}


