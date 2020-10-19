import axios from "axios";

export const GET_WORLD_DATA ="GET_WORLD_DATA"

//Bringing the worldwide data
export const getWorldData=()=> async dispatch=>{
    try{
        const res = await axios.get("https://covid19.mathdro.id/api/daily/")
        const data = res.data.map(dailyData=>{
            return{
                confirmed:dailyData.totalConfirmed,
                deaths:dailyData.deaths.total,
                date:dailyData.reportDate
            }
        })
        dispatch({
            type:GET_WORLD_DATA,
            payload:data
        })

    }catch(err){
        console.log(err.response)
    }
}