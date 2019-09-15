<template>
    <div class="circle">
        <div class="circle-a"></div>
        <div class="circle-b"></div>
        <div class="circle-c"></div>
        <div class="circle-d"></div>
        <div class="circle-e">
            <span class="effects">{{circlenum}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ['circlenum']
}
</script>
<style lang="less" scoped>
.circle{
    position: relative;
    &-a{
        position: absolute;
        width:204px;
        height: 204px;
        border-radius: 102px;
        background-image: linear-gradient(0deg, 
            #4272e0 0%, 
            #4fa2fe 100%);
        opacity: 0.08;       
        // animation: ani-circle-a 5s ease-out forwards infinite;
    }
    &-b {
        position: absolute;
        width: 176px;
        height: 176px;
        border-radius: 88px;
        left: 13px;
        top: 13px;
        background-image: linear-gradient(0deg, 
            #4272e0 0%, 
            #4fa2fe 100%);
        opacity: 0.08;            
        // animation: ani-circle-a 5s ease-out 2.5s forwards infinite;
    }
    &-c {
        position: absolute;
        width: 160px;
        height: 160px;  
        left: 22px;
        top: 22px;         
        background: url('../../assets/微信图片_20190912112123.png') 50% 50% no-repeat;
        animation: rotationa 10s linear infinite;
    }
     &-d {
         position: absolute;
        width: 146px;
        height: 146px;  
        top: 28px;
        left: 28px;    
        background: url('../../assets/微信图片_20190912112044.png') 50% 50% no-repeat;        
        animation: rotationb 10s linear infinite;
    }   
    &-e {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 52px;
        left: 52px;        
        background-image: linear-gradient(0deg, 
            #4272e0 0%, 
            #4fa2fe 100%);    
        border-radius: 50px;    
        span {
            font-family: DINNextW1G-Bold;
            font-size: 40px;  
            color: #ffffff;
            display: block;
            text-align: center;      
            margin-top:25px;    
        }
    }
    @keyframes ani-circle-a {
        0% {
            transform: scale(1);
            opacity: 0;
        }
        10% {
            opacity: .7;
        }
        100% {
            transform: scale(1.16);
            opacity: 0;
        }
    }
    @keyframes rotationa {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes rotationb {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }    
}
</style>