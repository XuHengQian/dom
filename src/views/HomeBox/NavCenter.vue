<template>
  <div>
    <ul>
      <li @click="qiandao">
        <img src="../../../public/img/1.png" alt />
        <p>签到</p>
      </li>
      <li @click="lijuan">
        <img src="../../../public/img/2.png" alt />
        <p>礼卷</p>
      </li>
      <li @click="kanjia">
        <img src="../../../public/img/3.png" alt />
        <p>砍价</p>
      </li>
      <li @click="zhuanlan">
        <img src="../../../public/img/4.png" alt />
        <p>专栏</p>
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
    qiandao() {
      this.$router.push({ path: "/qiandao" });
    },
    lijuan() {
      this.$router.push({ path: "/lijuan" });
    },
    zhuanlan() {
      this.$router.push({ path: "/zhuanlan" });
    },
    kanjia() {
      this.$router.push({ path: "/Kanji" });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  border-radius: 50px 50px 0px 0px;
  li {
    img {
      width: 30px;
      margin-top: 10px;
    }
    p {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>