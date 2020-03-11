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
  @import url('./small-xs.less') screen and (max-width: 480px);
  @import url('./small-x.less') screen and (min-width: 480px) and (max-width: 768px);
  @import url('./small.less') screen and (min-width: 768px) ;
  @import url('./middle.less') screen and (min-width: 900px);
  @import url('./big.less') screen and (min-width: 1200px);
</style>