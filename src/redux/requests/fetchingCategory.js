import axios from "axios";
import { actionType,actionImageType } from "../actions/action";
import { CategoryUrl } from "./api";
import { ImageUrl } from "./api";


export const categoryFetch = () =>(dispatch)=>{
    axios.get(CategoryUrl)
    .then(res=>dispatch(actionType(res.data)))
}

export const imgFetch = (val) =>(dispatch)=>{
    axios.get(ImageUrl(val))
    .then(res=>dispatch(actionImageType(res.data)))
}