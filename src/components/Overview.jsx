import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Margin and dimensions
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    // X scale
    const x = d3.scaleBand()
      .range([margin.left, width - margin.right])
      .padding(0.1)
      .domain(data.map(d => d.time));

    // Append bars
    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", d => x(d.time))
      .attr("y", d => margin.top)
      .attr("width", x.bandwidth())
      .attr("height", d => height - margin.bottom - margin.top)
      .attr("fill", "#3498db");

    // Append x-axis
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0));

  }, [data]);

  return (
    <svg ref={svgRef} width={400} height={300}></svg>
  );
};

// export default BarChart;


// export default BarChart;


const Overview = () => {
  const data = [
    { time: "8am", value: 12 },
    { time: "10am", value: 20 },
    { time: "12pm", value: 26 },
    { time: "2pm", value: 30 },
    { time: "4pm", value: 24 },
    { time: "6pm", value: 15 }
  ];

  return (
    <div>
      <h1>Bar Chart</h1>
      <BarChart data={data} />
    </div>
  );
};

export default Overview
