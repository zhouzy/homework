<template>
    <div id="home">
        <!-- 统计 -->
        <div class="rotate-card-list">
            <rotate-card class="card-wrapper">
                <template slot="front">
                    <div class="card card__1">
                        <span class="card__header">Building</span>
                        <i class="card__icon icon-cog"></i>
                        <span class="card__num">3</span>
                    </div>
                </template>

                <template slot="back">
                    <div slot="back" class="card number-card">
                        <div class="number-card__item">
                            <div class="number-card__label">All</div>
                            <div class="number-card__num">3</div>
                        </div>
                        <div class="number-card__item">
                            <div class="number-card__label">PHYSICAL</div>
                            <div class="number-card__num">2</div>
                        </div>
                        <div class="number-card__item">
                            <div class="number-card__label">VIRTUAL</div>
                            <div class="number-card__num">1</div>
                        </div>
                    </div>
                </template>
            </rotate-card>

            <rotate-card class="card-wrapper">
                <template slot="front">
                    <div class="card card__2">
                        <span class="card__header">Idle</span>
                        <i class="card__icon icon-coffee"></i>
                        <span class="card__num">5</span>
                    </div>
                </template>
                <template slot="back">
                    <div slot="back" class="card number-card">
                        <div class="number-card__item">
                            <div class="number-card__label">All</div>
                            <div class="number-card__num">5</div>
                        </div>
                        <div class="number-card__item">
                            <div class="number-card__label">PHYSICAL</div>
                            <div class="number-card__num">2</div>
                        </div>
                        <div class="number-card__item">
                            <div class="number-card__label">VIRTUAL</div>
                            <div class="number-card__num">3</div>
                        </div>
                    </div>
                </template>
            </rotate-card>

            <div class="card-wrapper">
                <div class="card number-card">
                    <div class="number-card__item">
                        <div class="number-card__label">All</div>
                        <div class="number-card__num">8</div>
                    </div>
                    <div class="number-card__item">
                        <div class="number-card__label">PHYSICAL</div>
                        <div class="number-card__num">4</div>
                    </div>
                    <div class="number-card__item">
                        <div class="number-card__label">VIRTUAL</div>
                        <div class="number-card__num">4</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 工具栏 -->
        <div class="nav-box">
            <div class="nav-box__left">
                <ul class="nav">
                    <li class="nav__item" :class="{'nav__item__active': filters.type === ''}" @click="filters.type = ''">All</li>
                    <li class="nav__item" :class="{'nav__item__active': filters.type === 'physical'}" @click="filters.type = 'physical'">Physical</li>
                    <li class="nav__item" :class="{'nav__item__active': filters.type === 'virtual'}" @click="filters.type = 'virtual'">Virtual</li>
                </ul>

                <div class="search-box">
                    <i class="icon-search"></i>
                    <input class="search-box__input"/>
                </div>
            </div>
            <div class="nav-box__btns">
                <i class="icon-th-card"></i>
                <i class="icon-th-list active"></i>
            </div>
        </div>

        <!-- 服务器列表 -->
        <div>
            <server-panel v-for="agent in agentList" :key="agent.id" :agent="agent" @data-change="onChange"></server-panel>
        </div>
    </div>
</template>

<script>
    import RotateCard from "@libComps/rotate-card.vue";
    import ServerPanel from "@comps/agent/server-panel.vue";
    import agentService from "@service/agentService.js";

    export default {
        name: 'HomeApp',

        mounted(){
            this.initAgentList();
        },

        data(){
            return {
                originList: [],
                filters: {
                    type: ""
                }
            };
        },

        methods: {
            initAgentList(){
                agentService.getAgents().then(resp => {
                    if(resp.status === 200){
                        this.originList = resp.data;
                    }
                });
            },
            onChange(){
                this.originList = [];
                this.initAgentList();
            },
        },

        computed: {
            agentList(){
                if(!this.originList){
                    return [];
                }
                if(!this.filters.type){
                    return this.originList;
                }
                return this.originList.filter(i => i.type === this.filters.type);
            }
        },
        components: {
            RotateCard,
            ServerPanel
        }

    }
</script>

<style lang="less" scoped>
    @import "~@/lib-less/base-defined.less";

    .rotate-card-list{
        display: -webkit-flex;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    .rotate-card-list__item{
        flex:auto;
    }
    .card{
        width:100%;
        height:100%;
        text-align:center;
        background:#fff;
        color:#fff;
    }
    .card__header{
        font-size:18px;
        font-weight:bold;
        position: absolute;
        top:10px;
        left:10px;
    }
    .card__icon{
        font-size:144px;
        height:100%;
        opacity: 0.2;
    }
    .card__num{
        position: absolute;
        bottom:20px;
        right:10px;
        font-size:48px;
    }
    .number-card{
        display: -webkit-flex;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        color:@color-gray4;
    }

    .card-wrapper{
        width:288px;
        height:144px;
    }

    .number-card__item{
        width:33%;
    }
    .number-card__label{
        font-size:14px;
        height:72px;
        line-height:72px;
    }
    .number-card__num{
        font-size:24px;
        height:72px;
        line-height:72px;
        vertical-align: middle;
    }
    .card__1{
        background:@color-orange;
    }
    .card__2{
        background:@color-green;
    }
    .card__3{
        background:@color-blue;
    }

    .nav-box{
        background:#fff;
        margin:15px 0;
        display:flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    .nav{
        display:inline-block;
        margin:0;
        padding:0;
        font-size:0;
    }
    .nav__item{
        font-size:14px;
        display:inline-block;
        width:96px;
        text-align:center;
        height:50px;
        line-height:50px;
        border-bottom: 3px solid transparent;
        border-right:1px solid @color-gray2;
        cursor:pointer;
    }
    .nav__item__active{
        border-bottom-color:@color-blue;
    }
    .search-box{
        display:inline-block;
        position: relative;
        margin-left:15px;
        i{
            position: absolute;
            font-size:16px;
            left:5px;
            top:50%;
            transform: translateY(-50%);
        }
    }

    .search-box__input{
        display:inline-block;
        height:30px;
        outline: none;
        padding-left:26px;
    }

    .nav-box{
        height:50px;
        line-height:50px;
    }

    .nav-box__btns i{
        display:inline-block;
        font-size:20px;
        margin-right:20px;
        color:@color-gray3;
        cursor: pointer;
        vertical-align:middle;
        &.active{
            color: @color-blue;
        }
    }

</style>
