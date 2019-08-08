import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { DndProvider } from "react-dnd";
import { isMobile } from "react-device-detect";

import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";

import rootReducer from "./reducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <App />
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
