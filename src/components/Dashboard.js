import React ,{useEffect,Fragment}from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import {getWorldData} from "../store/actions/world"
import E from "./SvgExample"


function Dashboard({getWorldData,dailyData}) {
    useEffect(() => {
        getWorldData();
      }, [getWorldData]);


    if(!dailyData){
        return(
            <h1>Loading...</h1>
        )
    }
    return (
        <Fragment>
            <E dailyData ={dailyData}/>
        </Fragment>
        
    )
}

Dashboard.propTypes = {

}

function  mapStateToProps({world}){
    const dailyData = world.dailyData
    

    return{
        dailyData
        
       
    }
}

export default connect(mapStateToProps,{getWorldData}) (Dashboard)

