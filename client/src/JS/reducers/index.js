import { combineReducers } from "redux";
import  authReducer  from "./authReducer";
import userReducer from "./userReducer";
import prodReducer from "./prodReducer";



const rootReducer = combineReducers({ authReducer, userReducer, prodReducer });

export default rootReducer;