import React from "react";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { useTransition, config, animated as a } from "react-spring";
import Burger from "../components/Burger";

function GameBurger() {
  const selectedBurgerIngredients = useSelector(
    state => state.selectedBurgerIngredients
  );
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "BurgerIngredient",
    drop: () => ({ name: "Dustbin" }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const ingredientTransitions = useTransition(
    selectedBurgerIngredients,
    ing => ing.key,
    {
      config: config.wobbly,
      from: { height: 0, opacity: 0.5, transform: "scale(1.5)" },
      enter: item => ({ height: 30, opacity: 1, transform: "scale(1)" }),
      leave: { height: 0, opacity: 0, transform: "sclae(0)" }
    }
  );

  function renderAnimatedBurgerIngredients() {
    return ingredientTransitions.map(({ item, props, key }, index) => (
      <Burger.Ingredient
        key={key}
        className={item.className}
        style={{ zIndex: selectedBurgerIngredients.length - index, ...props }}
      >
        <img src={require(`../img/${item.name}.svg`)} alt={item.name} />
      </Burger.Ingredient>
    ));
  }

  return (
    <Burger.Container ref={drop} status={{ isOver, canDrop }}>
      <Burger.IngredientsList>
        {renderAnimatedBurgerIngredients()}
      </Burger.IngredientsList>
    </Burger.Container>
  );
}

export default GameBurger;
