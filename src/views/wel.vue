<template>
<div class="home">
  <div @click="dialog">dialog</div>
  <Upload></Upload>
</div>
</template>

<script>
import Upload from '@/components/upload'
import Dialog from '@/document/dialog'

export default {
  components: {
    Upload
  },
  data() {
    return {

    }
  },
  methods: {
    dialog() {
      Dialog({
        type: 'confirm',
        title: '提示',
        message: '大师分公司讲故事',
        success: () => {
          console.log('dialog confirm...')
        },
        cancel: () => {
          console.log('dialog cancel...')
        }
      })
    }
  }
}
</script>
