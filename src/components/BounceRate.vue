<template>
  <div class="bounce">
    <div class="bounce-content">
      <div class="bounce-rate-info">
        <p class="title">Bounce Rate</p>
        <p class="amount">$432</p>
        <select v-model="timeFrame" class="time-frame">
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
        </select>
      </div>
      <div class="bounce-chart">
        <!-- <LineChart :chartData="datacollection" :options="chartOptions" /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { Line } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
// ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

export default {
  name: 'BounceRate',
  components: {
    // LineChart: Line
  },
  data() {
    return {
      timeFrame: 'Monthly',
      datacollection: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [
          {
            label: 'Bounce Rate',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: '#fff',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            tension: 0.4
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.bounce {
  border-radius: 8px;
  padding: 20px;
  background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  max-width: 250px;
}

.bounce-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bounce-rate-info {
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
}

.title {
  font-size: 14px;
  margin: 0;
}

.amount {
  font-size: 24px;
  margin: 5px 0;
}

.time-frame {
  background-color: rgba(255, 255, 255);
  color: rgb(57, 54, 54);
  border: none;
  padding: 5px;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
}

.bounce-chart {
  width: 100%;
  height: 80px;
}

canvas {
  width: 100% !important;
  height: 80px !important;
}
</style>
