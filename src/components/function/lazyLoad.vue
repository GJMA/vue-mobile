<template>
  <div class="container" id="lazy">
    <dl v-for="(item, index) in dataList" :key="index">
      <dt>
        <img class="img" src="" alt="正在加载" :data-img="list[index].img">
      </dt>
      <dd>图片懒加载</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'lazyLoad',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      imgList: [],
      dataList: []
    }
  },
  watch: {
    list (value) {
      if (value && value.length > 0) {
        this.dataList = value
        this.ready()
      }
    }
  },
  mounted () {
  },
  methods: {
    ready () {
      this.$nextTick(() => {
        let arr = document.querySelectorAll('.img')
        for (let i = 0; i < arr.length; i++) {
          this.imgList.push(arr[i])
        }
        this.canILoad()
        this.bindEvent()
      })
    },
    canILoad () {
      for (let i = this.imgList.length; i--;) {
        this.$nextTick(() => {
          this.getBound(this.imgList[i]) && this.loadImage(this.imgList[i], i)
        })
      }
    },
    getBound (el) {
      let bound = el.getBoundingClientRect()
      let clientHeight = window.innerHeight
      return bound.top <= clientHeight
    },
    loadImage (el, index) {
      let src = el.getAttribute('data-img')
      el.src = src
      this.imgList.splice(index, 1)
    },
    bindEvent () {
      let dom = document.getElementById('lazy')
      dom.addEventListener('scroll', () => {
        this.list.length && this.canILoad()
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    // 通过 `vm` 访问组件实例
    })
  }
}
</script>

<style lang="scss" scoped>
.menu-list {
  &-item {
    line-height: .88rem;
    padding: 0 .32rem;
    font-size: .28rem;
  }
}
img {
  width: 100%;
  height: 7rem;
  margin-bottom: .64rem;
}
</style>
