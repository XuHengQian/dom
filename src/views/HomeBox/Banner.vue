<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in getBannerImg" :key="index">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("BANNERITM");
  },
  computed: {
    getBannerImg: function () {
      console.log(this.$store);
      return this.$store.state.homeStore.bannerItems;
    },
  },
};
</script>
<style lang="scss" scoped>
.van-swipe {
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>