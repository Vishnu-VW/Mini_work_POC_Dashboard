<template>
  <div class="donut-chart-container">
    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'TrafficChart',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [32, 55, 12],
      chartOptions: {
        chart: {
          type: 'donut',
          width: '100%',
        },
        colors: ['#7F00FF', '#BF40BF', '#ffa500'],
        legend: {
          position: 'bottom',
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                  name: {
                  show: true,
                },
                // total: {
                //   show: true,
                //   showAlways: true,
                //   label: 'Total',
                // }
                 value: {
                  show: true,
                  formatter: (val) => `${val}%`,
                },
              }
            }
          }
        },
        dataLabels: {
          enabled: false,
          formatter: (val) => `${val.toFixed(1)}%`
        },
        labels: ['Facebook', 'Youtube', 'Direct Search'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom',
            }
          }
        }]
      }
    }
  }
}
</script>

<style scoped>
.donut-chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
}

apexchart {
  width: 100%;
  max-width: 700px;
}
</style>
