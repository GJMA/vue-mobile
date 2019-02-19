<template>
  <transition enter-active-class="animated fadeInRight">
  <div class="container">
    <div class="section">
      <div class="section-title mr-b mr-l-32">去重</div>
      <div class="section-content">
        <ul>
          <li class="mr-b-8 mr-t-16">双循环</li>
          <li>indexOf</li>
          <li>filter</li>
          <li>对象属性</li>
          <li>Set结构</li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="section-title">排序</div>
      <div class="section-content">
        <ul>
          <li>冒泡</li>
          <li>二分法</li>
        </ul>
      </div>
    </div>
    <!-- @else if $pos == r {
          $position: 'right';
        } @else if $pos == b {
          $position: 'bottom';
        } @else {
          $position: 'left';
        } -->
    <div class="section">
      <div class="section-title">迭代器</div>
      <div class="section-content">
        <ul>
          <li>forEach</li>
          <li>every</li>
          <li>some</li>
          <li>reduce</li>
          <li>reduceRight</li>
          <li>map</li>
          <li>filter</li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="section-title">删除指定元素</div>
      <div class="section-content"></div>
    </div>
  </div>
  </transition>
</template>

<script>
import {
  distinct,
  distinctByIndexOf,
  distinctByFilter,
  distinctByObj,
  distinctBySet,
  BubbleSort,
  changeSort,
  twoSort
} from '@/utils/Array'
export default {
  name: 'utils',
  data () {
    return {
    }
  },
  mounted () {
    let arr = [1, 4, 3, 45, 23, 6, 7, 9, 1, 1, 2, 2, 34]
    console.log(distinct(arr))
    console.log(distinctByIndexOf(arr))
    console.log(distinctByFilter(arr))
    console.log(distinctByObj(arr))
    console.log(distinctBySet(arr))
    // 排序
    console.log(BubbleSort(arr))
    console.log(changeSort(arr))
    console.log(twoSort(arr))
  },
  methods: {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    // 通过 `vm` 访问组件实例
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
