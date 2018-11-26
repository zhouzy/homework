<template>
  <div class="left-side">
      <ul class="side-menu">
          <li class="side-menu__item">
              <i class="icon-dashboard side-menu__icon"></i>
              <span class="side-menu__name">DASHBOARD</span>
          </li>
          <li class="side-menu__item">
              <i class="icon-sitemap side-menu__icon"></i>
              <span class="side-menu__name">AGENT</span>
          </li>
          <li class="side-menu__item">
              <i class="icon-boat side-menu__icon"></i>
              <span class="side-menu__name">MY CRUISE</span>
          </li>
          <li class="side-menu__item">
              <i class="icon-life-bouy side-menu__icon"></i>
              <span class="side-menu__name">HELP</span>
          </li>
      </ul>
      <div class="left-side__history">
          <h3 class="left-side__history-h">History</h3>
          <ul class="left-side__history-list history-list">
              <li class="history-list__item">ddddddddddddddddddddddddddddddddddddd</li>
              <li class="history-list__item">ddddddddddddddddddddddddddddddddddddd</li>
              <li class="history-list__item">ddddddddddddddddddddddddddddddddddddd</li>
              <li class="history-list__item">ddddddddddddddddddddddddddddddddddddd</li>
          </ul>
      </div>
  </div>
</template>
<script></script>
<style lang="less" scoped>
    .side-menu{
        list-style:none;
        margin:0;
        padding:0;
        font-size:14px;
        padding-top:25px;
    }
    .side-menu__item{
        color:rgba(255,255,255,0.9);
        height:45px;
        line-height:45px;
        display:block;
        padding-left:30px;
        position: relative;
        text-align:left;
        cursor:pointer;

        &:hover,&.side-menu__item_active{
            background:rgba(240,240,240,0.1);
            color:#00B4CF;
        }
    }
    .side-menu__icon{
        margin-right:10px;
    }
    .side-menu__name{
    }
    .left-side__history{
        height:200px;
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        padding:0 10px;
    }
    .left-side__history-h{
        color:#CCC;
        font-size:24px;
        text-align:left;
        margin:10px 0;
    }
    .history-list{
        font-size:12px;
        color:#999;
        padding:0;
        list-style:none;

    }
    .history-list__item{
        padding:5px 10px 5px 20px;
        position:relative;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;

        &:hover{
            color:#0084CF;
            &:before{
                background:#0084CF;
            }
        }
        &:before{
            content:" ";
            position: absolute;
            left:0;
            top:50%;
            transform: translateY(-50%);
            width:4px;
            height:4px;
            border-radius: 2px;
            background:#999;
        }
    }
</style>
