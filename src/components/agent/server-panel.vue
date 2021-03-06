<template>
    <div class="server-panel">
        <img class="server-panel__left-image" :src="osImg"/>
        <div class="server-panel__right">
            <div class="server-panel__info-bar">
                <span class="server-panel__info-item">
                    <i class="icon-desktop"></i>
                    <span class="link">{{agentData.name}}</span>
                </span>
                <span class="server-panel__info-item marker marker-warning"
                      :class="{'marker-warning': agentData.status === 'building', 'marker-success': agentData.status === 'idle'}">
                    {{agentData.status}}
                </span>
                <span class="server-panel__info-item">
                    <i class="icon-info"></i>
                    <span>{{agentData.ip}}</span>
                </span>
                <span class="server-panel__info-item">
                    <i class="icon-folder"></i>
                    <span>{{agentData.location}}</span>
                </span>
            </div>
            <div class="server-panel__btns">
                <button class="btn btn-primary btn-icon plus-icon-btn" @click="handleAddResource">
                    <i class="btn-icon icon-plus"></i>
                </button>
                <span class="marker" v-for="(item,index) of agentData.resources" :key="item">
                    <span>{{item}}</span>
                    <i class="icon-trash" @click="handleDeleteResource(index)"></i>
                </span>
                <button class="btn btn-primary btn-deny" v-if="agentData.status === 'building'" @click="handleDeny">
                    <i class="icon-deny"></i> Deny
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import addAgent from "@libComps/add-agent.js";
    import agentService from "@service/agentService.js";

    Vue.use(addAgent);

    export default {
        name: 'ServerPanel',
        props: ["agent"],
        created(){
            this.agentData = Object.assign({},this.agent);
            if(this.agentData.resources && !Array.isArray(this.agentData.resources)){
                this.agentData.resources = [this.agentData.resources];
            }
        },
        data(){
            return {
                agentData: null
            }
        },
        computed: {
            osImg(){
                if(!this.agentData){
                    return "";
                }
                return new Map([
                    ["windows", require("@/assets/os-icons/windows.png")],
                    ["ubuntu", require("@/assets/os-icons/ubuntu.png")],
                    ["debian", require("@/assets/os-icons/debin.png")],
                    ["suse", require("@/assets/os-icons/suse.png")],
                    ["centos", require("@/assets/os-icons/cent_os.png")]
                ]).get(this.agentData.os);
            }
        },

        methods: {
            handleAddResource(){
                this.$addAgent(this.$el,this.agentData, () => {
                    this.$emit("data-change");
                });
            },

            handleDeny(){
                let newAgent = Object.assign({},this.agentData);

                newAgent.status = "idle";

                agentService.updateAgent(this.agentData.id, newAgent).then(resp => {
                    if(resp.status === 200){
                        this.$emit("data-change");
                        this.visible = false;
                    }
                });
            },

            handleDeleteResource(i){
                this.agentData.resources.splice(i,1);

                agentService.updateAgent(this.agentData.id, this.agentData).then(resp => {
                    if(resp.status === 200){
                        this.$emit("data-change");
                        this.visible = false;
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/lib-less/base-defined.less";
    @import "~@/lib-less/common.less";

    .server-panel{
        background:#fff;
        height:100px;
        margin:15px 0;
        padding-left:115px;
        padding-right:15px;
        position: relative;
    }
    .server-panel__left-image{
        position: absolute;
        left:10px;
        top:10px;
        width:80px;
        height:80px;
    }

    .server-panel__right{
        height:100px;
    }

    .server-panel__info-bar, .server-panel__btns{
        font-size:14px;
        height:50%;
        display:-webkit-flex;
        display:flex;
        justify-content: flex-start;
        align-items:center;
    }

    .server-panel__info-bar i{
        font-size: 16px;
    }

    .server-panel__info-item{
        margin-right:20px;
    }

    .btn-icon{
        font-size:18px;
    }

    .server-panel__btns{
        position: relative;
    }

    .server-panel__btns .marker{
        background:#EFEFEF;
        height:30px;
        line-height:30px;
        color:#2D4054;
        margin-right:10px;
        i{
            cursor:pointer;
            padding:5px;
            &:hover{
                 color: @color-blue2;
            }
        }
    }

    .plus-icon-btn{
        margin-right:10px;
    }

    .btn-deny{
        position: absolute;
        right:0;
        margin-right:0;
        bottom:15px;
    }
</style>
