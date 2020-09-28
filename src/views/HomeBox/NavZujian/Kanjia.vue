<template>
  <div>
    <van-nav-bar
    title="砍价列表"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-card
      v-for="(item,index) in getKanjialist"
      :key="index"
      :price="item.minPrice"
      :desc="item.characteristic"
      :title="item.name"
      :thumb="item.pic"
      @click="kanjia"
    />
    
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$store.dispatch("KanJiaList");
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      }
    },
    computed:{
        getKanjialist: function () {
      console.log(this.$store);
      return this.$store.state.homeStore.kanjialist;
    },
    }
}
</script>