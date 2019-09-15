<template>
  <div :id="id" :style="style"></div>
</template>

<script>
export default {
  name: 'echarts',
  props: {
    id: {
      type: String
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
    autoResize: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      required: true
    }
  },
  computed: {
    style () {
      return {
        height: this.height,
        width: this.width
      };
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.setOption(this.option,true);
      if (this.autoResize) {
        this.$el.addEventListener('resize', this.chart.resize);
      }
    }
  },
  watch: {
    option: {
      handler (newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal);
          } else {
            this.chart.setOption(oldVal);
          }
        } else {
          this.init();
        }
      },
      deep: true 
    }
  }
}
</script>

<style>
</style>
