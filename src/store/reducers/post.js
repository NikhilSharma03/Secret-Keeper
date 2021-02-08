import * as actionTypes from './../actions/actionTypes';
const initialState = {
  loading: false,
  posted: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_SECRET_START:
      return {
        loading: true,
      };
    case actionTypes.POST_SECRET_SUCCESS:
      return {
        loading: false,
        posted: true,
      };
    case actionTypes.POST_SECRET_FAILED:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
