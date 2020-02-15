//createReducer(INITIAL_STATE, FUNCTION_MAP)
export const createReducer = (initialState, functionMap) => {
  return (state = initialState, { type, payload }) => {
    const reduceHandler = functionMap[type];

    return reduceHandler ? reduceHandler(state, payload) : state;
  };
};
