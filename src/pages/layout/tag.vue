<template>
<div class="tag_container">
  <router-link class="th_tag tag_active" to="/">首页</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tag_container {
  display: flex;
  align-items: center;

  .th_tag {
    text-decoration: none;
    color: #cecece;
    padding: 0 16px;
    position: relative;

    &:active {
      color: #5bb3e6;
    }
  }

  .tag_active {
    color: #5bb3e6;

    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 2px;
      background: #5bb3e6;
      bottom: -9px;
      left: 0;
    }
  }
}
</style>
