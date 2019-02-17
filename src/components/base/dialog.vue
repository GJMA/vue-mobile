<template>
  <div class="gjma-dialog" v-if="show">
    <div class="mask" @click="cancel"></div>
    <div class="pos-center">
      <h2 class="gjma-dialog-title" v-if="title">{{title}}</h2>
      <div class="gjma-dialog-content">
        <div class="gjma-dialog-con" v-html="content"></div>
      </div>
      <div class="flex-center gjma-dialog-btn">
        <gjma-btn
          class="flex-1"
          text="取消"
          myStyle="height: .6rem; line-height: .6rem; margin: 0 .08rem;"
          @click="cancel"
        >
        </gjma-btn>
        <gjma-btn
          class="flex-1"
          text="确定"
          myStyle="height: .6rem; line-height: .6rem; margin: 0 .08rem;"
          @click="confirm"
        >
        </gjma-btn>
        <!-- <span class="flex-1 ucar-dialog-btn primary" @click="cancel">取消</span> -->
        <!-- <span class="flex-1 ucar-dialog-btn secondary" @click="confirm">确定</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ucarDialog',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '内容内容'
    }
  },
  methods: {
    cancel (evt) {
      this.$emit('cancel', evt)
    },
    confirm (evt) {
      this.$emit('confirm', evt)
    }
  }
}
</script>

<style lang="scss">
.gjma-dialog {
  &-title {
    text-align: center;
    font-size: .32rem;
  }
  &-content {
    padding: .32rem 0;
    font-size: .28rem;
  }
}
</style>
