<template>
  <li class="friends-item" :class="{ 'friends-active': isActive }">
    <Avatar :src="portrait" class="avatar" :icon="icon"  size="large" shape="square" />
    <div class="friends-info">
      <span class="friends-title single-line">{{ title }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'friends-item',
  props: {
    portrait: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'ios-person'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.friends-item {
  display: flex;
  list-style: none;
  width: 100%;
  height: 65px;
  padding: 12.5px 10px;
  cursor: default;
  -webkit-user-select: none;

  .friends-info {
    flex: 1;
    margin-left: 10px;

    .friends-title {
      display: block;
      width: 160px;
      font-size: 16px;
      color: #000;
      line-height: 40px;
    }
  }
}

.friends-item:hover {
  background: #eaeaea;
}

.friends-active {
  background: #d3d3d3 !important;
}
</style>
