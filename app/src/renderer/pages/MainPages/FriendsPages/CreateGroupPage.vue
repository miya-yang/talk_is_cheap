<template>
  <div class="create-group-page remove-titlebar-content scroll">
    <Form :model="form" :label-width="80">
      <FormItem label="群组名称">
        <Input v-model.trim="form.groupName" placeholder="请输入群组名称" :maxlength="16" />
      </FormItem>
      <FormItem label="选择好友">
        <CheckboxGroup v-model="form.memberList">
          <Checkbox
            v-for="item of friendsList"
            :key="item.id"
            class="block"
            :label="item.id"
            :title="item.account"
          >{{ item.nickname }}</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          @click="handleCreateGroup"
        >
        创建群聊
        </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'create-group-page',
  data () {
    return {
      form: {
        groupName: '',
        memberList: []
      },
      friendsList: []
    }
  },
  mounted () {
    this.handleGetFriendsList()
  },
  methods: {
    // 获取好友列表
    handleGetFriendsList () {
      this.$http.post(`?m=friend&c=friend&a=get_friendList`).then(res => {
        this.friendsList = res.data
      })
    },
    // 创建群聊
    handleCreateGroup () {
      // 参数判断
      if (this.form.groupName === '') {
        this.$Message.error('请输入群组名称')
        return false
      }
      if (this.form.memberList.length < 2) {
        this.$Message.error('请选择至少两位好友')
        return false
      }
      this.$http.post(`?m=chat&c=chat&a=create_group`, {
        users: this.form.memberList.join(','),
        group_name: this.form.groupName
      }).then(res => {
        this.$Message.success(res.message)
        this.form.groupName = ''
        this.form.memberList = []
        this.$store.dispatch('changeGroupsListFlag')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.create-group-page {
  padding: 50px 20px;
  height: 100%;
  overflow-y: auto;
}
.block {
  display: block;
}
</style>
