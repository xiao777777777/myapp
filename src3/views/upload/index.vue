<template>
  <el-upload
    class="avatar-uploader"
    action="http://localhost:3000/upload"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :headers="headers"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
      headers:{
        Authorization: 'Bearer ' + sessionStorage.getItem("token")
      }
    };
  },
  methods: {
    // 处理上传成功之后的代码
    handleAvatarSuccess(res, file) {
      //URL.createObjectURL 会基于提供的文件信息,生成一个可用的文件的url地址
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl);
    },
    //处理上传之前格式和尺寸的验证
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      //return true,则继续完成上传的逻辑,return false, 终止上传的任务
      return isJPG && isLt2M;
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>