import React from "react";

import GameBurger from "./game-components/GameBurger";
import GameIngredients from "./game-components/GameIngredients";

import styled from "styled-components";

const GameMainContainer = styled.div`
  position: relative;
  width: 640px;
  height: 640px;
  border: 1px solid #eee;
`;

function App() {
  return (
    <div className="App">
      <GameMainContainer>
        <GameBurger />
        <GameIngredients />
      </GameMainContainer>
    </div>
  );
}

export default App;
