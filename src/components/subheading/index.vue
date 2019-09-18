<template>
    <div class="subheading">
        <div class="subheading-left">
            <img src="img/b5c97cea9e6f6cd6b6ece0625eaa124.png" alt="">
        </div>
        <div class="subheading-center">
            <span> {{subheadtitle}}</span>
        </div>
        <div class="subheading-right">
            <img src="img/b5c97cea9e6f6cd6b6ece0625eaa124.png" alt="">
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    props:['subheadtitle']
}
</script>
<style lang="less" scoped>
.subheading {
	width: 736px;
    height: 48px;    
    margin:0 auto;
    display: flex;
    justify-content: center;
    &-left {
        width: 50px;
        img {
            margin-top:18px;
            // margin-left:23px;
            // height: 48px;
        }
    }
    &-center {
        text-align: center;   
        span{
            font-family: SourceHanSansCN-Medium;
            font-size: 38px; 
            color:#ffffff;
            display: inline-block;
            margin-top: 33px;
        }
    }
    &-right {
        width: 27px;
        img {
            // height: 48px;
            margin-top:18px;
            margin-right:23px;
        }        
    }
}
</style>