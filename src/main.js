import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Foo from './Foo.vue';
import Bar from './Bar.vue';
// const Foo = { template: '<div>foo</div>' }

// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]


// 注册一个全局自定义指令 v-focus
// Vue.directive('focus', {
//   // 当绑定元素插入到 DOM 中。
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })
Vue.component('my-component', {
  template: '<div>一个全局组件</div>'
})

const router = new VueRouter({
    routes: [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
    ]
})
// const app = new Vue({
//   router
// }).$mount('#app')
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
