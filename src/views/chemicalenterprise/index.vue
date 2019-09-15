<template>
    <div class="chemicalenterprise">
        <div class="chemicalenterprise-left">
            <div class="one-data">
                <Edging  :title="'沿江化工企业“关改搬转”情况'"  :edgingWidth="'1019px'" />
                <div class="basebg">
                    <div class="chemicalenterprise-data1">
                        <Echarts    :option="oneOption" height="280px"  id="onecircle"  width="383px" />
                        <div class="list">
                            <span><img src="" alt="">2018列入清单</span>
                            <span><img src="" alt="">2019完成情况</span>
                        </div>
                    </div>
                    <div class="chemicalenterprise-data2">
                        <Echarts  :option="twoOption" height="200px"  id="twocircle"  width="200px" />
                        <div class="list-num">
                            <div class="item">
                                <div class="effects">478<i>家</i></div>
                                <div>2018年列入清单</div>
                            </div>
                            <div class="item">
                                <div class="effects">101<i>家</i></div>
                                <div>2019年完成情况</div>  
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="chemicalenterprise-center">

        </div>
        <div class="chemicalenterprise-right">

        </div>
    </div>
</template>
<script>
import Echarts from '@/components/echarts/echarts'
import Edging from '@/components/edging/index'
export default {
    components: {
        Echarts,
        Edging
    },
    data() {
        let xData = ['关闭','改造','搬迁','转产'];
        let yData =  [66,238,120,81,54];      
        return {     
            oneOption:{
                // backgroundColor: "#111c4e",
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    formatter: function(prams) {
                        return "办理数：" + prams[0].data
                    }
                },
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '5%',
                    top: '7%',
                    height: '85%',
                    containLabel: true,
                    z: 22
                },
                xAxis: [{
                    type: 'category',
                    gridIndex: 0,
                    data: xData,
                    axisTick: {
                        show:false,
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff'
                        }
                    },
                    axisLabel: {
                        show: true,
                        color: '#ffffff',
                        fontSize: 14
                    }
                }],
                yAxis: [{
                        type: 'value',
                        gridIndex: 0,
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ffffff'
                            }
                        },
                        axisLabel: {
                            color: '#ffffff',
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        gridIndex: 0,
                        splitNumber: 12,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                    }
                ],
                series: [
                {
                    type: 'bar',
                    barWidth: 20,
                    data: [66, 238, 120, 54],
                    itemStyle: {
                        normal: {
                            label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'white'
                            }
                        },                     
                        color: new this.$echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#1bb1ff'
                                },
                                {
                                    offset: 1,
                                    color: '#0c51ff'
                                }
                            ]
                        )
                        }
                    },
                },
                {
                    type: 'bar',
                    barWidth: 20,
                    data: [25,62,10,18],
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#2da23e'
                                    },
                                    {
                                        offset: 1,
                                        color: '#7be45f'
                                    }
                                ]
                            )
                        }
                    },
                },
                // {
                //     name: '背景',
                //     type: 'bar',
                //     barWidth: '',
                //     xAxisIndex: 0,
                //     yAxisIndex: 1,
                //     barGap: '-135%',
                //     data: [10, 10, 10, 10, 10, 10, 10,10, 10, 10, 10, 10, 10, 10,10, 10, 10, 10, 10, 10, 10],
                //     itemStyle: {
                //         normal: {
                //             color: 'rgba(10,143,255,0.1)'
                //         }
                //     },
                //     zlevel: 9
                // },                
                ]     
            },
            twoOption:  {
                series: [{
                    type: 'liquidFill',
                    radius: '95%',
                    // center: ['50%', '40%'],
                    data: [0.21],
                    backgroundStyle: {
                        borderWidth: 1,
                        borderColor: new this.$echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#1bb1ff'
                                },
                                {
                                    offset: 1,
                                    color: '#0c51ff'
                                }
                         ]),
                        color: 'rgba(67,209,100,0)'
                    },
                    label: {
                        normal: {
                            formatter:   '21%',
                            insideColor: 'transparent',
                            textStyle: {
                                fontSize: 32,
                                color:'#ffffff',
                                fontFamily: 'SourceHanSansCN-Bold'
                            }
                        }
                    },
                    outline: {
                        borderDistance: 8,
                        itemStyle: {
                            borderColor: new this.$echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#1bb1ff'
                                },
                                {
                                    offset: 1,
                                    color: '#0c51ff'
                                }
                         ]),
                            borderWidth: 5
                        }
                    },                                                   
                }]
            }
        }
    }
}
</script>
<style lang="less" scoped>
.chemicalenterprise {
    margin-left: 42px;
    &-left {
        .one-data {
            width: 1019px;
            height: 373px;       
            .basebg {
                height: 334px;
                background: url('../../assets/背景宽331.png') no-repeat;
                .chemicalenterprise-data1 {
                    position: relative;
                    width: 530px;
                    float:left;
                    margin-top: 26px;
                    margin-left: 40px;
                    .list {
                        position: absolute;
                        top:0;
                        left:398px;
                        span {
                            font-family: SourceHanSansCN-Regular;
                            font-size: 18px;        
                            color: #80c5ff;
                            display: block;                
                        }
                        span:nth-child(1) {
                            margin-bottom:12px;
                        }
                    }
                }
                .chemicalenterprise-data2 {
                    position: relative;
                    float: left;
                    margin-left: 18px;
                    width: 431px;
                    #twocircle {
                        margin-top: 67px;
                    }
                    .list-num {
                        left: 240px;   
                        top:61px;
                        position: absolute;
                        .item {
                            div:nth-child(1) {
                                font-family: DINNextW1G-MediumItalic;
                                font-size: 54px;   
                                color: #ffffff;         
                                i {
                                    font-family: SourceHanSansCN-Regular;
                                    font-size: 28px;                            color: #ffffff;    
                                }          
                            }
                            div:nth-child(2) {
                                font-family: SourceHanSansCN-Regular;
                                font-size: 22px;
                                color: #80c5ff;  
                                margin-top:19px;                          
                            }
                        }
                        .item:nth-child(1) {
                            margin-bottom: 52px;
                        }    
                    }
                }                        
            }     
        }
    }
}
</style>