import React from "react";

import ChartBar from './ChartBar'

import './Chart.css'

const Chart = (props) => {

    const maxVal = Math.max(...props.dataPoints.map(month => month.value))
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint, index) => <ChartBar key={index} value={dataPoint.value} maxValue={maxVal} label={dataPoint.label} />)}
        </div>
    )
}

export default Chart