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
      <!-- 遍历routesList -->
      <div v-for="item in routesList" :key="item.path">
        <el-menu-item
          v-if="item.children.length === 1"
          :index="item.path + '/' + item.children[0].path"
          class="home"
        >
          <i :class="item.children[0].meta.icon"></i>
          <span>{{ item.children[0].meta.title }}</span>
        </el-menu-item>

        <!-- 学生管理 -->
        <el-submenu v-else :index="item.path">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>

          <el-menu-item
            :index="item.path + '/' + smallItem.path"
            v-for="smallItem in item.children"
            :key="smallItem.path"
          >
            <i :class="smallItem.meta.icon"></i>
            <span>{{ smallItem.meta.title }}</span>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import asyncRoutes from "@/router/asyncRoutes";
export default {
  props: {
    collapse: {
      type: Boolean,
    },
  },
  data() {
    return {
      routesList: asyncRoutes,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
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