<template>
    <div>
       <van-icon name="like-o" />
    </div>
</template>

<script>
export default {
    data(){
        return{
            width:0.25
        }
    },
    mounted(){
        this.width=100/this.columnNumber
    },
    props:{
        columnNumber:{
            type:Number
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        font-size: 24px;
    }
</style>