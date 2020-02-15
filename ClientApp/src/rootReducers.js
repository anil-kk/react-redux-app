import {combineReducers} from 'redux'
import regionFilterReducer from './filter/selectedFilterReducer'

const rootReducer = combineReducers({
    filteredRegions: regionFilterReducer
})

export default rootReducer


