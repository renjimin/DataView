<template>
    <div class="emdepart">
        <div class="emdepart-left">
            <div class="emdepart-one">
                <div class="one-data">
                    <Edging  :title="'治理目标'"  :edgingWidth="'498px'" />
                    <div class="onedata-content">2020年底前全省尾矿数量控制在</div>
                    <div class="onedata-num"><span class="effects">200</span><span>座以内</span></div>
                </div>
                <div class="one-data">
                    <Edging  :title="'垃圾无害化处理率'"  :edgingWidth="'498px'" />
                    <div class="onedata-content">2018年全省尾矿生产安全事故数量</div>
                    <div class="onedata-num"><span class="effects">0</span><span>起</span></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="emdepart-two">
                <Edging  :title="'省尾矿库综合治理专项战役已定责任人的尾矿库（2018年底）'"  :edgingWidth="'1020px'" />
                <Echarts :autoResize="true"  :option="option" height="273px"  id="One-circle"  width="1020px" />
            </div>
            <div class="emdepart-three">
                <Edging  :title="'各地区筹资治理情况'"  :edgingWidth="'1020px'" />
                <div class="emdepart-table">
                    <div><span>地区</span><span>筹集资金（万元）</span><span>治理项目</span></div>
                    <div><span>鄂州</span><span>400+</span><span>— —</span></div>
                    <div><span>黄冈</span><span>100+</span><span>白果村尾矿库闭库</span></div>
                    <div><span>襄阳</span><span>408</span><span>17座无主库闭库治理</span></div>
                    <div><span>宜昌</span><span>2000</span><span>磷石膏综合利用</span></div>
                    <div><span>陨西县</span><span>600+</span><span>尾矿库由21座减至8座</span></div>
                    <div><span>随州市随县草店镇</span><span>300+</span><span>宏达矿业公司尾矿库闭库工程</span></div>
                    <div><span>湖北省</span><span>2333</span><span>完成22座头项库治理</span>
                    </div>
                    <span class="notitle onenotitle"><span></span><span>2333</span><span>完成22座头项库治理</span></span>
                    <span class="notitle"><span></span><span>2333</span><span>完成22座头项库治理</span></span>
                </div>
            </div>            
        </div>
        <div class="emdepart-center">

        </div>
        <div class="emdepart-right">

        </div>
    </div>
</template>
<script>
import Echarts from '@/components/echarts/echarts'
import Edging from '@/components/edging/index'
export default {
    components: {
        Edging,
        Echarts
    },
    data() {  
        function randomNumArr(count, min, max) {
            var arr = [];
            for (var i = 0; i < count; i++) {
                arr.push(Math.round((Math.random() * (max - min)) + min))
            }
            return arr;
        }
        var shiji = {
            normal: {
                show: true,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#7bd2ff'
                }, {
                    offset: 1,
                    color: '#0c9bff'
                }]),
                borderWidth: 0
            }
        };
        var yusuan = {
            normal: {
                show: true,
                color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#ffe880'
                }, {
                    offset: 1,
                    color: '#ffa505'
                }]),
                borderWidth: 0,
            }
        };              
        return {
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ["实际", "预算"]
                },
                grid: {
                    left: '3%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    data: ["鄂州", "恩施", "黄冈", "荆门", "黄石","荆州", "神农架林区", "十堰", "随州", "武汉","咸宁", "襄阳","孝感","宜昌"],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: '',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                }],
                series: [{
                    type: 'bar',
                    barWidth: "20%",
                    name: '实际',
                    itemStyle: shiji,
                    data: [28,30,66,86,67,40,19,20,66,86,167,140]
                }, {
                    type: 'bar',
                    barWidth: "20%",
                    name: '预算',
                    itemStyle: yusuan,
                    data: [32,40,46,80,67,20,17,20,46,120,67,120]
                }]                
            }
        }
    }
}
</script>
<style lang="less" scoped>
.emdepart {
    &-left {
        margin-left: 42px;
        .emdepart-one {
            .one-data{
                float: left;
                height: 208px;
                width: 498px;
                background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));
                .onedata-content {
                    font-family: SourceHanSansCN-Bold;
                    font-size: 20px;
                    color: #80c5ff;
                    margin: 21px 0 35px 29px;
                }
                .onedata-num {
                    margin-left: 42px;
                    span:nth-child(1) {
                        font-family: DINNextW1G-BoldItalic;
                        font-size: 64px;       
                        color: #ffffff;                 
                    }
                    span:nth-child(2) {
                        font-family: SourceHanSansCN-Medium;
                        font-size: 32.35px;    
                        color: #ffffff;                       
                    }
                }
            }
            .one-data:nth-child(1) {
                margin-right: 24px;
            }
        }
        .emdepart-two {
            margin-top:26px;
            width: 1020px;
            height: 273px;    
            background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));                    
        }
        .emdepart-three {
             margin-top:26px;
            width: 1020px;
            height: 654px;    
            background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));    
            .emdepart-table {
                div {
                    span:nth-child(1) {
                        display: inline-block;
                        margin-left: 60px;
                        width: 188px;
                        text-align: left;    
                    }
                     span:nth-child(2) {
                        display: inline-block;
                        width: 247px;
                        margin-left: 40px;
                        text-align: center;                        
                    }
                    span:nth-child(3) {
                        display: inline-block;
                        margin-left: 120px;
                        width: 328px;
                        text-align: left;
                    }                                       
                }
                div:nth-child(odd) {
                    width: 1020px;
                    height: 62px;
                    line-height: 62px;
                    background-color: rgba(0, 138, 255, .1); 
                    font-family: SourceHanSansCN-Bold;
                    font-size: 20px;       
                    color: #6dc9fb;       
                }
                div:nth-child(even) {
                    width: 1020px;
                    height: 76px;
                    line-height: 76px;
                    font-family: SourceHanSansCN-Bold;
                    font-size: 20px;       
                    color: #6dc9fb;    
                }
                .notitle {
                    width: 1020px;
                    height: 20px;
                    display: block;
                    line-height: 20px;
                    padding: 5px 0;
                    background-color: rgba(0, 138, 255, 0);
                    font-family: SourceHanSansCN-Bold;
                    font-size: 20px;       
                    color: #6dc9fb;                              
                     span:nth-child(1) {
                        display: inline-block;
                        margin-left: 60px;
                        width: 188px;
                        text-align: left;    
                    }
                     span:nth-child(2) {
                        display: inline-block;
                        width: 247px;
                        margin-left: 40px;
                        text-align: center;                        
                    }
                    span:nth-child(3) {
                        display: inline-block;
                        margin-left: 120px;
                        width: 328px;
                        text-align: left;
                    }                                  
                }
                .onenotitle {
                    margin-top: -15px;
                }
            }          
        }
    }
     &-center {

     }
     &-right {

     }
}
</style>