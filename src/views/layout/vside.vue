<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :router="true"
          :default-active="$route.fullPath"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <div v-for="item in list" :key="item.path">
            <el-menu-item
              v-if="item.children.length === 1"
              :index="item.path + '/' + item.children[0].path"
            >
              <i :class="item.children[0].meta.icon"></i>
              <span>{{ item.children[0].meta.title }}</span>
            </el-menu-item>

            <el-submenu v-else :index="item.path">
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
              </template>

              <el-menu-item
                :index="item.path + '/' + item1.path"
                v-for="item1 in item.children"
                :key="item1.path"
                >{{ item1.meta.title }}
              </el-menu-item>
            </el-submenu>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import asyncRoutes from "../../router/asyncRoutes";
export default {
  data() {
    return {
      list: asyncRoutes,
    };
  },

  watch: {
    $route: {
      handler(to) {
        this.$store.commit("getRoute", {
          path: to.fullPath,
          title: to.meta.title,
        });
      },
    },
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

<style>
</style>