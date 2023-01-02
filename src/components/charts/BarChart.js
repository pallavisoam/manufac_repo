import React from 'react'
import ReactECharts from 'echarts-for-react'
import { data } from '../../utils/ViewData.js'

const xAxisData = data.map((item) => [ item['Alcohol'] ])
const yAxisData = data.map((item) => item['Malic Acid'])
const option = {
    xAxis: {
        type: 'category',
        data: xAxisData
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: yAxisData,
            type: 'bar'
        }
    ]
}

const BarChart = () => {
    return (
        <div style={{ marginTop: '1rem' }}>
            <p style={{ textAlign: 'center' }}>Bar Chart</p>
            <ReactECharts option={option} />
        </div>
    )
}

export default BarChart
