export const addFavourite = data => {
  return ({
    type: 'ADD_FAVOURITE',
    payload: data
  });
}

export const removeFavourite = data => {
  return ({
    type: 'REMOVE_FAVOURITE',
    payload: data
  });
}