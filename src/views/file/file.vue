<template>
<div class="container">
  <el-table ref="multipleTable" :data="fileList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="60" align="center"></el-table-column>
    <el-table-column prop="name" label="文件名" align="center">
      <template slot-scope="scope">
        <img class="thumbnail" :src="scope.row.url" :alt="scope.row.name">
      </template>
    </el-table-column>
    <el-table-column prop="type" label="类型" align="center"></el-table-column>
    <el-table-column prop="url" label="路径" align="center" show-overflow-tooltip>
      <template slot-scope="scope">
        <a :href="scope.row.url" target="_blank" rel="noopener noreferrer">{{ scope.row.url }}</a>
      </template>
    </el-table-column>
    <el-table-column label="上传时间" align="center">
      <template slot-scope="scope">{{ scope.row.create_time }}</template>
    </el-table-column>
    <el-table-column prop="size" label="大小" align="center"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page_wrapping">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="page.total"></el-pagination>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      ids: [],
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created() {
    this.getFiles()
  },
  methods: {
    handleSelectionChange(val) { // 复选框
      let ids = []
      val.forEach(item => {
        ids.push(item.id)
      })
      this.ids = ids
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(id) { // 删除
      console.log(id)
    },
    handleSizeChange(val) { // 分页
      this.page.pageSize = val
      this.getFiles()
    },
    handleCurrentChange(val) {
      this.page.currentPage = val
      this.getFiles()
    },
    getFiles() { // 获取文件（图片）列表
      this.$store.dispatch('getFiles', {
        currentPage: this.page.currentPage,
        pageSize: this.page.pageSize
      }).then((res) => {
        console.log(res)
        this.page.currentPage = res.data.currentPage
        this.page.pageSize = res.data.pageSize
        this.page.total = res.data.total
        this.fileList = res.data.result
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #FFFFFF;

  .thumbnail {
    width: 60px;
    height: 60px;
    border-radius: 4px;
  }

  .page_wrapping {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    margin-top: 12px;
  }
}
</style>
