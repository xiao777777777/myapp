<template>
  <div class="nav-menu">
    <div class="logo" v-if="!collapse">云和教育</div>
    
    <el-menu
      :default-active="$route.fullPath"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="collapse"
      :router="true"
      :collapse-transition="false"
    >
      <!-- 首页 -->
      <el-menu-item index="/home/dashboard" class="home">
        <i class="el-icon-eleme"></i>
        <span>首页</span>
      </el-menu-item>

      <!-- 学生管理 -->
      <el-submenu index="/stuAdmin">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>学生管理</span>
        </template>

        <el-menu-item index="/stuAdmin/addNewStu">
            <i class="el-icon-eleme"></i>
            <span>新生报名</span>
        </el-menu-item>

        <el-menu-item index="/stuAdmin/adminClass">
          <i class="el-icon-eleme"></i>
          <span>班级管理</span>
        </el-menu-item>

        <el-menu-item index="/stuAdmin/stuInfo">
          <i class="el-icon-eleme"></i>
          <span>学生信息</span>
        </el-menu-item>
      </el-submenu>

      <!-- 教师管理 -->
      <el-submenu index="/teacher">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>教师管理</span>
        </template>
        <el-menu-item index="/teacherAdmin/teacherInfo">
          <i class="el-icon-eleme"></i>
          <span>教师信息</span>

        </el-menu-item>

        <el-menu-item index="/teacherAdmin/teacherHours">
          <i class="el-icon-eleme"></i>
          <span>课时统计</span>

        </el-menu-item>

        <el-menu-item index="/teacherAdmin/teacherScore">
          <i class="el-icon-eleme"></i>
          <span>教评分数</span>

        </el-menu-item>
      </el-submenu>

      <!-- 公告信息 -->
      <el-menu-item index="/notice/notice" class="home">
        <i class="el-icon-eleme"></i>
        <span>公告信息</span>
      </el-menu-item>

      <!-- 就业管理 -->
      <el-submenu index="/job">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>就业管理</span>
        </template>
        <el-menu-item index="/job/jobList">
          <i class="el-icon-eleme"></i>
          <span>职位信息</span>
        </el-menu-item>

        <el-menu-item index="/job/jobAddress">
          <i class="el-icon-eleme"></i>
          <span>就业地信息</span>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  props:{
    collapse: {
      type: Boolean
    }
  },
  data() {
    return {
      activeIndex: "/home/dashboard",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>

<style lang="scss" scoped>
.nav-menu {
  .logo {
    width: 100%;
    height: 100px;
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 100px;
  }
  .home {
    color: #f00;
  }
}
</style>