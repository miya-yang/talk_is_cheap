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
        <FormItem label="举报类型">
          <Select v-model.trim="formItem.type">
            <Option v-for="item of reportTypeList" :key="item.id" :value="item.title">{{ item.title }}</Option>
          </Select>
        </FormItem>
        <FormItem :label="reportIdLabel">
          <Input v-model="formItem.id" />
        </FormItem>
        <FormItem label="描述">
          <Input v-model="formItem.desc" />
        </FormItem>
        <FormItem>
          <Button type="error">提交举报</Button>
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
        type: '',
        id: '',
        desc: ''
      },
      reportTypeList: [
        {
          id: 1,
          title: '圈子'
        },
        {
          id: 2,
          title: '动态'
        },
        {
          id: 3,
          title: '好友'
        }
      ]
    }
  },
  computed: {
    reportIdLabel () {
      switch (this.formItem.type) {
        case '圈子':
          return '圈子ID'
        case '动态':
          return '动态ID'
        case '好友':
          return '好友TIC账号'
        default:
          return '请选择举报类型'
      }
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
