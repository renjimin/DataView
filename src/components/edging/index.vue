<template>
    <div class="edging">
        <div class="title">{{title}}</div>
        <div class='panel' :style="{width:edgingWidth}"></div>
    </div>
</template>
<script>
export default {
    props: ['title','edgingWidth']
}
</script>
<style lang="less" scoped>
.edging {
    color:#ffffff;
    .title {
        margin-bottom: 5px;
        font-family: SourceHanSansCN-Bold;
        font-size: 24px;
    }
    .panel{
        height: 10px;
        width: 497px;
        border-bottom: 1px solid #7b7f83;
        position: relative;
    }
    .panel::after{
        content: " ";
        display: block; 
        position: absolute; 
        top: 1px;
        right: 0; 
        width: 103px; 
        height: 10px;
        overflow: hidden; 
        text-align: right; 
        color: rgba(255,255,255,.9);
        background: linear-gradient(145deg,transparent 0% , transparent 30%,  #008aff 30%,  #008aff 100%)
    }
}

</style>