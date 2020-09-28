<template>
    <div>
        <div class="home_jxzt_box">
      <ul>
        <li v-for="(item,index) in getJingxuan" :key="index" @click="zhuanti(index)">
          <img :src="item.pic" alt="">
          <p v-html="item.title">{{item.title}}</p>
          <p v-html="item.descript" class="home_jxzt_jieshao">{{item.descript}}</p>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    mounted() {
    this.$store.dispatch("JINGXUANITM");
  },
  computed: {
    getJingxuan:function () {
      console.log(this.$store);
      return this.$store.state.homeStore.JingxuanItems;
    },
  },
 methods:{
      zhuanti(index){
        if(index==0){
          this.$router.push({path:"/ying"})
        }else if(index==1){
          this.$router.push({path:"/xunmeng"})
        }else if(index==2){
          this.$router.push({path:"/luoji"})
        }else if(index==3){
          this.$router.push({path:"/xidong"})
        }else if(index==4){
          this.$router.push({path:"/day"})
        }
      }
    }
}
</script>
<style lang="scss" scoped>
    .home_jxzt_box{
  width: 100%;
  height: 200px;
  // background: pink;
  overflow: scroll;

  ul{
    width: 1200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li{
      height: 200px;
      box-sizing: border-box;
      padding:0px 5px;
      img{
        width: 100%;
        height: 140px;
      }
      p{
        font-size: 12px;
      }
      .home_jxzt_jieshao{
        width: 100%;
        height: 15px;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0px 10px; 
        color: #ccc;
      }
    }
  }
}
</style>