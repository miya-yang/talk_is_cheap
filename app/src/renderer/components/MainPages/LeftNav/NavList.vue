<template>
  <ul class="nav-list">
    <li>
      <router-link class="nav-item" :to="{ name: 'message-page' }" title="聊天">
        <Icon
          class="icon"
          type="ios-chatbubbles-outline"
          :size="35"
        />
      </router-link>
    </li>
    <li>
      <router-link class="nav-item" :to="{ name: 'message-page' }" title="通讯录">
        <Icon
          class="icon"
          type="ios-contacts-outline"
          :size="35"
        />
      </router-link>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'nav-list'
}
</script>

<style lang="scss" scoped>
.nav-list {
  li {
    margin: 20px auto;

    .nav-item {
      color: #fff;
      
      .icon {
        display: block;
        width: 35px;
        height: 35px;
        margin: 0 auto;
      }
    }
  }
}
</style>

