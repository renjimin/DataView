<template>
    <video id="first-video"
        width="100%"
        height="100%"
        preload="auto"
        :src="url"
    >
    </video>
</template>
<script>
	export default {
	  name: 'videoChild',
	  props: {
	    'url': String,
	    'poster': String
	  },
	  data () {
	    return {
	      isVideoShow: true,
	      isShow: true,
	      video: null,
	    }
	  },
      created() {
          this.pauseVideo();
      },
	  methods: {
	    pauseVideo () {
	      let video = document.querySelector('video');
	      video.play()
	    },
	  }
	}
</script>

<style scoped>
	#first-video{
    object-fit: fill;
  }
</style>