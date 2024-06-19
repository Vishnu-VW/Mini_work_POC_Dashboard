<template>
  <div class="dashboard">
    <div class="top-dashboard">
      <div class="overview">
        <h2>Dashboard</h2>
        <p>Overview of Latest Month</p>
        <div class="earnings">
          <h1>$3468.96</h1>
          <p>Current Month Earnings</p>
          <h1>82</h1>
          <p>Current Month Sales</p>
        </div>
        <button class="last-month-summary">Last Month Summary</button>
      </div>
      <div class="chart">
        <div class="tabs">
          <button class="active">DAILY</button>
          <button>WEEKLY</button>
          <button>MONTHLY</button>
          <button>YEARLY</button>
        </div>
        <SplineArea />
        <!-- <div class="legend">
          <span class="online">Online</span>
          <span class="store">Store</span>
        </div> -->
      </div>
    </div>
    <div class="summary">
      <div class="wallet-balance">
       <i class='fas fa-crown' style='margin-top:15px;font-size:12px;color:white;padding:9px;background-color: #FF5733;border-radius:50%' ></i>
        <div class="user-data">
          <p>Wallet Balance</p>
          <h1>$4,567.53</h1>
        </div>
      </div>
      <div class="referral-earning">
    
        <i class='fas fa-heart' style='margin-top:15px;font-size:12px;color:white;padding:9px;background-color: #7B68EE;border-radius:50%' ></i>
       
        <div class="user-data">
          <p>Referral Earning</p>
          <h1>$1,689.53</h1>
        </div>
      </div>
      <div class="estimate-sales">
        <i class='fas fa-wand-magic-sparkles' style='margin-top:15px;font-size:12px;color:white;padding:9px;background-color: #00BFFF;border-radius:50%' ></i>
       
        <div class="user-data">
          <p>Estimate Sales</p>
          <h1>$2,851.53</h1>
        </div>
      </div>
      <div class="earning">
        <i class='fas fa-chart-line' style='margin-top:15px;font-size:12px;color:white;padding:9px;background-color: #FFD700;border-radius:50%' ></i>      
        <div class="user-data">
          <p>Earning</p>
          <h1>$52,567.53</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SplineArea from "./SplineArea.vue"
export default {
  name: "LastMonthSummary",
  components: {
    SplineArea
  },
  data() {
    return {
      datacollection: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [
          {
            label: 'Online',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderColor: '#007bff',
            data: [5, 15, 10, 22, 30, 15],
            fill: true
          },
          {
            label: 'Store',
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            borderColor: '#ff6b6b',
            data: [10, 20, 15, 30, 25, 20],
            fill: true
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px ;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
.top-dashboard{
  display: flex;
  justify-content: space-between;
}

.overview {
  text-align: left;
  margin-bottom: 20px;
}

.earnings {
  margin: 10px 0;
}

.earnings h1 {
  margin: 5px 0;
}

.last-month-summary {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.chart {
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.tabs button {
  border: none;
  background: none;
  padding: 10px 20px;
  cursor: pointer;
}

.tabs .active {
  border-bottom: 2px solid #ff6b6b;
  font-weight: bold;
}

.graph {
  height: 200px;
}

.legend {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.legend span {
  margin: 0 10px;
}

/* .online {
  color: #007bff;
}

.store {
  color: #ff6b6b;
} */

.summary {
  display: flex;
  justify-content: space-between;
  /* text-align: center; */
}
.wallet-balance ,.earning, .referral-earning, .estimate-sales {
  display: flex;
  justify-content: space-between;
}
.summary i{
  /* align-items: center; */
  padding-top: 25px;
  padding-left: 15px;
}
/* .summary div {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
.user-data{
  margin-left: 10px;
}
.user-data h1{
  font-size : 15px;
}
.user-data p{
  font-size : 12px;
}
.summary .icon {
  font-size: 20px;
  /* margin-bottom: 5px; */
}

</style>
