<template>
  <div class="he">
    <el-container>
      <el-aside width="200px">
        <vside />
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
       <navheader />

        </el-header>

        <!-- 内容区 -->
        <el-main>
              <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navheader from './navheader.vue';

import vside from './vside.vue';
export default {
  components: { vside, Navheader },};
</script>

<style lang="scss" scped>
.he{
   width: 100%;
     height: 100%;
}
.el-container{
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>