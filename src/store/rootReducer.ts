import {combineReducers} from "redux";
import todoReducer from "./todo/todoReducer.ts";


const rootReducer = combineReducers({todoReducer})
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer