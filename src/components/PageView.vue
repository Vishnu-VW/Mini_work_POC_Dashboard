<template>
  <div class="page">
    <div class="header">Page View</div>
    <div class="content">
     <div class="status">
        <div class="amount">↑ $432</div>
        <div class="date">Jan 01 - Jan 10</div>
      </div>
      <div class="chart">
        <svg width="150" height="100">
          <polyline
            fill="none"
            stroke="#ffcc00"
            stroke-width="3"
            points="0,70 20,40 40,50 60,30 80,60 100,50 120,80"
          />
        </svg>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageView',
}
</script>

<style scoped>
.page {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px 20px;
  background-color: #fff8dc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  max-width: 300px;
}

.header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #808080;
}

.content {
  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: space-between;
}

.chart {
  height: 80px;
  width: 150px;
  align-self: flex-end;
}

.status {
  
  align-items: flex-start;
}

.amount {
  font-size: 24px;
  color: #ffcc00;
  font-weight: bold;
}

.date {
  font-size: 12px;
  color: #808080;
}
</style>
