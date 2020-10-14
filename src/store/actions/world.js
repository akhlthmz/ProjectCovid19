import axios from "axios";

export const GET_WORLD_DATA ="GET_WORLD_DATA"

//Bringing the worldwide data
export const getWorldData=()=> async dispatch=>{
    try{
        const res = await axios.get("https://covid19.mathdro.id/api/")
        const{confirmed,deaths,recovered}=res.data
        dispatch({
            type:GET_WORLD_DATA,
            payload:{confirmed,deaths,recovered}
        })

    }catch(err){
        console.log(err.response)
    }
}