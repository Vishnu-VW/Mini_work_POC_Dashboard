<template>
  <div class="dashboard">
    <div class="top-row">
      <div class="chart">
        <LastMonthSummary />
      </div>
      <TrafficChart />
    </div>
    <div class="middle-row">
      <RevenueStatus />
      <PageView />
      <BounceRate />
      <RevenueStatus2 />
    </div>
    <div class="bottom-row">
      <RecentActivities />
      <OrderStatus />
    </div>
  </div>
</template>

<script>
import LastMonthSummary from "./LastMonthSummary.vue";
import TrafficChart from "./TrafficChart.vue";
import RevenueStatus from "./RevenueStatus.vue";
import PageView from "./PageView.vue";
import BounceRate from "./BounceRate.vue";
import RevenueStatus2 from "./RevenueStatus2.vue";
import RecentActivities from "./RecentActivities.vue";
import OrderStatus from "./OrderStatus.vue";

export default {
  name: "DashBoard",
  components: {
    LastMonthSummary,
    TrafficChart,
    RevenueStatus,
    PageView,
    BounceRate,
    RevenueStatus2,
    RecentActivities,
    OrderStatus,
  },
};
</script>

<style scoped>

.dashboard {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
}

.top-row, .middle-row, .bottom-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.top-row .chart {
  width: 68%;
}
.top-row .traffic{
   width: 32%;
}
.middle-row > * {
  width: 25%;
 
}
.bottom-row > *:nth-child(1) {
  width: 30%;
  margin-right : 10px;
}

.bottom-row > *:nth-child(2) {
  width: 70%;
}
.bottom-row {
  display: flex;
  justify-content: space-between;
}


</style>
