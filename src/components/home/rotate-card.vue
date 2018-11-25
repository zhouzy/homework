<template>
    <div class="rotate-card">
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
    .rotate-card:hover{
        transform: rotateY(180deg);
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
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }
</style>
