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
import pageHeader from '@comps/page-header.vue'
import leftSide from '@comps/left-side.vue'

export default {
  name: 'app',
  components: {
      pageHeader,
      leftSide
  }
}
</script>

<style lang="less">
    @import "~@/lib-less/normalize.css";
    @import "~@/assets/font-icons/fonts.css";
    html,body{
        margin:0;
        padding:0;
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
    color: #2C3E50;
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
    box-shadow: 0 3px 5px -4px rgba(0,0,0,0.3);
    z-index:1000;
}
.page-body{
    width:1200px;
    margin:auto;
    height:100%;
    position: relative;
}

.page-body__left-side{
    position: fixed;
    top:70px;
    bottom:0;
    width:270px;
    min-height:100%;
    background:#2D4054;
    z-index:1000;
}
.page-body__content{
    margin-left:300px;
    margin-top:15px;
}
</style>
