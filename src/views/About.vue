<template>
  <div class="about">
    <van-search  placeholder="回车搜索商品"/>
    <van-row>
      <van-col span="6">
        
        <LeftBox :selectIndex="selectIndex" @ick="changeSelectIndex"></LeftBox>
        
      </van-col>
      <van-col span="18">
        <RightBox></RightBox>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import LeftBox from ".//AboutBox/LeftBox"
import RightBox from ".//AboutBox/RightBox"
export default {
  data(){
    return{
        selectIndex:0
    }
  },
  components:{
    LeftBox,
    RightBox
  },
    methods:{
        changeSelectIndex(index){
          this.selectIndex=index;
          var item=this.$store.state.aboutStore.fenlei_left_one[this.selectIndex]
          this.$store.dispatch("CHANGE",item)
      }
    }
}
</script>
