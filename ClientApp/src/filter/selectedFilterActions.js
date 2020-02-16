import { UPDATE_REGION_FILTER, UPDATE_GENDER_FILTER, UPDATE_YEAR_FILTER, UPDATE_DATA} from './selectedFilterConstants';

export const updateFilteredRegions = (selectedRegionFilterItems) => {
  return {
    type: UPDATE_REGION_FILTER,
    payload: {
      selectedRegionFilterItems
    }
  };
};

export const updateFilteredGenders = (selectedGenderItems) => {
    return {
        type: UPDATE_GENDER_FILTER,
        payload: {
            selectedGenderItems
        }
    };
};

export const updateFilteredYears = (selectedYearItems) => {
    return {
        type: UPDATE_YEAR_FILTER,
        payload: {
            selectedYearItems
        }
    };
};

export const updateData = (data) => {
    return {
        type: UPDATE_DATA,
        payload: {
            data
        }
    };
};
