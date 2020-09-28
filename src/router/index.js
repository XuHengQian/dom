import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import mycar from '../views/Mycar.vue'
import person from '../views/Person.vue'
import userUtils from '../utils/userUtils'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      isShowTab:true,
    }
  },
  {
    path: '/mycar',
    name: 'mycar',
    component: mycar,
    meta:{
      isShowTab:false,
    }
  },
  {
    path: '/person',
    name: 'person',
    component: person,
    meta:{
      isShowTab:true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/banner',
    name: 'banner',
    component: () => import('../views/HomeBox/Banner.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/navcenter',
    name: 'navcenter',
    component: () => import('../views/HomeBox/NavCenter.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/kanjia',
    name: 'kanjia',
    component: () => import('../views/HomeBox/Kanjia.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/zhuanti',
    name: 'zhuanti',
    component: () => import('../views/HomeBox/Zhuanti.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/jingxuan',
    name: 'jingxuan',
    component: () => import('../views/HomeBox/Jingxuan.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/qiandao',
    name: 'qiandao',
    component: () => import('../views/HomeBox/NavZujian/Qiandao.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/lijuan',
    name: 'lijuan',
    component: () => import('../views/HomeBox/NavZujian/Lijuan.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/Kanji',
    name: 'Kanji',
    component: () => import('../views/HomeBox/NavZujian/Kanjia.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/zhuanlan',
    name: 'zhuanlan',
    component: () => import('../views/HomeBox/NavZujian/Zhuanlan.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/kanjialist',
    name: 'kanjialist',
    component: () => import('../views/HomeBox/KanJia/KanjiaList'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/day',
    name: 'day',
    component: () => import('../views/HomeBox/ZhuanTi/Day.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/luoji',
    name: 'luoji',
    component: () => import('../views/HomeBox/ZhuanTi/LuoJi.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/xidong',
    name: 'xidong',
    component: () => import('../views/HomeBox/ZhuanTi/XiDong.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/xunmeng',
    name: 'xunmeng',
    component: () => import('../views/HomeBox/ZhuanTi/XunMeng.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/ying',
    name: 'ying',
    component: () => import('../views/HomeBox/ZhuanTi/Ying.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/zhuantilist',
    name: 'zhuantilist',
    component: () => import('../views/HomeBox/ZhuanTi/ZhuanTiList.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/renqilist',
    name: 'renqilist',
    component: () => import('../views/HomeBox/Renqi/RenqiList.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/leftbox',
    name: 'leftbox',
    component: () => import('../views/AboutBox/LeftBox.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/rightbox',
    name: 'rightbox',
    component: () => import('../views/AboutBox/RightBox.vue'),
    meta:{
      isShowTab:true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/AboutBox/detail/Detail.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/xiangqing',
    name: 'xiangqing',
    component: () => import('../views/AboutBox/detail/Xiangqing.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/PersonBox/Login.vue'),
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/dingdan',
    name: 'dingdan',
    component: () => import('../views/PersonBox/dingdan.vue'),
    beforeEnter: (to, from, next) => {
      if(userUtils.islogin()){
        next()
      }else{
        next("login")
      }
    },
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/pingjia',
    name: 'pingjia',
    component: () => import('../views/PersonBox/pingjia.vue'),
    beforeEnter: (to, from, next) => {
      if(userUtils.islogin()){
        next()
      }else{
        next("login")
      }
    },
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/dizhi',
    name: 'dizhi',
    component: () => import('../views/PersonBox/dizhi.vue'),
    beforeEnter: (to, from, next) => {
      if(userUtils.islogin()){
        next()
      }else{
        next("login")
      }
    },
    meta:{
      isShowTab:false
    }
  },
  {
    path: '/black',
    name: 'black',
    component: () => import('../views/HomeBox/Renqi/Black.vue'),
    meta:{
      isShowTab:false
    }
  },
  
]
const router = new VueRouter({
  routes
})

export default router
