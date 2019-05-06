<template>
  <div class="new-activity-page">
    <h2 class="title">发布活动</h2>
    <Form :model="formItem" :label-width="100">
      <FormItem label="活动标题">
        <Input v-model.trim="formItem.title" placeholder="请输入活动标题" :maxlength="20" />
      </FormItem>  
      <FormItem label="活动类型">
        <Select v-model.trim="formItem.type">
          <Option value="1">娱乐</Option>
          <Option value="2">学习</Option>
          <Option value="3">其他</Option>
        </Select>
      </FormItem>
      <FormItem label="活动描述">
        <Input v-model.trim="formItem.content" placeholder="请输入活动描述" :maxlength="50" />
      </FormItem>
      <FormItem label="悬赏积分">
        <InputNumber :min="0" v-model.trim="formItem.score"></InputNumber>
      </FormItem>
      <FormItem label="开始时间">
        <DatePicker type="datetime" v-model.trim="formItem.starttime" placeholder="请输入开始时间"></DatePicker>
      </FormItem>
      <FormItem label="最大参与人数">
        <InputNumber :min="2" v-model.trim="formItem.count"></InputNumber>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleNewActivity">发起活动</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'new-activity-page',
  data () {
    return {
      formItem: {
        title: '',
        type: '',
        content: '',
        starttime: '',
        score: 0,
        count: 2
      }
    }
  },
  methods: {
    // 发起活动
    handleNewActivity () {
      // 数据验证
      if (this.formItem.title === '') {
        this.$Message.error('请输入活动标题')
        return false
      }
      if (this.formItem.type === '') {
        this.$Message.error('请选择活动类型')
        return false
      }
      if (this.formItem.content === '') {
        this.$Message.error('请输入活动描述')
        return false
      }
      if (this.formItem.score < 0) {
        this.$Message.error('请输入悬赏积分')
        return false
      }
      if (!this.formItem.starttime) {
        this.$Message.error('请输入开始时间')
        return false
      }
      if (this.formItem.count < 2) {
        this.$Message.error('最大参与人数不得小于2')
        return false
      }
      let time = `${this.formItem.starttime.getFullYear()}-${(this.formItem.starttime.getMonth() + 1) > 10 ? (this.formItem.starttime.getMonth() + 1) : '0' + (this.formItem.starttime.getMonth() + 1)}-${(this.formItem.starttime.getDate()) > 10 ? (this.formItem.starttime.getDate()) : '0' + (this.formItem.starttime.getDate())} ${(this.formItem.starttime.getHours()) > 10 ? (this.formItem.starttime.getHours()) : '0' + (this.formItem.starttime.getHours())}:${(this.formItem.starttime.getMinutes()) > 10 ? (this.formItem.starttime.getMinutes()) : '0' + (this.formItem.starttime.getMinutes())}:${(this.formItem.starttime.getSeconds()) > 10 ? (this.formItem.starttime.getSeconds()) : '0' + (this.formItem.starttime.getSeconds())}`
      // 发送请求
      this.$http.post(`?m=activity&c=activity&a=add_activity`, {
        title: this.formItem.title,
        type: this.formItem.type,
        content: this.formItem.content,
        starttimes: time,
        score: this.formItem.score || 0,
        maxuser: this.formItem.count || 0
      }).then(res => {
        this.$Message.success('活动发起成功！')
        this.formItem = {
          title: '',
          type: '',
          content: '',
          starttime: '',
          score: 0,
          count: 2
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.new-activity-page {
  padding-left: 20px;
  padding-right: 20px;
  
  h2.title {
    font-weight: 300;
    line-height: 50px;
    display: inline-block;
  }
}
</style>
