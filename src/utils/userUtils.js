const userUtils={
    //验证手机号
    checkOutMobile(mobile){
        var reg=/^1[3456789]\d{9}$/
        if(reg.test(mobile)){
            return true
        }else{
            return false
        }
    },
    checkOutPassword(password){
        var reg=/^[a-zA-Z][a-zA-Z0-9_]*$/
        if(reg.test(password)){
            return true
        }else{
            return false
        }
    },
    setToken(tok){
        localStorage.setItem("toKen",tok)
    },
    getToken(){
        return localStorage.getItem("toKen")
    },
    islogin(){
        var token=localStorage.getItem("toKen")
        if(token){
            return true
        }else{
            return false
        }
    }
}

export default userUtils