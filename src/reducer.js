import { combineReducers } from "redux";

const completedBurger = (state = [], action) => {
  return state;
};

const selectedBurgerIngredients = (state = [], action) => {
  switch (action.type) {
    case "ADD_INGREDIENT": {
      return [action.payload, ...state];
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  completedBurger,
  selectedBurgerIngredients
});

export default rootReducer;
