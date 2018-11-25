<template>
    <div id="home">
        <!-- 统计 -->
        <div class="rotate-card-list">
            <rotate-card>
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
                </template>
            </rotate-card>

            <rotate-card>
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
                </template>
            </rotate-card>

            <rotate-card>
                <template slot="front">
                    <div class="card card__3">
                        <span class="card__header">Idle</span>
                        <i class="card__icon icon-coffee"></i>
                        <span class="card__num">5</span>
                    </div>
                </template>
                <template slot="back">
                    <div slot="back" class="card number-card">
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
                </template>
            </rotate-card>

        </div>
        <!-- 工具栏 -->
        <div></div>
        <!-- 服务器列表 -->
        <div>
            <server-panel v-for="agent of agentList" :key="agent.id" :agent="agent"></server-panel>
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
                agentList: [],
            };
        },

        methods: {
            initAgentList(){
                agentService.getAgents().then(resp => {
                    if(resp.status === 200){
                        this.agentList = resp.data;
                    }
                });
            },
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
</style>
