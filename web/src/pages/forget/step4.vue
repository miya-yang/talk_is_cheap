<template>
  <div class="forget-content">
    <h1>修改密码成功</h1>
    <p>恭喜你，密码修改成功！</p>
    <p>请使用新的密码登录TIC，感受畅聊体验！</p>
  </div>
</template>

<script>
import mInput from '@/components/m-Input'
import mButton from '@/components/m-Button'
export default {
  name: 'forget-page-4',
  components: {
    mInput,
    mButton
  },
  data () {
    return {
      ticNumber: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.forget-content {
  width: 80%;
  height: 100%;
  margin: 50px auto 0 auto;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 22px;
  }
}
</style>
