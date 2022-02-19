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

        6. 实现多选非常简单: 手动添加一个el-table-column，设type属性为selection即可
           同时在<el-table>组件中添加事件监听： @selection-change="handleSelectionChange" ,从而获得所有被选中的数据信息


        7. 默认情况下若内容过多会折行显示，若需要单行显示可以使用show-overflow-tooltip属性

        8 elementUI 表格组件中所有插槽要修改为最新的v-slot的写法


        9. 排序： 在列的配置中添加sortable 

        10. 筛选： 在列的配置中添加 
              :filters="filterItem"  (过滤的关键字)
              :filter-method="filterHandler"  (过滤的逻辑）

      -->
      <el-table
        :data="filterData()"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <!-- 实现多选的复选框 -->
        <el-table-column type="selection" width="55"> </el-table-column>

        <el-table-column prop="classId" label="classId" width="180" sortable>
        </el-table-column>
        <el-table-column
          prop="className"
          label="班级名称"
          show-overflow-tooltip
          :filters="filterItem2"
          :filter-method="filterHandler2"
        >
        </el-table-column>

        <!-- 添加了过滤器 -->
        <el-table-column
          prop="classroom"
          label="教室名称"
          :filters="filterItem"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column prop="ht" label="班主任"> </el-table-column>

        <el-table-column prop="startDate" label="开班时间">
          <template v-slot="scope">{{
            scope.row.startDate | formatDate
          }}</template>
        </el-table-column>

        <!-- 自定义列 -->
        <el-table-column align="right">
          <template v-slot:header>
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>

          <template v-slot="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
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
  name: 'adminClass',
  components: { addClass },
  data() {
    return {
      tableData: [],
      isAddClass: false,
      multipleSelection: [],
      search: "",
      filterItem: [
        {
          text: "王屋山",
          value: "王屋山",
        },
        {
          text: "洞庭湖",
          value: "洞庭湖",
        },
      ],
      filterItem2: [
        {
          text: "H5班",
          value: "H5",
        },
        {
          text: "Java",
          value: "Java",
        },
      ],
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

    //当删除时
    onDel(row, $index) {
      console.log(scope);
    },
    //当多选时
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 当使用表格过滤（筛选）功能时
    filterHandler(value, row, column) {
      // console.log('value',value);
      // console.log('row',row);
      // console.log('column',column);

      //该筛选功能添加在哪个列上,column['property']就返回哪个对应的字段名
      const property = column["property"];
      return row[property] === value;
    },
    filterHandler2(value, row, column) {
      const property = column["property"]; //"className"
      // h5-123456   'H5'
      // return  row[property].toLowerCase().indexOf(value.toLowerCase()) !== -1 ;
      return /^H5/i.test(row[property]);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    //当输入关键字时，响应式数据search发生变化，触发视图更新
    filterData() {
      // search=""   search="王"  search="王屋"
      return this.tableData.filter((item) => {
        return (
          !this.search || item.classroom.includes(this.search)
        );
      });
    },
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