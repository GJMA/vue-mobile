<template>
  <div class="textarea-box">
    <textarea
      class="textarea"
      :placeholder="placeholder"
      @input="updateVal($event.target)"
    >
    </textarea>
    <span class="textarea-number">{{value.length}}/240</span>
  </div>
</template>

<script>
export default {
  name: 'ucarTextarea',
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    updateVal (target) {
      this.value = target.value
      this.$emit('input', target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea-box {
  position: relative;
  height: 100%;
}
.textarea{
  width: 100%;
  height: 100%;
  border: 1px solid #e3211d;
  padding: .32rem .24rem;
}
.textarea-number {
  position: absolute;
  bottom: .16rem;
  right: .16rem;
}
</style>
