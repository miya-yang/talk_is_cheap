<template>
  <div class="add-friends-page">
    <div class="add-input-panel">
      <Input class="inputAccount" v-model="inputAccount" size="large" placeholder="请输入TIC账号或昵称" />
      <Button class="inputBtn" type="primary">搜索</Button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'add-friends-page',
  data () {
    return {
      inputAccount: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.add-friends-page {
  .add-input-panel {
    width: 60%;
    margin: 20px auto;
    display: flex;

    .inputAccount {
      flex: 1;
    }
    .inputBtn {
      margin-left: 10px;
    }
  }
}
</style>
