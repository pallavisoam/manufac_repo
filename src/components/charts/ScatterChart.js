import React from 'react'
import ReactECharts from 'echarts-for-react'
import { data } from '../../utils/ViewData.js'

const graphArrData = data.map((item) => [ item['Color intensity'], item['Hue'] ])
const option = {
    xAxis: {},
    yAxis: {},
    series: [
        {
            symbolSize: 20,
            data: graphArrData,
            type: 'scatter'
        }
    ],
    type: 'scatter'
}

const ScatterChart = () => {
    return (
        <div style={{ marginTop: '1rem' }}>
            <p style={{ textAlign: 'center' }}>Scatter Chart</p>
            <ReactECharts option={option} />
        </div>
    )
}

export default ScatterChart
