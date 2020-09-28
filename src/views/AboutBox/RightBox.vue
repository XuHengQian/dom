<template>
  <div>
      <div class="box">
        <ul>
          <li v-for="(item,index) in getChangeList" :key="index" @click="detail(item.id)">
              <img :src="item.icon" alt="">
              <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      
  </div>
</template>
<script>
export default {
  data() {
    return {
       
    };
  },
  mounted() {
    
  },
  computed: {
      getChangeList:function(){
          console.log(this.$store);
         return this.$store.state.aboutStore.fenlei_left_two
      }
  },
  methods:{
      detail(id){
        console.log(id);
        this.$router.push({name:"detail",params:{id:id}})
      }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 95%;
  height: 100vh;
  overflow: scroll;
//   border: 1px solid red;
  ul{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content:flex-start;
      flex-wrap: wrap;
      li{
          width: 27%;
          height: 100px;
        //   border: 1px solid blue;
          margin-top: 10px;
          margin-left: 7px;
          margin-right: 5px;
          text-align: center;
          img{
              width: 100%;
          }
      }
  }
}
</style>
