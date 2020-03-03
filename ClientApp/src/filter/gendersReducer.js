import { createReducer } from '../utils/createReducer';
import { UPDATE_GENDER_FILTER } from './selectedFilterConstants';

const initialStateGenderFilterItems = ['1', '2'];

const updateGenderFilterItem = (state, payload) => {
    if (payload.selectedGenderItems.length === 0) {
        return ['1', '2'];
    }
    return [...payload.selectedGenderItems];
}

//createReducer(INITIAL_STATE, FUNCTION_MAP)

const gendersReducer = createReducer(initialStateGenderFilterItems, {
    [UPDATE_GENDER_FILTER]: updateGenderFilterItem,
});

export default gendersReducer;