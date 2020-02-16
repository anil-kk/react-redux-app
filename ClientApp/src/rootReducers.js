import { combineReducers } from 'redux';
import regionsReducer from './filter/regionsReducer';
import gendersReducer from './filter/gendersReducer';
import yearsReducer from './filter/yearsReducer';
import dataReducer from './filter/dataReducer';

const rootReducer = combineReducers({
    filteredRegions: regionsReducer,
    filteredYears: yearsReducer,
    filteredGenders: gendersReducer,
    data: dataReducer
})

export default rootReducer


