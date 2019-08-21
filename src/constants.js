const gameConstants = {
  //BURGER STATUS
  ADD_INGREDIENT_BURGER: "ADD_INGREDIENT_BURGER",
  NEXT_BURGER: "NEXT_BURGER",
  SERVE_BURGER: "SERVE_BURGER",
  RANDOMIZE_ORDERS: "RANDOMIZE_ORDERS",
  UPDATE_ORDERS: "UPDATE_ORDERS",
  RESTART: "RESTART",

  //GAME STATUS
  UPDATE_SCORE: "UPDATE_SCORE",
  UPDATE_TIME: "UPDATE_TIME",
  UPDATE_LIVES: "UPDATE_LIVES",
  UPDATE_WINSTREAK: "UPDATE_WINSTREAK",
  UPDATE_EXACTORDER: "UPDATE_EXACTORDER",

  RUN_GAME: "RUN_GAME",
  PAUSE_GAME: "PAUSE_GAME",
  SET_PAUSE: "SET_PAUSE",
  TOGGLE_PAUSE: "TOGGLE_PAUSE",
  SET_LOADING: "SET_LOADING"
};

export const IngredientsArray = [
  "Cheese",
  "Pickles",
  "Lettuce",
  "Tomato",
  "Patty",
  "Bacon"
];

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export default gameConstants;
