import rnd from "randomstring";
import gameConstants from "./constants";

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
      dispatch({ type: gameConstants.UPDATE_EXACTORDER, payload: false });
    }
  };
}

export function serveBurger() {
  return (dispatch, getState) => {
    let { orders, exactOrder, time, lives, winStreak } = getState().gameStatus;

    dispatch({
      type: gameConstants.SERVE_BURGER
    });

    if (time > 0 && lives > 0 && orders.length === 0) {
      dispatch({
        type: gameConstants.UPDATE_WINSTREAK,
        payload: exactOrder
      });

      console.log("SCORE TO ADD", winStreak * (exactOrder ? 10 : 5));

      dispatch({
        type: gameConstants.UPDATE_SCORE,
        payload: winStreak * (exactOrder ? 10 : 5)
      });

      dispatch({ type: gameConstants.UPDATE_EXACTORDER, payload: true });
    }
  };
}
