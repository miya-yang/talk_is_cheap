<template>
  <div>
    <title-bar
      title="个人资料"
      :isColorDefault="false"
      :isMain="false"
      windowName="userInfo"
    />
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
export default {
  name: 'userinfo-window',
  components: {
    TitleBar
  },
  mounted () {
    console.log('here is userinfo-window')
  }
}
</script>
