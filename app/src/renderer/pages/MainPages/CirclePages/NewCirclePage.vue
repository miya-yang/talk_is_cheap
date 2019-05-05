<template>
  <div class="new-circle-page">
    <h2 class="title">发布圈子</h2>
    <Button
      type="primary"
      class="submit-btn"
      @click="handleSubmitMoments"
    >
    发布
    </Button>
    <Input
      v-model.trim="content"
      type="textarea"
      placeholder="请输入圈子内容"
      size="large"
      :maxlength="contentMaxLength"
      :autosize="{ minRows: 8, maxRows: 8 }"
    />
    <p style="line-height: 30px;">
      您还可以输入 {{canInputLength}} 字
    </p>
    <div class="upload-imgs">
      <div
        class="upload-list"
        v-for="(item, index) in uploadList"
        :key="index"
      >
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
      </div>
      <Upload
          ref="upload"
          :show-upload-list="false"
          :on-success="handleSuccess"
          :format="['jpg','jpeg','png', 'gif']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :before-upload="handleBeforeUpload"
          multiple
          type="drag"
          action="http://tic.codergzw.com/?m=user&c=user&a=uploadPortrait"
          style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
        </div>
      </Upload>
      <div class="circle-list">
        <p>请选择要发布的圈子</p>
        <Select v-model="circleId" style="width:200px">
          <Option
            v-for="item in circleList"
            :value="item.id"
            :key="item.id"
          >
          {{ item.circle_name }}
          </Option>
        </Select>
      </div>
      <Modal
        title="图片预览"
        v-model="imgPreviewVisible"
      >
        <img :src="imgUrl" v-if="imgPreviewVisible" style="width: 100%">
      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-circle-page',
  data () {
    return {
      content: '',
      contentMaxLength: 200,
      imgUrl: '',
      imgPreviewVisible: false,
      uploadList: [],
      circleList: [],
      circleId: ''
    }
  },
  computed: {
    canInputLength () {
      return this.contentMaxLength - this.content.length
    }
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList
    this.getCircleList()
  },
  methods: {
    // 预览图片
    handleView (url) {
      this.imgUrl = url
      this.imgPreviewVisible = true
    },
    // 移除图片
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    },
    // 图片上传成功回调
    handleSuccess (res, file) {
      file.url = res.data
      file.name = file.name
    },
    // 图片格式错误回调
    handleFormatError (file) {
      this.$Notice.warning({
        title: '图片类型错误',
        desc: '只允许上传.png、.jpg、.gif、.jpeg类型的图片'
      })
    },
    // 图片超出最大尺寸回调
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '图片大小错误',
        desc: '图片大小请不要超过2M'
      })
    },
    // 图片上传前回调
    handleBeforeUpload () {
      const check = this.uploadList.length < 1
      if (!check) {
        this.$Notice.warning({
          title: '最多只能上传 1 张图片'
        })
      }
      return check
    },
    // 获取圈子列表
    getCircleList () {
      this.$http.post(`?m=circle&c=circle&a=get_my_circle`).then(res => {
        this.circleList = res.data
      })
    },
    // 发送动态
    handleSubmitMoments () {
      if (this.content.length === 0) {
        this.$Notice.warning({
          title: '请先输入动态内容'
        })
        return false
      }
      if (this.circleId === '') {
        this.$Notice.warning({
          title: '请选择要发布的圈子'
        })
        return false
      }
      let picList = []
      this.uploadList.forEach(item => {
        picList.push(item.response.data)
      })
      this.$http.post(`?m=circle&c=circle&a=add_circle`, {
        circleid: this.circleId,
        content: this.content,
        pritures: picList.join(',')
      }).then(res => {
        this.$Message.success('圈子发布成功！')
        this.$router.push({ name: 'all-circle-page' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.new-circle-page {
  padding-left: 20px;
  padding-right: 20px;

  h2.title {
    font-weight: 300;
    line-height: 50px;
    display: inline-block;
  }

  .submit-btn {
    float: right;
    margin: 10px 0;
  }

  .upload-imgs {

    .upload-list{
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border: 1px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 1px rgba(0,0,0,.2);
      margin-right: 4px;
    }
    .upload-list img{
      width: 100%;
      height: 100%;
    }
    .upload-list-cover{
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.6);
    }
    .upload-list:hover .upload-list-cover{
      display: block;
    }
    .upload-list-cover i{
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
    }
  }
}
.block {
  display: block;
}
</style>
