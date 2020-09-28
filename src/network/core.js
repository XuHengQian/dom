import axios from "axios"; //引入axios
import { METHOD } from "./config";//将config的内容引入 里面包有数据接口和请求方式

//创建配置项的vue实例 
const instance = axios.create({
    baseURL: "https://api.it120.cc/small4", //为了简写接口
    timeout: 30000 //设置超时
})

export function request(method, url, params) {//请求的基础方法 method==>方法 url==>路径 params==>参数 
    switch (method) {
        case METHOD.GET://如果是GET方式返回给method
            return GET(url,params);
        case METHOD.POST://如果是POST方式返回给method
            return POST(url, params);
    }
}

//get方式 
function GET(url, params) {
    return instance.get(url, params)
}

//post方式 
function POST(url, params) {
    return instance.post(url, params)
}




