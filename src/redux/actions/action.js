import { DATA_SUCCESS } from "./types"
import { DATA_IMAGE_SUCCESS } from "./types"

export const actionType=(val)=>{
    return{
        type: DATA_SUCCESS,
        payload:val
    }
}

export const actionImageType=(val)=>{
    return{
        type: DATA_IMAGE_SUCCESS,
        payload:val
    }
}