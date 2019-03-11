<template>
  <h3 class="sub-title">{{ title }}</h3>
</template>

<script>
export default {
  name: 'sub-title',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-title {
  font-weight: 300;
  font-size: 12px;
  color: #bbb;
  padding: 5px 20px;
}
</style>

