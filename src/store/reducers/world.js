import {GET_WORLD_DATA} from "../actions/world"

const initialState={
    loading:true,
    todaysData:{}
}

export default function (state=initialState,action){
    const {type,payload} = action

    switch(type){
        case GET_WORLD_DATA:
            return{
                ...state,
                todaysData:payload,
                loading:false
            }
        default:
            return state
    }
}