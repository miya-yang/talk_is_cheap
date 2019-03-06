<template>
  <a class="portrait-component" href="javascript:;">
    <img class="portrait-img" src="../../../assets/test/portrait.png" alt="">
  </a>
</template>

<script>
export default {
  name: 'portrait'
}
</script>

<style lang="scss" scoped>
.portrait-component {
  display: block;
  width: 40px;
  height: 40px;

  .portrait-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}

</style>
