<template>
  <div class="userinfo-window scroll">
    <title-bar
      title="编辑资料"
      :hasMinimumBtn="false"
      :hasScaleBtn="false"
      :isColorDefault="false"
      :isMain="false"
      windowName="userInfo"
    />
    <div class="remove-titlebar-content">
      <Upload
        class="portrait"
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div class="icon" v-if="formItem.portrait === ''">
          <Icon type="ios-camera" size="50"></Icon>
        </div>
        <img class="portrait-img" :src="formItem.portrait" v-else>
      </Upload>
      <div class="userinfo">
        <h1 class="tic-number">
          {{ ticNumber }}
        </h1>
        <Form class="form" :model="formItem" :label-width="40">
          <FormItem label="昵称">
            <Input v-model.trim="formItem.nickname" placeholder="展示给他人看的名字" />
          </FormItem>
          <FormItem label="介绍">
            <Input v-model.trim="formItem.intro" placeholder="一句话介绍自己" />
          </FormItem>
          <FormItem label="性别">
            <RadioGroup v-model="formItem.sex">
              <Radio label="男">男</Radio>
              <Radio label="女">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="生日">
            <DatePicker style="display: block;" type="date" v-model.trim="formItem.birth" placeholder="出生日期" />
          </FormItem>
          <FormItem label="手机">
            <Input v-model.trim="formItem.phone" placeholder="手机号" />
          </FormItem>
          <FormItem label="省份">
            <Select v-model.trim="formItem.province" placeholder="省份">
              <Option value="北京市">北京</Option>
              <Option value="天津市">天津</Option>
            </Select>
          </FormItem>
          <FormItem label="城市">
            <Select v-model.trim="formItem.city" placeholder="城市">
              <Option value="塘沽区">塘沽区</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type="primary">保存信息</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
export default {
  name: 'userinfo-window',
  components: {
    TitleBar
  },
  data () {
    return {
      ticNumber: '',
      formItem: {
        nickname: '',
        portrait: '',
        intro: '',
        birth: '',
        sex: '',
        phone: '',
        province: '',
        city: ''
      }
    }
  },
  methods: {
    getUserInfo () {
      this.$http.post('?m=user&c=user&a=get_userinfo', {
        userid: sessionStorage.getItem('_id')
      }).then(res => {
        let data = res.data
        this.ticNumber = data.account
        this.formItem.portrait = data.portrait
        this.formItem.nickname = data.nickname
        this.formItem.intro = data.describe
        this.formItem.sex = data.sex
        this.formItem.birth = data.birthday
        this.formItem.phone = data.phone
        this.formItem.province = data.province
        this.formItem.city = data.city
      })
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.userinfo-window {
  width: 100%;
  height: 100%;
  overflow: auto;

  .portrait {
    width: 200px;
    height: 200px;
    margin: 10px auto;
    overflow: hidden;

    .portrait-img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    .icon {
      position: relative;
      margin: 74px auto;
    }
  }

  .portrait:hover .icon {
    z-index: 999;
  }

  .userinfo {
    .tic-number {
      text-align: center;
      font-weight: 300;
    }

    .form {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>
