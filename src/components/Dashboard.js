import React ,{useEffect}from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getWorldData} from "../store/actions/world"


function Dashboard({getWorldData,todaysData}) {
    useEffect(() => {
        getWorldData();
      }, [getWorldData]);

    if(!todaysData.confirmed){
        return(
            <h1>Loading...</h1>
        )
    }
    return (
        <div>
            <h1>{todaysData.confirmed.value}</h1>
        </div>
    )
}

Dashboard.propTypes = {

}

function  mapStateToProps({world}){
    const {todaysData} = world
    

    return{
        todaysData
        
       
    }
}

export default connect(mapStateToProps,{getWorldData}) (Dashboard)

