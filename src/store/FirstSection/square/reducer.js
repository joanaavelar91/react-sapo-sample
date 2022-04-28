import { actions } from "./actions";

const initialState = {
  squareClass: null,
};

const firstSectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_SQUARE_COLOR:
      return {
        ...state,
        squareClass: payload,
      };
    case actions.CLEAR_SQUARE_COLOR:
      return {
        ...state,
        squareClass: null,
      };
    default:
      return state;
  }
};

export default firstSectionReducer;
