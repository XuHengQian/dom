<template>
  <div>
    <van-card
      v-for="(item,index) in getKanjia"
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
  data() {
      return{

      }
  },
  mounted() {
    this.$store.dispatch("KANJIAITM");
  },
  methods:{
    kanjia(){
      this.$router.push({path:"/kanji"})
    }
  },
  computed: {
    getKanjia: function () {
      console.log(this.$store);
      return this.$store.state.homeStore.KanjiaItems;
    },
  },
};
</script>