<template>
    <div>
        <div class="top">
            <p @click="back"></p>
            <img src="../../../../public/img/lijuan.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.top{
        width: 100%;
        p{
            position: fixed;
            top: -5px;
            left: 7px;
            width: 25px;
            height: 25px;
            // background: pink;
        }
        img{
            width: 100%;
        }
    }
</style>