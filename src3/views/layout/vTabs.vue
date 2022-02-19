<template>
  <div class="v-tabs">
    <el-button type="primary" v-for="(item,index) in tabList" :key="item.path">
      <span class="del" @click="del(index)">X</span>
      <router-link :to="item.path">{{ item.title }}</router-link>
    </el-button>
  </div>
</template>

<script>
export default {
  computed: {
      tabList(){
          return this.$store.state.tabList
      }
  },
  methods: {
      del(index){
          this.$store.commit("delTabItem",index)
      }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-button {
    border: 1px solid #000;
    position: relative;
    .del {
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>