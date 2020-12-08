<template>
<div class="tag_container">
  <div class="tag_box" :class="{'tag_active': item.path === cur}" v-for="item in tag" :key="item.path">
    <router-link class="th_tag" v-text="item.title" :to="item.path" @click.native="tagCli(item.path)"></router-link>
    <i v-if="item.path !== '/'" class="iconfont icon-notice-close tag_close" @click="delTag(item.path)"></i>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      curPath: '/'
    }
  },
  computed: {
    ...mapState({
      tag: state => state.menu.tag,
      cur: state => state.menu.cur
    })
  },
  created() {
    this.curPath = this.cur
  },
  methods: {
    tagCli(path) {
      this.curPath = path
      this.$store.commit('ADD_TAG', {
        path
      })
    },
    delTag(path) {
      console.log('del', path)
      this.$store.commit('DEL_TAG', {
        path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tag_container {
  display: flex;
  align-items: center;

  .tag_box {
    position: relative;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      padding: 0 5px;

      .tag_close {
        width: 17px;
      }
    }

    .th_tag {
      text-decoration: none;
      color: #cecece;
      padding: 0 8px;
      position: relative;
      vertical-align: middle;
      display: inline;
    }

    .tag_close {
      display: inline-block;
      vertical-align: middle;
      width: 0;
      height: 17px;
      font-size: 17px !important;
      overflow: hidden;
      transition: width 0.3s;
    }
  }

  .tag_active {
    color: #5bb3e6;
    padding: 0 5px;

    .th_tag {
      color: #5bb3e6;
    }

    .tag_close {
      width: 17px;
    }

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
