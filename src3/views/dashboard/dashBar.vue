<template>
  <div class="bar" ref="box">bar</div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      categories: [],
      dataList: [],
    };
  },
  computed: {
    options() {
      return {
        title: {
          text: "异步数据加载示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: this.categories,
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.dataList,
          },
        ],
      };
    },
  },
  created() {
    setTimeout(() => {
      let data = {
        categories: [
          "衬衫",
          "羊毛衫",
          "雪纺衫",
          "裤子",
          "高跟鞋",
          "袜子",
          "coat",
        ],
        dataList: [20, 20, 36, 10, 10, 20, 100],
      };
      this.categories = data.categories;
      this.dataList = data.dataList;
      this.myChart.hideLoading();
    //   在option中数据发生改变时，需要再次执行setOption,但是这不是重新渲染图表，而是在原有的基础上，找到两次不同的地方，把不同的地方再次渲染
      this.myChart.setOption(this.options);
    }, 3000);
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.box);
    this.myChart.setOption(this.options);
    this.myChart.showLoading();
  },
};
</script>

<style >
.bar {
  width: 500px;
  height: 400px;
  border: 1px solid #000;
}
</style>