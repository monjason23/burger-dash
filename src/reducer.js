import { combineReducers } from "redux";

const burgerCount = (state = 0, action) => {
  return state;
};

const selectedBurgerIngredients = (
  state = [
    {
      name: "Cheese",
      className: "ing-cheese"
    },
    {
      name: "Pickles",
      className: "ing-pickles"
    },
    {
      name: "Lettuce",
      className: "ing-lettuce"
    },
    {
      name: "Tomato",
      className: "ing-tomato"
    },
    {
      name: "Patty",
      className: "ing-patty"
    }
  ],
  action
) => {
  switch (action.type) {
    case "ADD_INGREDIENT": {
      return [action.payload, ...state.ingredients];
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  burgerCount,
  selectedBurgerIngredients
});

export default rootReducer;
