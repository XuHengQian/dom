<template>
    <div>
        <van-nav-bar
    title="严选专栏"
      left-arrow
      @click-left="onClickLeft"
    />

    <ul>
        <li v-for="(item,index) in getZhuanlanlist" :key="index">
            <img :src="item.pic" alt="">
        </li>
    </ul>
   
    </div>
</template>

<script>
export default {
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    mounted(){
        this.$store.dispatch('ZhuanLanList')
    },
    computed:{
        getZhuanlanlist: function () {
      console.log(this.$store);
      return this.$store.state.homeStore.zhuanlanlist;
    },
    }
}
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
    list-style: none;
    li{
        width: 95%;
        margin: 0 auto;
        img{
            width: 100%;
            height: 170px;
        }
    }
}
</style>