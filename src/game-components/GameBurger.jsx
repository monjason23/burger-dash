import React from "react";
import { useSelector } from "react-redux";

import Burger from "../components/Burger";

function GameBurger() {
  const selectedBurgerIngredients = useSelector(
    state => state.selectedBurgerIngredients
  );

  function renderBurgerIngredients() {
    return selectedBurgerIngredients.map((ing, idx) => (
      <Burger.Ingredient
        key={idx}
        className={ing.className}
        style={{ zIndex: selectedBurgerIngredients.length - idx }}
      >
        <img src={require(`../img/${ing.name}.svg`)} alt={ing.name} />
      </Burger.Ingredient>
    ));
  }

  return (
    <Burger.Container>
      <Burger.IngredientsList>
        {renderBurgerIngredients()}
      </Burger.IngredientsList>
    </Burger.Container>
  );
}

export default GameBurger;
