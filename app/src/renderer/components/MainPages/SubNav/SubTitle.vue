<template>
  <h3>{{ title }}</h3>
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

</style>

