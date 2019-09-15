<template>
    <div class="head">
        <div class="head-left">
            <img src="img/左侧线.png" alt="">
        </div>
        <div class="head-center">
            <img src="img/光动画.png" alt="">
            <span> {{headtitle}}</span>
        </div>
        <div class="head-right">
            <img src="img/右侧线.png" alt="">
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    props:['headtitle']
}
</script>
<style lang="less" scoped>
.head {
	width: 4800px;
    height: 104px;    
    div {
        float: left;
    }
    &-left {
        width: 1566px;
        img {
            margin-top:42px;
        }
    }
    &-center {
        position: relative;
        height: 104px;   
        width: 1667px;
        text-align: center;   
        background: url('../../assets/组 12.png') no-repeat;
        span{
            font-family: SourceHanSansCN-Bold;
            font-size: 50px;         
            color:#ffffff;
            display: inline-block;
            margin-top: 24px;
        }
        img {
            position: absolute;
            top:50px;
            left:345px;
            animation: headmove 10s linear infinite;   
        }
        @keyframes headmove {
            25% {
                transform: translateX(200px);
            }
            50%, 100% {
                transform: translateX(0);
            }
            75% {
                transform: translateX(-200px);
            }
        }
    }
    &-right {
        width: 1566px;
        img {
            margin-top:42px;
        }        
    }
}
</style>