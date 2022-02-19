<template>
  <div class="add-class">
    <el-form
      :model="ruleForm"
      :rules="rules"
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
          <el-radio label="1111"></el-radio>
          <el-radio label="2233"></el-radio>
          <el-radio label="344"></el-radio>
          <el-radio label="455"></el-radio>
          <el-radio label="544"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="closeWindow">关闭窗口</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addClass} from "@/api/http.js"
import moment from 'moment'
export default {
  data() {
    return {
      ruleForm: {
        className: "",
        classroom: "",
        startDate: "",
        ht: "",
      },
      rules: {},
    };
  },
  methods: {
    handleAddClass(){
      this.ruleForm.startDate = moment(this.ruleForm.startDate).format("YYYY-MM-DD")
      addClass(this.ruleForm)
      .then(res=>{
        let {code} = res.data
        if (code === 0){
          this.$message.success("添加成功")
          this.$emit("closeWindow",'ok')
        }else{
          this.$message.success("添加失败")
        }
      })
      .catch(err=>{
        console.log(err);
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交表单数据
          this.handleAddClass()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    closeWindow(){
      this.$emit("closeWindow")
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