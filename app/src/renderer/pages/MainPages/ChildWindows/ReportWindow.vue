<template>
  <div>
    <title-bar
      title="举报系统"
      :hasMinimumBtn="false"
      :hasScaleBtn="false"
      :isColorDefault="false"
      :isMain="false"
      windowName="report"
    />
    <div class="report-form remove-titlebar-content">
      <Form :model="formItem">
        <FormItem label="举报用户TIC账号">
          <Input v-model.trim="formItem.id" />
        </FormItem>
        <FormItem label="描述">
          <Input v-model.trim="formItem.desc" />
        </FormItem>
        <FormItem>
          <Button
            type="error"
            @click="handleReport"
          >
          提交举报
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
export default {
  name: 'report-window',
  components: {
    TitleBar
  },
  data () {
    return {
      formItem: {
        id: '',
        desc: ''
      }
    }
  },
  methods: {
    // 提交举报
    handleReport () {
      // 数据验证
      if (this.formItem.id === '') {
        this.$Message.error('举报用户TIC账号不得为空')
        return false
      }
      if (this.formItem.desc === '') {
        this.$Message.error('举报内容不得为空')
        return false
      }
      // 发送请求
      this.$http.post(`?m=reportuser&c=reportuser&a=add_report`, {
        reportuser: this.formItem.id,
        content: this.formItem.desc
      }).then(res => {
        this.formItem.id = ''
        this.formItem.desc = ''
        this.$Message.success('举报内容提交成功！')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.report-form {
  width: 80%;
  margin: 20px auto;
}
</style>
