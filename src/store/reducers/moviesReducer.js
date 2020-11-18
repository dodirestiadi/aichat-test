const initialState  = {
  data: [],
  error: null,
};

const moviesReducer = (state = initialState , action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_MOVIES':
      return {
        ...state,
        data: payload.data,
        error: payload.error
      }

    default:
      return state;
  }
}

export default moviesReducer;