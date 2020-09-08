<template>
<div>
  <div class="menu" v-for="item in menu" :key="item.path">
    <div class="menu_title" v-if="item.hasChildren" @click="openMenu(item.children.length, item.path)">
      <span>
        <i :class="`iconfont ${item.icon}`"></i>
        {{ item.meta.title }}
      </span>
      <i class="el-icon-arrow-down"></i>
    </div>
    <router-link class="menu_link_title" v-else :to="item.path">
      <span>
        <i :class="`iconfont ${item.icon}`"></i>
        {{ item.meta.title }}
      </span>
    </router-link>
    <div v-if="item.hasChildren" :class="{'show': item.path === currentPath}" class="subMenu" :ref="item.path">
      <thMenu :menu="item.children">
      </thMenu>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'thMenu',
  data() {
    return {
      currentPath: '',
      refs: []
    }
  },
  props: {
    menu: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    openMenu(length, path) {
      this.refs.push(path)
      this.refs = Array.from([...new Set(this.refs)])
      if (this.currentPath === path) {
        for (let i = 0; i < this.refs.length; i++) {
          this.$refs[this.refs[i]][0].style.cssText = 'height: 0; overflow: hidden'
        }
        setTimeout(() => {
          this.currentPath = ''
          this.$refs[path][0].style.cssText = 'height: 0; overflow: hidden'
        }, 300)
      } else {
        if (this.currentPath) {
          for (let i = 0; i < this.refs.length; i++) {
            this.$refs[this.refs[i]][0].style.cssText = 'height: 0; overflow: hidden'
          }
        }
        this.$refs[path][0].style.cssText = `height: ${length * 40}px; overflow: hidden`
        this.currentPath = path
        setTimeout(() => {
          this.$refs[path][0].style.cssText = `height: ${length * 40}px`
        }, 300)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.menu {
  user-select: none;

  .menu_title {
    height: 40px;
    box-sizing: border-box;
    padding: 0 24px;
    display: flex;
    align-items: center;
    color: #4c4c4c;
    cursor: pointer;
    justify-content: space-between;

    &:hover {
      background: #5bb3e63d;
    }
  }

  .menu_link_title {
    height: 40px;
    box-sizing: border-box;
    padding: 0 24px;
    display: flex;
    align-items: center;
    color: #4c4c4c;
    text-decoration: none;

    &:hover {
      background: #5bb3e63d;
    }
  }

  .subMenu {
    height: 0;
    visibility: hidden;
    transition: height 0.3s;
    margin-left: 19px;
  }

  .show {
    visibility: visible;
  }
}
</style>
