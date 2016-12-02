<template class="Home">
  <div class="wrapper">
  <div>
    {{msg}}
  </div>
  <p v-on:click = "alert" id="test">
    {{msg2}}
  </p>
</div>

</template>
<script type="text/javascript">
  export default{
    data(){
      return{
        msg:'Home',
        msg2:'test'
      }
  },
  methods: {
      alert: function(){
          var value = document.getElementById('test').innerHTML;
          alert(value);
      }
  }
  }
</script>
<style lang="sass" scoped>
$color: yellow;
    div{
        color:$color;
    }
</style>
