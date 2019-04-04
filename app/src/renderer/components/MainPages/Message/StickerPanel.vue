<template>
  <div class="sticker-panel scroll">
    <div class="wrap">
      <div
        v-for="(item, index) of stickerList"
        :key="index"
        class="sticker-item"
        @click="handleAddSticker(item.name)"
      >
        <img
          :src="item.file"
          alt=""
          :title="item.name"
        >
      </div>
    </div>
  </div>
</template>

<script>
import stickerList from '@/data/sticker-list.js'
export default {
  name: 'sticker-panel',
  data () {
    return {
      stickerList: []
    }
  },
  mounted () {
    this.handleFormatList()
  },
  methods: {
    // 格式化表情列表
    handleFormatList () {
      for (let item of stickerList) {
        let obj = {}
        obj.name = item.name
        obj.file = `/static/stickers/default/${item.file}`
        this.stickerList.push(obj)
      }
    },
    // 添加表情
    handleAddSticker (text) {
      this.$emit('handleAddSticker', text)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.sticker-panel {
  width: 269px;
  height: 154px;
  background: #fff;
  overflow: auto;

  .wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .sticker-item {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
  }
}
</style>
