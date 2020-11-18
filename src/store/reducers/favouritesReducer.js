const initialState  = {
  data: [],
};

const favouritesReducer = (state = initialState , action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_FAVOURITE':
      return {
        ...state,
        data: [...state.data, payload],
      }

    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        data: state.data.filter(item => item.imdbID !== payload),
      }

    default:
      return state;
  }
}

export default favouritesReducer;