<template>
    <div class="chemicalenterprise">
        <div class="chemicalenterprise-left" style="float: left;width: 1018px;">
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
          <!-- 沿江关改搬转-涉长江生态环境资源刑事案件 -->
          <div>
            <Edging  :title="'涉长江生态环境资源刑事案件数量'"  :edgingWidth="'1018px'" style="margin-top: 25px;" />
            <div style="width: 1018px;height: 292px;margin-top: 8px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);">
              <div class="box1" style="margin-top: 60px;margin-left: 30px;">
                <div class="dataText" style="top: 50px;left: 44px;">93</div>
                <div style="position: absolute;bottom: 0;color: #80c5ff;font-size: 22px;left: 20px;">2015年</div>
                <div class="ready_btn" id="animat" style="border-color: #008AFF;">
                  <div class="ready_btn2" style="border-color: #008AFF;"></div>
                </div>
                <div class="baro" style="top: 79px;background: rgba(0,138,255,1);left: 35px;"></div>
                <div class="baro" style="top: 138px;background: rgba(0,138,255,1);left: 35px;"></div>
                <div class="bart" style="background: rgba(0,138,255,.4);left: 35px;top: 87px;height: 59px;"></div>
              </div>
              <div class="box1" style="margin-top: 60px;margin-left: 30px;">
                <div class="dataText" style="top: -5px;left: 38px;">199</div>
                <div style="position: absolute;bottom: 0;color: #80c5ff;font-size: 22px;left: 20px;">2015年</div>
                <div class="ready_btn" id="animat" style="border-color: #008AFF;">
                  <div class="ready_btn2" style="border-color: #008AFF;"></div>
                </div>
                <div class="baro" style="top: 24px;background: rgba(0,138,255,1);left: 35px;"></div>
                <div class="baro" style="top: 138px;background: rgba(0,138,255,1);left: 35px;"></div>
                <div class="bart" style="background: rgba(0,138,255,.4);left: 35px;top: 32px;height: 114px;"></div>
              </div>
              <div class="box1" style="margin-top: 60px;margin-left: 30px;">
                <div class="dataText" style="top: -12px;left: 38px;">203</div>
                <div style="position: absolute;bottom: 0;color: #80c5ff;font-size: 22px;left: 20px;">2015年</div>
                <div class="ready_btn" id="animat" style="border-color: #008AFF;">
                  <div class="ready_btn2" style="border-color: #008AFF;"></div>
                </div>
                <div class="baro" style="top: 17px;background: rgba(0,138,255,1);left: 35px;"></div>
                <div class="baro" style="top: 138px;background: rgba(0,138,255,1);left: 35px;"></div>
                <div class="bart" style="background: rgba(0,138,255,.4);left: 35px;top: 25px;height: 121px;"></div>
              </div>
              <div class="box1" style="margin-top: 60px;margin-left: 30px;">
                <div class="dataText" style="top: -18px;left: 38px;">230</div>
                <div style="position: absolute;bottom: 0;color: #80c5ff;font-size: 22px;left: 20px;">2015年</div>
                <div class="ready_btn" id="animat" style="border-color: #008AFF;">
                  <div class="ready_btn2" style="border-color: #008AFF;"></div>
                </div>
                <div class="baro" style="top: 11px;background: rgba(0,138,255,1);left: 35px;"></div>
                <div class="baro" style="top: 138px;background: rgba(0,138,255,1);left: 35px;"></div>
                <div class="bart" style="background: rgba(0,138,255,.4);left: 35px;top: 19px;height: 127px;"></div>
              </div>
              <div style="float: right;width: 310px;height: 208px;margin-right: 45px;margin-top: 40px;">
                <div style="width: 140px;height: 80px;position: relative;float: left;">
                  <img src="../../assets/矩形高84.png" alt="" style="position: absolute;">
                  <div style="font-size: 18px;font-family: SourceHanSansCN-Medium;line-height: 40px;color: #80c5ff;margin-left: 11px;">2015年</div>
                  <div>
                    <img src="../../assets/icon2.png" alt="" style="float: left;margin-left: 12px;margin-top: 2px;">
                    <p style="float: left;font-family: DINNextW1G-MediumItalic;font-size: 28px;color: #ffffff;margin-left: 6px;">93 <span style="font-family: SourceHanSansCN-Regular;font-size: 16px;">件</span></p>
                  </div>
                </div>
                <div style="width: 140px;height: 80px;position: relative;float: right;">
                  <img src="../../assets/矩形高84.png" alt="" style="position: absolute;">
                  <div style="font-size: 18px;font-family: SourceHanSansCN-Medium;line-height: 40px;color: #80c5ff;margin-left: 11px;">2016年</div>
                  <div>
                    <img src="../../assets/icon2.png" alt="" style="float: left;margin-left: 12px;margin-top: 2px;">
                    <p style="float: left;font-family: DINNextW1G-MediumItalic;font-size: 28px;color: #ffffff;margin-left: 6px;">199 <span style="font-family: SourceHanSansCN-Regular;font-size: 16px;">件</span></p>
                  </div>
                </div>
                <div style="width: 140px;height: 80px;position: relative;margin-top: 40px;float: left;">
                  <img src="../../assets/矩形高84.png" alt="" style="position: absolute;">
                  <div style="font-size: 18px;font-family: SourceHanSansCN-Medium;line-height: 40px;color: #80c5ff;margin-left: 11px;">2017年</div>
                  <div>
                    <img src="../../assets/icon2.png" alt="" style="float: left;margin-left: 12px;margin-top: 2px;">
                    <p style="float: left;font-family: DINNextW1G-MediumItalic;font-size: 28px;color: #ffffff;margin-left: 6px;">203 <span style="font-family: SourceHanSansCN-Regular;font-size: 16px;">件</span></p>
                  </div>
                </div>
                <div style="width: 140px;height: 80px;position: relative;margin-top: 40px;float: right;">
                  <img src="../../assets/矩形高84.png" alt="" style="position: absolute;">
                  <div style="font-size: 18px;font-family: SourceHanSansCN-Medium;line-height: 40px;color: #80c5ff;margin-left: 11px;">2018年</div>
                  <div>
                    <img src="../../assets/icon2.png" alt="" style="float: left;margin-left: 12px;margin-top: 2px;">
                    <p style="float: left;font-family: DINNextW1G-MediumItalic;font-size: 28px;color: #ffffff;margin-left: 6px;">230 <span style="font-family: SourceHanSansCN-Regular;font-size: 16px;">件</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 排污口治理 -->
          <div>
            <Edging  :title="'企业排污口治理数据统计'"  :edgingWidth="'1018px'" style="margin-top: 25px;" />
            <div style="width: 1018px;height: 331px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);position: relative;">
              <div style="width: 196px;height: 143px;top: 100px;left: 29px;position: absolute;" class="polygon">
                <div style="width: 100%;font-size: 29px;line-height: 40px;font-family: DINNextW1G-MediumItalic;text-align: center;color: #fff;margin-top: 31px;">352 <span style="font-size: 18px;font-family: SourceHanSansCN-Medium;">处</span></div>
                <div style="text-align: center;font-size: 20px;font-family: SourceHanSansCN-Bold;color: #80c5ff;">2018年整治数量</div>
              </div>
              <div style="width: 196px;height: 143px;top: 100px;left: 239px;position: absolute;" class="polygon">
                <div style="width: 100%;font-size: 29px;line-height: 40px;font-family: DINNextW1G-MediumItalic;text-align: center;color: #fff;margin-top: 31px;">616 <span style="font-size: 18px;font-family: SourceHanSansCN-Medium;">处</span></div>
                <div style="text-align: center;font-size: 20px;font-family: SourceHanSansCN-Bold;color: #80c5ff;">2019年整治数量</div>
              </div>
              <div class="lableBox">
                <ul class="labelList">
                  <li><span style="background: linear-gradient(0deg,#ffa505 0%,#ffc743 27%,#ffe880 100%);"></span> 登记和手续补办</li>
                  <li><span style="background: linear-gradient(0deg,#0c9bff 0%,#7bd2ff 100%);"></span> 补办登记和审批手续</li>
                  <li><span style="background: linear-gradient(0deg,#ff7b05 0%,#ffc280 100%);"></span> 关停封堵或并入污水处理厂</li>
                  <li><span style="background: linear-gradient(180deg,#56d7d2 54%,#0cb281 100%);"></span> 关停封堵、迁建改造等</li>
                </ul>
                <div class="labelNum">
                  <p>2019年整治数量 <span>616</span> 个</p>
                </div>
              </div>
              <div style="width: 230px;height: 230px;float: right;margin-right: 20px;" class="sectorBox">
                <div style="width: 214px;height: 212px;position: relative;overflow: hidden;">
                  <div class="sector1"></div>
                  <div class="sector2"></div>
                  <div class="sector3"></div>
                  <div class="sector4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="chemicalenterprise-center">
          <Head :headtitle='"长江大保护全景指挥"'/>
          <SubHead :subheadtitle='"沿江化工企业关改搬转工作专题展示"' />
        </div>
        <div class="chemicalenterprise-right" style="width: 878px;float:right;margin-top: 104px;">
          <div>
            <Edging  :title="'专项战役视频'"  :edgingWidth="'878px'" style="margin-top: 25px;" />
            <div style="width: 876px;height: 493px;margin-top: 8px;position: relative;" @click="changeVideo(1)">
              <video id="videoOne" src="../../../public/img/20190909_105212.mp4" style="width: 876px;height: 493px;" autoplay muted loop></video>
              <div style="width: 876px;height: 493px;position: absolute;top: 0;" @click.stop="changeVideo(0)" v-if="stopVideo">
                <img src="../../assets/播放icon.png" alt="" style="margin-top: 222px;margin-left: 398px;">
              </div>
            </div>
          </div>
          <div>
            <Edging  :title="'图片对比'"  :edgingWidth="'878px'" style="margin-top: 25px;" />
            <div style="margin-top: 8px;width: 878px;height: 234px;">
              <div style="float: left;width: 435px;height: 234px;position: relative;">
                <div style="position: absolute;height: 55px;width: 100%;bottom: 0;">
                  <div style="color: #fff;line-height: 55px;text-align: center;float: left;width: 139px;background: #4291c7;font-size: 34px;">改造前</div>
                  <div style="width: 282px;line-height: 55px;padding-left: 14px;color: #fff;font-size: 20px;background: rgba(0,0,0,0.6);float: left;">宜昌田田化工厂</div>
                </div>
                <img src="../../assets/矢量智能对象.png" alt="">
              </div>
              <div style="float: left;width: 435px;height: 234px;margin-left: 8px;position: relative;">
                <img src="../../assets/矢量智能对象2.png" alt="">
                <div style="position: absolute;height: 55px;width: 100%;bottom: 0;">
                  <div style="color: #fff;line-height: 55px;text-align: center;float: left;width: 139px;background: #4291c7;font-size: 34px;">改造后</div>
                  <div style="width: 282px;line-height: 55px;padding-left: 14px;color: #fff;font-size: 20px;background: rgba(0,0,0,0.6);float: left;">宜昌田田化工厂</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Edging  :title="'新闻报道'"  :edgingWidth="'878px'" style="margin-top: 25px;" />
            <div style="position: relative;;width: 878px;height: 234px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);">
              <happy-scroll color="rgba(0,138,255,0.15)" size="10">
                <div style="width: 878px;height: 234px;z-index: 9;">
                  <h5 style="font-family: SourceHanSansCN-Bold;font-size: 20px;color: #fff;line-height: 52px;margin-left: 23px;">我省深入推进长江经济带生产建设项目水保监督执法</h5>
                  <h5 style="font-family: SourceHanSansCN-Bold;font-size: 14px;font-weight: normal;opacity: 0.6;margin-left: 23px;color: #fff;">2019-08-14</h5>
                  <p style="display: block;width: 828px;font-size: 18px;font-family: SourceHanSansCN-Bold;line-height: 24px;color: #80c5ff;margin: 0 auto;margin-top: 4px;">（厅水土保持处）8月13日,我省生产建设项目水土保持监督管理推进会在武汉召开。省水利厅党组成员、副厅长唐俊出席会议并讲话。<br>会议传达了水利部有关会议精神，总结上半年各地开展生产建设项目水土保持监督管理工作进展及成效，分析当前监督管理工作存在的主要问题，部署下步水土保持监督管理工作。<br>唐俊强调，推动长江经济带发展是党中央作出的重大决策，开展长江经济带生产建设项目水土保持专项执法行动，是我省贯彻落实习近平总书记视察湖北重要讲话精神的重要举措。</p>
                </div>
              </happy-scroll>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import Echarts from '@/components/echarts/echarts'
import Edging from '@/components/edging/index'
import SubHead from '@/components/subheading/index'
import Head from '../../components/head/index'
export default {
  components: {
    Echarts,
    Edging,
    SubHead,
    Head
  },
  methods: {
    changeVideo (e) {
      var video1 = document.getElementById("videoOne");
      if (e == 1) {
        video1.pause();
        this.stopVideo = true;
      } else if (e == 0) {
        video1.play();
        this.stopVideo = false;
      }
    }
  },
  data () {
    let xData = ['关闭', '改造', '搬迁', '转产'];
    let yData =  [66, 238, 120, 81, 54];
    return {
      stopVideo: false,
      oneOption: {
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
          formatter: function (prams) {
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
            show: false,
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
          }
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
            }
          },
          {
            type: 'bar',
            barWidth: 20,
            data: [25, 62, 10, 18],
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
            }
          }
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
      twoOption: {
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
              formatter: '21%',
              insideColor: 'transparent',
              textStyle: {
                fontSize: 32,
                color: '#ffffff',
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
          }
        }]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.chemicalenterprise {
    background:url(../../assets/组154.png);
    width:100%;
    height:100%;
    position:relative;

    &-left {
      margin-left:42px;
      margin-top:104px;
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
  .chemicalenterprise-center{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/地图总.png);
  }

  .box1{
		width: 114px;
    height: 200px;
		position: relative;
    float: left;
		/* margin: 0 auto; */
	}
  .dataText{
    position: absolute;
    color: #fff;
    font-size: 20px;
    left: 30px;
  }
	.baro{
		position: absolute;
		width: 44px;
		height: 14px;
		border-radius: 50%;
	}
	.bart{
		width: 44px;
		position: absolute;
	}
	#animat{
	    position:relative;
	    animation:mymove 3s infinite;
	    animation-direction:alternate;/*轮流反向播放动画。*/
	    animation-timing-function: ease-in-out; /*动画的速度曲线*/
	    -webkit-animation:mymove 3s infinite; /*Safari and Chrome*/
	    -webkit-animation-direction:alternate;/*轮流反向播放动画。*/
	    -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
	}
	@keyframes mymove{
	    0%{
	        transform: scale(1);  /*开始为原始大小*/
	    }
	    25%{
	        transform: scale(1.2); /*放大1.1倍*/
	    }
	    50%{
	        transform: scale(1);
	    }
	    75%{
	        transform: scale(1.2);
	    }
	}
	@-webkit-keyframes mymove{
	    0%{
	        transform: scale(1);
	    }
	    25%{
	        transform: scale(1.2);
	    }
	    50%{
	        transform: scale(1);
	    }
	    75%{
	        transform: scale(1.2);
	    }
	}
	.bounce-enter-active {
	  animation: bounce-in 1s;
	}
	.bounce-leave-active {
	  animation: bounce-in 1s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(1.5);
	  }
	  50% {
	    transform: scale(1);
	  }
	  100% {
	    transform: scale(1.5);
	  }
	}
	.ready_btn {
	  height: 30px;
	  width: 80px;
		border-radius: 50%;
		border: 1px dashed;
	  margin: 0 auto;
		position: absolute;
		top: 130px;
	}
	.ready_btn2{
		width: 62.5px;
		height: 22.5px;
		border: 1px solid;
		margin-left: 7.5px;
		margin-top: 2.5px;
		border-radius: 50%;
	}
  .point{
  	width: 70px;
  	height: 90px;
  	background: url(../../assets/point1.png)no-repeat center;
  	position: absolute;
  	animation: jump .8s infinite;
  }
  .circleBox{
    position: absolute;
    width:216px;
    height:156px;
    .textBox{
      background: url(../../assets/宜昌56.png);
      width: 216px;
      height: 120px;
    }
    .circleOne{
      width: 70px;
      height: 34px;
      margin: 0 auto;
      background: url(../../assets/圈拷贝7.png) no-repeat center;
      animation:mymove 3s infinite;
      animation-direction:alternate;/*轮流反向播放动画。*/
      animation-timing-function: ease-in-out; /*动画的速度曲线*/
    }
  }

  @keyframes jump {
      0% {
          transform: translate(0px, 0px);
      }
      50% {
          transform: translate(0px, -10px);
      }
      100% {
          transform: translate(0px, 0px);
      }
  }
  .polygon{
    background: url(../../assets/多边形.png);
  }
  .sectorBox{
    background: url(../../assets/统计.png)no-repeat;
    background-position: 12px 6px;
    margin-top: 50px;
    // margin-right: 300px;
  }
  .lableBox{
    float: right;
    margin-right: 20px;
    width: 280px;
    height: 230px;
    margin-top:50px;
    .labelList{
      height: 120px;
      width: 280px;
      li{
        width: 100%;
        height: 30px;
        font-size: 18px;
        line-height: 30px;
        font-family: SourceHanSansCN-Regular;
        color: #80c5ff;
        span{
          display: block;
          width: 14px;
          height: 14px;
          margin-top: 9px;
          float: left;
          margin-right: 10px;
        }
      }
    }
    .labelNum{
      width: 273px;
      height: 60px;
      background: url(../../assets/矩形273.png);
      margin-top:34px;
      p{
        text-align: center;
        font-size: 16px;
        color: #80c5ff;
        line-height: 50px;
        span{
          font-size: 28px;
          color: #fff;
        }
      }
    }
  }
  .sector1{
    position: absolute;
    background: linear-gradient(180deg,#7bd2ff,#0c9bff;);
    width: 120px;
    height: 120px;
    right: -60px;
    bottom: -60px;
    border-radius: 50%;
    // clip: rect(0px,60px,60px,0px);
    box-shadow: 0px 5px 5px 10px rgba(0,0,0,.2),0px 5px 5px 2px  rgba(0,0,0,.2);
    z-index: 12;
    transition: all 0.15s;
    cursor: pointer;
    &:hover{
      transition: all 0.15s;
      width: 128px;
      height: 128px;
      right: -64px;
      bottom: -64px;
    }
  }
  .sector2{
    position: absolute;
    background: linear-gradient(180deg,#ffe880,#ffa505,#ffa505;);
    width: 190px;
    height: 190px;
    right: -95px;
    bottom: -95px;
    border-radius: 50%;
    transform: rotate(-35deg);
    clip: rect(0px,95px,95px,0px);
    box-shadow: 0px 5px 5px 10px rgba(0,0,0,.2),0px 5px 5px 2px  rgba(0,0,0,.2);
    z-index: 11;
    transition: all 0.15s;
    cursor: pointer;
    &:hover{
      transition: all 0.15s;
      width: 198px;
      height: 198px;
      right: -99px;
      bottom: -99px;
      clip: rect(0px,99px,99px,0px);
    }
  }
  .sector3{
    position: absolute;
    background: linear-gradient(180deg,#ffc280,#ff7b05,#ff7b05;);
    width: 260px;
    height: 260px;
    right: -130px;
    bottom: -130px;
    border-radius: 50%;
    transform: rotate(-60deg);
    clip: rect(0px,130px,130px,0px);
    box-shadow: 0px 5px 5px 10px rgba(0,0,0,.2),0px 5px 5px 2px  rgba(0,0,0,.2);
    z-index: 10;
    transition: all 0.15s;
    cursor: pointer;
    &:hover{
      transition: all 0.15s;
      width: 268px;
      height: 268px;
      right: -134px;
      bottom: -134px;
      clip: rect(0px,134px,134px,0px);
    }
  }
  .sector4{
    position: absolute;
    background: linear-gradient(180deg,#56d7d2,#0cb281,#0cb281,#0cb281;);
    width: 332px;
    height: 332px;
    right: -166px;
    bottom: -166px;
    border-radius: 50%;
    transform: rotate(-80deg);
    clip: rect(0px,166px,166px,0px);
    box-shadow: 0px 5px 5px 10px rgba(0,0,0,.2),0px 5px 5px 2px  rgba(0,0,0,.2);
    z-index: 9;
    transition: all 0.15s;
    cursor: pointer;
    &:hover{
      transition: all 0.15s;
      width: 340px;
      height: 340px;
      right: -170px;
      bottom: -170px;
      clip: rect(0px,170px,170px,0px);
    }
  }
</style>
