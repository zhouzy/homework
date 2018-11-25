<template>
    <div class="popover" v-show="visible" :style="style">
        <div class="popover__content">
            <i class="popover__close-btn"></i>
            <span class="tips">Separate multiple resource name with commas</span>
            <input class="popover__input" v-model="resource"/>
            <div class="popover__footer">
                <button class="btn btn-primary">Add Resource</button>
                <button class="btn btn-default">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AgentAddPopover',
    props: ["x","y","agentId"],
    data(){
        return {
            visible: false,
            resource: ""
        };
    },
    methods:{
        clearInput(){
            this.resource = "";
        },

        open(){
            this.visible = true;
        },

        close(){
            this.visible = false;
        }
    },
    computed: {
        style() {
            return {
                left: (this.x - 15) + "px",
                top: this.y + 35 + "px"
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import "~@/lib-less/common.less";
    @import "~@/lib-less/base-defined.less";
    .popover{
        position: fixed;
        top:80px;
        width:570px;
        box-shadow: 0 3px 5px -4px rgba(0,0,0,0.3);
        background:#fff;
        border:1px solid @color-blue;
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
