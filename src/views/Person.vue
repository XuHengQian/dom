<template>
  <div>
    <div class="top">
      <div class="touxiang" @click="showPopup">
        <img src="../../public/img/壁纸9.jpg" alt />
      </div>
      <van-popup v-model="show">
        <img src="../../public/img/壁纸9.jpg" alt />
      </van-popup>
      <div class="zi">
        <p class="p1" @click="login" v-if="!$store.state.personStore.islogin">立即登录</p>
        <p class="p1"  v-if="$store.state.personStore.islogin">{{getToken}}</p>
        <p class="p2">积分：0</p>
        <p class="tuichu" @click="remove">退出登录</p>
      </div>
    </div>
    <van-notice-bar scrollable text="你长的真好看 你是个大美女" />
    <div class="center">
      <div class="dingdan">
        <p>
          <van-icon name="coupon-o" size="24px" />
        </p>
        <p class="mycard" >我的订单</p>
        <p>
          <van-icon name="arrow" size="24px" @click="goto('/dingdan')"/>
        </p>
      </div>
      <ul class="fukuan">
        <li>
          <van-icon name="paid" size="24px" />
          <p>待付款</p>
        </li>
        <li>
          <van-icon name="todo-list-o" size="24px" />
          <p>待发货</p>
        </li>
        <li>
          <van-icon name="logistics" size="24px" />
          <p>待收货</p>
        </li>
        <li>
          <van-icon name="comment-o" size="24px"  @click="goto('/pingjia')"/>
          <p>待评价</p>
        </li>
      </ul>
      <p class="gray"></p>
      <ul class="detail">
        <li>
          <van-icon name="after-sale" color="#F86751" size="26px" />
          <p>我的余额</p>
        </li>
        <li>
          <van-icon name="free-postage" color="#F86751" size="26px" />
          <p>我的砍价</p>
        </li>
        <li>
          <van-icon name="closed-eye" color="#F0BF63" size="26px" />
          <p>我的礼卷</p>
        </li>
        <li>
          <van-icon name="bar-chart-o" color="#F0BF63" size="26px" />
          <p>我的收藏</p>
        </li>
        <li @click="goto('/dizhi')">
          <van-icon name="balance-o" color="#5A9FEC" size="26px" />
          <p>我的地址</p>
        </li>
        <li>
          <van-icon name="medal-o" color="#5A9FEC" size="26px" />
          <p>联系客服</p>
        </li>
      </ul>
      <p class="gray">the work song kexin</p>
    </div>
  
  </div>
</template>

<script>

import userUtils from '../utils/userUtils';
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
    showPopup() {
      this.show = true;
    },
    remove(){
        localStorage.removeItem("toKen")
        this.$router.go(0)
      },
      goto(url){
        this.$router.push({
          path:url
        })
      }
    
  },
  mounted() {
    this.$store.dispatch('TOKEN')
  },
  computed:{
    getToken:function(){
      console.log(this.$store);
      return this.$store.state.personStore.token
    }
  }
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 140px;
  background: #c1b18f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .touxiang {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: white;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .zi {
    width: 250px;
    .p1 {
      color: white;
      font-size: 16px;
    }
    .p2 {
      width: 70px;
      height: 20px;
      background: #b6a37d;
      color: white;
      text-align: center;
      line-height: 20px;
    }
  }
}
.van-popup {
  img {
    width: 300px;
  }
}
.center {
  width: 100%;
  height: 50px;
  .dingdan {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
  }
  .mycard {
    width: 200px;
  }
  .fukuan {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      text-align: center;
    }
  }
  .detail {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 30%;
      height: 70px;
      text-align: center;
    }
  }
}
.gray {
  width: 100%;
  height: 10px;
  background: rgb(231, 229, 229);
  text-align: center;
  color: #ccc;
}
.van-notice-bar{
background-color: white !important;
font-size: 12px !important;
}
.tuichu{
  color: white;
}
</style>