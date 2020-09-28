<template>
  <div>
    <div class="box">
      <h3>登录账号</h3>
      <p>虾米-严选商城欢迎你</p>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ pattern, message: '请填写正确的用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{pattern1, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="login">登录</van-button>
        </div>
      </van-form>
      <p class="wang">忘记密码</p>
      <p class="zhuce">还没有注册？立即注册</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
             username: '',
      password: '',
      pattern:/^1[3456789]\d{9}$/,
      pattern1:/^[a-zA-Z][a-zA-Z0-9_]*$/
        }
    },
    methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    login(){
      var obj={
        mobile:this.username,
        pwd:this.password
      }
      this.$store.dispatch('LOGIN',obj)
      this.$router.push({path:"/person"})
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 90%;
  height: 450px;
  border: 1px solid #ccc;
  margin: 30px auto;
  h3{
    
      color: rgb(117, 116, 116);
      font-size: 20px;
      font-weight: 500;

  }
  p{
      
      color: #ccc;
  }
  .wang{
      width: 100%;
     text-align: center;
      color: #ccc;
  }
  .zhuce{
      width: 100%;
      text-align: center;
      color: rgb(72, 126, 226);
  }
}
</style>