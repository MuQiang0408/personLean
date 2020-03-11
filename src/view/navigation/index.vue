<template>
  <div class="navigation">
    <div class="inner">
      <a class="logo">天天看</a>
      <div class="otherOperate">
        <ul class="operateUl">
          <li class="everyLi">iview</li>
          <li class="everyLi">ant.design</li>
          <li class="everyLi">layui</li>
          <li class="everyLi">element</li>
        </ul>
        <div class="selectUser">
          <a href="javaScript;" class="operate">登录</a>
          <a href="javaScript;" class="operate register">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navigation",
  }
</script>

<style lang="less" scoped>
  @import url('./navigation.less');
</style>