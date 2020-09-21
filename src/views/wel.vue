<template>
<div class="container">
  <Upload></Upload>
</div>
</template>

<script>
import Upload from '@/components/upload'
import {
  mapState
} from 'vuex'
export default {
  components: {
    Upload
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      socket: state => state.socket.socket
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
