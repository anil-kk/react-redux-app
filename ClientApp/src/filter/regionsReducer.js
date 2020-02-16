import {createReducer} from '../utils/createReducer'
import { UPDATE_REGION_FILTER } from './selectedFilterConstants'

const initialStateRegionFilterItems = ['00']

const updateRegionFilterItem = (state, payload) =>{
    return [...payload.selectedRegionFilterItems]
}

//createReducer(INITIAL_STATE, FUNCTION_MAP)
const regionsReducer = createReducer(initialStateRegionFilterItems, {
    [UPDATE_REGION_FILTER]: updateRegionFilterItem,
})

export default regionsReducer

