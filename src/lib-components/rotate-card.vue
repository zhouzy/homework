<template>
    <div class="rotate-card" :class="isEnter ? (isIE ? 'rotate-card__ie-op': 'rotate-card__rotate') : ''"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave">

        <div class="rotate-card__front">
            <slot name="front"></slot>
        </div>
        <div class="rotate-card__back">
            <slot name="back"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RotateCard',

    data(){
        return {
            isEnter: false,
            isIE: false,
        }
    },

    mounted(){
        this.isIE = !!window.ActiveXObject || "ActiveXObject" in window;
    },

    methods: {
        handleMouseEnter(){
            this.isEnter = true;
        },
        handleMouseLeave(){
            this.isEnter = false
        }
    }
}
</script>

<style lang="less" scoped>
    .rotate-card{
        transition: transform 2s;
        transform-style: preserve-3d;
        width:288px;
        height:144px;
        position: relative;
    }

    .rotate-card__rotate{
        transform: rotateY(180deg);
    }

    .rotate-card__ie-op{
        .rotate-card__front{
            z-index:2000;
            backface-visibility: hidden;
            opacity: 0;
            transition: opacity 0.5s;
        }
        .rotate-card__back{
            z-index:1999;
            transform: none;
            backface-visibility: hidden;
        }
    }

    .rotate-card__front,.rotate-card__back{
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
    }
    .rotate-card__front{
        z-index:2000;
        backface-visibility: hidden;
    }
    .rotate-card__back{
        z-index:1999;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }
</style>
