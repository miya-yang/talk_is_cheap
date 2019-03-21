<template>
  <div class="forget-page">
    <div class="steps">
      <Steps class="steps-bar" :current="current" direction="vertical">
        <Step title="验证TIC账号"></Step>
        <Step title="验证邮箱"></Step>
        <Step title="重置密码"></Step>
        <Step title="修改密码成功"></Step>
      </Steps>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-forget',
  data () {
    return {
      current: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.forget-page {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex;

  .steps {
    width: 30%;
    min-width: 300px;
    position: relative;

    .steps-bar {
      position: absolute;
      width: 200px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .content {
    flex: 1;
  }
}
</style>
