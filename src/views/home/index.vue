<template>
    <div class="overallview">
		<div class="map">
			<Head :headtitle='"长江大保护全景指挥"'/>
            <SubHead :subheadtitle='"河道非法采砂整治专题工作"' />
		  <div class="point" style="top: 216px;left: 1968px;"></div>
		  <div class="point" style="top: 617px;left: 1956px;"></div>
		  <div class="point" style="top: 780px;left: 1993px;"></div>
		  <div class="point" style="top: 783px;left: 1804px;"></div>
		  <div class="point" style="top: 1005px;left: 1689px;"></div>
		  <div class="point" style="top: 794px;left: 2350px;"></div>
		  <div class="point" style="top: 505px;left: 2315px;"></div>
		  <div class="point" style="top: 459px;left: 2573px;"></div>
		  <div class="point" style="top: 781px;left: 2680px;"></div>
		  <div class="point" style="top: 879px;left: 3140px;"></div>
		  <div class="circleBox" style="left: 2110px;top: 642px;">
		    <div class="textBox"></div>
		    <div class="circleOne">
          <div style="width: 44px;height: 22px;border-radius: 50%;box-sizing: border-box;z-index: 2;position: absolute;top: 0;">
            <div style="width: 22px;height: 11px;margin: 0 auto;border-radius: 50%;margin-top: 4px;background: rgba(255,255,255,0.4);border: 1px solid rgba(255,255,255,0.6);"></div>
          </div>
          <span></span>
          <span></span>
        </div>
		  </div>
		</div>
		<div style="position: absolute;width: 100px;height: 100px;bottom: 20px;right: 1400px;background: #021e37;"></div>
        <div class="left">
            <div class="one-data">
                <Edging  :title="'2019年第一季度各项数据统计'"  :edgingWidth="'1016px'" />
                <div class="basebg">
                    <div class="data-count">
                        <div v-for="item in oneData"  :key="item.key" class="item">
                            <img :src="item.img" alt="">
                            <span class="num effects">
                                <numberCrow :startVal='0' :endVal='item.num' :duration='3000'></numberCrow>
                                </span>
                            <span class="unit effects">
                                {{item.unit}}
                            </span>
                            <div>{{item.desc}}</div>
                        </div>
                        <!-- <div>{{item.desc}}</div> -->
                    </div>
                </div>
            </div>
            <div class="two-data">
                <div class="one-sanddata">
                    <Edging  :title="'2019年第一季度采砂相关数据'"  :edgingWidth="'497px'" />
                    <div class="basebg">
                        <div class="item-text1">
                            <div class="title">许可采砂项目数量</div>
                            <div class="num effects">
                                <numberCrow :startVal='63' :endVal='78' :duration='3000'></numberCrow>
                                <i>个</i>
                            </div>
                        </div>
                        <div class="item-text2">
                            <div class="title">累计采砂总量数</div>
                            <div class="num"><numberCrow :startVal='0' :endVal='163' :duration='3000'></numberCrow><i>万吨</i></div>
                        </div>
                    </div>
                </div>
                <div class="two-sanddata enforceData">
                    <Edging  :title="'2018-2019年执法相关数据'"  :edgingWidth="'497px'" />
                    <div style="width: 100%;height: 237px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);">
                      <div class="tagging">
                        <div style="float: left;width: 50%;">
                          <span style="display: block;width: 14px;height: 14px;float: left;background: #008aff;margin-top: 18px;margin-left: 20px;"></span>
                          <p style="color: #80c5ff;font-size: 18px;margin-top: 14px;margin-left: 5px;float: left;">立案查处非法采砂案件</p>
                        </div>
                        <div style="float: left;width: 50%;">
                          <span style="display: block;width: 14px;height: 14px;float: left;background: #10b586;margin-top: 18px;margin-left: 20px;"></span>
                          <p style="color: #80c5ff;font-size: 18px;margin-top: 14px;margin-left: 5px;float: left;">采砂整治出动执法人员数</p>
                        </div>
                      </div>
                      <div class="databox">
                        <div style="float: left;width: 50%;height: 100%;">
                          <div class="box1">
                            <div class="dataText"  style="top: 6px;">561起</div>
                          	<div class="ready_btn" id="animat" style="border-color: #008AFF;">
                          		<div class="ready_btn2" style="border-color: #008AFF;"></div>
                          	</div>
                          	<div class="baro" style="top: 32px;background: rgba(0,138,255,1);left: 35px;"></div>
                          	<div class="baro" style="top: 138px;background: rgba(0,138,255,1);left: 35px;"></div>
                          	<div class="bart" style="background: rgba(0,138,255,.4);left: 35px;top: 40px;height: 106px;"></div>
                          </div>
                          <div class="box1">
                            <div style="color: #80c5ff;font-size: 18px;width: 64px;height: 18px;position: absolute;bottom: 10px;left: -30px;">2018年</div>
                            <div class="dataText" style="top: 6px;">9.9万人</div>
                          	<div class="ready_btn" id="animat" style="border-color: #10b586;">
                          		<div class="ready_btn2" style="border-color: #10b586;"></div>
                          	</div>
                          	<div class="baro" style="top: 32px;left: 35px;background: rgba(16,181,134);"></div>
                          	<div class="baro" style="top: 138px;left: 35px;background: rgba(16,181,134)"></div>
                          	<div class="bart" style="background: rgba(16,181,134,.4);left: 35px;top: 40px;height: 106px;"></div>
                          </div>
                        </div>
                        <div style="float: left;width: 50%;height: 100%;">
                          <div class="box1">
                            <div class="dataText" style="top: 79px;">86起</div>
                          	<div class="ready_btn" id="animat" style="border-color: #008AFF;">
                          		<div class="ready_btn2" style="border-color: #008AFF;"></div>
                          	</div>
                          	<div class="baro" style="top: 105px;background: rgba(0,138,255,1);left: 35px;"></div>
                          	<div class="baro" style="top: 138px;background: rgba(0,138,255,1);left: 35px;"></div>
                          	<div class="bart" style="background: rgba(0,138,255,.4);left: 35px;top: 113px;height: 33px;"></div>
                          </div>
                          <div class="box1">
                            <div style="color: #80c5ff;font-size: 18px;width: 64px;height: 18px;position: absolute;bottom: 10px;left: -30px;">2019年</div>
                            <div class="dataText" style="top: 58px;">3.5万人</div>
                          	<div class="ready_btn" id="animat" style="border-color: #10b586;">
                          		<div class="ready_btn2" style="border-color: #10b586;"></div>
                          	</div>
                          	<div class="baro" style="top: 84px;left: 35px;background: rgba(16,181,134);"></div>
                          	<div class="baro" style="top: 138px;left: 35px;background: rgba(16,181,134)"></div>
                          	<div class="bart" style="background: rgba(16,181,134,.4);left: 35px;top: 92px;height: 54px;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="three-data">
                <div  class="implements-data">
                    <Edging  :title="'历年拆除采砂机具数'"  :edgingWidth="'497px'" />
                    <div class="implements-group">
                        <div class="implements-item1">
                            <div class="implements-num">157</div>
                            <div class="cylinder"></div>
                        </div>
                        <div class="implements-item2">
                            <div  class="implements-num">475</div>
                            <div class="cylinder"></div>
                        </div>
                         <div class="implements-item3">
                             <div  class="implements-num">145</div>
                            <div class="cylinder"></div>
                        </div>                                              <div class="clear"></div>
                        <div class="implements-year">
                            <span>2017年</span>
                            <span>2018年</span>
                            <span>2019年</span>
                        </div>
                    </div>
                </div>
                <div class="dredge-data">
                     <Edging  :title="'强制遣返外省籍采砂船数'"  :edgingWidth="'497px'" />
                     <div class="dredge-div">
                         <div class="dredge-one">
                             <div class="dregge-bg1">
                                 <div class="dregge-bg2">
                                     <div class="effects">
                                         <numberCrow :startVal='0' :endVal='176' :duration='3000'></numberCrow>
                                     </div>
                                     <div>2018年</div>
                                 </div>
                             </div>
                             <div class="dregge-bg1">
                                 <div class="dregge-bg2">
                                        <div class="effects">
                                            <numberCrow :startVal='0' :endVal='30' :duration='3000'></numberCrow>
                                        </div>
                                        <div>2019年</div>
                                    </div>
                                </div>
                            </div>
                         <div class="dredge-ellipse">
                             <span></span>
                             <span></span>
                         </div>
                        <div class="companydiV">
                            <div class="heart_box">
                            </div>
                            <div class="route">
                                <div class="circle-a">
                                    <div></div>
                                    <div></div>
                                </div>
                                <div class="circle-b">
                                    <div></div>
                                </div>
                                <div class="circle-c">
                                    <div></div>
                                </div>
                                <div class="circle-d">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="fore-data">
                <div class="clear-dredge">
                    <Edging  :title="'清除“三无”采砂船数'"  :edgingWidth="'497px'" />
                    <div class="cleardredge-num">
                        <div class="round-ball">
                            <span class="effects">243</span>
                            <span>2019年</span>
                        </div>
                         <div class="round-ball">
                             <span class="effects">1000</span>
                             <span>2018年</span>
                         </div>
                         <div class="clear"></div>
                    </div>
                    <div class="cleardredge-circle1"></div>
                    <div class="cleardredge-circle2"></div>
                    <div class="cleardredge-circle3"></div>
                </div>
                <div class="illegal-num">
                    <Edging  :title="'非法涉砂船舶数量'"  :edgingWidth="'497px'" />
                    <div class="illegal-item">
                        <div class="illegal-circle">
                            <TurnCircle  :circlenum="699"/>
                        </div>
                        <div class="illegal-circle">
                            <TurnCircle  :circlenum="155" />
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="illegal-year">
                        <span class="illegalyear">2018年</span>
                        <span>2019年</span>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <!-- <div class="center">
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div> -->
        <div class="right">
			<!-- 水利厅右侧 -->
			<div class="right">
			  <div>
			    <Edging  :title="'专项战役视频'"  :edgingWidth="'878px'" style="margin-top: -40px;" />
				<!-- 20190915 -->
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
					<!-- 20190915 -->
					<div class="swiper-container swiperOne" style="z-index: 0;">
					    <div class="swiper-wrapper">
					        <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理前1.jpg" alt="" style="width: 435px;height: 234px;"></div>
					        <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理前2.jpg" alt="" style="width: 435px;height: 234px;"></div>
					        <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理前3.jpg" alt="" style="width: 435px;height: 234px;"></div>
					        <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理前4.jpg" alt="" style="width: 435px;height: 234px;"></div>
					        <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理前5.jpg" alt="" style="width: 435px;height: 234px;"></div>
					    </div>
					</div>
			        <div style="position: absolute;height: 55px;width: 100%;bottom: 0;">
			          <div style="color: #fff;line-height: 55px;text-align: center;float: left;width: 139px;background: #4291c7;font-size: 34px;">改造前</div>
			          <!-- <div style="width: 282px;line-height: 55px;padding-left: 14px;color: #fff;font-size: 20px;background: rgba(0,0,0,0.6);float: left;">采砂工程船拆解现场</div> -->
			        </div>
			      </div>
			      <div style="float: left;width: 435px;height: 234px;margin-left: 8px;position: relative;">
					<!-- 20190915 -->
			        <div class="swiper-container swiperTwo" style="z-index: 0;">
			            <div class="swiper-wrapper">
			                <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理后1.jpg" alt="" style="width: 435px;height: 234px;"></div>
			                <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理后2.jpg" alt="" style="width: 435px;height: 234px;"></div>
			                <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理后3.jpg" alt="" style="width: 435px;height: 234px;"></div>
			                <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理后4.jpg" alt="" style="width: 435px;height: 234px;"></div>
			                <div class="swiper-slide" style="width: 435px;height: 234px;"><img src="../../assets/治理后5.jpg" alt="" style="width: 435px;height: 234px;"></div>
			            </div>
			        </div>
			        <div style="position: absolute;height: 55px;width: 100%;bottom: 0;">
			          <div style="color: #fff;line-height: 55px;text-align: center;float: left;width: 139px;background: #4291c7;font-size: 34px;">改造后</div>
			          <!-- <div style="width: 282px;line-height: 55px;padding-left: 14px;color: #fff;font-size: 20px;background: rgba(0,0,0,0.6);float: left;">房县: 白鹭群居汉江流域马栏河</div> -->
			        </div>
			      </div>
			    </div>
			  </div>
			  <div>
			    <Edging  :title="'新闻报道'"  :edgingWidth="'878px'" style="margin-top: 25px;" />
			    <div style="position: relative;;width: 878px;height: 234px;background:linear-gradient(180deg,rgba(0,138,255,0),rgba(0,138,255,0.1);">
			      <happy-scroll color="rgba(0,138,255,0.15)" size="10" right>
			        <div style="width: 878px;z-index: 9;" class="moveup" ref = "moveup">
			          <h5 style="font-family: SourceHanSansCN-Bold;font-size: 20px;color: #fff;line-height: 52px;margin-left: 23px;">焦泰文调研厅及黄冈砂管执法基地</h5>
			          <h5 style="font-family: SourceHanSansCN-Bold;font-size: 14px;font-weight: normal;opacity: 0.6;margin-left: 23px;color: #fff;">2019-9-6</h5>
			          <p style="display: block;width: 828px;font-size: 18px;font-family: SourceHanSansCN-Bold;line-height: 24px;color: #80c5ff;margin: 0 auto;
			                        margin-top: 4px;margin-bottom: 30px;">（省水政监察总队）近日，厅党组成员、副厅长焦泰文到厅及黄冈市河道采砂管理执法基地调研。焦泰文登上执法基地执法趸船，查看了值班值守情况，详细询问了船上执法队员的工作及生活情况，与执法队员们一一握手慰问，感谢他们为长江大保护作出的贡献。看到执法基地扣押的采运砂船，焦泰文详细询问了船只管控情况。焦泰文对执法基地执法能力建设和执法工作给予了肯定。<br>
			          焦泰文强调，河道采砂管理事关防洪安全、通航安全和生态安全，任务艰巨，责任重大，一定要认真落实长江大保护要求，严厉打击非法采砂行为，确保良好的河道采砂管理秩序。</p>
                <h5 style="font-family: SourceHanSansCN-Bold;font-size: 20px;color: #fff;line-height: 52px;margin-left: 23px;">湖北长江沿线近500家化工企业关改搬转任务清单发布</h5>
                <h5 style="font-family: SourceHanSansCN-Bold;font-size: 14px;font-weight: normal;opacity: 0.6;margin-left: 23px;color: #fff;">2019-9-6</h5>
                <p style="display: block;width: 828px;font-size: 18px;font-family: SourceHanSansCN-Bold;line-height: 24px;color: #80c5ff;margin: 0 auto;margin-top: 4px;margin-bottom: 40px;">按照《湖北省沿江化工企业关改搬转工作方案》（鄂政发〔2018〕24号）工作要求， 湖北省经济和信息化委员会会同省发改委、省住建厅、省环保厅、省安监局汇总审核各市州政府报送的沿江化工企业关改搬转工作方案及“一企一策”任务清单的基础上，形成《湖北省沿江化工企业关改搬转任务清单（征求意见稿）》，现予以公示。公示期为2018年9月30日至10月11日。</p>
                <h5 style="font-family: SourceHanSansCN-Bold;font-size: 20px;color: #fff;line-height: 52px;margin-left: 23px;">焦泰文调研厅及黄冈砂管执法基地</h5>
                <h5 style="font-family: SourceHanSansCN-Bold;font-size: 14px;font-weight: normal;opacity: 0.6;margin-left: 23px;color: #fff;">2019-9-6</h5>
                <p style="display: block;width: 828px;font-size: 18px;font-family: SourceHanSansCN-Bold;line-height: 24px;color: #80c5ff;margin: 0 auto;
                              margin-top: 4px;margin-bottom: 30px;">（省水政监察总队）近日，厅党组成员、副厅长焦泰文到厅及黄冈市河道采砂管理执法基地调研。焦泰文登上执法基地执法趸船，查看了值班值守情况，详细询问了船上执法队员的工作及生活情况，与执法队员们一一握手慰问，感谢他们为长江大保护作出的贡献。看到执法基地扣押的采运砂船，焦泰文详细询问了船只管控情况。焦泰文对执法基地执法能力建设和执法工作给予了肯定。<br>
                焦泰文强调，河道采砂管理事关防洪安全、通航安全和生态安全，任务艰巨，责任重大，一定要认真落实长江大保护要求，严厉打击非法采砂行为，确保良好的河道采砂管理秩序。</p>
                <h5 style="font-family: SourceHanSansCN-Bold;font-size: 20px;color: #fff;line-height: 52px;margin-left: 23px;">湖北长江沿线近500家化工企业关改搬转任务清单发布</h5>
                <h5 style="font-family: SourceHanSansCN-Bold;font-size: 14px;font-weight: normal;opacity: 0.6;margin-left: 23px;color: #fff;">2019-9-6</h5>
                <p style="display: block;width: 828px;font-size: 18px;font-family: SourceHanSansCN-Bold;line-height: 24px;color: #80c5ff;margin: 0 auto;margin-top: 4px;margin-bottom: 40px;">按照《湖北省沿江化工企业关改搬转工作方案》（鄂政发〔2018〕24号）工作要求， 湖北省经济和信息化委员会会同省发改委、省住建厅、省环保厅、省安监局汇总审核各市州政府报送的沿江化工企业关改搬转工作方案及“一企一策”任务清单的基础上，形成《湖北省沿江化工企业关改搬转任务清单（征求意见稿）》，现予以公示。公示期为2018年9月30日至10月11日。</p>
			        </div>
			      </happy-scroll>
			    </div>
			  </div>
			</div>
        </div>
    </div>
</template>
<script>
import Head from '../../components/head/index'
import Edging from '@/components/edging/index'
import TurnCircle from '@/components/turn-circle/index'
import numberCrow from '@/components/numberGrow/index'
import SubHead from '@/components/subheading/index'
import { HappyScroll } from 'vue-happy-scroll'
import Swiper from 'swiper'; // 20190915
import 'vue-happy-scroll/docs/happy-scroll.css'
export default {
  components: {
    Head,
    SubHead,
    Edging,
    TurnCircle,
    HappyScroll,
    numberCrow,
    Swiper
  },
  data () {
    return {
      oneData: [
        { img: 'img/形状 1209.png', num: 8612, unit: '次', desc: '日常执法巡查数量', key: 1 },
        { img: 'img/形状 1207.png', num: 468, unit: '艘', desc: '集中监管采砂船舶数量', key: 2 },
        { img: 'img/形状 1208.png', num: 41, unit: '个', desc: '建立联合执法驻守点数', key: 3 }
      ],
      stopVideo: false,
      top:0
    }
  },
  mounted () {
    this.initData();
    // 20190915
    var mySwiper1 = new Swiper('.swiperOne', {
      loop: true,
      autoplay: true
    })
    var mySwiper2 = new Swiper('.swiperTwo', {
      loop: true,
      autoplay: true
    })
    mySwiper1.controller.control = mySwiper2;
    mySwiper2.controller.control = mySwiper1;
    console.log(this.$refs.moveup.offsetHeight)
    var moveup = this.$refs.moveup;
    var tops = 40;
    function moveUp(){
      tops--;
      // console.log(tops);
      moveup.style.marginTop = tops+'px';
      if(tops==-450){
        tops = 0;
      }
    }
    setInterval(moveUp,30);
  },
  methods: {
    initData () {

    },
    // 20190915
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
  }
}
</script>
<style lang="less" scoped>
.overallview{
	background:url(../../assets/组154.png);
	width:100%;
	height:100%;
	position:relative;
	.map{
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  background: url(../../assets/地图总.png);
	}
    .left {
		width: 1075px;
		float:left;
        margin-left: 54px;
		margin-top: 104px;
        .one-data {
            display: inline-block;
            .basebg {
                width: 1016px;
                height: 196px;
                background: url('../../assets/矩形 4.png');
                .data-count {
                    height: 196px;
                    .item {
                        padding-top: 30px;
                        width: 33.333%;
                        display: inline-block;
                        text-align: center;
                        img {
                            vertical-align: middle;
                            margin-left: 17px;
                            margin-right: 9px;
                            margin-top: -27px;
                        }
                        .num {
                            font-family: DINNextW1G-BoldItalic;
                            font-size: 70px;
                            color: #ffffff;
                        }
                        .unit {
                            font-family: SourceHanSansCN-Medium;
                            font-size: 34px;
                            color: #ffffff;
                        }
                        div {
                            font-family: SourceHanSansCN-Medium;
                            font-size: 28px;
                            color: #80c5ff;
                            margin: 32px 0 30px;
                        }
                    }
                }
            }
        }
        .two-data {
            margin-top: 21px;
            .one-sanddata {
                width: 497px;
                height: 280px;
                float: left;
                .basebg {
                    background: url('../../assets/背景宽234.png');
                    .item-text1 {
                        padding-top: 25px;
                        .title {
                            display: inline-block;
                            font-family: SourceHanSansCN-Medium;
                            font-size: 28px;
                            color: #80c5ff;
                            margin-left: 20px;
                            margin-right: 53px;
                        }
                        .num {
                            display: inline-block;
                            font-family: DINNextW1G-BoldItalic;
                            font-size: 70px;
                            color:#ffffff;
                            i {
                                font-family: SourceHanSansCN-Medium;
                                font-size: 34px;
                            }
                        }
                    }
                    .item-text2 {
                        padding: 20px 0 50px;
                        .title {
                            display: inline-block;
                            font-family: SourceHanSansCN-Medium;
                            font-size: 28px;
                            color: #80c5ff;
                            margin-left: 20px;
                            margin-right: 70px;
                        }
                        .num {
                            display: inline-block;
                            font-family: DINNextW1G-BoldItalic;
                            font-size: 70px;
                            color: #ffffff;
                            i {
                                font-family: SourceHanSansCN-Medium;
                                font-size: 34px;
                            }
                        }
                    }
                }
            }
            .two-sanddata {
                width: 497px;
                height: 241px;
                float: left;
                margin-left: 25px;
            }
        }
        .three-data {
            margin-top: 30px;
            .implements-data {
                float: left;
                background: url('../../assets/背景窄282.png');
                .implements-group {
                    height: 242px;
                     .implements-item1 {
                         position: relative;
                         height: 193px;
                         margin-left: 110px;
                         top: 0;
                         float: left;
                        .cylinder{
                            width: 50px;
                            height: 37px;
                            position: absolute;
                            margin: 0;
                            padding-top: 5px;
                            bottom: 0;
                            left: 0;
                            background-image: linear-gradient(90deg,
                                #ff7b05 0%,
                                #ffc280 100%);
                            color: #fff;
                            animation: bounce-big1 5s  forwards;
                        }
                        .cylinder::before {
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 16px;
                            border-radius: 100%;
                            background-image: linear-gradient(-24deg,
                                #ff7b05 0%,
                                #ffc280 100%);
                            left: 0;
                            top: -7px;
                        }
                        .cylinder:after{
                            background: inherit;
                            left: 0;
                            bottom: -7px;
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 15px;
                            border-radius: 100%;
                        }
                        .implements-num {
                            position: absolute;
                            top: 123px;
                            left:5px;
                            z-index:2;
                            font-family: DINNextW1G-Medium;
                            -webkit-box-reflect: below 1px linear-gradient(transparent,transparent 50%,rgba(0,0,0,.7));
                            font-size: 24px;
                            color: #ffffff;
                        }
                     }
                      .implements-item2 {
                         position: relative;
                         margin-left: 123px;
                         height: 193px;
                          float: left;
                        .cylinder{
                            width: 50px;
                            height: 152px;
                            position: absolute;
                            margin: 0;
                            padding-top: 5px;
                            bottom: 0;
                            left: 0;
                            background-image: linear-gradient(-90deg,
                                #56d7d2 0%,
                                #0cb281 100%);
                            color: #fff;
                            animation: bounce-big2 5s  forwards;
                        }
                        .cylinder::before {
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 16px;
                            border-radius: 100%;
                            background-image: linear-gradient(139deg,
                                #56d7d2 0%,
                                #0cb281 100%);
                            left: 0;
                            top: -7px;
                        }
                        .cylinder:after{
                            background: inherit;
                            left: 0;
                            bottom: -7px;
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 15px;
                            border-radius: 100%;
                        }
                        .implements-num {
                            position: absolute;
                            top: 9px;
                            left:5px;
                            z-index:2;
                            font-family: DINNextW1G-Medium;
                            -webkit-box-reflect: below 1px linear-gradient(transparent,transparent 50%,rgba(0,0,0,.7));
                            font-size: 24px;
                            color: #ffffff;
                        }
                     }
                      .implements-item3 {
                        position: relative;
                        height: 193px;
                        margin-left: 122px;
                        float: left;
                        .cylinder{
                            width: 50px;
                            height: 37px;
                            position: absolute;
                            margin: 0;
                            padding-top: 5px;
                            bottom: 0;
                            background-image: linear-gradient(90deg,
                                #0c9bff 0%,
                                #7bd2ff 100%);
                            color: #fff;
                            animation: bounce-big3 5s forwards;
                        }
                        .cylinder::before {
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 16px;
                            border-radius: 100%;
                            background-image: linear-gradient(-24deg,
                                #0c9bff 0%,
                                #7bd2ff 100%);
                            left: 0;
                            top: -7px;
                        }
                        .cylinder:after{
                            background: inherit;
                            left: 0;
                            bottom: -7px;
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 15px;
                            border-radius: 100%;
                        }
                         .implements-num {
                            position: absolute;
                            top: 124px;
                            left:5px;
                            z-index:2;
                            font-family: DINNextW1G-Medium;
                            -webkit-box-reflect: below 1px linear-gradient(transparent,transparent 50%,rgba(0,0,0,.7));
                            font-size: 24px;
                            color: #ffffff;
                        }
                     }
                     @keyframes bounce-big1 {
                        0% {
                            height:0;
                        }
                        100% {
                            height: 37px;
                        }
                     }
                     @keyframes bounce-big2 {
                        0% {
                            height:0;
                        }
                        100% {
                            height: 152px;
                        }
                     }
                     @keyframes bounce-big3 {
                        0% {
                            height:0;
                        }
                        100% {
                            height: 42px;
                        }
                     }
                    .implements-year {
                        margin-top: 14px;
                        height: 18px;
                        font-family: DINNextW1G-Medium;
                        font-size: 18px;
                        color: #80c5ff;
                        span:nth-child(1) {
                            display: inline-block;
                            margin-left: 110px;
                        }
                        span:nth-child(2) {
                            display: inline-block;
                            margin-left: 58px;
                        }
                        span:nth-child(3) {
                            display: inline-block;
                            margin-left: 67px;
                        }
                 }
                }
            }
            .dredge-data {
                float: left;
                margin-left: 25px;
                height: 279px;
                background: url('../../assets/背景窄282.png');
                .dredge-div {
                    padding-top: 27px;
                    .dredge-one {
                        .dregge-bg1 {
                            width: 124px;
                            height: 142px;
                            display: inline-block;
                            margin-left: 17px;
                            background: url('../../assets/多边形 1.png');
                            .dregge-bg2 {
                                width: 92px;
                                height: 106px;
                                margin-left: 16px;
                                margin-top: 18px;
                                background: url('../../assets/多边形 1 拷贝.png');
                                text-align: center;
                                div:nth-child(1) {
                                    font-family: DINNextW1G-MediumItalic;
                                    font-size: 40px;                            color: #ffffff;
                                    padding-top: 24px;
                                }
                                div:nth-child(2) {
                                    font-family: DINNextW1G-Medium;
                                    font-size: 18px;
                                    margin-top: 6px;
                                    color: #ffffff;
                                }
                            }
                        }
                        .dregge-bg1:nth-child(1) {
                            margin-left: 117px;
                        }
                    }
                    .dredge-ellipse {
                        margin-top: -10px;
                        span:nth-child(1) {
                            display: inline-block;
                            border-radius: 50%;
                            transform: scale(1,0.5);
                            width: 29px;
                            height:20px;
                            background-color: #71beff;
                            opacity: 0.6;
                            margin-left: 164px;
                        }
                        span:nth-child(2) {
                            display: inline-block;
                            border-radius: 50%;
                            transform: scale(1,0.5);
                            width: 29px;
                            height:20px;
                            background-color: #71beff;
                            opacity: 0.6;                                   margin-left: 113px;
                        }
                    }
                    .companydiV{
                        height:100px;
                        position: relative;
                        .heart_box {
                            height:76px;
                            margin-left: 110px;
                            margin-top: -45px;
                            background: url('../../assets/微信图片_20190915142642.png') no-repeat;
                        }
                        .route {
                            position: relative;
                            width: 200px;
                            transform-style: preserve-3d;
                            //  animation:move 50s linear infinite;
                            // div {
                            //     position: absolute;
                            //     height:76px;
                            //     margin-left: 62px;
                            //     margin-top: -30px;
                            // }
                            .circle-a{
                                div:nth-child(1) {
                                display: inline-block;
                                text-decoration: none;
                                background: #63a5ff;
                                color: #306fc3;
                                width: 100px;
                                font-size: 18px;
                                height: 100px;
                                line-height: 100px;
                                border-radius: 50%;
                                text-align: center;
                                vertical-align: middle;
                                overflow: hidden;
                                 border: 40px solid lightblue;
                                 clip: rect(0 100px 200px 0);
                                box-shadow: 0 3px 3px rgba(0,0,0,.3);
                                font-weight: 700;
                                border-bottom: solid 3px #3f77c3;
                                text-shadow: 1px 1px 1px rgba(255,255,255,.65);
                                transition: .4s;
                                }
                                div:nth-child(2) {
                                    width: 220px;
                                    height: 220px;
                                    border-radius: 50%;
                                    border: 40px solid lightblue;
                                    position:absolute;
                                    top: -10px;
                                    right: -10px;
                                    clip: rect(0 100px 200px 0);
                                }

                            }
                             div:nth-child(2){
                                 margin-top: -164px;
                               transform: rotateX(180deg) translateZ(50px);
                            }
                            div:nth-child(3){
                               transform:rotateY(-90deg) translateZ(50px);
                            }
                            div:nth-child(4){
                               transform:rotateY(90deg) translateZ(50px);
                            }
                        }
                        @keyframes move{
                            0%{
                                transform: rotateX(13deg) rotateY(0deg);
                            }
                            100%{
                                transform:rotateX(13deg) rotateY(360deg);
                            }
                        }
                    }
                     .imgcompany{
                        /* transform: rotate(25deg); */
                        animation:100s rollImg linear infinite normal;
                        // transform: skewX(-45deg);
                    }
                    @keyframes rollImg {
                        0% {
                             transform :rotateZ(5deg);
                        }
                        100% {
                            transform :rotateZ(1000deg);
                        }
                    }
                }
            }
        }
        .fore-data {
            height: 280px;
            margin-top: 29px;
            .clear-dredge {
                height: 280px;
                width: 497px;
                float: left;
                background: url('../../assets/背景窄282.png');
                .cleardredge-num {
                    height: 174px;
                    background: url('../../assets/e5184e23c5e5d41ea0348443b37362e.png') no-repeat center bottom;
                    .round-ball {
                        float: left;
                        background: url('../../assets/球 拷贝.png') no-repeat;
                        width: 112px;
                        height: 112px;
                        span {
                            display: block;
                            color:#ffffff;
                            text-align: center;
                        }
                        span:nth-child(1) {
                            font-family: DINNextW1G-Bold;
                            font-size: 40px;
                            padding:29px 0 10px;
                        }
                        span:nth-child(2) {
                            font-family: DINNextW1G-Medium;
                            font-size: 18px;
                        }
                    }
                    .round-ball:nth-child(1) {
                        margin-left: 125px;
                        margin-top:62px;
                        animation: bounce-down1 4s linear infinite;
                    }
                    .round-ball:nth-child(2) {
                        margin-left: 38px;
                        margin-top:18px;
                        animation: bounce-down2 5s linear infinite;
                    }
                    @keyframes bounce-down1 {
                        25% {
                            transform: translateY(-10px);
                        }
                        50%, 100% {
                            transform: translateY(0);
                        }
                        75% {
                            transform: translateY(5px);
                        }
                    }
                    @keyframes bounce-down2 {
                        25% {
                            transform: translateY(8px);
                        }
                        50%, 100% {
                            transform: translateY(0);
                        }
                        75% {
                            transform: translateY(-8px);
                        }
                    }
                }
                .cleardredge-circle1 {
                    background: url('../../assets/873eb246309881adc7d1395fb1c25a9.png') no-repeat center;
                    height: 56px;
                    margin-top: -18px;
                }
                .cleardredge-circle2 {
                    width: 100%;
                    height: 100%;
                    margin-top: -165px;
                    background: url('../../assets/afdcf22ee52d17db663b35e611fa700.png') 50% 50% no-repeat;
                    // background-size: 35% 35%;
                    opacity: 0;
                    animation: circle-a 4.5s ease-out  forwards infinite;
                }
                .cleardredge-circle3 {
                    width: 100%;
                    height: 100%;
                    margin-top: -270px;
                    background: url('../../assets/afdcf22ee52d17db663b35e611fa700.png') 50% 50% no-repeat;
                    // background-size: 35% 35%;
                    opacity: 0;
                    animation: circle-a 4.5s ease-out 3s forwards infinite;
                }
                @keyframes circle-a {
                    0% {
                        transform: scale(.5);
                        opacity: 0;
                    }
                    10% {
                         opacity: .7;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 0;
                    }
                }
            }
            .illegal-num {
                background: url('../../assets/背景窄282.png');
                height: 280px;
                width: 497px;
                float: left;
                margin-left: 22px;
                .illegal-item {
                     margin-top:15px;
                    .illegal-circle {
                        float: left;
                        width: 204px;
                        height: 204px;
                    }
                     .illegal-circle:nth-child(1) {
                         margin: 0 35px 0 31px;
                     }
                }
                .illegal-year {
                    margin-top: -2px;
                    span {
                        display: inline-block;
                        font-family: DINNextW1G-Medium;
                        font-size: 18px;
                        color: #ffffff;
                    }
                    .illegalyear {
                        margin-left: 105px;
                        margin-right:185px;
                    }
                }
            }
        }
    }
    .center {
        .box {
            width: 434px;
            height: 130px;
            animation: move 5s linear infinite;
            div{
                width: 100px;
                height: 100px;
                float: left;
            }
            div:nth-child(1) {
                transform: translateZ(120px);
                background: url('../../assets/微信图片_20190912170942.png') no-repeat 0 0;
            }
            div:nth-child(2) {
                transform: translateZ(120px);
                background: url('../../assets/微信图片_20190912170942.png') no-repeat 0 0;
            }
             div:nth-child(3) {
                transform: translateZ(120px);
                background: url('../../assets/微信图片_20190912170942.png') no-repeat 0 0;
            }
        }
        @keyframes move {
            0% {
                transform: rotateY(13deg) rotateY(0deg);
            }
            100% {
                transform: rotateY(13deg) rotateY(360deg);
            }
        }
    }
    .right {
		float:right;
		margin-right: -40px;
		margin-top: 79px;
    }
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
  @keyframes mymove2{
      0% {
          transform: scale(.6);
          opacity: 0;
      }
      10% {
           opacity: .8;
      }
      100% {
          transform: scale(1);
          opacity: 0;
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
      position: relative;
	    margin: 0 auto;
	    // background: url(../../assets/圈拷贝7.png) no-repeat center;
	    // animation:mymove 3s infinite;
	    // animation-timing-function: ease-in-out; /*动画的速度曲线*/
      span{
        position: absolute;
        width: 44px;
        height: 22px;
        border-radius: 50%;
        background: #fff;
        top: 0;
        z-index: 1;
         -webkit-animation: mymove2 3s forwards infinite;
      }
      span:nth-child(2){
          -webkit-animation-delay: 1.5s; /*第二个span动画延迟1.5秒*/
      }
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
  @keyframes move3 {
      0% {
        margin-top: 0;
      }
      50% {
        margin-top: -100%;
      }
      100%{
        margin-top: 0;
      }
  }
  .moveup{
    // animation:move3 5s infinite;
  }
</style>
