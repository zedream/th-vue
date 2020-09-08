<template>
<div class="home">
  <Upload></Upload>
</div>
</template>

<script>
import Upload from '@/components/upload.vue'
//import Message from '@/document/message'

export default {
  components: {
    Upload
  },
  methods: {
    // close(e) {
    //   console.log('接收到子组件传递的内容：', e)
    //   document.querySelector('body').removeChild(e)
    // }
  },
}
</script>
