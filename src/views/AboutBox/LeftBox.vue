<template>
    <div>
        <van-sidebar v-model="selectIndex">
          <van-sidebar-item :title="item.name" v-for="(item,index) in getLeftBox" :key="index" @click="changeSelectIndex(index)"/>
        </van-sidebar>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selectIndex:0,
            
        }
    },
    mounted(){
        this.$store.dispatch('FENLEIL')
    },
    computed:{
        getLeftBox:function(){
            console.log(this.$store);
            return this.$store.state.aboutStore.fenlei_left_one
        }
    },
    methods:{
        changeSelectIndex(index){
          this.$emit("ick",index)
      }
    }
}
</script>