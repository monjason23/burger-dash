import _ from "lodash";
const helpers = {
  randomNumber: function(min, max) {
    return Math.floor(Math.random() * max + min);
  },

  randomizeOrder: function(num, arr) {
    let currentOrders = [];
    let shuffledIngredients = _.shuffle(arr);
    let orders = _.take(shuffledIngredients, num);

    for (let i = 0; i < orders.length; i++) {
      let newOrder = {
        name: shuffledIngredients[i],
        count: this.randomNumber(1, 2)
      };

      currentOrders.push(newOrder);
    }

    return currentOrders;
  },

  setNumberOfOrders: function(time) {
    if (time >= 40) {
      return 2;
    } else if (time >= 20 && time < 40) {
      return 4;
    } else return 6;
  }
};

export default helpers;
