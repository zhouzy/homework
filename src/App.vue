<template>
  <div id="app">
      <header class="page-header">
          <page-header></page-header>
      </header>
      <div class="page-body">
          <left-side class="page-body__left-side"></left-side>
          <router-view class="page-body__content"> </router-view>
      </div>
  </div>
</template>

<script>
import pageHeader from '@Comps/page-header.vue'
import leftSide from '@Comps/left-side.vue'

export default {
  name: 'app',
  components: {
      pageHeader,
      leftSide
  }
}
</script>

<style lang="less">
    @import "~@/assets/font-icons/fonts.css";
    html,body{
        margin:0;
        padding:0;
        height:100%;
    }
    *{
        box-sizing: border-box;
    }
    body{
        background:#F3F3F3;
    }
</style>
<style lang="less" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height:100%;
    padding-top: 70px;
    font-size:14px;
}
.page-header{
    position: fixed;
    top:0;
    left:0;
    height:70px;
    width:100%;
    background:#fff;
}
.page-body{
    width:1200px;
    margin:auto;
    height:100%;
    position: relative;
}

.page-body__left-side{
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    width:270px;
    background:#2D4054;
}
.page-body__content{
    position: absolute;
    left:300px;
    right:0;
    top:15px;
    bottom:0;
    overflow:auto;
}
</style>
