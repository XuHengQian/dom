<template>
    <div>
        <div v-for="(item,index) in getXunMeng" :key="index">
            <h1 v-html="item.title">{{item.title}}</h1>
            <img :src="item.pic" alt="">
            <div v-html="item.content">{{item.content}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$store.dispatch('XUNMENG')
    },
    computed:{
        getXunMeng:function(){
            console.log(this.$store);
            return this.$store.state.homeStore.xunmeng;
        }
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
    h1{
        text-align: center;
    }
</style>