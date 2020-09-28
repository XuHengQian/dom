<template>
    <div>
         <van-nav-bar
    title="人气商品"
      left-arrow
      @click-left="onClickLeft"
    />
        <ul>
            <li v-for="(item,index) in getrenqilist" :key="index">
                <img :src="item.pic" alt="">
                <p>{{item.name}}</p>
                <b>￥{{item.kanjiaPrice}}</b>
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
        this.$store.dispatch('RenQiList')
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    computed:{
        getrenqilist:function(){
            console.log(this.$store);
            return this.$store.state.homeStore.renqilist;
        }
    }
}
</script>

<style lang="scss" scoped>
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            width: 49%;
            height: 250px;
            img{
                width: 100%;
            }
        }
        p{
            box-sizing: border-box;
            padding: 10px;
        }
        b{
            box-sizing: border-box;
            padding: 10px;
            color: red;
        }
    }
</style>