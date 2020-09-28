<template>
    <div>
        <div v-for="(item,index) in getYing" :key="index">
            <h1>{{item.title}}</h1>
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
        this.$store.dispatch('YING')
    },
    computed:{
        getYing:function(){
            console.log(this.$store);
            return this.$store.state.homeStore.yIng;
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