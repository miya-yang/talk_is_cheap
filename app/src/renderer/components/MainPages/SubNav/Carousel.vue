<template>
  <div class="carousel" :class="{ default: isDefault, danger: isDanger, success: isSuccess }">
    <marquee>{{ content }}</marquee>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    isDefault () {
      return this.type === 'default'
    },
    isDanger () {
      return this.type === 'danger'
    },
    isSuccess () {
      return this.type === 'success'
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  text-align: center;
  font-size: 14px;
  -webkit-user-select: none;
  cursor: default;
}
.default {
  color: blue;
}
.danger {
  color: red;
}
.success {
  color: greenyellow
}
</style>

