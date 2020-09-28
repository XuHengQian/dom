import { request } from "./core" //引入请求的方式 5
import { METHOD, PATH } from "./config" //引入接口 5


const APIClient = {
  //   获取商品列表数据

  //定义的商品数据 7
  getStoreList(params) {
    return request(METHOD.GET, PATH.get_store_list,params)
  },
  //定义登录数据
  login(params) {
    return request(METHOD.GET, PATH.login, params)
  },
  banner() {
    return request(METHOD.GET, PATH.banner)
  },
  homeJpzl(params){
    return request(METHOD.GET,PATH.home_jpzl,params)
  },
  ying(id){
    return request(METHOD.GET,PATH.ying,id)
  },
  fenlei(){
    return request(METHOD.POST,PATH.fenlei_left)
  },
  xiangqing(params){
    return request(METHOD.GET,PATH.xiangqing,params)
  },
  token(params){
    return request(METHOD.GET,PATH.token,params)
  }
  
}

export default APIClient