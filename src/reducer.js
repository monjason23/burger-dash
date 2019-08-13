import { combineReducers } from "redux";
import update from "immutability-helper";
import _ from "lodash";

import { gameConstants } from "./actions";

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

function randomizeOrder(num) {
  let currentOrders = [];
  let shuffledIngredients = _.shuffle(IngredientsArray);
  let orders = _.take(shuffledIngredients, num);

  for (let i = 0; i < orders.length; i++) {
    let newOrder = {
      name: shuffledIngredients[i],
      count: randomNumber(1, 3)
    };

    currentOrders.push(newOrder);
  }

  return currentOrders;
}

const gameInitialStatus = {
  burgers: [{ ingredients: [] }],
  burgerIndex: 0,
  score: 0,
  time: 60,
  lives: 3,
  orders: randomizeOrder(3)
};

const gameStatus = (state = gameInitialStatus, action) => {
  switch (action.type) {
    case gameConstants.ADD_INGREDIENT_BURGER: {
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

    case gameConstants.NEXT_BURGER: {
      return update(state, {
        burgers: { $push: [{ ingredients: [] }] },
        burgerIndex: { $set: ++state.burgerIndex }
      });
    }

    case gameConstants.RANDOMIZE_ORDERS: {
      return update(state, {
        orders: { $set: randomizeOrder(3) }
      });
    }

    case gameConstants.UPDATE_ORDERS: {
      return update(state, {
        orders: { $set: state.orders.filter(order => order.count > 0) }
      });
    }

    case gameConstants.UPDATE_SCORE: {
      return update(state, { score: { $set: state.score + 10 } });
    }

    case gameConstants.UPDATE_TIME: {
      return update(state, { time: { $set: action.payload } });
    }

    case gameConstants.UPDATE_LIVES: {
      return update(state, { lives: { $set: state.lives - 1 } });
    }

    case gameConstants.RESTART:
    default:
      return gameInitialStatus;
  }
};

const rootReducer = combineReducers({
  gameStatus
});

export default rootReducer;
