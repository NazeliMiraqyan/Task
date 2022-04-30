import { combineReducers } from "redux";
import { categoryReducer,imageReducer } from "./categoryReducer";

export const allReducers=combineReducers({
    data:categoryReducer,
    dataImg:imageReducer
})