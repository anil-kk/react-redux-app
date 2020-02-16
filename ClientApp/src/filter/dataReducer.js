import { createReducer } from '../utils/createReducer'
import { UPDATE_DATA } from './selectedFilterConstants'

const initialData = []

const updateData = (state, payload) => {
    return payload.data && payload.data.length > 0 ? [...payload.data] : [];
}

//createReducer(INITIAL_STATE, FUNCTION_MAP)

const dataReducer = createReducer(initialData, {
    [UPDATE_DATA]: updateData,
})

export default dataReducer