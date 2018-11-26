<template>
    <div class="popover" v-if="isOpen">
        <div class="popover__content">
            <i class="popover__close-btn"></i>
            <span class="tips">Separate multiple resource name with commas</span>
            <input class="popover__input" v-model="resource"/>
            <div class="popover__footer">
                <button class="btn btn-primary" @click="handleAdd" :disabled="isLoading">Add Resource</button>
                <button class="btn btn-default" @click="handleCancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import agentService from "@service/agentService";

export default {
    name: 'AgentAddPopover',

    props: ["x","y","agentData","visible"],

    created(){
        this.isOpen = this.visible;
    },

    data(){
        return {
            resource: "",
            isLoading: false,
            isOpen: false
        };
    },
    methods:{
        clearInput(){
            this.resource = "";
        },

        handleAdd(){
            if(!this.resource){
                //提示
                return;
            }
            let resources = this.resource.trim().split(/[\s,]+/);

            resources = this.repeat(this.agentData.resources, resources);

            let newAgent = Object.assign({},this.agentData);

            newAgent.resources = resources;

            this.isLoading = true;
            agentService.updateAgent(this.agentData.id, newAgent).then(resp => {
                if(resp.status === 200){
                    this.$emit("add-success");
                    this.close();
                }
            }).finally(() => {
                this.isLoading = false;
            });
        },

        handleCancel(){
            this.close();
        },

        //去重
        repeat(lArr,rArr){
            let arr = lArr.concat(rArr);
            return [...new Set(arr)];
        },

        close(){
            this.isOpen = false;
        }
    }
}
</script>

<style lang="less" scoped>
    @import "~@/lib-less/common.less";
    @import "~@/lib-less/base-defined.less";
    .popover{
        position: absolute;
        bottom:0;
        left: 109px;
        width:570px;
        box-shadow: 0 3px 5px -4px rgba(0,0,0,0.3);
        background:#fff;
        border:1px solid @color-blue;
        transform: translateY(100%);
        z-index:2001;

        &:before{
            content: " ";
            position:absolute;
            top:-20px;
            left:10px;
            border: 10px solid transparent;
            border-bottom-color: @color-blue;
        }
        &:after{
            content: " ";
            position:absolute;
            top:-19px;
            left:10px;
            border: 10px solid transparent;
            border-bottom-color: #fff;
        }
    }

    .popover__content{
        position: relative;
        padding:25px 15px 15px 15px;
    }
    .popover__close-btn{
        position: absolute;
        width:20px;
        height:20px;
        line-height:20px;
        text-align:center;
        color:@color-blue;
    }
    .tips{
        color:@color-gray3;
    }
    .popover__input{
        display:inline-block;
        width:100%;
        margin:15px 0;
        height:35px;
        line-height:35px;
        color:@color-blue;
        outline:none;
        padding:5px 15px;
    }
</style>
