import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { DndProvider } from "react-dnd";
import { isMobile } from "react-device-detect";

import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import FadeLoader from "react-spinners/FadeLoader";

//Images
import BottomBun from "./img/BottomBun.png";
import TopBun from "./img/TopBun.png";
import Cheese from "./img/Cheese.png";
import Lettuce from "./img/Lettuce.png";
import Patty from "./img/Patty.png";
import Pickles from "./img/Pickles.png";
import Tomato from "./img/Tomato.png";
import Bacon from "./img/Bacon.png";
import Plate from "./img/Plate.png";
import Star from "./img/Star.png";
import Flash from "./img/Flash.png";
import Bg from "./img/bg.png";
import Heart from "./img/Heart.svg";

import "./index.css";
import App from "./App";

import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
const Preload = require("react-preload").Preload;

console.log("Designed and Developed by: Mon Jason Fabico");

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <Preload
        images={[
          BottomBun,
          TopBun,
          Cheese,
          Lettuce,
          Patty,
          Pickles,
          Tomato,
          Bacon,
          Plate,
          Star,
          Flash,
          Bg,
          Heart
        ]}
        loadingIndicator={
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center"
            }}
          >
            <div style={{ display: "inline-block", padding: "16px" }}>
              <FadeLoader color="#FF9700" />
            </div>

            <small>
              <strong style={{ fontSize: "11px" }}>
                Best viewed in Chrome
              </strong>
            </small>
          </div>
        }
        resolveOnError={true}
        mountChildren={true}
      >
        <App />
      </Preload>
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
