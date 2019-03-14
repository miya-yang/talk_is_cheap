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
        @click="hcControlBtns('min')"
        v-if="hasMinimumBtn"
      ></control-button>
      <control-button
        :iconName="scaleIconName"
        :iconColor="iconColor"
        :hoverTitle="scaleHoverTitle"
        @click="hcControlBtns('scale')"
        v-if="hasScaleBtn"
      ></control-button>
      <control-button
        hoverType="warning"
        iconName="md-close"
        :iconColor="iconColor"
        hoverTitle="关闭"
        @click="hcControlBtns('close')"
        v-if="hasCloseBtn"
      ></control-button>
    </div>
  </header>
</template>

<script>
import ControlButton from '@/components/TitleBar/ControlButton'
import events from '../events.js'
export default {
  name: 'title-bar',
  components: {
    ControlButton
  },
  data () {
    return {
      iconColor: '#fff',
      isMax: false
    }
  },
  methods: {
    hcControlBtns (operator) {
      if (operator === 'scale') {
        this.isMax = !this.isMax
      } else if (operator === 'close' && this.windowName === '') {
        if (window.confirm('真的要退出TIC吗？')) {
          this.$http.post('?m=user&c=user&a=logout').then(res => {
            if (res.code === 0) {
              events.hWindowControl({ name: operator, isMain: this.isMain, windowName: this.windowName })
            }
          })
        } else {
          return false
        }
      } else {
        events.hWindowControl({ name: operator, isMain: this.isMain, windowName: this.windowName })
      }
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
    },
    isColorDefault: {
      type: Boolean,
      default: true
    },
    isMain: {
      type: Boolean,
      default: true
    },
    windowName: {
      type: String,
      default: ''
    }
  },
  computed: {
    scaleHoverTitle () {
      return this.isMax ? '向下还原' : '最大化'
    },
    scaleIconName () {
      return this.isMax ? 'ios-browsers' : 'md-browsers'
    }
  },
  mounted () {
    this.iconColor = this.isColorDefault ? '#fff' : '#333'
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
    line-height: $titlebar-height;
  }
}
</style>


