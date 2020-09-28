<template>
  <div>
    <div class="tabbar">
      <ul>
        <li v-for="(item,index) in items" :key="index" @click="jump(item,index)" :class="{active:index==change}">
            <i :class="item.iconfont"></i>
          {{item.title}}</li>
      </ul>
      <div class="number">0</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      change:0
    }
  },
  props: {
    items: {
      type: Array,
      required: true,
      validator: function (array) {
        return array.length <= 6;
      },
    },
  },
  methods:{
      jump(item,index){
          this.change=index
          this.$router.push(item.path)
          
      }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tabbar {
  width: 100%;
  ul {
    width: 100%;
    height: 1rem;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    list-style: none;
    border-top: 1px solid #ccc;
    margin-left: -1px;
    background: white;
    li{
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
  .number{
      width: 15px;
      height: 15px;
      border: 1px solid red;
      background: red;
      color: white;
      border-radius: 100%;
      position: fixed;
      bottom: 30px;
      right: 113px;
      font-size: 12px;
      text-align: center;
      line-height: 15px;
  }
}
.active{
  color: red;
}
</style>