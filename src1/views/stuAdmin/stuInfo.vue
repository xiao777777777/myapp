<template>
    <div class="stu-info">
      <select-stu-info/> 
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