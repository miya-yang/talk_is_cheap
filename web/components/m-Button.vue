<template>
  <div class="m-Button">
    <a
      href="javascript:;"
      :style="{
        width: width,
        background: background,
        borderColor: borderColor,
        color: color,
        height: height,
        lineHeight: height,
        fontSize: fontSize,
        display: display
      }"
    >
    <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'm-Button',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    background: {
      type: String,
      default: '#3083ff'
    },
    borderColor: {
      type: String,
      default: '#3083ff'
    },
    color: {
      type: String,
      default: '#fff'
    },
    height: {
      type: String,
      default: '50px'
    },
    fontSize: {
      type: String,
      default: '24px'
    },
    display: {
      type: String,
      default: 'block'
    }
  }
}
</script>

<style lang="scss" scoped>
.m-Button {
  a {
    text-decoration: none;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    font-weight: 300;
    box-sizing: border-box;
    border-radius: 5px;
  }
}

a:hover {
  background: #3487ff !important;
}
</style>
