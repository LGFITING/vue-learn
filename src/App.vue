<template>
  <div id="app">
    <div class="header">
      <a v-link="{path:'/Home'}">Home</a>
      <a v-link="{path:'/Product'}">Product</a>
      <a v-link="{path:'/News'}">News</a>
      <a v-link="{path:'/Service'}">Service</a>
      <a v-link="{path:'/Aboutus'}">Aboutus</a>
      <!-- <a v-link="{path:'Select'}">Select</a> -->
      <sercharea></sercharea>
    </div>
  </div>
  <br>


<br>
<h1>test</h1>
<h2>test</h2>
  <router-view keep-alive transition="fade" transition-mode='out-in'></router-view>
</template>

<script>
// import home from './components/Home.vue';
// import product from './components/Product.vue';
// import news from './components/News.vue';
// import service from './components/Service.vue';
// import aboutus from './components/Aboutus.vue';
import sercharea from './components/serch.vue';
export default {
  data () {
    return {
        message: 'Hello Vue!',
        picked:'',
        selected:'',
        items: [
      {message: 'foo' },
      {message: 'Bar' }
  ]
    }
  },
  components:{
    sercharea
},
methods:{
    getContent:function(){
        alert(this.items.message);
    }
}
}


</script>




<style>
*{
  margin: 0;
  padding: 0;
}
html{
  box-sizing: border-box;
  background: url(../static/images/bg.png) no-repeat;
  background-size:cover;
  width: 100%;
  height: 100%;
}
body {
  font-family: Helvetica, sans-serif;
}
a{
  text-decoration: none;
  display: inline-block;
  width:100px;
  height: 40px;
  border: 1px solid #0CC;
  background-color: #fff;
  box-shadow:0 0 5px #0CC;
}
a:hover{
  background-color: #FEF9E3;
}
.header{
  width:100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color:black;
}
.wrapper{
  width: 800px;
  height:600px;
  /*border:1px solid #96c2f1;*/
  margin: 0 auto;
}
.fade-transition {
 transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
 opacity: 0;
}
</style>
