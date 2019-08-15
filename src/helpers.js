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

  setNumberOfOrders: function(time) {
    if (time >= 40) {
      return 2;
    } else if (time >= 20 && time < 40) {
      return 4;
    } else return 6;
  },

  preventDoubleTapZoom: function(event) {
    console.log("WOW");
    // Exit early if this involves more than one finger (e.g. pinch to zoom)
    if (event.touches.length > 1) {
      return;
    }

    const tapAt = new Date().getTime();
    const timeDiff = tapAt - lastTapAt;
    const { clientX, clientY } = event.touches[0];
    const xDiff = Math.abs(lastClientX - clientX);
    const yDiff = Math.abs(lastClientY - clientY);
    if (
      xDiff < minZoomTouchDelta &&
      yDiff < minZoomTouchDelta &&
      event.touches.length === 1 &&
      timeDiff < delay
    ) {
      event.preventDefault();
      // Trigger a fake click for the tap we just prevented
      event.target.click();
    }
    lastClientX = clientX;
    lastClientY = clientY;
    lastTapAt = tapAt;
  }
};

export default helpers;
