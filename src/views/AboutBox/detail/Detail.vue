<template>
  <div>
    <van-nav-bar title="分类商品" left-arrow @click-left="onClickLeft" />
    <ul>
      <li v-for="(item,index) in getFenleiDetils" :key="index" @click="xiangqing(item.id)">
        <img :src="item.pic" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    xiangqing(id) {
        this.$router.push({path:"/Xiangqing",query:{id:id}})
    },
    onClickLeft(){
        this.$router.go(-1)
    }
  },
  mounted() {
    this.$store.dispatch("DETAIL", this.$route.params.id);
  },
  computed: {
    getFenleiDetils: function () {
      console.log(this.$store.state.aboutStore.fenlei_detail);
      return this.$store.state.aboutStore.fenlei_detail;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 49%;
    height: 200px;
    img {
      width: 100%;
    }
  }
}
</style>