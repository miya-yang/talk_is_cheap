<template>
  <div class="message-panel remove-titlebar-content">
    <h2 class="chat-title single-line">2019华信软件学院</h2>
    <div class="chat-dialog">
      
    </div>
    <div class="chat-input-panel">

    </div>
  </div>
</template>

<script>
export default {
  name: 'message-panel'
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.message-panel {
  background: #eee;
  position: relative;

  .chat-title {
    font-size: 24px;
    font-weight: 300;
    padding-left: 30px;
    padding-bottom: 15px;
    font-family: 'Microsoft YaHei';
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    box-shadow: 1px 1px solid #aaa;
  }

  .chat-input-panel {
    background: #fff;
    height: 130px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>

