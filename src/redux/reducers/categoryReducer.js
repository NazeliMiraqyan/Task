import { DATA_SUCCESS } from "../actions/types"
import { DATA_IMAGE_SUCCESS } from "../actions/types"

const initionalState={
    data:[]
}

const initionalImageState={
    data:[]
}

export const categoryReducer=(state=initionalState,action)=>{
    switch(action.type){
        case DATA_SUCCESS:
            return {
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}

export const imageReducer=(state=initionalImageState,action)=>{
    switch(action.type){
        case DATA_IMAGE_SUCCESS:
            return {
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}