import {createReducer} from '../utils/createReducer'
import { UPDATE_REGION_FILTER } from './selectedFilterConstants'

const initialStateRegionFilterItems = ['00']

const updateRegionFilterItem = (state, payload) =>{
    return [...payload.selectedRegionFilterItems]
}

//createReducer(INITIAL_STATE, FUNCTION_MAP)
export default createReducer(initialStateRegionFilterItems, {
    [UPDATE_REGION_FILTER]: updateRegionFilterItem,
})

