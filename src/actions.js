import rnd from "randomstring";

export const gameConstants = {
  //BURGER STATUS
  ADD_INGREDIENT_BURGER: "ADD_INGREDIENT_BURGER",
  NEXT_BURGER: "NEXT_BURGER",
  RANDOMIZE_ORDERS: "RANDOMIZE_ORDERS",
  UPDATE_ORDERS: "UPDATE_ORDERS",
  RESTART: "RESTART",

  //GAME STATUS
  UPDATE_SCORE: "UPDATE_SCORE",
  UPDATE_TIME: "UPDATE_TIME",
  UPDATE_LIVES: "UPDATE_LIVES"
};

export function updateBurgerContent(payload) {
  return (dispatch, getState) => {
    let payloadWithKey = {
      key: rnd.generate(8),
      ...payload
    };

    const index = getState().gameStatus.orders.findIndex(
      i => i.name === payload.name
    );

    dispatch({
      type: gameConstants.ADD_INGREDIENT_BURGER,
      payload: payloadWithKey
    });
    dispatch({ type: gameConstants.UPDATE_ORDERS });

    if (index === -1) {
      dispatch({ type: gameConstants.UPDATE_LIVES });
    }
  };
}

export function moveToNextBurger() {
  return (dispatch, getState) => {
    let orderLength = getState().gameStatus.orders.length;

    dispatch({
      type: gameConstants.NEXT_BURGER
    });
    dispatch({
      type: gameConstants.RANDOMIZE_ORDERS
    });

    if (getState().gameStatus.time > 0 && orderLength === 0) {
      dispatch({
        type: gameConstants.UPDATE_SCORE
      });
    }
  };
}
