<template>
  <div class="conts">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- 账号 -->
      <el-form-item label="账号" prop="account">
        <el-input
          type="text"
          v-model="ruleForm.account"
          autocomplete="off" 
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pw">
        <el-input
          type="password"
          v-model="ruleForm.pw"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validateAccount, validatePw } from "../../utils/validator";
import { login } from "../../api/http";
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        pw: "",
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        pw: [{ validator: validatePw, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //登录验证
          login(this.ruleForm)
            .then((res) => {
              let { code,token } = res.data;
              if (code === 0) {
                //登陆成功
                sessionStorage.setItem("token",token)
                 this.$message({
                  showClose: true,
                  message: "登陆成功",
                  type: "success",
                });
                this.$router.push("/")
              } else {
                //登陆失败
                this.$message({
                  showClose: true,
                  message: "登陆失败",
                  type: "error",
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
 
<style lang="scss" scopend>
.conts {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  position: absolute;
  top: 200px;
  left: 200px;
}
</style>