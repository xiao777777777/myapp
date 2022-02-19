<template>
  <el-card class="admin-class">
   
    <div slot="header" class="clearfix">
      <span>班级管理</span>
      <el-button style="float: right; padding: 3px 10px" type="primary"
        >批量操作</el-button
      >
      <el-button
        style="float: right; padding: 3px 10px; margin-right: 20px"
        type="primary"
        @click="toggleEditClass('add')"
        >新建</el-button
      >
    </div>

    <!-- 显示的内容 -->
    <el-table :data="tableData" style="width: 100%" ref="filterTable">
      <el-table-column prop="classId" label="Id" width="180"> </el-table-column>
      <el-table-column prop="className" label="班级名称" width="180">
      </el-table-column>
      <el-table-column
        prop="classroom"
        label="教室名称"
        :filters="filtersItem"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="ht" label="班主任"> </el-table-column>
      <el-table-column prop="startDate" label="开班时间" sortable>
        <template v-slot="scope">
          {{ scope.row.startDate | formatDate }}
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="primary" @click="toggleEditClass('edit',scope.row)">编辑</el-button>
          <el-popconfirm title="内容确定删除吗？" @confirm="handleDelete(scope.row.classId)">
            <el-button type="primary" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="5"
      @current-change="changePage"
      :current-page="page"
    >
    </el-pagination>
    <!-- 编辑班级-->
    <edit-class v-if="isEditClass" @toggle="toggleEditClass" :action="action" :rule-form="ruleForm"/>
  </el-card>
</template>

<script>
import { selectClass, delClass } from "@/api/http.js";
import moment from "moment";
import EditClass from "./adminClassCom/editClass.vue";

export default {
  components: { EditClass },
  data() {
    return {
      tableData: [],
      page: 1,
      total: 0,
      action: "", 
      isEditClass: false, 
      ruleForm: {},
      filtersItem: [
        {
          text: "王屋山",
          value: "王屋山",
        },
        {
          text: "洞庭湖",
          value: "洞庭湖",
        },
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        let res = await selectClass({ page: this.page });
        let { code, list, total } = res.data;
        if (code === 0) {
          this.tableData = list;
          this.total = total;
        }
      } catch (err) {
        console.log("访问异常");
     
      }
    },
    //改变页码
    changePage(val) {
      this.page = val;
      this.$refs.filterTable.clearFilter();
      this.getData();
    },
    //班级过滤处理程序
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    //删除
    toggleEditClass(type,row) {
      this.action = type || "";
      this.isEditClass = !this.isEditClass;
      if (type === 'add'){
        this.ruleForm = {}
      }
      if (type == "success") {
        this.page = 1;
        this.getData();
      }
      if (type === 'edit'){
        this.ruleForm = JSON.parse(JSON.stringify(row))
      }
      if (type === 'edit-ok'){
        this.getData()
      }
    },
    //删除
    async handleDelete(id){
      try{
        let res = await delClass({id})
        if (res.data.code === 0){
          this.$message.success("删除成功")
          this.getData()

        }else{
          this.$message.error("删除失败")
        }
      }catch(err){
        console.log(err);
      }
    }
  },
  //过滤器
  filters: {
    formatDate(val) {
      return moment(val).format("YYYY-MM-DD");
    },
  },
};
</script>

<style>
</style>