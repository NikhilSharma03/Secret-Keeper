import * as actionTypes from './../actions/actionTypes';
const initialState = {
  secrets: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SECRET_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SECRET_SUCCESS:
      return {
        ...state,
        secrets: action.data,
        loading: false,
      };
    case actionTypes.FETCH_SECRET_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
