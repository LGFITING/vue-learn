import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/Home.vue';
import product from './components/Product.vue';
import news from './components/News.vue';
import service from './components/Service.vue';
import aboutus from './components/Aboutus.vue';
require("!style!css!sass!./App.scss");
require("!style!css!./style.css");
Vue.use(VueRouter);
var router=new VueRouter();

router.map({
  '/Home':{
    component:home
  },
  '/Product':{
    component:product
  },
  '/News':{
    component:news
  },
  '/Service':{
    component:service
  },
  '/Aboutus':{
    component:aboutus
  }
})



//设置默认情况下打开的页面
router.redirect({
  '/':'App'
});
router.start(App,'app');
//暴露路由接口调试
window.router = router;
