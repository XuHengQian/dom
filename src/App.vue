<template>
  <div id="app">
    
    <router-view/>
    <Tabbar :items="items" v-show="this.$route.meta.isShowTab"/>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar'
export default {
  components:{
    Tabbar,
  },
  data(){
    return{
      items:[
        {title:"首页",path:"/",iconfont:"iconfont icon-shouye"},
        {title:"分类",path:"/about", iconfont:"iconfont icon-classifi"},
        {title:"购物车",path:"/mycar", iconfont:"iconfont icon-gouwuche"},
        {title:"我的",path:"/person", iconfont:"iconfont icon-wode4"},
      ]
    }
  },
  
}
</script>

<style lang="scss">

</style>
