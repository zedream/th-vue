<template>
<div class="container">
  <el-table ref="multipleTable" :data="dataList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="60" align="center"></el-table-column>
    <el-table-column prop="username" label="用户名" align="center"></el-table-column>
    <el-table-column prop="avatar" label="头像" align="center">
      <template slot-scope="scope">
        <img class="avatar" :src="scope.row.avatar" :alt="scope.row.nickname">
      </template>
    </el-table-column>
    <el-table-column prop="nickname" label="昵称" align="center" show-overflow-tooltip></el-table-column>
    <el-table-column prop="role" label="角色" align="center"></el-table-column>
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
      dataList: [],
      ids: [],
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created() {
    this.getData()
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
      this.$store.dispatch('deleteUser', {
        id
      }).then(() => {
        this.getData()
      })
    },
    handleSizeChange(val) { // 分页
      this.page.pageSize = val
      this.getData()
    },
    handleCurrentChange(val) {
      this.page.currentPage = val
      this.getData()
    },
    getData() { // 获取用户列表
      this.$store.dispatch('getUsers', {
        currentPage: this.page.currentPage,
        pageSize: this.page.pageSize
      }).then((res) => {
        console.log(res)
        this.page.currentPage = res.data.currentPage
        this.page.pageSize = res.data.pageSize
        this.page.total = res.data.total
        this.dataList = res.data.result
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
  overflow: auto;

  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
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
