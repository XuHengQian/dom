import userUtils from "../../utils/userUtils"
import APIClient from '../../network/index'

const personLogin={
    state:{
        islogin:userUtils.islogin()||false,
        token:""
    },
    mutations: {
       Login(state,token){
        state.islogin=token
       },
       Token(state,item){
           state.token=item
       }
    },
    actions: {
        LOGIN(context,obj){
            APIClient.login({
                params:{
                    mobile:obj.mobile,
                    pwd:obj.pwd
                }
            }).then((res)=>{
                console.log(res);
                userUtils.setToken(res.data.data.token)
                context.commit('Login',res.data.data.token)
            })
        },
        TOKEN(context,str){
            APIClient.token({
               params:{
                   token:userUtils.getToken()
               }
            }).then((res)=>{
                console.log(res);
                context.commit('Token',res.data.data.base.mobile)
            })
        }
    },
}

export default personLogin