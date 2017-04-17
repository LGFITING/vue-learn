<template>
    <div id="app">
            <h1>Hello App!</h1>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
      <div class="">
          <h4 @click="changeStatus">点击状态切换(可测试重新渲染后，数组1的变化)</h4>
          <ul>
              <li v-show="load == 'start'">$set开始</li>
              <li v-show="load == 'move'">$set移动</li>
              <li v-show="load == 'stop'">$set结束</li>
          </ul>
      </div>
     <div class="">
         <h4>创建新对象-数据传递</h4>
         <h6>数组1</h6>
         <ul v-for="arr1 in arr1s">
             <li @click="addData(arr1)">{{arr1.old}}</li>
         </ul>
         <h6>数组2、删除数组元素</h6>
         <ul v-for="arr2 in arr2s">
             <li @click="remove">{{arr2.new}}(点击删除)</li>
         </ul>
     </div>
     <div class="">
         <h6>v-on自定义事件</h6>
         <div class="">
             <p>{{total}}</p>
             <xiv-profile v-on:increment="incrementTotal">
             </xiv-profile>
             <xiv-profile v-on:increment="incrementTotal">
             </xiv-profile>
         </div>
     </div>
     <h6>$nextTick用法</h6>
     不懂
     <h6>input-focus</h6>
     <!-- <input v-focus > -->
     <input >
     <h6>全局组件</h6>
     <my-component></my-component>
     <h6>父组件传值到子组件（Child.vue）</h6>
     <my-child message="来自父组件" ref="child"></my-child>
     <h6>父组件取子组件的数据</h6>
     <input type="button" @click="parentCall" value="父调子" />
     <h6>Selected请求</h6>
     <select v-model="selected">
      <option disabled value="">--请选择--</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>使用watch后的数据，在watch发起请求 {{ select }}</span>

    </div>
</template>
<script>
import xivprofile from './Xivprofile.vue';
import child from './Child.vue';
export default {
  data () {
    return {
        load:'start',
        arr1s:[
            {old:"旧对象0",id:0},
            {old:"旧对象1",id:1}
        ],
        arr2s:[],
        counter:0,
        total:0,
        selected: '',
        select:'',
    }
},
components:{
    'xiv-profile':xivprofile,
    'my-child':child
},
watch:{
    selected(){
        this.select = this.selected;
    }
},
//挂载前调用，比如服务端请求
created(){
    let vm = this;
    vm.$on('test', function (msg) {
        console.log(msg);
});
    vm.$emit('test', '2222');
    console.log('渲染完成，挂载前');
},
//渲染前被调用
beforeCreate(){
    console.log('渲染前');
},
//挂载前被调用
beforeMount(){
    console.log('挂载前');
},
//挂载后使用
mounted(){
    console.log('挂载后');
},
//重新渲染前
beforeUpdate(){
    console.log('重新渲染前');
},
//重新渲染后
updated(){
    this.arr1s[0].old = 'Tick测试';
},
//实例销毁前
beforeDestroy(){
    console.log('实例销毁前');
},
destroyed(){
    console.log('实例销毁后');
},
methods:{
    parentCall(){
        this.$refs.child.showChild('调用子组件方法');
    },
    remove(index){
      this.arr2s.splice(index,1);
    },
    incrementTotal () {
        this.total += 1;
    },
    changeStatus (){
        let vm = this;
        vm.$set(vm.$data,'load','move');
    },
    addData (arr1){
        let vm = this;
            //视图更新后再执行操作，以免造成数据不同步
                // vm.arr1s[0].old = 'nextTick测试';
                console.log(vm.arr1s);
                let arr2 = {
                        new:arr1.old,
                        id:arr1.id
                    };
                if (!vm.checkRepeat(arr1)) {
                    this.arr2s.push(arr2);
                }
                else{

                }
                this.$nextTick(function(){


                });
    },
    checkRepeat(arr1){
        let repeat = false;
        let arr2s = this.arr2s;
        arr2s.forEach(function(arr2){
            if(arr2.id == arr1.id){
                repeat = true;
                return;
            }
        });
        return repeat;
    },
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
