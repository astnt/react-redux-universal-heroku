import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import apiList from "./apiList";
import authorization from "./authorization";

const rootReducer = combineReducers({
  routing: routerReducer,
  apiList,
  authorization,
});

export default rootReducer
