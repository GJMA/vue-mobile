<template>
  <div @click="handleClick">
    <gjma-icon :name="isSel ? 'selected' : 'select'" level="4"></gjma-icon>
  </div>
</template>

<script>
export default {
  name: 'ucarSelect',
  props: {
    isSel: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
</style>
