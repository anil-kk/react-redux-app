import { UPDATE_REGION_FILTER} from './selectedFilterConstants';

export const updateFilteredRegions = (selectedRegionFilterItems) => {
  return {
    type: UPDATE_REGION_FILTER,
    payload: {
      selectedRegionFilterItems
    }
  };
};
