<template>
<div>
    <el-button type="primary" v-for="(item,index) in tabList" :key="item.path">
      <span class="del" @click="delTab(index)">X</span>
      <router-link :to="item.path">{{ item.title }}</router-link>
    </el-button>
  </div>
</template>

<script>
export default {
   computed: {
    tabList() {
      return this.$store.state.tabList;
    },
  },
  methods:{
      delTab(index){
         this.$store.commit("deltab",index)
      }
  }
}
</script>

<style>

</style>