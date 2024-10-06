import React from "react";
import ReactApexChart from "react-apexcharts";


const ChartData = ({coinData}) => {

    const series = [
        {
            data : coinData.map((data) => {
              console.log('start:', new Date(data.t).toLocaleString());
              console.log('end:', new Date(data.T).toLocaleString());
              return {
                x: new Date(data.t),
                y : [data.o, data.h, data.l, data.c,data.V]
              }
            }),
        },
    ];

    const options = {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime',          
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      };

      return (
        <div>
          <div>
            <ReactApexChart options={options} series={series} type="candlestick" height={350} />
          </div>
        </div>
      );
};


export default ChartData;