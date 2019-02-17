<template>
  <div
    class="gjma-btn flex-center" 
    :class="[
      type ? 'ucar-btn-' + type : '',
      size ? size : '',
      {
        'disabled': disabled,
        'round': round
      }
    ]"
    :style="myStyle"
    @click="handleClick"
  >
    <gjma-icon
      class="gjma-btn-icon"
      v-if="icon != ''" 
      :name="icon">
    </gjma-icon>
    <span>{{text}}</span>
  </div>
</template>

<script>
/*
 * 按钮组件
 * @author GJMA
 * @date 2018/07/02
 */
export default {
  name: "gjmaBtn",
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: "登录"
    },
    myStyle: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 按钮
.gjma-btn {
  height: $height;
  line-height: $height;
  background: $color;
  border-radius: $radius;
  text-align: center;
  color: #fff;
  font-size: $btn-fontsize;
  &-icon {
    margin-right: .16rem;
  }
}
.disabled {
  background: #eaeaea!important;
}
</style>
