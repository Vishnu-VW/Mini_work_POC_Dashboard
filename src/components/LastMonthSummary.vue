<template>
  <div class="dashboard">
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
      <LineChart :chartData="datacollection" :options="chartOptions" />
      <div class="legend">
        <span class="online">Online</span>
        <span class="store">Store</span>
      </div>
    </div>
    <div class="summary">
      <div class="wallet-balance">
        <span class="icon crown"></span>
        <p>Wallet Balance</p>
        <h1>$4,567.53</h1>
      </div>
      <div class="referral-earning">
        <span class="icon heart"></span>
        <p>Referral Earning</p>
        <h1>$1,689.53</h1>
      </div>
      <div class="estimate-sales">
        <span class="icon sales"></span>
        <p>Estimate Sales</p>
        <h1>$2,851.53</h1>
      </div>
      <div class="earning">
        <span class="icon earnings"></span>
        <p>Earning</p>
        <h1>$52,567.53</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

export default {
  name: "LastMonthSummary",
  components: {
    LineChart: Line
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
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.overview {
  text-align: center;
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

.online {
  color: #007bff;
}

.store {
  color: #ff6b6b;
}

.summary {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.summary div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.summary .icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.crown::before {
  content: "👑";
}

.heart::before {
  content: "💙";
}

.sales::before {
  content: "🛠️";
}

.earnings::before {
  content: "📈";
}
</style>
