<template>
  <echarts :autoResize="true" :option="option" height="242px" id="columnar" width="497px" />
</template>
<script>
import echarts from "@/components/echarts/echarts";
export default {
  name: "circleecharts",
  data() {
    return {
      option: {
        backgroundColor: "#18163B",
        grid: {
          top: "15%",
          right: "3%",
          left: "5%",
          bottom: "12%"
        },
        xAxis: [
          {
            type: "category",
            color: "#59588D",
            data: [
              "学员续费率",
              "试听课转换率",
              "课程消费率",
              "课后评分率",
              "作业完成率",
              "班级满班率",
              "排课上课率",
              "体验课转化率"
            ],
            axisPointer: {
              type: "line"
            },
            axisLine: {
              lineStyle: {
                color: "#272456"
              }
            },
            axisLabel: {
              margin: 20,
              color: "#59588D",
              textStyle: {
                fontSize: 12
              }
            }
          }
        ],
        yAxis: [
          {
            min: 0,
            max: 100,
            axisLabel: {
              formatter: "{value}%",
              color: "#59588D"
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "#272456"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: [100, 90, 10, 90, 90, 20, 56, 89],
            barWidth: "20px",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#41E1D4" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#10A7DB" // 100% 处的颜色
                    }
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: "rgba(0,255,225,1)",
                shadowBlur: 4
              }
            },
            label: {
              normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: "#252453",
                borderRadius: 200,
                position: ["-8", "-60"],
                distance: 1,
                formatter: ["    {d|●}", " {a|{c}%}     \n", "    {b|}"].join(
                  ","
                ),
                rich: {
                  d: {
                    color: "#3CDDCF"
                  },
                  a: {
                    color: "#fff",
                    align: "center"
                  },
                  b: {
                    width: 1,
                    height: 30,
                    borderWidth: 1,
                    borderColor: "#234e6c",
                    align: "left"
                  }
                }
              }
            }
          }
        ]
      }
    };
  },
  components: {
    echarts
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.data.forEach((item, index) => {
        console.log(this);
        this.titleArr.push({
          text: item.name,
          left: index * 20 + 10 + "%",
          top: "65%",
          textAlign: "center",
          textStyle: {
            fontWeight: "normal",
            fontSize: "16",
            color: this.colors[index][0],
            textAlign: "center"
          }
        });
        this.seriesArr.push({
          name: item.name,
          type: "pie",
          clockWise: false,
          radius: [60, 70],
          itemStyle: {
            normal: {
              color: this.colors[index][0],
              shadowColor: this.colors[index][0],
              shadowBlur: 0,
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          center: [index * 20 + 10 + "%", "50%"],
          data: [
            {
              value: item.value,
              label: {
                normal: {
                  formatter: function(params) {
                    return params.value + "%";
                  },
                  position: "center",
                  show: true,
                  textStyle: {
                    fontSize: "20",
                    fontWeight: "bold",
                    color: this.colors[index][0]
                  }
                }
              }
            },
            {
              value: 100 - item.value,
              name: "invisible",
              itemStyle: {
                normal: {
                  color: this.colors[index][1]
                },
                emphasis: {
                  color: this.colors[index][1]
                }
              }
            }
          ]
        });
      });
    }
  }
};
</script>