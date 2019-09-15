<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      timerId: null
    }
  },
  mounted: function () {
    this.timerId = setInterval(this.updateAll, 5000);
  },
  methods: {
    updateAll: function () {

    }
  },
  beforeDestroy () {
    clearInterval(this.timerId);
  }
}
</script>
<style lang="less" scoped>
</style>

