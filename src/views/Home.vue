<template>
  <div class="home">
    <Banner></Banner>
    <Nav></Nav>
    <!-- <Grid :column_num="4">
      <template v-slot:="props">
        <GridItem :columnNumber="columnNumber"/>
      </template>
      
    </Grid> -->

    <div class="home_qmkj" @click="kanjia">全民砍价></div>
    <Kanjia></Kanjia>
    <div class="home_qmkj" @click="zhuanti">精选专题></div>
    <Jingxuan></Jingxuan>
    <div class="home_qmkj" @click="renqi">人气精选></div>
    <Zhuanti></Zhuanti>
    <div style="height:50px"></div>
  </div>
</template>

<script>
import Banner from './HomeBox/Banner.vue'
import Nav from './HomeBox/NavCenter.vue'
import Kanjia from './HomeBox/Kanjia.vue'
import Jingxuan from './HomeBox/Jingxuan.vue'
import Zhuanti from './HomeBox/Zhuanti.vue'
import Grid from '../components/grid/Grid'
import GridItem from '../components/grid/GridItem'
export default {
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods:{
    kanjia(){
      this.$router.push({path:"/kanji"})
    },
     zhuanti(){
      this.$router.push({path:"/zhuanlan"})
    },
    renqi(){
      this.$router.push({path:"/renqilist"})
    }
  },
components:{
  Banner,
  Nav,
  Kanjia,
  Jingxuan,
  Zhuanti,
  Grid,
  GridItem
}
  
};
</script>

<style lang="scss" scoped>

.home_qmkj {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 14px;
  color: rgb(68, 67, 67);
}


</style>