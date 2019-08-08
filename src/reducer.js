import { combineReducers } from "redux";
import update from "immutability-helper";
import _ from "lodash";

const IngredientsArray = [
  "Cheese",
  "Pickles",
  "Lettuce",
  "Tomato",
  "Patty",
  "Bacon"
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

function randomizeOrder() {
  let currentOrders = [];
  let numOfOrders = randomNumber(1, IngredientsArray.length);

  for (let i = 0; i < numOfOrders; i++) {
    let randomIndex = randomNumber(0, IngredientsArray.length - 1);
    let newOrder = {
      name: IngredientsArray[randomIndex],
      count: randomNumber(1, 3)
    };

    currentOrders.push(newOrder);
  }

  return _.uniqBy(currentOrders, "name");
}

const burgerStatus = (
  state = {
    burgers: [{ ingredients: [] }],
    burgerIndex: 0,
    burgerCount: 0,
    orders: randomizeOrder()
  },
  action
) => {
  switch (action.type) {
    case "ADD_INGREDIENT_BURGER": {
      const index = state.orders.findIndex(
        order => order.name === action.payload.name
      );

      return update(state, {
        burgers: {
          [state.burgerIndex]: { ingredients: { $unshift: [action.payload] } }
        },
        orders:
          index !== -1
            ? {
                [index]: { count: { $set: state.orders[index].count - 1 } }
              }
            : {
                orders: { $set: state.orders }
              }
      });
    }

    case "NEXT_BURGER": {
      return update(state, {
        burgers: { $push: [{ ingredients: [] }] },
        burgerIndex: { $set: ++state.burgerIndex }
      });
    }

    case "RANDOMIZE_ORDER": {
      return update(state, {
        orders: { $set: randomizeOrder() }
      });
    }

    case "UPDATE_ORDERS": {
      return update(state, {
        orders: { $set: state.orders.filter(order => order.count > 0) }
      });
    }

    case "RESTART":
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  burgerStatus
});

export default rootReducer;
