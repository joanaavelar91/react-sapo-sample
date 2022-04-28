/* eslint-disable no-useless-escape */

import { setSquareColor, clearSquareColor } from "./actions";

const returnSquareColor = (className) => async (dispatch) => {
  try {
    dispatch(setSquareColor(className));
  } catch (error) {
    dispatch(setSquareColor(null));
  }
};

const resetSquareColor = (className) => async (dispatch) => {
  try {
    dispatch(clearSquareColor(null));
  } catch (error) {
    dispatch(clearSquareColor(null));
  }
};
export { returnSquareColor, resetSquareColor };
