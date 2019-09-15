<template>
    <div class="chemicalenterprise">
        <div class="chemicalenterprise-left">
            <div class="one-data">
                <Edging  :title="'沿江化工企业“关改搬转”情况'"  :edgingWidth="'1019px'" />
                <Echarts :autoResize="true"  :option="oneOption" height="280px"  id="onecircle"  width="383px" />
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
        let xData = ['8:00-10:00','10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00'];
        let yData =  [66,238,120,81,54];      
        return {     
            oneOption:{
                backgroundColor: "#111c4e",
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
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#0c3b71'
                        }
                    },
                    axisLabel: {
                        show: true,
                        color: 'rgb(170,170,170)',
                        fontSize: 16
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
                                color: '#0c3b71'
                            }
                        },
                        axisLabel: {
                            color: 'rgb(170,170,170)',
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
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                            }
                        }
                    }
                ],
                series: [{
                        name: '办理数',
                        type: 'bar',
                        barWidth: '30%',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                textStyle: {
                                    color: "#ffc72b",
                                    fontSize: 20
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#00feff'
                                        },
                                        {
                                            offset: 0.5,
                                            color: '#027eff'
                                        },
                                        {
                                            offset: 1,
                                            color: '#0286ff'
                                        }
                                    ]
                                )
                            }
                        },
                        data: yData,
                        zlevel: 11

                    },
                    {
                        name: '背景',
                        type: 'bar',
                        barWidth: '50%',
                        xAxisIndex: 0,
                        yAxisIndex: 1,
                        barGap: '-135%',
                        data: [100, 100, 100, 100, 100, 100, 100],
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,0.1)'
                            }
                        },
                        zlevel: 9
                    },

                ]     
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>