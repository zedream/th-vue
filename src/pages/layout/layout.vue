<template>
<div class="th_layout_wrapping">
  <div class="th_layout">
    <div class="th_aside" :style="`width:${asideWidth}`">
      <div class="th_title"><span :class="{ 'hide_title': resizing }">我是一个标题</span></div>
      <thMenu v-if="routes.length > 0" class="th_menu_wrapping" :menu="routes"></thMenu>
      <div v-else class="no_menu_wrapping">
        <div class="no_menu">无可用菜单项</div>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <div class="th_header">
          <i @click="asideResize" class="iconfont icon-zhankai"></i>
          <el-dropdown @command="command">
            <div class="th_userinfo">
              <div class="nickname" v-text="userInfo.nickname || userInfo.username || 'not logged in'"></div>
              <img v-if="!userInfo.avatar" src="@/assets/default.png">
              <img v-else :src="userInfo.avatar">
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">个人中心</el-dropdown-item>
              <el-dropdown-item command="2">修改密码</el-dropdown-item>
              <el-dropdown-item class="logout" command="0" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>
        <div class="th_nav"></div>
      </div>
      <div class="th_container">
        <router-view />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import thMenu from './menu'
export default {
  components: {
    thMenu
  },
  data() {
    return {
      fullWidth: document.documentElement.clientWidth,
      asideWidth: '240px',
      resizing: false
    }
  },
  computed: {
    routes: {
      get() {
        return this.$store.state.user.routes
      },
      set() {

      }
    },
    ...mapState({
      userInfo: state => state.user.userInfo,
      // routes: state => state.user.routes
    })
  },
  watch: {
    /* 监听*/
    fullWidth(newVal) {
      if (!this.timer) {
        this.fullWidth = newVal
        this.timer = true
        if (newVal < 1440) {
          this.asideWidth = '100px'
        } else {
          this.asideWidth = '240px'
        }
        setTimeout(() => {
          this.timer = false
          this.resizing = false
        }, 300)
      }
    },
    asideWidth() {
      this.resizing = true
    }
  },
  created() {
    this.$store.dispatch('getRouter').then((res) => {
        this.$router.$thRouter.createRoutes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    this.$store.dispatch('getDict').then(() => {

      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth
        this.fullWidth = window.fullWidth
      })()
    }
  },
  methods: {
    asideResize() {
      if (this.asideWidth === '240px') {
        this.asideWidth = '100px'
      } else {
        this.asideWidth = '240px'
      }
      setTimeout(() => {
        this.resizing = false
      }, 300)
    },
    command(e) {
      if (e === '0') {
        this.$store.dispatch('logOut').then(() => {
          this.$router.push('/login')
          console.log('log out...')
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$bg: #5bb3e6;

.th_layout_wrapping {
  width: 100vw;
  height: 100vh;
  background: #f7f7f7;
  overflow-y: auto;

  .th_layout {
    width: 100%;
    height: 100%;
    display: flex;

    .th_aside {
      width: 240px;
      background: white;
      box-shadow: 0 0 20px white;
      box-shadow: 0 0 10px #d6d6d6;
      z-index: 1;
      transition: width 0.4s;
      display: flex;
      flex-direction: column;

      .th_title {
        height: 80px;
        line-height: 80px;
        color: white;
        font-weight: 600;
        text-align: center;
        font-size: 20px;
        padding: 0 12px;
        background: $bg;

        span {
          transition: all 0.3s;
        }
      }

      .hide_title {
        opacity: 0;
      }

      .th_menu_wrapping {
        width: 100%;
        flex: 1;
        overflow-y: auto;
      }

      .no_menu_wrapping {
        width: 100%;
        height: 160px;
        padding: 20px;
        box-sizing: border-box;

        .no_menu {
          background: #cad9e2;
          text-align: center;
          line-height: 160px;
          color: #002235;
          font-size: 18px;
          border-radius: 6px;
        }
      }
    }

    .th_mini_aside {
      width: 120px;
    }

    .right {
      overflow-x: hidden;
      flex: 1;
      display: flex;
      flex-direction: column;

      .top {
        height: 130px;

        .th_header {
          background: white;
          height: 80px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          background: $bg;
          justify-content: space-between;

          .icon-zhankai {
            font-size: 24px;
            color: white;
            cursor: pointer;
          }

          .th_userinfo {
            padding: 0 0 0 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            color: white;
            font-size: 18px;

            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              margin-left: 12px;
            }
          }
        }

        .th_nav {
          background: white;
          height: 50px;
          padding: 8px 12px;
          box-sizing: border-box;
        }
      }

      .th_container {
        flex: 1;
        box-sizing: border-box;
        padding: 12px;
        overflow: auto;
      }
    }
  }
}
</style>
