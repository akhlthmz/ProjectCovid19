import {GET_WORLD_DATA} from "../actions/world"

const initialState={
    loading:true,
    dailyData:[]
}

export default function (state=initialState,action){
    const {type,payload} = action

    switch(type){
        case GET_WORLD_DATA:
            return{
                ...state,
                dailyData:payload,
                loading:false
            }
        default:
            return state
    }
}