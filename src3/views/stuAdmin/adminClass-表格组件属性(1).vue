<template>
  <div class="admin-class">
    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 卡片标题 -->
      <div slot="header" class="clearfix">
        <span>班级列表</span>

        <el-button style="float: right; padding: 3px 0" type="text"
          >批量操作</el-button
        >
        <el-button
          style="float: right; padding: 3px 0; margin-right: 30px"
          type="text"
          @click="openAddClass"
          >新建</el-button
        >
      </div>

      <!-- 
        卡片内容：  表格数据 

        1. 可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。
        row-class-name属性和stripe属性不能同时使用
        2. 只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。
        3. 固定列需要使用fixed属性，它接受 Boolean 值或者leftright，表示左边固定还是右边固定。


        4.*****************特别特别注意<el-table-column>组件内部的作用域插槽，传入的scope提供了以下信息
            a. scope.column: 可以获取当前列所定义的所有属性
            b. scope.$index: 可以获取当前记录的索引
            c. scope.row: 可以获取当前记录的所有信息

        5. 配置highlight-current-row属性即可实现单选

      -->
      <el-table
        :data="tableData"
        style="width: 100%"
        v-loading="loading"
        :row-class-name="tableRowClassName"
        height="450"
        highlight-current-row
        @current-change="handleCurrentChange"
      >
        <el-table-column prop="classId" label="classId" width="180" fixed>
        </el-table-column>
        <el-table-column prop="className" label="班级名称" width="280">
        </el-table-column>
        <el-table-column prop="classroom" label="教室名称" width="280">
        </el-table-column>
        <el-table-column prop="ht" label="班主任" width="280">
        </el-table-column>

        <!-- 开班时间显示为tag标签 -->
        <el-table-column prop="startDate" label="开班时间" width="280">
          <template v-slot="scope">
            <el-tag type="succes">{{scope.row.startDate | formatDate}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="消费次数" width="280"> </el-table-column>
        <el-table-column label="会员等级" width="280"> </el-table-column>
        <el-table-column label="用户等级" width="280"> </el-table-column>
        <el-table-column label="消费状态" width="280"> </el-table-column>


        <!-- 自定义列 -->
        <el-table-column label="操作" width="100" fixed="right">
          <!-- vue2.X老版本作用域插槽的写法 -->

          <!-- <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template> -->

          <!-- vue2.X新版本的作用域插槽的写法 -->
          <template v-slot="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="onDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 新建弹窗 -->
    <add-class v-if="isAddClass" @closeWindow="closeWindow" />
  </div>
</template>

<script>
import addClass from "./adminClassCom/addClass.vue";
import { selectClass } from "@/api/http.js";

export default {
  components: { addClass },
  data() {
    return {
      tableData: [],
      isAddClass: false,
      loading: false,
      currentRow: null
    };
  },
  created() {
    this.getData();
  },
  methods: {
    openAddClass() {
      this.isAddClass = true;
    },
    closeWindow(status) {
      this.isAddClass = false;
      if (status) {
        this.getData();
      }
    },
    getData() {
      this.loading = true;
      selectClass()
        .then((res) => {
          if (res.data.code === 0) {
            // 把接口数据存入tableData
            this.tableData = res.data.list;
            this.loading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tableRowClassName({ row, rowIndex }) {
      // console.log("row", row);
      // console.log("rowIndex", rowIndex);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    //当删除时
    onDel(row,$index){
      console.log(scope);
    },
    //和当前行选中后高亮配合使用
    handleCurrentChange(val){
      //单击当前行后获取当前行的数据
      this.currentRow = val;
    }
  },
};
</script>

<style lang="scss" scoped>
.el-table ::v-deep .warning-row {
  background: oldlace;
}

.el-table ::v-deep .success-row {
  background: #f0f9eb;
}
</style>