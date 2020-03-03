import { createReducer } from '../utils/createReducer';
import { UPDATE_YEAR_FILTER } from './selectedFilterConstants';

const initialStateYearFilterItems = ['2010'];

const updateYearFilterItem = (state, payload) => {

    if (payload.selectedYearItems.length === 0) {
        return ['2010'];
    }

    return [...payload.selectedYearItems];
}

//createReducer(INITIAL_STATE, FUNCTION_MAP)
const yearsReducer = createReducer(initialStateYearFilterItems, {
    [UPDATE_YEAR_FILTER]: updateYearFilterItem,
});

export default yearsReducer;