<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style lang="less">
  @import './assets/css/common.less';
</style>
<style>
  #app {
    height: 100%;
  }
</style>