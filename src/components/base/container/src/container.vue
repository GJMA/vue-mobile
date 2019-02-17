<template>
  <div class="ucarContainer" :style="styles" :class={zfContainerOnlyTop:top&&scroll&&!bottom,zfContainerTop:top,zfContainerBottom:bottom,zfContainerScroll:scroll}>
    <slot>
    </slot>
  </div>
</template>

<script>
import { debounce } from '../../../../utils/index.js'
export default {
  name: 'test',
  data () {
    return {
    }
  },
  props: {
    scroll: Boolean,
    top: Boolean,
    bottom: Boolean,
    drop: Boolean,
    distance: {
      type: Number,
      default: 15
    },
    styles: Object
  },
  methods: {
  },
  mounted: function () {
    let el = this.$el
    if (this.drop) {
      let fun = debounce(() => {
        if (el.scrollHeight - el.scrollTop - el.offsetHeight <= this.distance) {
          this.$emit('drop')
        }
      }, 50)
      el.onscroll = function () {
        fun()
      }
    }
  }
}
</script>
