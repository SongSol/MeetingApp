import React from 'react';
import {
    BarChart,
  } from "react-native-chart-kit";


const BarChartView = props =>  {
    const data = {
        labels: ['5点','4点','3点','2点','1点'],
        datasets: [
            {
            data: [5, 2, 2, 1, 0]
            }
        ],
    };

    return (
        <BarChart
            data={data}
            width={300}
            height={300}
            chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
            }}
        />
    );
}

export default BarChartView