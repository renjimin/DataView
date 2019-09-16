<template>
    <div class="emdepart" style="position: relative;">
        <div class="emdepart-left" style="margin-top: 104px;position: absolute;left: 0;z-index: 1;">
            <div class="emdepart-one">
                <div class="one-data">
                    <Edging  :title="'治理目标'"  :edgingWidth="'498px'" />
                    <div class="onedata-content">2020年底前全省尾矿数量控制在</div>
                    <div class="onedata-num"><span class="effects"><numberCrow :startVal='0' :endVal='200' :duration='3000'></numberCrow></span><span>座以内</span></div>
                </div>
                <div class="one-data">
                    <Edging  :title="'垃圾无害化处理率'"  :edgingWidth="'498px'" />
                    <div class="onedata-content">2018年全省尾矿生产安全事故数量</div>
                    <div class="onedata-num"><span class="effects"><numberCrow :startVal='0' :endVal='0' :duration='3000'></numberCrow></span><span>起</span></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="emdepart-two">
                <Edging  :title="'省尾矿库综合治理专项战役已定责任人的尾矿库（2018年底）'"  :edgingWidth="'1020px'" />
                <Echarts :autoResize="true"  :option="option" height="273px"  id="One-circle"  width="820px" style="float: left;"/>
                <div class="legendBox">
                  <div class="legendListBox">
                    <p><span style="background: linear-gradient(0deg,#0c9bff 0%,#7bd2ff 100%);"></span>未闭库数量</p>
                    <p style="padding-left: 20px;margin-top: 14px;">总计:</p>
                    <div><span class="effects"><numberCrow :startVal='0' :endVal='207' :duration='3000'></numberCrow></span></div>
                  </div>
                  <div class="legendListBox">
                    <p><span style="background: linear-gradient(0deg,#ffa505 0%,#ffe880 100%);"></span>已闭库移交数量</p>
                    <p style="padding-left: 20px;margin-top: 14px;">总计:</p>
                    <div><span class="effects"><numberCrow :startVal='0' :endVal='207' :duration='3000'></numberCrow></span></div>
                  </div>
                </div>
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
        <div class="emdepart-center" style="z-index: 0;">
          <Head :headtitle='"长江大保护全景指挥"'/>
          <SubHead :subheadtitle='"农业面源污染整治工作专题"' />
        </div>
        <div class="right" style="width: 878px;position: absolute;right: -80px;top: 84px;">
          <div>
            <Edging  :title="'专项战役视频'"  :edgingWidth="'878px'" style="margin-top: 25px;" />
            <div style="width: 876px;height: 460px;margin-top: 8px;position: relative;" @click="changeVideo(1)">
              <video id="videoOne" src="../../../public/img/20190909_105212.mp4" style="width: 876px;height: 460px;" autoplay muted loop></video>
              <div style="width: 876px;height: 460px;position: absolute;top: 0;" @click.stop="changeVideo(0)" v-if="stopVideo">
                <img src="../../assets/播放icon.png" alt="" style="margin-top: 210px;margin-left: 398px;">
              </div>
            </div>
          </div>
          <div>
            <Edging  :title="'专题新闻'"  :edgingWidth="'878px'" style="margin-top: 25px;" />
            <div style="width: 876px;height: 636px;margin-top: 8px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);">
              <happy-scroll color="rgba(0,138,255,0.15)" size="10">
                <div style="width: 878px;height: 234px;z-index: 9;">
                  <h5 style="font-family: SourceHanSansCN-Bold;font-size: 20px;color: #fff;line-height: 52px;margin-left: 23px;">我省深入推进长江经济带生产建设项目水保监督执法</h5>
                  <h5 style="font-family: SourceHanSansCN-Bold;font-size: 14px;font-weight: normal;opacity: 0.6;margin-left: 23px;color: #fff;margin-bottom: 20px;">2019-08-14</h5>
                  <p style="padding-bottom: 80px;margin-top: 20px; word-wrap:break-word;word-break:break-all;overflow: hidden;display: block;width: 828px;font-size: 18px;font-family: SourceHanSansCN-Bold;line-height: 24px;color: #80c5ff;margin: 0 auto;margin-top: 4px;">
                    <img src="../../assets/newspic.png" alt="" align="left" hspace="5" vspace="5" style="padding-right: 8px;padding-bottom: 8px;">
                    10月19日，省安监局组织召开全省非煤矿山双重预防机制暨尾矿库综合治理工作推进会，省尾矿库综合治理专项战役指挥部办公室主任、省安监局党组成员、副局长陈年山出席会议并作重要讲话。<br><br>
                    陈年山指出，湖北尾矿库存在数量多、分布广、基础差、风险高等问题，尾矿库综合治理专项战役是全省十大标志性战役的重要组成部分，打好打赢尾矿库综合治理攻坚战是落实习近平视察湖北重要讲话精神的具体行动。今年，各地要在前期工作基础上，进一步增强打好尾矿库综合治理专项战役的政治责任感、紧迫感，确保尾矿库专项战役按期交帐，完成建立“一库一档”，做到	“一库一策”，开展“头顶库”安全风险评估和“头顶库”中的	病库处理等三项任务。2019年，要全面完成无主库中的危、险、病库治理任务，推进尾矿库信息化监管试点工作，以及压实尾矿库综合治理的考核督办工作。<br>
                    陈年山强调，各地要充分认识非煤矿山构建双重预防机制的必要性，进一步加强组织领导，进一步动员部署，强化措施，加大力度。相关企业要抓住重点环节，制定完善有效的管理措施；注重结果运用，直观表现风险辨识分级结果，完善安全风险公告制度；持续改进双控机制的制度漏洞和管理缺陷。同时，将双重预防机制与安全标准工作、“专家会诊”隐患排查工作、非煤矿山专项整治工作相结合，协调推进各项重点工作。<br>
                    陈年山要求，各地要认真做好年底前各项收尾工作。针对一些深层次的矛盾和问题，要继续抓好企业安全主体责任落实，抓好双重机制建设和尾矿库综合治理工作，抓好打非治违和整顿关闭工作，抓好“四大行动”，抓好矿山专项整治工作"
                  </p>
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
import Swiper from 'swiper';
import 'vue-happy-scroll/docs/happy-scroll.css'
import { HappyScroll } from 'vue-happy-scroll'
import SubHead from '@/components/subheading/index'
import numberCrow from '@/components/numberGrow/index'
import Head from '../../components/head/index'
export default {
    components: {
        Edging,
        numberCrow,
        Echarts,
        Swiper,
        HappyScroll,
        SubHead,
        Head
    },
    methods:{
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
          stopVideo:false,
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    show:false,
                    data: ["实际", "预算"],
                    textStyle:{
                      color:'#ffffff'
                    }
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
                        color:'#fff'
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: '',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    axisLabel: {
                        color:'#fff'
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
  .emdepart-center{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/地图总.png);
  }
.emdepart {
  background:url(../../assets/组154.png);
  width:100%;
  height:100%;
  position:relative;
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
            height: 313px;
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

.legendBox{
  width: 160px;
  float: right;
  height: 210px;
  margin-top: 44px;
  margin-right: 24px;
  .legendListBox{
    width: 100%;
    height: 50%;
    p{
      color: #80c5ff;
      font-family: SourceHanSansCN-Regular;
      font-size: 16px;
      span{
        width: 15px;
        height: 15px;
        display: block;
        float: left;
        margin-right: 5px;
      }
    }
    div{
      padding-left: 20px;
      margin-top: 14px;
      font-size: 32px;
      font-family: DINNextW1G-BoldItalic;
      color: #ffffff;
    }
  }
}
</style>
