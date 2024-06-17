<template>
  <div class="revenue">
    <div class="header">Revenue Status</div>
    <div class="content">
      <div class="chart">
        <div class="bar" v-for="(height, index) in chartData" :key="index" :style="{ height: height + '%' }"></div>
      </div>
      <div class="status">
        <div class="amount">↑ $432</div>
        <div class="date">Jan 01 - Jan 10</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RevenueStatus',
  data() {
    return {
      chartData: [70, 40, 10, 20,40, 80]
    };
  }
}
</script>

<style scoped>
.revenue {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px 20px;
  background-color: #ffd5ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  max-width: 300px;
}

.header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chart {
  display: flex;
  align-items: flex-end;
  height: 80px;
  width: 55px;
}

.bar {
  width: 10px;
  margin-right: 5px;
  background-color: #800080;
}

.status {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.amount {
  font-size: 24px;
  color: #800080;
  font-weight: bold;
  
}

.date {
  font-size: 12px;
  color: #808080;
  margin-bottom : -40px;
}
</style>
