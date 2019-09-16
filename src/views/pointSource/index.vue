<template>
    <div class="pointSource" style="position: relative;">
        <div class="pointSource-left" style="width: 1173px;margin-top: 104px;position: absolute;left: 0;">
            <div class="pointSource-one" style="width: 1173px;">
                <div class="one-data">
                    <Edging  :title="'全省灌溉情况及灌溉设施整治统计'"  :edgingWidth="'497px'" />
                    <div style="height: 372px;width: 497px;margin-top: 8px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);display: flex;flex-wrap: wrap;justify-content: space-around;">
                      <div style="width: 196px;height: 143px;margin-top: 20px;position: relative;" class="polygon">
                        <div style="width: 100%;font-size: 29px;line-height: 40px;font-family: DINNextW1G-MediumItalic;text-align: center;color: #fff;margin-top: 31px;">4667.24 <span style="font-size: 18px;font-family: SourceHanSansCN-Medium;">万亩</span></div>
                        <div style="text-align: center;font-size: 20px;font-family: SourceHanSansCN-Bold;color: #80c5ff;">有效灌溉面积</div>
                      </div>
                      <div style="width: 196px;height: 143px;margin-top: 20px;position: relative;" class="polygon">
                        <div style="width: 100%;font-size: 29px;line-height: 40px;font-family: DINNextW1G-MediumItalic;text-align: center;color: #fff;margin-top: 31px;">1.4 <span style="font-size: 18px;font-family: SourceHanSansCN-Medium;">万处</span></div>
                        <div style="text-align: center;font-size: 20px;font-family: SourceHanSansCN-Bold;color: #80c5ff;">改造配套建筑</div>
                      </div>
                      <div style="width: 196px;height: 143px;position: relative;" class="polygon">
                        <div style="width: 100%;font-size: 29px;line-height: 40px;font-family: DINNextW1G-MediumItalic;text-align: center;color: #fff;margin-top: 31px;">1.3 <span style="font-size: 18px;font-family: SourceHanSansCN-Medium;">万余公里</span></div>
                        <div style="text-align: center;font-size: 20px;font-family: SourceHanSansCN-Bold;color: #80c5ff;">整治骨干渠道</div>
                      </div>
                      <div style="width: 196px;height: 143px;position: relative;" class="polygon">
                        <div style="width: 100%;font-size: 29px;line-height: 40px;font-family: DINNextW1G-MediumItalic;text-align: center;color: #fff;margin-top: 31px;">1000 <span style="font-size: 18px;font-family: SourceHanSansCN-Medium;">万亩</span></div>
                        <div style="text-align: center;font-size: 20px;font-family: SourceHanSansCN-Bold;color: #80c5ff;">增调有效灌溉面积</div>
                      </div>
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
                    <div style="width: 498px;height: 292px;margin-top: 8px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);">
                      <div class="box1" style="margin-top: 60px;">
                        <div style="position: absolute;bottom: 0;color: #80c5ff;font-size: 22px;left: 20px;">2018年</div>
                      	<div class="ready_btn" id="animat" style="border-color: #008AFF;">
                      		<div class="ready_btn2" style="border-color: #008AFF;"></div>
                      	</div>
                      	<div class="baro" style="top: -11px;background: rgba(0,138,255,1);left: 35px;"></div>
                      	<div class="baro" style="top: 138px;background: rgba(0,138,255,1);left: 35px;"></div>
                      	<div class="bart" style="background: rgba(0,138,255,.4);left: 35px;top: -3px;height: 149px;"></div>
                      </div>
                      <div class="box1" style="margin-top: 60px;margin-left: 30px;">
                        <div style="position: absolute;bottom: 0;color: #80c5ff;font-size: 22px;left: 20px;">2019年</div>
                      	<div class="ready_btn" id="animat" style="border-color: #008AFF;">
                      		<div class="ready_btn2" style="border-color: #008AFF;"></div>
                      	</div>
                      	<div class="baro" style="top: -25px;background: rgba(0,138,255,1);left: 35px;"></div>
                      	<div class="baro" style="top: 138px;background: rgba(0,138,255,1);left: 35px;"></div>
                      	<div class="bart" style="background: rgba(0,138,255,.4);left: 35px;top: -17px;height: 163px;"></div>
                      </div>
                      <div style="float: right;width: 140px;margin-right: 45px;margin-top: 60px;">
                        <div style="width: 140px;height: 80px;position: relative;">
                          <img src="../../assets/矩形高84.png" alt="" style="position: absolute;">
                          <div style="font-size: 18px;font-family: SourceHanSansCN-Medium;line-height: 40px;color: #80c5ff;margin-left: 11px;">2018年</div>
                          <div>
                            <img src="../../assets/icon.png" alt="" style="float: left;margin-left: 12px;margin-top: 4px;">
                            <p style="float: left;font-family: DINNextW1G-MediumItalic;font-size: 28px;color: #ffffff;margin-left: 6px;">51.5<span style="font-family: SourceHanSansCN-Regular;font-size: 16px;">万亩</span></p>
                          </div>
                        </div>
                        <div style="width: 140px;height: 80px;position: relative;margin-top: 16px;">
                          <img src="../../assets/矩形高84.png" alt="" style="position: absolute;">
                          <div style="font-size: 18px;font-family: SourceHanSansCN-Medium;line-height: 40px;color: #80c5ff;margin-left: 11px;">2019年</div>
                          <div>
                            <img src="../../assets/icon.png" alt="" style="float: left;margin-left: 12px;margin-top: 4px;">
                            <p style="float: left;font-family: DINNextW1G-MediumItalic;font-size: 28px;color: #ffffff;margin-left: 6px;">47.5<span style="font-family: SourceHanSansCN-Regular;font-size: 16px;">万亩</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    <div style="width: 498px;height: 283px;margin-top: 8px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);display: flex;justify-content: space-around;">
                      <div style="height: 100%;width: 130px;">
                        <div style="width: 100%;text-align: center;color: #fff;font-family: SourceHanSansCN-Bold;font-size: 24px;line-height: 36px;margin-top: 26px;">2018年</div>
                        <Echarts :autoResize="true" :option="dataOne[0]" height="114px" id="leftChartOne" width="114px" style="padding-left: 8px;margin-top: 34px;" />
                      </div>
                      <div style="height: 100%;width: 130px;">
                        <div style="width: 100%;text-align: center;color: #fff;font-family: SourceHanSansCN-Bold;font-size: 24px;line-height: 36px;margin-top: 26px;">2019年</div>
                        <Echarts :autoResize="true" :option="dataOne[1]" height="114px" id="leftChartTwo" width="114px" style="padding-left: 8px;margin-top: 34px;" />
                      </div>
                      <div style="height: 100%;width: 130px;">
                        <div style="width: 100%;text-align: center;color: #fff;font-family: SourceHanSansCN-Bold;font-size: 24px;line-height: 36px;margin-top: 26px;">2020年目标</div>
                        <Echarts :autoResize="true" :option="dataOne[2]" height="114px" id="leftChartThree" width="114px" style="padding-left: 8px;margin-top: 34px;" />
                      </div>
                    </div>
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
        <div class="pointSource-center">
          <Head :headtitle='"长江大保护全景指挥"'/>
          <SubHead :subheadtitle='"农业面源污染整治工作专题"' />
        </div>
        <div class="right" style="width: 878px;position: absolute;right: -120px;top: 84px;">
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
            <Edging  :title="'专题新闻'"  :edgingWidth="'878px'" style="margin-top: 25px;" />
            <div style="width: 878px;height: 557px;margin-top: 8px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);">
              <div id="certify" style="width: 700px;height: 240px;position: relative;margin: 0 auto;">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" style="width: 415px;height: 203px;"><img src="../../assets/pic683.png" style="width: 415px;height: 203px;" /></div>
                    <div class="swiper-slide" style="width: 415px;height: 203px;"><img src="../../assets/pic684.png" style="width: 415px;height: 203px;" /></div>
                    <div class="swiper-slide" style="width: 415px;height: 203px;"><img src="../../assets/pic685.png" style="width: 415px;height: 203px;" /></div>
                    <div class="swiper-slide" style="width: 415px;height: 203px;"><img src="../../assets/pic683.png" style="width: 415px;height: 203px;" /></div>
                    <div class="swiper-slide" style="width: 415px;height: 203px;"><img src="../../assets/pic684.png" style="width: 415px;height: 203px;" /></div>
                  </div>
                </div>
                <div class="swiper-button-prev" style="width: 100px;height: 160px;margin-top: -100px;margin-left: 20px;outline: none;background: none;"></div>
                <div class="swiper-button-next" style="width: 100px;height: 160px;margin-top: -100px;margin-right: 20px;outline: none;background: none;"></div>
              </div>
              <div style="width: 743px;height: 58px;font-size: 24px;font-family: SourceHanSansCN-Bold;line-height: 34px;color: #fff;margin: 0 auto;position: relative;">恩施州农业面源污染整治专项战役指挥部在州农业农村局召开成员单位联席会议
                <div style="position: absolute;bottom: -18px;right: 20px;font-size: 16px;font-family: SourceHanSansCN-Regular;color: #6e8fb0;display: block;">2019-08-13 13:20</div>
              </div>
              <div style="width: 747px;height: 138px;font-family: SourceHanSansCN-Regular;font-size: 18px;line-height: 30px;color: #80c5ff;margin: 0 auto;margin-top: 32px;text-indent: 36px;">恩施州农业面源污染整治专项战役指挥部在州农业农村局召开成员单位联席会议，州直9个成员单位参加了联席会议。会上，各成员单位负责人分别汇报了2019年上半年全州农业面源污染整治专项战役工作部署和进展情况，对全州农业面源污染整治专项战役2019年度重点工作清单进行了讨论，并结合部门工作职责，就如何有力推进全州农业面源污染整治专项战役提出了建议。
              </div>
            </div>
          </div>
        </div>

        
    </div>
</template>
<script>
import Echarts from '@/components/echarts/echarts'
import Edging from '@/components/edging/index'
import Swiper from 'swiper';
import 'vue-happy-scroll/docs/happy-scroll.css'
import { HappyScroll } from 'vue-happy-scroll'
import SubHead from '@/components/subheading/index'
import Head from '../../components/head/index'
export default {
  components: {
    Edging,
    Echarts,
    Swiper,
    HappyScroll,
    SubHead,
    Head
  },
  mounted () {
    this.setSwiper()
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
    },
    setSwiper () {
      var certifySwiper = new Swiper('#certify .swiper-container', {
          	watchSlidesProgress: true,
          	slidesPerView: 'auto',
          	centeredSlides: true,
          	loop: true,
        autoplay: true,
          	loopedSlides: 5,
          	autoplay: {
          	    delay: 2000,
          	    stopOnLastSlide: false,
          	    disableOnInteraction: true
          	    },
          	navigation: {
          		nextEl: '.swiper-button-next',
          		prevEl: '.swiper-button-prev'
          	},
          	on: {
          		progress: function (progress) {
          			for (var i = 0; i < this.slides.length; i++) {
          				var slide = this.slides.eq(i);
          				var slideProgress = this.slides[i].progress;
          				var modify = 1;
          				if (Math.abs(slideProgress) > 1) {
          					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
          				}
          				var translate = slideProgress * modify * 260 + 'px';
          				var scale = 1 - Math.abs(slideProgress) / 5;
          				var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
          				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
          				slide.css('zIndex', zIndex);
          				slide.css('opacity', 1);
          				if (Math.abs(slideProgress) > 3) {
          					slide.css('opacity', 0);
          				}
          			}
          		},
          		setTransition: function (transition) {
          			for (var i = 0; i < this.slides.length; i++) {
          				var slide = this.slides.eq(i)
          				slide.transition(transition);
          			}
          		}
          	}
      })
    }
  },
  data () {
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
    function getArrayValue (array, key) {
      var key = key || "value";
      var res = [];
      if (array) {
        array.forEach(function (t) {
          res.push(t[key]);
        });
      }
      return res;
    }

    function array2obj (array, key) {
      var resObj = {};
      for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
      }
      return resObj;
    }

    function getData (data) {
      var res = {
        series: [],
        yAxis: []
      };
      for (let i = 0; i < data.length; i++) {
        res.series.push({
          name: '',
          type: 'pie',
          clockWise: false, // 顺时加载
          hoverAnimation: false, // 鼠标移入变大
          radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
          center: ["31%", "55%"],
          label: {
            show: false
          },
          itemStyle: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            borderWidth: 10
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
          clockWise: false, // 顺时加载
          hoverAnimation: false, // 鼠标移入变大
          radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
          center: ["31%", "55%"],
          label: {
            show: false
          },
          itemStyle: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            borderWidth: 10
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
      res.yAxis = ['62%', '22%', '16%'];
      return res;
    }
    return {
      stopVideo: false,
      dataOne: [
        {
          title: {
            text: '66%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#fff',
              fontSize: '26'
            }
          },
          color: ['rgba(95, 82, 160, 0.1)'],
          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: ['47', '57'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 66,
              name: '已使用',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#2ea33f' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#79e25e' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              name: '未使用',
              value: 36
            }]
          }]
        },
        {
          title: {
            text: '72%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#fff',
              fontSize: '26'
            }
          },
          color: ['rgba(95, 82, 160, 0.1)'],
          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: ['47', '57'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 72,
              name: '已使用',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#ffa607' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#ffe67d' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              name: '未使用',
              value: 28
            }]
          }]
        },
        {
          title: {
            text: '75%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#fff',
              fontSize: '26'
            }
          },
          color: ['rgba(95, 82, 160, 0.1)'],
          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: ['47', '57'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 75,
              name: '已使用',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#0c52ff' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#1baeff' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              name: '未使用',
              value: 25
            }]
          }]
        }
      ],
      oneOption: {
        legend: {
          show: true,
          top: "center",
          left: '70%',
          data: arrName,
          itemWidth: 14,
          itemHeight: 14,
          width: 50,
          padding: [0, 5],
          itemGap: 14,
          formatter: function (name) {
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
          }
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
              fontSize: 18
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
      twoOption: {
        title: {
          x: 'center',
          top: "20",
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c}%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['2018年', '2019年', '2020年目标'],
            axisLabel: {
              textStyle: {
                fontSize: 13,
                fontFamily: 'SourceHanSansCN-Regular',
                color: '#fff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 100,
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: 'rgba(135,140,147,0)'
              }
            }, // 设置横线样式
            axisLabel: {
              formatter: '{value} %',
              textStyle: {
                fontSize: '12',
                color: '#fff'
              }
            }
          }
        ],
        series: [
          {
            name: '规模养殖场',
            type: 'bar',
            stack: '排名',
            data: [72, 82, 95],
            color: new this.$echarts.graphic.LinearGradient(
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
                  show: true, // 开启显示
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: 'black',
                    fontSize: 16
                  }
                }
              }
            },
            barWidth: 32
          },
          {
            name: '大型规模养殖场',
            type: 'bar',
            stack: '排名',
            data: [0, 18, 0],
            color: new this.$echarts.graphic.LinearGradient(
              0, 0, 0, 1, [{
                offset: 0,
                color: '#1bb1ff'
              },
              {
                offset: 1,
                color: '#0c51ff'
              }
              ]),
            barWidth: 32
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
          }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .pointSource-center{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/地图总.png);
  }

.pointSource {
  background:url(../../assets/组154.png);
  width:100%;
  height:100%;
  position:relative;
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
                height: 340px;
                float: left;
                margin-right:26px;
                background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));
            }
            .two-data {
                width: 576px;
                height: 340px;
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
                height: 330px;
                float: left;
                margin-right:26px;
                background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1));
            }
            .two-data {
                width: 576px;
                height: 330px;
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
.polygon{
    background: url(../../assets/多边形.png);
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
</style>
