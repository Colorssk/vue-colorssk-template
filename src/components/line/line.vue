<template>
  <div class="chart-container">
    <chart :className="className" height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/components/line/LineMarker'
export default {
  name: 'LineChart',
  data () {
    return {
      className: 'chart'
    }
  },
  components: { Chart },
  watch: {
    '$store.getters.sliderShow': function (value) {
      this.className = value ? 'chart2' : 'chart'
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
.chart{
  width: 100% !important;
}
.chart2{
  width: 100% !important;
}
</style>
