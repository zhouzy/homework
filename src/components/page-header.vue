<template>
    <header class="header-wrapper">
        <img src="../assets/logo/logo.svg" class="header-wrapper__logo"/>
        <div class="header-wrapper__avatar-box">
            <img src="../assets/logo/avatar.jpg" class="avatar-box__avatar"/>
        </div>
    </header>
</template>
<script>
    export default{
        name: "header",
        data(){
            return {}
        },
    }
</script>
<style lang="less" scoped>
    .header-wrapper{
        position: relative;
        width:1200px;
        height:60px;
        margin:auto;
        text-align:center;
    }
    .header-wrapper__avatar-box{
        position:absolute;
        height:40px;
        top:10px;
        right:0;
    }
    .header-wrapper__logo{
        margin-top:20px;
        height:30px;
        width:auto;

    }
    .avatar-box__avatar{
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .avatar-box__icon{

    }
</style>
