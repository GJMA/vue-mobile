<template>
  <div class="video-container">
    <video
      :poster="poster"
      src="../../assets/video/111.mp4"
      @click="playVideo"
    >
    </video>
    <span
      class="play-btn pos-center"
      v-show="showPlay"
      @click="playVideo"
    >
      play
    </span>
    <span class="duration" v-text="handleTime"></span>
  </div>
</template>

<script>
import {prefixInteger} from '@/utils/Number.js'
export default {
  name: 'gjmaVideo',
  props: {
    poster: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showPlay: true,
      duration: 0,
      dom: null,
      timer: null
    }
  },
  mounted () {
    this.dom = this.$el.children[0]
    this.dom.addEventListener('canplaythrough', () => {
      this.duration = this.dom.duration
    })
  },
  methods: {
    playVideo () {
      if (this.dom.paused) {
        this.showPlay = true
        this.dom.play()
        this.timer = setInterval(() => {
          this.duration--
          if (this.dom.ended) {
            this.showPlay = true
            clearInterval(this.timer)
          }
        }, 1000)
      } else {
        this.dom.pause()
      }
      this.showPlay = this.dom.paused
    }
  },
  computed: {
    handleTime () {
      let showTime = ''
      if (this.duration && this.duration < 60) {
        showTime = '00:' + prefixInteger(this.duration, 2)
      } else {
        showTime = prefixInteger(Math.floor(this.duration / 60), 2) + ':' + prefixInteger(this.duration % 60, 2)
      }
      return showTime
    }
  }
}
</script>

<style lang="scss" scoped>
.video-container {
  position: relative;
  .play-btn {
    z-index: 9999;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    background: #ccc;
    text-align: center;
  }
  .duration {
    position: absolute;
    right: .1rem;
    bottom: .1rem;
    color: #fff;
  }
}
video {
  width: 100%;
  border-radius: .1rem;
}
</style>
