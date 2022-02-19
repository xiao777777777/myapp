<template>
  <div class="add-class">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="班级名称" prop="className">
        <el-input v-model="ruleForm.className"></el-input>
      </el-form-item>

      <el-form-item label="教室名称" prop="classroom">
        <el-select v-model="ruleForm.classroom" placeholder="请选择教室">
          <el-option label="111" value="111"></el-option>
          <el-option label="222" value="222"></el-option>
          <el-option label="333" value="333"></el-option>
          <el-option label="444" value="444"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="开班时间" prop="startDate">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="ruleForm.startDate"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="班主任" prop="ht">
        <el-radio-group v-model="ruleForm.ht">
         <el-radio label="1"></el-radio>
          <el-radio label="2"></el-radio>
          <el-radio label="3"></el-radio>
          <el-radio label="4"></el-radio>
          <el-radio label="5"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button v-if="action === 'add'"  @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button v-else type="primary" @click="submitForm('ruleForm')"
          >立即编辑</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="closeWindow">关闭窗口</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addClass, editClass } from "@/api/http.js";
import moment from "moment";
export default {
  props: {
    action: String,
    ruleForm: Object
  },
  data() {
    return {
      
    };
  },
  methods: {
    //处理添加班级
    async handleAddClass(){
      try{
        this.ruleForm.startDate = moment(this.ruleForm.startDate).format("YYYY-MM-DD")
        let res = await addClass(this.ruleForm)
        if (res.data.code === 0){
          //添加成功,关闭窗口
          this.closeWindow("success")
        }
      }catch(err){
        console.log(err);
      }
    },
    //处理编辑班级
    async handleEditClass(){
      try{
        this.ruleForm.startDate = moment(this.ruleForm.startDate).format("YYYY-MM-DD")
        let res = await editClass(this.ruleForm)
        if (res.data.code === 0){
          //编辑成功,关闭窗口
          this.closeWindow("edit-ok")
        }
      }catch(err){
        console.log(err);
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.action === 'add' ?  this.handleAddClass() : this.handleEditClass()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 关闭窗口
    closeWindow(type){
      this.$emit("toggle",type)
    }
  },
};
</script>

<style lang="scss" scoped>
.add-class {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .demo-ruleForm {
    background-color: #fff;
    width: 720px;
    border-radius: 3px;
  }
}
</style>