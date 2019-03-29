<template>
  <router-link :to="{ name: linkName }" class="lists-item" :class="{ 'lists-active': isActive }">
    <Badge :count="redCount">
      <Avatar :src="portrait" class="avatar" :icon="icon"  size="large" shape="square" />
    </Badge>
    <div class="lists-info">
      <span class="lists-title single-line">{{ title }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'lists-item',
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
    },
    redCount: {
      type: Number,
      default: 0
    },
    linkName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.lists-item {
  display: flex;
  list-style: none;
  width: 100%;
  height: 65px;
  padding: 12.5px 10px;
  cursor: default;
  -webkit-user-select: none;

  .lists-info {
    flex: 1;
    margin-left: 10px;

    .lists-title {
      display: block;
      width: 160px;
      font-size: 16px;
      color: #000;
      line-height: 40px;
    }
  }
}

.lists-item:hover {
  background: #eaeaea;
}

.lists-active {
  background: #d3d3d3 !important;
}
</style>
