import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/Home.vue';
import product from './components/Product.vue';
import news from './components/News.vue';
import service from './components/Service.vue';
import aboutus from './components/Aboutus.vue';
<<<<<<< HEAD
import select from './components/Select.vue';
require("!style!css!sass!./App.scss");
require("!style!css!./style.css");
=======
require("!style!css!sass!../static/css/App.scss");
require("!style!css!../static/css/style.css");
>>>>>>> 518f27fe6f6de88ba9a6a9cf38040dc953d907c8
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
  },
  '/Select':{
    component:select
  }
})



//设置默认情况下打开的页面
router.redirect({
  '/':'App'
});
router.start(App,'app');
//暴露路由接口调试
window.router = router;
