<template>
  <div class="index">
  <el-container>
  <el-aside width="200px">
    <vside/>
  </el-aside>
  <el-container>
    <el-header>
      <vhader />
    </el-header>
    <!-- //主题 -->
    <el-main>
  <router-view />

    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import vhader from './vhader.vue';
import Vside from './vside.vue';
export default {
  components: { vhader, Vside },

  };
</script>
<style lang="scss" scoped>
body,.index{
  height: 100%;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
    .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
 .el-container {
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
