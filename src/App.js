import React from 'react'
import BarChart from './components/charts/BarChart'
import ScatterChart from './components/charts/ScatterChart'

function App() {
    return (
        <div className="App">
            <h1 style={{ textAlign: 'center' }}>React ECharts</h1>
            <ScatterChart />
            <BarChart />
        </div>
    )
}

export default App
