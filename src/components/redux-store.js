import { combineReducers, createStore } from "redux"
import converterReducer from './Converter-reducer'



const reducers = combineReducers({
    converterPage: converterReducer
})


let store = createStore(reducers)

export default store 