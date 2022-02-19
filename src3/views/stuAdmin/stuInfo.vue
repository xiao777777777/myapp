<template>
    <div class="stu-info">
      <!-- 学生信息查询 -->
      <select-stu-info/>
      <!-- 学生信息展示 -->
      <show-stu-info/>
    </div>
</template>

<script>
import SelectStuInfo from './stuInfoCom/selectStuInfo.vue'
import showStuInfo from './stuInfoCom/showStuInfo.vue'
export default {
  components: { showStuInfo, SelectStuInfo },
}
</script>

<style>

</style>