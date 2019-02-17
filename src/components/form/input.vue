<template>
  <div class="gjma-input flex-center">
    <gjma-icon v-if="iconLeft" :name="iconLeft"></gjma-icon>
    <label class="input-label" v-if="label">{{label}}</label>
    <div class="input-group flex-1">
      <input
        class="flex-1"
        :type="type"
        pattern="[0-9]*"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        @input="updateVal($event.target.value)"
      />
    </div>
    <gjma-icon v-if="value" :name="iconRight" @click="clearValue"></gjma-icon>
    <span class="code">
      <slot name="code">
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'gjmaInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: 'close'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '普通'
    },
    length: {
      type: Number,
      default: 11
    },
    reg: {
      type: String,
      default: 'phone'
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    updateVal (value) {
      this.value = value
      if (value.length <= this.length) {
        this.$emit('input', value)
      } else {
        this.value = this.value.substring(0, this.length)
      }
    },
    // 清空输入框内容
    clearValue () {
      this.value = ''
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.gjma-input {
  width: 100%;
  height: $height;
  border: .01rem solid #e3211d;
  padding: 0 .16rem;
  font-size: .3rem;
  .input-label {
    width: 1.4rem;
    margin-right: .16rem;
    font-size: .26rem;
    color: #79797b;
    text-align: right;
  }
  .input-group {
    height: 100%;
    line-height: 1;
    margin: 0 .16rem;
    input {
      height: 100%;
      width: 100%;
    }
  }
}
.code {
  margin-left: .16rem;
  color: #e3211d;
}
</style>
