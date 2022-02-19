<template>
  <div>
    <!-- 面包屑 -->
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in listitem" :key="item">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- tab标签 -->
    <v-tab />
  </div>
</template>

<script>
import vTab from "./vTab.vue";
export default {
  components: { vTab },

  data() {
    return {
      listitem: [],
      collapse: true,
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        console.log(to);
        if (to.matched[0].meta) {
          this.listitem = this.$route.matched.map(
            (record) => record.meta.title
          );
        } else {
          this.listitem = this.$route.matched.splice(1).map((record) => {
            return record.meta.title;
          });
        }
      },
    },
  },
};
</script>

<style>
</style>