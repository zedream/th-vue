<template>
<div class="file_container">
  <div class="thumbnail_box" v-for="(item, index) in thumbnail" :key="index">
    <img class="thumbnail" :src="item.url" :alt="item.name">
    <div class="thumbnail_mask">
      <i class="el-icon-zoom-in" @click="toPreview(index)"></i>
      <i class="el-icon-delete"></i>
    </div>
  </div>
  <div class="upload_box" @click="$refs.file.click()">
    <i class="el-icon-plus avatar-uploader-icon"></i>
    <input type="file" @change="fileChange" ref="file" multiple>
  </div>

  <!-- <el-button type="primary" @click="upload">上传</el-button> -->
</div>
</template>

<script>
import preview from '@/document/preview'
export default {
  name: 'upload',
  data() {
    return {
      fd: new FormData(),
      thumbnail: [],
      preview: []
    }
  },
  methods: {
    // 选择文件结束并上传
    fileChange() {
      for (let key in this.$refs.file.files) {
        this.fd.append('files', this.$refs.file.files[key])
      }
      this.upload()
      this.$refs.file.value = ''
      this.fd = new FormData()
    },
    // 打开预览
    toPreview(index) {
      preview(index, this.thumbnail)
    },
    // 上传
    upload() {
      this.$store.dispatch('upload', this.fd)
        .then((res) => {
          console.log(res)
          this.thumbnail = this.thumbnail.concat(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.file_container {
  display: inline-flex;
  flex-wrap: wrap;

  .upload_box {
    width: 180px;
    height: 180px;
    border-radius: 6px;
    background: white;
    border: 1px dashed #e4e4e4;
    cursor: pointer;
    color: #d4d4d4;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    box-sizing: border-box;

    &:hover {
      border-color: #64c3fd;
    }

    input {
      display: none;
    }
  }

  .thumbnail_box {
    margin: 0 8px 8px 0;
    overflow: hidden;
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 6px;
    background: white;
    border: 1px solid #e4e4e4;
    cursor: pointer;
    color: #d4d4d4;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    box-sizing: border-box;

    .thumbnail_mask {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, .5);
      border-radius: 6px;
      position: absolute;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      opacity: 0;
      transition: opacity 0.3s;
      font-size: 24px;
      cursor: default;

      &>i {
        cursor: pointer;

        &:first-child {
          margin-right: 16px;
        }
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
