<template>
    <div>
        <ul class="home_jxzt_good">
      <li v-for="(item,index) in getZhuanti" :key="index" @click="renqi_detail(item.id)">
        <img :src="item.pic" alt="">
        <p v-html="item.name">{{item.name}}</p>
      </li>
    </ul>
    </div>
</template>


<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$store.dispatch('ZHUANTIITM')
    },
    computed:{
        getZhuanti:function(){
            console.log(this.$store);
            return this.$store.state.homeStore.ZhuantiItems
        }
    },
    methods:{
      renqi_detail(id){
        console.log(id);
        this.$router.push({path:"/Xiangqing",query:{id:id}})
      }
    }
   
}
</script>

<style lang="scss" scoped>

.home_jxzt_good{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  li{
    width: 49%;
    height: 200px;
    margin-top: 10px;
    // background: pink;
    img{
      width: 100%;
    }
  }
}
</style>