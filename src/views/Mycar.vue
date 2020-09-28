<template>
    <div>
        <input type="text" @blur="shiqu" v-model="value">
    </div>
</template>

<script>
import userUtils from "../utils/userUtils"
export default {
    data(){
        return{
            value:""
        }
    },

    methods:{
        shiqu(){
            var str=this.value
            var boolean=userUtils.checkOutMobile(str)
            if(boolean==true){
                alert("登录成功")
            }else{
                alert("失败")
            }
        }
    }
}
</script>