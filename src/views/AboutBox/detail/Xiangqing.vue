<template>
  <div>
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in getXiangqing.pics" :key="index">
        <img :src="item.pic" alt />
      </van-swipe-item>
    </van-swipe>

    <div class="jianjie">
      <p class="p3" v-html="getXiangqing.basicInfo.name">{{getXiangqing.basicInfo.name}}</p>
      <p class="p1">{{getXiangqing.basicInfo.characteristic}}</p>
      <div class="price">
        <div class="left">
          <p class="p2">
            <span>低价</span>
            <span class="sp2">￥{{getXiangqing.basicInfo.minPrice}}</span>
          </p>
        </div>
        <p>原价{{getXiangqing.basicInfo.originalPrice}}</p>
        <div class="p1">库存{{getXiangqing.basicInfo.stores}}</div>
      </div>
    </div>
    <p class="gray"></p>
    <van-tabs>
      <van-tab title="商品详情"></van-tab>
      <van-tab title="商品评价"></van-tab>
    </van-tabs>

    <div v-html="getXiangqing.content" class="box">{{getXiangqing.content}}</div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="购物车" @click="gwc"/>
      <van-goods-action-button color="#B7282E" type="warning" text="加入购物车" @click="showPopup"/>
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" @click="showPopup"/>
    </van-goods-action>

    <van-popup v-model="show" position="bottom" :style="{ height: '55%' }">
      <div class="top">
        <img :src="getXiangqing.basicInfo.pic" alt="">
        <div class="zi">
          <p class="title">{{getXiangqing.basicInfo.name}}</p>
          <p class="jiage">{{getXiangqing.basicInfo.minPrice}}</p>
        </div>
        <span>X</span>
      </div>
      <div class="center">
        <p>{{getXiangqing.properties[0].name}}</p>
        <p>
          <van-tag plain type="primary" size="large" color="#ccc">{{getXiangqing.properties[0].childsCurGoods[0].name}}</van-tag>
          <van-tag plain type="primary" size="large" color="#ccc">{{getXiangqing.properties[0].childsCurGoods[1].name}}</van-tag>
        </p>
        <p>{{getXiangqing.properties[1].name}}</p>
        <p>
          <van-tag plain type="primary" size="large" color="#ccc">{{getXiangqing.properties[1].childsCurGoods[0].name}}</van-tag>
          <van-tag plain type="primary" size="large" color="#ccc">{{getXiangqing.properties[1].childsCurGoods[1].name}}</van-tag>
          <van-tag plain type="primary" size="large" color="#ccc">{{getXiangqing.properties[1].childsCurGoods[2].name}}</van-tag>
        </p>
      </div>
      <div class="bottom">
        <p>购买数量 <van-stepper v-model="value" /></p>

      </div>
      <button >加入购物车</button>
    </van-popup>
  </div>
</template>

<script>
export default {
  data(){
    return{
       show: false,
       value:"1"
    }
  },
  mounted() {
    this.$store.dispatch("XQ", this.$route.query.id);
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    gwc(){
      this.$router.push({path:"/mycar"})
    },
     showPopup() {
      this.show = true;
    },
  },
  computed: {
    getXiangqing: function () {
      console.log(this.$store.state.aboutStore.xiangqing);
      return this.$store.state.aboutStore.xiangqing;
    },
  },
};
</script>

<style lang="css" scoped>
.van-swipe img {
  width: 100%;
}

.box >>> img {
  width: 100% !important;
  height: 100% !important;
}
.p3 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.price {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.sp2 {
  color: red;
  font-size: 16px;
}
.gray {
  width: 100%;
  height: 10px;
  background: rgb(231, 231, 231);
}
van-tabs {
  width: 100%;
  height: 50px;
}
.top{
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}
.top img{

    width: 50px;
    height: 50px;
  
}
.top .zi{
  width: 230px;
}
.top .zi .jiage{
  color: red;
}
.center{
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.bottom p{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 button{
  width: 100%;
  height: 40px;
  background: #B7282E;
  color: white;
  border: 1px solid #B7282E;
 
}
</style>