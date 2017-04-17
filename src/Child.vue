<template class="Child">
    <div>{{message}}</div>
</template>
<script type="text/javascript">
export default{
    data(){
        return{

        }
    },
    props:['message'],
    methods:{
        showChild(msg){
        alert(msg);
    }
}
}
</script>
<style media="screen">

</style>
