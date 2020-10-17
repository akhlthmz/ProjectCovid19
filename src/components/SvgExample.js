import React,{useEffect,useRef} from 'react'
import {select } from 'd3'

export default function SvgExample({dailyData}) {
    const svgRef = useRef()
   
    useEffect(()=>{
        const svg = select(svgRef.current)
        svg.selectAll('circle').data(dailyData)
        .join('circle')
        .attr('r',50)
        .attr('cx',(d,i)=>i)
        .attr('cy',(d,i)=>i+20)
        .attr('stroke','blue')
        .attr('fill','red')
    },[dailyData])
    return (
        <div>
            <svg height='5000' width='5000' ref={svgRef}></svg>
            
        </div>
    )
}
