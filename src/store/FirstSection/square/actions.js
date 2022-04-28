export const actions = {
  SET_SQUARE_COLOR: "@@firstSection/SET_SQUARE_COLOR",
  CLEAR_SQUARE_COLOR: "@@firstSection/CLEAR_SQUARE_COLOR",
};

const setSquareColor = (payload) => ({
  type: actions.SET_SQUARE_COLOR,
  payload,
});

const clearSquareColor = (payload) => ({
  type: actions.CLEAR_SQUARE_COLOR,
  payload,
});

export { setSquareColor, clearSquareColor };
