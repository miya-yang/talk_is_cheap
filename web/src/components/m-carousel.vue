<template>
  <div class="carousel" ref="carousel"></div>
</template>

<script>
export default {
  name: 'm-crousel',
  data () {
    return {
      imagesArr: [
        '/static/img/register-left-banner-1.jpg',
        '/static/img/register-left-banner-2.jpg',
        '/static/img/register-left-banner-3.jpg',
        '/static/img/register-left-banner-4.jpg'
      ]
    }
  },
  mounted () {
    this.toggleImages()
  },
  methods: {
    toggleImages () {
      let index = 0
      setInterval(() => {
        if (index === this.imagesArr.length - 1) {
          index = 0
        } else {
          index++
        }
        this.$refs.carousel.style.background = `url(${this.imagesArr[index]})`
        this.$refs.carousel.style.backgroundPosition = 'center center'
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  background: url('/static/img/register-left-banner-1.jpg');
  background-position: center center;
  transition: all 1s;
}
</style>
