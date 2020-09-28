//统一管理请求方式 3
export const METHOD={
    GET:"get",//get方式
    POST:"post"//post方式
}
//6
export const PATH={
    //这里面用来写各个页面的路径接口
    get_store_list:"/shop/goods/list", //商品页面的接口
    login:"/user/m/login?deviceId=007&deviceName=monkey",//登录页面的接口
    banner:"/banner/list",
    home_jpzl:"/cms/news/list",
    ying:"/cms/news/detail",
    fenlei_left:"/shop/goods/category/all",
    xiangqing:"/shop/goods/detail",
    token:"/user/detail"

}