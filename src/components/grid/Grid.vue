<template>
    <div>
        <div class="box">
            <slot :columnNumber="column_num"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data(){
                
            }
        }
    },
    props:{
        column_num:{
            type:Number,
            default:4
        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>