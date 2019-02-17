<template>
  <div class="container">
    <div class="section">
      <div class="section-title">图标</div>
      <div class="section-content">
        <gjma-icon name="logo" level="1"></gjma-icon>
        <gjma-icon name="logo" level="2"></gjma-icon>
        <gjma-icon name="logo" level="3"></gjma-icon>
        <gjma-icon name="logo" level="4"></gjma-icon>
        <gjma-icon name="logo" level="5"></gjma-icon>
        <gjma-icon name="logo" level="6"></gjma-icon>
        <gjma-icon name="logo" level="7"></gjma-icon>
        <gjma-icon name="logo" level="8"></gjma-icon>
        <gjma-icon name="logo" level="9"></gjma-icon>
      </div>
    </div>
    <!-- switch -->
    <div class="section">
      <div class="section-title">switch</div>
      <div class="section-content flex">
        <gjma-switch></gjma-switch>
        <gjma-switch :status="true"></gjma-switch>
      </div>
    </div>
    <!-- select -->
    <div class="section">
      <div class="section-title">select</div>
      <div class="section-content flex">
        <gjma-select></gjma-select>
        <gjma-select :isSel="true"></gjma-select>
      </div>
    </div>
    <!-- dialog -->
    <div class="section">
      <div class="section-title">dialog</div>
      <div class="section-content">
        <div>
          <span @click="showDialog=true">打开dialog</span>
        </div>
        <gjma-dialog
          :show="showDialog"
          @cancel="showDialog=false"
          @confirm="showDialog=false"
        >
        </gjma-dialog>
      </div>
    </div>
    <!-- cell -->
    <div class="section">
      <div class="section-title">cell</div>
      <div class="section-content">
        <gjma-cell
          title="普通"
        >
        </gjma-cell>
        <gjma-cell
          title="带图标"
          icon="logo"
        >
        </gjma-cell>
        <gjma-cell
          title="带图标/描述"
          icon="logo"
        >
          <template slot="desc">描述</template>
        </gjma-cell>
      </div>
    </div>
    <!-- input -->
    <div class="section">
      <div class="section-title">input</div>
      <div class="section-content">
        <gjma-input>
        </gjma-input>
        <gjma-input
          type="number"
          placeholder="数字"
        >
        </gjma-input>
        <gjma-input
          placeholder="带图标"
          iconLeft="logo"
        >
        </gjma-input>
      </div>
    </div>
    <!-- textarea -->
    <div class="section">
      <div class="section-title">textarea</div>
      <div class="section-content">
        <gjma-textarea></gjma-textarea>
      </div>
    </div>
    <!-- upload -->
    <div class="section">
      <div class="section-title">upload</div>
      <div class="section-content">
        <gjma-upload></gjma-upload>
      </div>
    </div>
    <!-- tab -->
    <div class="section">
      <div class="section-title">tab</div>
      <div class="section-content">
        <gjma-tab :list="tabList"></gjma-tab>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Btn</div>
      <div class="section-content">
        <div class="section-content-item">
          <gjma-btn text="正常"></gjma-btn>
        </div>
        <div class="section-content-item">
          <gjma-btn text="禁用" :disabled="true"></gjma-btn>
        </div>
        <div class="section-content-item">
          <gjma-btn text="带图标" icon="logo"></gjma-btn>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-title"></div>
      <div class="section-content"></div>
    </div>
  </div>
</template>

<script>
import {formatTime} from '@/utils'
export default {
  name: 'auditing',
  data () {
    return {
      showDialog: false,
      tabList: [
        {
          id: 0,
          name: '全职'
        },
        {
          id: 1,
          name: '兼职'
        }
      ]
    }
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
