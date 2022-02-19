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
      <!-- <div v-for="item in routesList" :key="item.path">
        
      </div> -->
      <menu-item v-for="item in routesList" :key="item.path" :item="item"/>
    </el-menu>
  </div>
</template>

<script>
import asyncRoutes from "@/router/asyncRoutes";
import menuItem from './menuItem.vue';
export default {
  components: { menuItem },
  props: {
    // collapse: {
    //   type: Boolean,
    //   // 如果没有传参，则默认使用true
    //   default: true
    // },
    // 要求传入的参数必须是布尔值，不是的话会在控制台警告
    collapse: Boolean
  },
  data() {
    return {
      routesList: asyncRoutes,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
  watch: {
    $route: {
      handler(to){
        this.$store.commit("setTabList",{
           title: to.meta.title,
           path: to.fullPath
        })
      },
      immediate: true
    }
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