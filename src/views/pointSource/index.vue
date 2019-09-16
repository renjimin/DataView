<template>
    <div class="pointSource">
        <div class="pointSource-left">
            <div class="pointSource-one">
                <div class="one-data">
                    <Edging  :title="'全省灌溉情况及灌溉设施整治统计'"  :edgingWidth="'497px'" />
                    <div class="basebg">

                    </div>           
                </div>
                <div class="two-data">
                    <Edging  :title="'“十三五”期间新增高效节水灌溉面积'"  :edgingWidth="'497px'" />
                    <div class="basebg">
                        <Echarts :autoResize="true"  :option="oneOption" height="216px"  id="One-circle"  width="497px" />
                    </div> 
                </div>
                <div class="clear"></div>
            </div>
            <div class="pointSource-two">
                <div class="one-data">
                    <Edging  :title="'病虫害发生趋势数据'"  :edgingWidth="'497px'" />
                </div>
                <div class="two-data">
                    <Edging  :title="'畜禽养殖及设施整治统计'"  :edgingWidth="'576px'" />
                    <div class="frma-Statistics">
                        <div class="statis-img"></div>
                        <div class="base-img"></div>
                    </div>                    
                </div>
                <div class="clear"></div>
            </div>
            <div class="pointSource-three">
                <div class="one-data">
                    <Edging  :title="'畜禽养殖废弃物资源化综合利用率'"  :edgingWidth="'497px'" />

                </div>
                <div class="two-data">
                    <Edging  :title="'规模养殖场粪污处理设施装备配套率'"  :edgingWidth="'576px'" />
                    <div class="fram-data">
                        <Echarts :autoResize="true"  :option="twoOption" height="221px"  id="Two-circle"  width="350px" />
                        <div class="fram-mark">
                            <div><span></span><span>规模养殖场</span></div>
                            <div class="other-mark"><span></span><span>大型规模养殖场</span></div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>                        
        </div>
        <div class="pointSource-center"></div>
        <div class="pointSource-right"></div>
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
        let data = [{
                name: "低压灌溉",
                value: 62
            },
            {
                name: "喷灌",
                value: 22
            },
            {
                name: "微灌",
                value: 16
            }
        ];
        let arrName = getArrayValue(data, "name");
        let arrValue = getArrayValue(data, "value");
        let sumValue = eval(arrValue.join('+'));
        let objData = array2obj(data, "name");
        let optionData = getData(data);
        function getArrayValue(array, key) {
            var key = key || "value";
            var res = [];
            if (array) {
                array.forEach(function(t) {
                    res.push(t[key]);
                });
            }
            return res;
        }

        function array2obj(array,key) {
            var resObj = {};
            for(var i=0;i<array.length;i++){
                resObj[array[i][key]] = array[i];
            }
            return resObj;
        }

        function getData(data) {
            var res = {
                series: [],
                yAxis: []
            };
            for (let i = 0; i < data.length; i++) {
                res.series.push({
                    name: '',
                    type: 'pie',
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
                    center: ["31%", "55%"],
                    label: {
                        show: false
                    },
                    itemStyle: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        },
                        borderWidth: 10,
                    },
                    data: [{
                        value: data[i].value,
                        name: data[i].name
                    }, {
                        value: sumValue - data[i].value,
                        name: '',
                        itemStyle: {
                            color: "rgba(0,0,0,0)",
                            borderWidth: 10
                        },
                        tooltip: {
                            show: false
                        },
                        hoverAnimation: false
                    }]
                });
                res.series.push({
                    name: '',
                    type: 'pie',
                    silent: true,
                    z: 1,
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
                    center: ["31%", "55%"],
                    label: {
                        show: false
                    },
                    itemStyle: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        },
                        borderWidth: 10,
                    },
                    data: [{
                        value: 9,
                        itemStyle: {
                            color: "rgba(0,138,255,.2)",
                            borderWidth: 0
                        },
                        tooltip: {
                            show: false
                        },
                        hoverAnimation: false
                    }, {
                        value: 3,
                        name: '',
                        itemStyle: {
                            color: "rgba(0,0,0,0)",
                            borderWidth: 10
                        },
                        tooltip: {
                            show: false
                        },
                        hoverAnimation: false
                    }]
                });
            }
            res.yAxis = ['62%','22%','16%'];
            return res;
        }        
        return {
            oneOption :{
                legend: {
                    show: true,
                    top: "center",
                    left: '70%',
                    data: arrName,
                    itemWidth: 14,
                    itemHeight: 14,
                    width:50,
                    padding: [0, 5],
                    itemGap: 14,
                    formatter: function(name) {
                        return "{title|" + name + "}"
                    },
                    textStyle: {
                        rich: {
                            title: {
                                fontSize: 18,
                                lineHeight: 10,
                                fontFamily: 'SourceHanSansCN-Regular',
                                color: "#80c5ff"
                            }
                        }
                    },
                },
                tooltip: {
                    show: true,
                    trigger: "item",
                    formatter: "{a}<br>{b}:{c}({d}%)"
                },
                color: [new this.$echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4535d9'
                                },
                                {
                                    offset: 1,
                                    color: '#9461ea'
                                }
                            ]
                        ), new this.$echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#0c51ff'
                                },
                                {
                                    offset: 1,
                                    color: '#1bb1ff'
                                }
                            ]
                        ), new this.$echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#0c9bff'
                                },
                                {
                                    offset: 1,
                                    color: '#51c4ff'
                                }
                            ]
                        )],
                grid: {
                    top: '10%',
                    bottom: '60%',
                    left: "32%",
                    containLabel: false
                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        inside: true,
                        textStyle: {
                            color: "#80c5ff",
                            fontFamily: 'SourceHanSansCN-Regular',
                            fontSize: 18,
                        },
                        show: true
                    },
                    data: optionData.yAxis
                }],
                xAxis: [{
                    show: false
                }],
                series: optionData.series
            },
            twoOption:{
                title: {
                    x: 'center',
                    top: "20",
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter:'{c}%',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                {
                    type : 'category',
                    data : ['2018年','2019年','2020年目标'],
                    axisLabel: {
                        textStyle: {
                            fontSize: 13,
                            fontFamily: 'SourceHanSansCN-Regular',
                            color:'#fff'
                        }
                    },
                }
                ],
                yAxis : [
                {
                    type : 'value',
                    min:0,
                    max:100,                        
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(135,140,147,0)'
                        }
                    },//设置横线样式
                    axisLabel: {
                        formatter:'{value} %',
                        textStyle: {
                            fontSize: '12',
                            color:'#fff'
                        }
                    },
                }
                ],
                series : [
                {
                    name:'规模养殖场',
                    type:'bar',
                    stack: '排名',
                    data:[72, 82, 95],
                    color:new this.$echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#7bd2ff'
                            },
                            {
                                offset: 1,
                                color: '#0c9bff'
                            }
                        ]),
                    itemStyle: {
                        normal: {
                                label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                    textStyle: { //数值样式
                                        color: 'black',
                                        fontSize: 16
                                    }  
                                }
                        }
                    },                   
                    barWidth:32
                },
                {
                    name:'大型规模养殖场',
                    type:'bar',
                    stack: '排名',
                    data:[0,18,0],
                    color:new this.$echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#1bb1ff'
                            },
                            {
                                offset: 1,
                                color: '#0c51ff'
                            }
                        ]),                        
                    barWidth:32,
                    // itemStyle: {
                    //     normal: {
                    //             label: {
                    //             show: true, //开启显示
                    //             position: 'top', //在上方显示
                    //                 textStyle: { //数值样式
                    //                     color: 'black',
                    //                     fontSize: 16
                    //                 }  
                    //             }
                    //     }
                    // }, 
                },
                ]                
            }            
        }
    }
}
</script>
<style lang="less" scoped>
.pointSource {
    &-left {
        margin-left: 50px;
        .pointSource-one {
            .one-data {
                width: 498px;
                height: 423px;    
                float: left;       
                margin-right:26px;                  
                background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));                  
            }
            .two-data {
                width: 498px;
                height: 423px;   
                float: left;   
                .basebg {
                    width: 576px;
                    height: 384px;                   
                    background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));
                }             
            }
        }
        .pointSource-two {
            margin-top: 31px;
            .one-data {
                width: 498px;
                height: 301px;    
                float: left;       
                margin-right:26px;                  
                background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));                   
            }
            .two-data {
                width: 576px;
                height: 301px;    
                float: left;       
                margin-right:26px;                  
                background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));   
                .frma-Statistics {
                    position: relative;
                    height: 301px;    
                    .statis-img {
                        width: 122px;
                        height: 122px;  
                        position: absolute;     
                        top: 96px;
                        bottom:83px;
                        left:235px;
                        display: inline-block;                
                        background: url('../../assets/球 拷贝.png') no-repeat;
                        animation: rotate 30s linear infinite;
                    }
                    .base-img {
                        position: absolute;
                        top:165px;
                        left:150px;
                        height: 76px;
                        width: 285px;
                        background: url('../../assets/微信图片_20190915142642.png');
                    }
                    @keyframes rotate{
                        from{transform: rotate(0deg)}
                        to{transform: rotate(360deg)}
                    }
                }               
            }
        }
        .pointSource-three {
            margin-top: 30px;
            .one-data {
                width: 498px;
                height: 292px;    
                float: left;       
                margin-right:26px;                  
                background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));      
            }
            .two-data {
                width: 576px;
                height: 292px;    
                float: left;       
                margin-right:26px;                  
                background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));   
                .fram-data {
                    position: relative;
                    .fram-mark {
                        position: absolute;
                        top:97px;
                        right:15px;
                        span:nth-child(1) {
                            width: 15px;
                            height: 15px;
                            display: inline-block;
                            background-image: linear-gradient(0deg, 
                                #0c9bff 0%, 
                                #51c4ff 100%);                            
                        }
                        span:nth-child(2) {
                            margin-left: 7px;
                            font-family: SourceHanSansCN-Regular;
                            font-size: 18.02px; 
                            color: #80c5ff;
                        }
                        .other-mark {
                            margin-top: 16px;
                            span:nth-child(1) {
                                background-image: linear-gradient(0deg, 
                                    #0c51ff 0%, 
                                    #1bb1ff 100%);                       
                            }                            
                        }
                    }
                }   
            }
        }
    }
}
</style>