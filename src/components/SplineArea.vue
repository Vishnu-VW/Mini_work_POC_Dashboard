<template>
      <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

    export default {
        name : 'SplineArea',
            components: {
            apexchart: VueApexCharts,
        },
        data(){
            return{
            series: [{
            name: 'Online',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'Store',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'area'
            },
            colors: ['#7F00FF', '#ffa500'],
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            //   categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
            },
            yaxis: {
                min: 0,
                labels: {
                    style: {
                    margin: 5
                    }
                }
            },
            // legend: {
            //     position: 'top',
            //     horizontalAlign: 'right'
            // },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
          
            }
        }
    }
</script>

<style scoped>

</style>