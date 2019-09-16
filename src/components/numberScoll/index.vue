<template>
  <div class="number-scoll">
        <div :class="id"  style="color:#fff"></div>
  </div>
</template>
<script>
import { Flip } from 'number-flip'
export default {
  name: "number-flip",
  props: {
    id: {
      type: String
    },
    fromnumber: {
      type: Number,
      default: 0
    },
    tonumber: {
      type: Number,
      default: 0
    },    
  },  
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {

  },
  mounted() {
      console.log(document.querySelector(`.${this.id}`))
    this.$nextTick(() => {
        const dom = document.querySelector(`.${this.id}`);
        new Flip({
            node: dom,
            from: this.fromnumber,
            duration: 2,
            delay: 1,
            to: this.tonumber,
        })
    })
  }
};
</script>
<style lang="less" scoped>
.number-scoll {
    div {
        background: rgba(0, 0, 0, 0)
    }
}
</style>