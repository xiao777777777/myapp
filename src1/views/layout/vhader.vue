<template>
  <div class="vheader">
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }"></el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item) in fullpathList" :key="item">{{item}}</el-breadcrumb-item>
 
</el-breadcrumb>
   <v-tab/>
  </div>
</template>

<script>
import vTab from './vTab.vue';

export default {
  components: { vTab },
  data(){
    return{
      fullpathList:[],
      collapse:true
    }
},
  watch:{
    $route:{
      handler(to,from){
         if(to.matched[0].meta){
           this.fullpathList=this.$route.matched.map(
             (record)=>record.meta.title)
         }else{
             this.fullpathList=this.$route.matched.slice(1)
             .map((record)=>{
            return record.meta.title});
         }
      },
      immediate:true
    }
  }
}
</script>

<style>

</style>