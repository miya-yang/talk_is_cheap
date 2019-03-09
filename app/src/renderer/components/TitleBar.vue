<template>
  <header>
    <div class="title">
      {{ this.title }}
    </div>
    <div class="control-buttons">
      <control-button
        iconName="md-remove"
        :iconColor="iconColor"
        hoverTitle="最小化"
        @click="handleClick"
        v-if="hasMinimumBtn"
      ></control-button>
      <control-button
        iconName="md-browsers"
        :iconColor="iconColor"
        @click="handleClick"
        v-if="hasScaleBtn"
      ></control-button>
      <control-button
        hoverType="warning"
        iconName="md-close"
        :iconColor="iconColor"
        hoverTitle="关闭"
        @click="handleClick"
        v-if="hasCloseBtn"
      ></control-button>
    </div>
  </header>
</template>

<script>
import ControlButton from '@/components/TitleBar/ControlButton'
export default {
  name: 'title-bar',
  components: {
    ControlButton
  },
  data () {
    return {
      iconColor: '#fff'
    }
  },
  methods: {
    handleClick () {
      alert('我被点击了')
    }
  },
  props: {
    hasMinimumBtn: {
      type: Boolean,
      default: true
    },
    hasScaleBtn: {
      type: Boolean,
      default: true
    },
    hasCloseBtn: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  watch: {
    // TODO: 监听路由改变菜单按钮颜色至 #333
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: $titlebar-height;
  background: $titlebar-bgcolor;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  -webkit-user-select: none;
  -webkit-app-region: drag;

  .title {
    margin-left: 10px;
    color: #999;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 400;
  }
}
</style>


