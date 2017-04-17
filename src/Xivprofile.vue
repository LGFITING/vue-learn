<template class="Xivprofile">
        <button @click="increment">{{ counter }}</button>
</template>
<script type="text/javascript">
export default{
    data(){
        return{
            counter:0
        }
    },
    methods:{
        increment: function () {
          this.counter += 1;
          this.$emit('increment')
      }
    }
}
</script>
<style media="screen">

</style>
