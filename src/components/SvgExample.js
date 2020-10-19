import React,{useEffect,useRef} from 'react'
import {select,extent,scaleTime,scaleLinear, selectAll ,line } from 'd3'

export default function SvgExample({dailyData}) {
    const svgRef = useRef()
   
    useEffect(()=>{
        const xMinMax = extent(dailyData, d=>new Date(d.date))
        console.log(xMinMax)

        const xScale = scaleTime()
            .domain(xMinMax)
            .range([100,800])
        console.log(xScale(new Date('2020-03-28')))

        const yMinMax = extent(dailyData,d=>d.confirmed)
        console.log(yMinMax)

        const yScale = scaleLinear()
            .domain(yMinMax)
            .range([100,600])
        // console.log(yScale(555))

        const lineData = dailyData.map(d=>{
            return {
                x:xScale(new Date (d.date)),
                y:yScale( d.confirmed)
                
            }
        })
        console.log(lineData)

        const myLine = line()
            .x(value=>value.x)
            .y(value=>600-value.y)


        const svg = select(svgRef.current)
        svg.selectAll('path')
        .data([lineData])
        .join('path')
        .attr('d',value=>myLine(value))
        .attr('fill','none')
        .attr('stroke','blue')
        .attr('stroke-width',4)

       


    },[dailyData,])

    
    return (
        <div>
            <svg height='600' width='800' ref={svgRef}>
               

            </svg>
            
        </div>
    )
}
