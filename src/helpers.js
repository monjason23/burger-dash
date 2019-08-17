import _ from "lodash";

// Ensure touches occur rapidly
const delay = 500;
// Sequential touches must be in close vicinity
const minZoomTouchDelta = 10;

// Track state of the last touch
let lastTapAt = 0;
let lastClientX = 0;
let lastClientY = 0;

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

  absorbEvent: function(e) {
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  },

  preventLongPress: function() {
    return {
      onTouchStart: this.absorbEvent,
      onTouchMove: this.absorbEvent,
      onTouchEnd: this.absorbEvent,
      onTouchCancel: this.absorbEvent
    };
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
