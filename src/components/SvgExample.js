import React,{useEffect,useRef} from 'react'
import {select,extent,scaleTime,scaleLinear, selectAll ,line } from 'd3'

export default function SvgExample({dailyData}) {
    const svgRef = useRef()
   
    useEffect(()=>{
        const xMinMax = extent(dailyData, d=>d.date)
        console.log(xMinMax)

        const xScale = scaleTime()
            .domain(xMinMax)
            .range([0,500])
        console.log(xScale(new Date ('2020/1/22')))

        const yMinMax = extent(dailyData,d=>d.confirmed)
        console.log(yMinMax)

        const yScale = scaleLinear()
            .domain(yMinMax)
            .range([0,500])
        // console.log(yScale(555))

        const lineData = dailyData.map(d=>{
            return {
                x:xScale(d.date),
                y:yScale(d.confirmed)
                
            }
        })
        console.log(lineData)

        // const svg = select(svgRef.current)

       


    },[dailyData,])

    
    return (
        <div>
            <svg height='500' width='500' ref={svgRef}>
               

            </svg>
            
        </div>
    )
}
