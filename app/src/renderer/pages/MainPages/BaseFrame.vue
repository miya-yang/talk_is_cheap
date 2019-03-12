<template>
  <div class="base-frame panel">
    <title-bar />
    <div class="remove-titlebar-content">
      <router-view></router-view>
    </div>
    <left-nav class="left-nav" />
    <sub-nav 
      class="sub-nav"
      :router="router"
    />
    <div
      id="more-menu"
      class="more-menu"
      v-if="isShowMoreMenu"
    >
      <CellGroup>
        <Cell class="item" title="举报" @click.native="handleMoreMenuReport" />
      </CellGroup>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import LeftNav from '@/components/LeftNav'
import SubNav from '@/components/SubNav'
import events from '../../events.js'

export default {
  name: 'base-frame',
  components: {
    TitleBar,
    LeftNav,
    SubNav
  },
  created () {
    let body = document.querySelector('body')
    body.addEventListener('click', (e) => {
      if (e.target.id !== 'more-item' && e.target.id !== 'more-menu') {
        this.$store.dispatch('hideMoreMenu')
      }
    }, false)
  },
  data () {
    return {
      router: 'message-page'
    }
  },
  methods: {
    handleMoreMenuReport () {
      events.handleCreateWindow('ReportWindow')
    }
  },
  computed: {
    isShowMoreMenu () {
      return this.$store.state.ShowMenu.MoreMenu
    }
  },
  watch: {
    $route () {
      this.router = this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.base-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;

  .left-nav {
    position: absolute;
    left: 0;
    top: 0;
  }

  .sub-nav {
    position: absolute;
    left: $left-nav-width;
    top: 0;
  }

  .more-menu {
    width: 120px;
    position: absolute;
    top: 415px;
    left: 70px;
    background: #1A2D27;

    .item {
      color: #fff;
    }
    .item:hover {
      background: #333;
    }
  }
}
</style>
